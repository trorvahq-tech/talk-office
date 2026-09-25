# The Talk Office — HIPS Global Experience 2026

Futuristic luxury corporate web platform and executive portal for **HIPS Global Experience 2026** (Nairobi, Kenya & Kigali, Rwanda Expedition: 12th – 18th November 2026).

## Features
- **Executive UI & Experience Architecture**: 4 Pillars of HIPS, 4D Transformational Model, Dual-Nation Itinerary, Interactive Growth Tree, Cohort Gallery, Investment Tiers.
- **Single-Line Streamlined Navigation**: Refined responsive executive navigation.
- **Delegate Seat Reservations & Payment Reconciliation**: Instant reservation confirmation, automatic email notifications, and Zenith Bank wire verification.
- **Corporate Pass & Proforma Invoice Builder**: B2B nomination pipeline with interactive table-style proforma invoice generation and email dispatch.
- **Admin Portal (`/admin`)**: Secure restricted operations console with session authentication, registration management, corporate pipelines, and outbox logs.
- **Vercel Serverless Backend**: Fullstack `/api` serverless architecture connecting to PostgreSQL without needing external server hosting.
- **Live Gmail SMTP Integration**: Automated branded HTML receipts, acknowledgements, and proforma invoices.

## Tech Stack
- **Frontend**: React 18, Vite, Vanilla CSS Design System, Lucide Icons
- **Backend**: Vercel Serverless Functions (`/api`), Node.js
- **Database**: PostgreSQL (`pg`)
- **Email Delivery**: Nodemailer / Gmail SMTP

## Environment Variables
Create a `.env` file with:
```env
GMAIL_USER="kademola517@gmail.com"
GMAIL_APP_PASSWORD="your-app-password"
ADMIN_EMAIL="admin@talkoffice.com"
ADMIN_PASSWORD="Password@0099"
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"
```

## Local Development
```bash
npm install
npm run dev
```

## Admin Portal
- URL: `/admin`
- Email: `admin@talkoffice.com`
- Password: `Password@0099`
