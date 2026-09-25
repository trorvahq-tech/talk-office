import nodemailer from 'nodemailer';

const SENDER_EMAIL = process.env.GMAIL_USER || 'kademola517@gmail.com';
const SENDER_PASS = (process.env.GMAIL_APP_PASSWORD || 'atapmmjjiirvwkmy').replace(/\s+/g, '');

export function getTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASS
    }
  });
}

// 1. Send Pending Reservation Acknowledgement
export async function sendPendingReservationEmail({ to, fullName, delegates, tier, totalAmount, departure }) {
  try {
    const transporter = getTransporter();
    const html = `
      <div style="font-family: Arial, sans-serif; background-color: #05070a; color: #f8fafc; padding: 30px 15px;">
        <div style="max-width: 600px; margin: 0 auto; background: #0c121d; border: 1px solid #d4a359; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <div style="text-align: center; border-bottom: 1px solid rgba(212,163,89,0.3); padding-bottom: 20px; margin-bottom: 25px;">
            <h1 style="color: #d4a359; margin: 0; font-size: 24px; letter-spacing: 2px;">THE TALK OFFICE</h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 1px;">
              HIPS Global Experience 2026 • Nairobi, Kenya & Kigali, Rwanda
            </p>
          </div>

          <h2 style="color: #ffffff; font-size: 18px; margin-bottom: 15px;">
            Reservation Received — Payment Verification in Progress
          </h2>

          <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">
            Dear <strong>${fullName}</strong>,
          </p>

          <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
            Thank you for your interest and for submitting your seat reservation for the <strong>HIPS Global Experience 2026</strong>. We have logged your application details:
          </p>

          <div style="background: rgba(212, 163, 89, 0.08); border-left: 4px solid #d4a359; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 4px 0; color: #f8fafc; font-size: 14px;"><strong>Package:</strong> ${tier === 'single' ? 'Single Occupancy VIP Suite (₦3,000,000)' : 'Sharing Accommodation (₦2,500,000)'}</p>
            <p style="margin: 4px 0; color: #f8fafc; font-size: 14px;"><strong>Number of Delegates:</strong> ${delegates}</p>
            <p style="margin: 4px 0; color: #f8fafc; font-size: 14px;"><strong>Departure Hub:</strong> ${departure.toUpperCase()}</p>
            <p style="margin: 4px 0; color: #f5d392; font-size: 16px; font-weight: bold;"><strong>Total Amount:</strong> ₦${Number(totalAmount).toLocaleString()}</p>
          </div>

          <div style="background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.3); border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="color: #fde047; font-weight: bold; margin: 0 0 5px 0; font-size: 14px;">
              Status: Pending Receipt Verification
            </p>
            <p style="color: #cbd5e1; font-size: 13px; margin: 0; line-height: 1.5;">
              Our finance team is currently cross-checking the incoming wire transfer with Zenith Bank. Once verified by our admissions desk, an official email containing your validated receipt and seat pass will be dispatched.
            </p>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 25px; text-align: center; font-size: 12px; color: #64748b;">
            <p style="margin: 0;">For urgent verification: forward proof to <strong>hello@thetalkoffice.com</strong> or WhatsApp <strong>08166399901</strong>.</p>
            <p style="margin: 5px 0 0 0;">&copy; 2026 The Talk Office • HIPS Connect Global Experience</p>
          </div>

        </div>
      </div>
    `;

    return await transporter.sendMail({
      from: `"The Talk Office Admissions" <${SENDER_EMAIL}>`,
      to,
      subject: 'Reservation Received — HIPS Global Experience 2026 (Payment Verification in Progress)',
      html
    });
  } catch (err) {
    console.error('Error sending Pending Reservation Email:', err);
    return null;
  }
}

