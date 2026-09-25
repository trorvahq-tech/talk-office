import { getPool, initDatabase } from './db.js';
import { sendPendingReservationEmail } from './mailer.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const db = getPool();
    await initDatabase();

    if (req.method === 'GET') {
      const result = await db.query(
        'SELECT * FROM hips_registrations ORDER BY created_at DESC'
      );
      
      const formatted = result.rows.map(r => ({
        id: r.id,
        fullName: r.full_name,
        email: r.email,
        phone: r.phone,
        organization: r.organization,
        role: r.role,
        tier: r.tier,
        departure: r.departure,
        delegates: r.delegates,
        totalAmount: Number(r.total_amount),
        status: r.status,
        paymentMethod: r.payment_method,
        receiptNumber: r.receipt_number,
        notes: r.notes,
        date: r.created_at,
        confirmedAt: r.confirmed_at
      }));

      return res.status(200).json(formatted);
    }

    if (req.method === 'POST') {
      const data = req.body || {};
      const id = `REG-2026-${Math.floor(100 + Math.random() * 900)}`;
      const fullName = data.fullName || 'Anonymous Delegate';
      const email = data.email || '';
      const phone = data.phone || '';
      const organization = data.organization || 'Individual';
      const role = data.role || 'Executive';
      const tier = data.tier || 'sharing';
      const departure = data.departure || 'lagos';
      const delegates = Number(data.delegates) || 1;
      const totalAmount = Number(data.totalAmount) || (tier === 'sharing' ? 2500000 : 3000000) * delegates;
      const status = 'Pending Verification';
      const paymentMethod = data.paymentMethod || 'Zenith Bank Transfer';

      await db.query(`
        INSERT INTO hips_registrations (
          id, full_name, email, phone, organization, role, tier, departure, delegates, total_amount, status, payment_method, notes
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      `, [
        id, fullName, email, phone, organization, role, tier, departure, delegates, totalAmount, status, paymentMethod, data.notes || ''
      ]);

      // Record in DB email log
      const emailId = `EML-${Math.floor(100 + Math.random() * 900)}`;
      await db.query(`
        INSERT INTO hips_emails (id, to_email, recipient_name, subject, type, payload, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [
        emailId,
        email,
        fullName,
        'We Received Your Reservation — HIPS Global Experience 2026 (Payment Verification in Progress)',
        'ACKNOWLEDGEMENT_PENDING_RECEIPT',
        JSON.stringify({
          fullName,
          email,
          delegates,
          tier,
          totalAmount: `₦${totalAmount.toLocaleString()}`,
          departure
        }),
        'Delivered'
      ]);

      // Trigger Live Outbound Gmail Dispatch
      if (email) {
        sendPendingReservationEmail({
          to: email,
          fullName,
          delegates,
          tier,
          totalAmount,
          departure
        }).catch(e => console.error('Background live email error:', e));
      }

      return res.status(201).json({
        id,
        fullName,
        email,
        phone,
        organization,
        role,
        tier,
        departure,
        delegates,
        totalAmount,
        status,
        paymentMethod,
        date: new Date().toISOString()
      });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error('API /registrations Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
