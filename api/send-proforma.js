import { getPool, initDatabase } from './db.js';
import { sendCorporateProformaEmail } from './mailer.js';

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
    const { corporateId, invoiceDetails } = req.body || {};
    if (!corporateId || !invoiceDetails) {
      return res.status(400).json({ error: 'corporateId and invoiceDetails are required' });
    }

    const db = getPool();
    await initDatabase();

    const invoiceNumber = invoiceDetails.invoiceNumber || `PRO-HIPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const proformaPayload = {
      ...invoiceDetails,
      invoiceNumber,
      sentAt: new Date().toISOString()
    };

    const result = await db.query(`
      UPDATE hips_corporate_requests
      SET status = 'Proforma Sent',
          proforma_data = $1
      WHERE id = $2
      RETURNING *
    `, [JSON.stringify(proformaPayload), corporateId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Corporate record not found' });
    }

    const updated = result.rows[0];

    // Log Proforma Email in DB
    const emailId = `EML-${Math.floor(100 + Math.random() * 900)}`;
    await db.query(`
      INSERT INTO hips_emails (id, to_email, recipient_name, subject, type, payload, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `, [
      emailId,
      updated.work_email,
      `${updated.company_name} (Attn: ${updated.contact_person})`,
      `Proforma Invoice: HIPS Global 2026 Executive Delegation (${invoiceNumber})`,
      'PROFORMA_INVOICE',
      JSON.stringify({
        invoiceNumber,
        companyName: updated.company_name,
        contactPerson: updated.contact_person,
        items: invoiceDetails.items,
        subtotal: invoiceDetails.subtotal,
        vatAmount: invoiceDetails.vatAmount,
        discountAmount: invoiceDetails.discountAmount,
        totalAmount: `₦${Number(invoiceDetails.totalAmount).toLocaleString()}`,
        bankDetails: {
          bank: 'Zenith Bank PLC',
          accountName: 'The Talk Office Ltd',
          accountNumber: '1019925375',
          sortCode: '057150013'
        },
        dueDate: '16th October 2026'
      }),
      'Delivered'
    ]);

    // Dispatch Live Outbound Proforma Invoice to Corporate Contact
    if (updated.work_email) {
      sendCorporateProformaEmail({
        to: updated.work_email,
        companyName: updated.company_name,
        contactPerson: updated.contact_person,
        invoiceNumber,
        items: invoiceDetails.items,
        totalAmount: invoiceDetails.totalAmount,
        subtotal: invoiceDetails.subtotal,
        vatAmount: invoiceDetails.vatAmount,
        discountAmount: invoiceDetails.discountAmount,
        dueDate: invoiceDetails.dueDate || '16th October 2026'
      }).catch(e => console.error('Background live proforma email error:', e));
    }

    return res.status(200).json({
      success: true,
      invoiceNumber,
      record: {
        id: updated.id,
        companyName: updated.company_name,
        contactPerson: updated.contact_person,
        workEmail: updated.work_email,
        contactPhone: updated.contact_phone,
        status: updated.status,
        proformaData: proformaPayload
      }
    });
  } catch (error) {
    console.error('API /send-proforma Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