// 2. Send Confirmed Payment Receipt & Seat Pass
export async function sendConfirmedReceiptEmail({ to, fullName, receiptNumber, amountPaid, delegates, tier, departure }) {
  try {
    const transporter = getTransporter();
    const html = `
      <div style="font-family: Arial, sans-serif; background-color: #05070a; color: #f8fafc; padding: 30px 15px;">
        <div style="max-width: 600px; margin: 0 auto; background: #0c121d; border: 2px solid #10b981; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <div style="text-align: center; border-bottom: 1px solid rgba(16,185,129,0.3); padding-bottom: 20px; margin-bottom: 25px;">
            <h1 style="color: #d4a359; margin: 0; font-size: 24px; letter-spacing: 2px;">THE TALK OFFICE</h1>
            <p style="color: #10b981; font-size: 13px; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">
              Official Payment Receipt & Confirmed Seat Allocation
            </p>
          </div>

          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: 8px; padding: 15px; text-align: center; margin-bottom: 20px;">
            <p style="color: #34d399; font-size: 13px; text-transform: uppercase; margin: 0; font-weight: bold;">Receipt Number</p>
            <p style="color: #ffffff; font-size: 20px; font-weight: bold; margin: 5px 0 0 0; font-family: monospace;">${receiptNumber}</p>
          </div>

          <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">
            Dear <strong>${fullName}</strong>,
          </p>

          <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
            We are pleased to confirm that your payment of <strong style="color: #34d399;">${amountPaid}</strong> has been successfully reconciled. Your seat allocation for the <strong>HIPS Global Experience 2026</strong> is now officially confirmed.
          </p>

          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 4px 0; color: #f8fafc; font-size: 14px;"><strong>Delegation:</strong> Nairobi, Kenya & Kigali, Rwanda</p>
            <p style="margin: 4px 0; color: #f8fafc; font-size: 14px;"><strong>Dates:</strong> 12th – 18th November 2026</p>
            <p style="margin: 4px 0; color: #f8fafc; font-size: 14px;"><strong>Pass Type:</strong> ${tier === 'single' ? 'Single Occupancy VIP Suite' : 'Sharing Accommodation'}</p>
            <p style="margin: 4px 0; color: #f8fafc; font-size: 14px;"><strong>Delegate Count:</strong> ${delegates}</p>
            <p style="margin: 4px 0; color: #f8fafc; font-size: 14px;"><strong>Departure Hub:</strong> ${departure ? departure.toUpperCase() : 'LAGOS'}</p>
          </div>

          <p style="color: #94a3b8; font-size: 13px; line-height: 1.5;">
            Your onboarding travel dossier, flight itineraries, masterclass guides, and hotel room keys will be issued 30 days prior to departure.
          </p>

          <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 25px; text-align: center; font-size: 12px; color: #64748b;">
            <p style="margin: 0;">Inquiries & Assistance: <strong>08166399901</strong> | <strong>hello@thetalkoffice.com</strong></p>
            <p style="margin: 5px 0 0 0;">&copy; 2026 The Talk Office Ltd • Official Admissions Desk</p>
          </div>

        </div>
      </div>
    `;

    return await transporter.sendMail({
      from: `"The Talk Office Admissions" <${SENDER_EMAIL}>`,
      to,
      subject: `Official Payment Receipt & Confirmed Seat Pass — HIPS Global 2026 (${receiptNumber})`,
      html
    });
  } catch (err) {
    console.error('Error sending Confirmed Receipt Email:', err);
    return null;
  }
}

