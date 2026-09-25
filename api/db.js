import pg from 'pg';
const { Pool } = pg;

// Singleton pool instance for serverless lifecycle
let pool;

export function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
    
    pool = new Pool({
      connectionString,
      ssl: connectionString && !connectionString.includes('localhost') 
        ? { rejectUnauthorized: false } 
        : false,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }
  return pool;
}

// Auto-migrate tables on initialization
export async function initDatabase() {
  const db = getPool();
  
  await db.query(`
    CREATE TABLE IF NOT EXISTS hips_registrations (
      id VARCHAR(64) PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(64),
      organization VARCHAR(255),
      role VARCHAR(255),
      tier VARCHAR(64) DEFAULT 'sharing',
      departure VARCHAR(64) DEFAULT 'lagos',
      delegates INT DEFAULT 1,
      total_amount NUMERIC NOT NULL,
      status VARCHAR(64) DEFAULT 'Pending Verification',
      payment_method VARCHAR(64) DEFAULT 'Zenith Bank Wire',
      receipt_number VARCHAR(64),
      notes TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      confirmed_at TIMESTAMPTZ
    );

    CREATE TABLE IF NOT EXISTS hips_corporate_requests (
      id VARCHAR(64) PRIMARY KEY,
      company_name VARCHAR(255) NOT NULL,
      contact_person VARCHAR(255) NOT NULL,
      work_email VARCHAR(255) NOT NULL,
      contact_phone VARCHAR(64),
      team_size VARCHAR(64),
      preferred_occupancy VARCHAR(64) DEFAULT 'sharing',
      specific_requirements TEXT,
      status VARCHAR(64) DEFAULT 'Pending Proforma',
      proforma_data JSONB,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS hips_emails (
      id VARCHAR(64) PRIMARY KEY,
      to_email VARCHAR(255) NOT NULL,
      recipient_name VARCHAR(255),
      subject VARCHAR(500) NOT NULL,
      type VARCHAR(64) NOT NULL,
      payload JSONB,
      status VARCHAR(64) DEFAULT 'Delivered',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);
}
