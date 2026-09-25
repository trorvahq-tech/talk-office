import { getPool, initDatabase } from './db.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const db = getPool();
    await initDatabase();

    const result = await db.query(
      'SELECT * FROM hips_emails ORDER BY created_at DESC'
    );

    const formatted = result.rows.map(r => ({
      id: r.id,
      to: r.to_email,
      recipientName: r.recipient_name,
      subject: r.subject,
      type: r.type,
      payload: r.payload,
      status: r.status,
      date: r.created_at
    }));

    return res.status(200).json(formatted);
  } catch (error) {
    console.error('API /emails Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