// 3. Send Corporate Proforma Invoice Email
export async function sendCorporateProformaEmail({ to, companyName, contactPerson, invoiceNumber, items, totalAmount, subtotal, vatAmount, discountAmount, dueDate }) {
  try {
    const transporter = getTransporter();

    const itemsRows = (items || []).map(it => `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
        <td style="padding: 10px; color: #cbd5e1; font-size: 13px;">${it.description}</td>
        <td style="padding: 10px; text-align: center; color: #ffffff; font-size: 13px;">${it.qty}</td>
        <td style="padding: 10px; text-align: right; color: #ffffff; font-size: 13px;">₦${Number(it.unitPrice).toLocaleString()}</td>
        <td style="padding: 10px; text-align: right; color: #f5d392; font-weight: bold; font-size: 13px;">₦${Number(it.total).toLocaleString()}</td>
      </tr>
    `).join('');

    const html = `
      <div style="font-family: Arial, sans-serif; background-color: #05070a; color: #f8fafc; padding: 30px 15px;">
        <div style="max-width: 650px; margin: 0 auto; background: #0c121d; border: 1px solid #d4a359; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <div style="text-align: center; border-bottom: 1px solid rgba(212,163,89,0.3); padding-bottom: 20px; margin-bottom: 25px;">
            <h1 style="color: #d4a359; margin: 0; font-size: 24px; letter-spacing: 2px;">THE TALK OFFICE</h1>
            <p style="color: #38bdf8; font-size: 13px; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">
              Official Corporate Proforma Invoice
            </p>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div>
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">INVOICE TO:</p>
              <p style="margin: 3px 0 0 0; color: #ffffff; font-size: 16px; font-weight: bold;">${companyName}</p>
              <p style="margin: 2px 0 0 0; color: #cbd5e1; font-size: 13px;">Attn: ${contactPerson}</p>
            </div>
            <div style="text-align: right;">
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">PROFORMA NO:</p>
              <p style="margin: 3px 0 0 0; color: #f5d392; font-size: 15px; font-weight: bold; font-family: monospace;">${invoiceNumber}</p>
              <p style="margin: 2px 0 0 0; color: #ef4444; font-size: 12px;">Due: ${dueDate || '16th Oct 2026'}</p>
            </div>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: rgba(255,255,255,0.02); border-radius: 8px; overflow: hidden;">
            <thead>
              <tr style="background: rgba(212,163,89,0.15); color: #d4a359; font-size: 12px; text-transform: uppercase;">
                <th style="padding: 10px; text-align: left;">Item Description</th>
                <th style="padding: 10px; text-align: center;">Qty</th>
                <th style="padding: 10px; text-align: right;">Rate (₦)</th>
                <th style="padding: 10px; text-align: right;">Total (₦)</th>
              </tr>
            </thead>
            <tbody>
              ${itemsRows}
            </tbody>
          </table>

          <div style="background: rgba(14,20,32,0.9); border: 1px solid rgba(212,163,89,0.25); border-radius: 8px; padding: 15px; margin: 20px 0; text-align: right;">
            <p style="margin: 4px 0; color: #94a3b8; font-size: 13px;">Subtotal: <span style="color: #fff; font-weight: bold;">₦${Number(subtotal).toLocaleString()}</span></p>
            ${discountAmount ? `<p style="margin: 4px 0; color: #10b981; font-size: 13px;">Discount: -₦${Number(discountAmount).toLocaleString()}</p>` : ''}
            ${vatAmount ? `<p style="margin: 4px 0; color: #94a3b8; font-size: 13px;">VAT / Taxes: +₦${Number(vatAmount).toLocaleString()}</p>` : ''}
            <p style="margin: 8px 0 0 0; color: #f5d392; font-size: 20px; font-weight: bold; border-top: 1px solid rgba(212,163,89,0.2); padding-top: 8px;">
              Total Invoiced: ${typeof totalAmount === 'string' && totalAmount.startsWith('₦') ? totalAmount : '₦' + Number(totalAmount).toLocaleString()}
            </p>
          </div>

          <div style="background: rgba(212,163,89,0.08); border-left: 4px solid #d4a359; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0 0 5px 0; color: #d4a359; font-weight: bold; font-size: 13px; text-transform: uppercase;">Bank Wire Instructions</p>
            <p style="margin: 2px 0; color: #fff; font-size: 13px;"><strong>Bank:</strong> Zenith Bank PLC</p>
            <p style="margin: 2px 0; color: #fff; font-size: 13px;"><strong>Account Name:</strong> The Talk Office</p>
            <p style="margin: 2px 0; color: #fff; font-size: 15px;"><strong>Account Number:</strong> <span style="font-family: monospace; font-weight: bold; color: #f5d392;">1019925375</span></p>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 25px; text-align: center; font-size: 12px; color: #64748b;">
            <p style="margin: 0;">For procurement inquiries: <strong>08166399901</strong> | <strong>hello@thetalkoffice.com</strong></p>
            <p style="margin: 5px 0 0 0;">&copy; 2026 The Talk Office Ltd • Corporate Enterprise Division</p>
          </div>

        </div>
      </div>
    `;

    return await transporter.sendMail({
      from: `"The Talk Office Corporate Desk" <${SENDER_EMAIL}>`,
      to,
      subject: `Proforma Invoice: HIPS Global 2026 Executive Delegation (${invoiceNumber})`,
      html
    });
  } catch (err) {
    console.error('Error sending Corporate Proforma Email:', err);
    return null;
  }
}
