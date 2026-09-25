import { getPool, initDatabase } from './db.js';

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
        'SELECT * FROM hips_corporate_requests ORDER BY created_at DESC'
      );
      
      const formatted = result.rows.map(r => ({
        id: r.id,
        companyName: r.company_name,
        contactPerson: r.contact_person,
        workEmail: r.work_email,
        contactPhone: r.contact_phone,
        teamSize: r.team_size,
        preferredOccupancy: r.preferred_occupancy,
        specificRequirements: r.specific_requirements,
        status: r.status,
        proformaData: r.proforma_data,
        date: r.created_at
      }));

      return res.status(200).json(formatted);
    }

    if (req.method === 'POST') {
      const data = req.body || {};
      const id = `CORP-2026-${Math.floor(100 + Math.random() * 900)}`;
      const companyName = data.companyName || 'Corporate Institution';
      const contactPerson = data.contactPerson || 'HR Lead';
      const workEmail = data.workEmail || '';
      const contactPhone = data.contactPhone || '';
      const teamSize = data.teamSize || '3-5';
      const preferredOccupancy = data.preferredOccupancy || 'sharing';
      const specificRequirements = data.specificRequirements || '';
      const status = 'Pending Proforma';

      await db.query(`
        INSERT INTO hips_corporate_requests (
          id, company_name, contact_person, work_email, contact_phone, team_size, preferred_occupancy, specific_requirements, status
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `, [
        id, companyName, contactPerson, workEmail, contactPhone, teamSize, preferredOccupancy, specificRequirements, status
      ]);

      // Record acknowledgement email
      const emailId = `EML-${Math.floor(100 + Math.random() * 900)}`;
      await db.query(`
        INSERT INTO hips_emails (id, to_email, recipient_name, subject, type, payload, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [
        emailId,
        workEmail,
        `${companyName} (${contactPerson})`,
        'Corporate Nomination Received — HIPS Global Experience 2026',
        'CORPORATE_ACKNOWLEDGEMENT',
        JSON.stringify({
          companyName,
          contactPerson,
          teamSize,
          note: 'Our B2B partnership desk is generating your customized Proforma Invoice and formal invitation dossier.'
        }),
        'Delivered'
      ]);

      return res.status(201).json({
        id,
        companyName,
        contactPerson,
        workEmail,
        contactPhone,
        teamSize,
        preferredOccupancy,
        specificRequirements,
        status,
        date: new Date().toISOString()
      });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error('API /corporate Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
