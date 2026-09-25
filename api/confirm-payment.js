import { getPool, initDatabase } from './db.js';
import { sendConfirmedReceiptEmail } from './mailer.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { registrationId } = req.body || {};
    if (!registrationId) {
      return res.status(400).json({ error: 'registrationId is required' });
    }

    const db = getPool();
    await initDatabase();

    const receiptNumber = `REC-HIPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();

    const result = await db.query(`
      UPDATE hips_registrations
      SET status = 'Confirmed & Receipt Sent',
          receipt_number = $1,
          confirmed_at = $2
      WHERE id = $3
      RETURNING *
    `, [receiptNumber, now, registrationId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Registration record not found' });
    }

    const updated = result.rows[0];
    const amountFormatted = `₦${Number(updated.total_amount).toLocaleString()}`;

    // Log Official Receipt Email in DB
    const emailId = `EML-${Math.floor(100 + Math.random() * 900)}`;
    await db.query(`
      INSERT INTO hips_emails (id, to_email, recipient_name, subject, type, payload, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `, [
      emailId,
      updated.email,
      updated.full_name,
      `Official Payment Receipt & Confirmed Seat Pass — HIPS Global 2026 (${receiptNumber})`,
      'RECEIPT',
      JSON.stringify({
        receiptNumber,
        fullName: updated.full_name,
        organization: updated.organization || 'Individual Executive',
        delegates: updated.delegates,
        tier: updated.tier,
        amountPaid: amountFormatted,
        destination: 'Nairobi, Kenya & Kigali, Rwanda (12 – 18 Nov 2026)',
        confirmationTime: now.toISOString()
      }),
      'Delivered'
    ]);

    // Dispatch Live Outbound Email to Delegate
    if (updated.email) {
      sendConfirmedReceiptEmail({
        to: updated.email,
        fullName: updated.full_name,
        receiptNumber,
        amountPaid: amountFormatted,
        delegates: updated.delegates,
        tier: updated.tier,
        departure: updated.departure
      }).catch(e => console.error('Background live receipt email error:', e));
    }

    return res.status(200).json({
      success: true,
      receiptNumber,
      record: {
        id: updated.id,
        fullName: updated.full_name,
        email: updated.email,
        phone: updated.phone,
        organization: updated.organization,
        tier: updated.tier,
        delegates: updated.delegates,
        totalAmount: Number(updated.total_amount),
        status: updated.status,
        receiptNumber: updated.receipt_number,
        confirmedAt: updated.confirmed_at
      }
    });
  } catch (error) {
    console.error('API /confirm-payment Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
