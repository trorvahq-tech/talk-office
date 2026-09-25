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

  const { email, password } = req.body || {};
  const cleanEmail = (email || '').trim().toLowerCase();
  const cleanPassword = (password || '').trim();

  if (cleanEmail === 'admin@talkoffice.com' && cleanPassword === 'Password@0099') {
    return res.status(200).json({
      success: true,
      user: {
        email: cleanEmail,
        role: 'Executive Superadmin',
        scope: 'HIPS 2026 Admissions & Finance'
      },
      token: 'hips_adm_token_' + Date.now()
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid administrator email or password.'
  });
}
