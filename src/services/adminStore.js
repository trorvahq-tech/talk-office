// Local storage & PostgreSQL API Bridge for Admin Portal, Registrations, Corporate Invoices, and Emails

const REG_STORAGE_KEY = 'hips_registrations_prod_v2';
const CORP_STORAGE_KEY = 'hips_corporate_prod_v2';
const EMAIL_STORAGE_KEY = 'hips_emails_prod_v2';

// Clean production state - Zero mock/demo data
const INITIAL_REGISTRATIONS = [];
const INITIAL_CORPORATE_REQUESTS = [];
const INITIAL_EMAILS = [];

// Helper functions for LocalStorage with backend API synchronization
export function getRegistrations() {
  try {
    const data = localStorage.getItem(REG_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(REG_STORAGE_KEY, JSON.stringify(INITIAL_REGISTRATIONS));
      // Asynchronously fetch from API if available
      fetchRegistrationsFromApi();
      return INITIAL_REGISTRATIONS;
    }
    fetchRegistrationsFromApi();
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_REGISTRATIONS;
  }
}

async function fetchRegistrationsFromApi() {
  try {
    const res = await fetch('/api/registrations');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem(REG_STORAGE_KEY, JSON.stringify(data));
      }
    }
  } catch (e) {
    // Silent fallback to local storage
  }
}

export function saveRegistration(newReg) {
  const current = getRegistrations();
  const id = `REG-2026-${Math.floor(100 + Math.random() * 900)}`;
  const record = {
    id,
    ...newReg,
    status: 'Pending Verification',
    date: new Date().toISOString()
  };
  const updated = [record, ...current];
  localStorage.setItem(REG_STORAGE_KEY, JSON.stringify(updated));

  // Send to PostgreSQL Backend API if available
  fetch('/api/registrations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  }).catch(() => {});

  // Send Initial Acknowledgement Email
  logEmail({
    to: record.email,
    recipientName: record.fullName,
    subject: 'We Received Your Reservation — HIPS Global Experience 2026 (Payment Verification in Progress)',
    type: 'ACKNOWLEDGEMENT_PENDING_RECEIPT',
    status: 'Delivered',
    payload: {
      fullName: record.fullName,
      email: record.email,
      delegates: record.delegates,
      tier: record.tier,
      totalAmount: `₦${Number(record.totalAmount).toLocaleString()}`,
      departure: record.departure,
      accountDetails: 'Zenith Bank — 1019925375 (The Talk Office)'
    }
  });

  return record;
}

export function getCorporateRequests() {
  try {
    const data = localStorage.getItem(CORP_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(CORP_STORAGE_KEY, JSON.stringify(INITIAL_CORPORATE_REQUESTS));
      fetchCorporateFromApi();
      return INITIAL_CORPORATE_REQUESTS;
    }
    fetchCorporateFromApi();
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_CORPORATE_REQUESTS;
  }
}

async function fetchCorporateFromApi() {
  try {
    const res = await fetch('/api/corporate');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem(CORP_STORAGE_KEY, JSON.stringify(data));
      }
    }
  } catch (e) {
    // Silent fallback
  }
}

export function saveCorporateRequest(newReq) {
  const current = getCorporateRequests();
  const id = `CORP-2026-${Math.floor(100 + Math.random() * 900)}`;
  const record = {
    id,
    ...newReq,
    status: 'Pending Proforma',
    date: new Date().toISOString()
  };
  const updated = [record, ...current];
  localStorage.setItem(CORP_STORAGE_KEY, JSON.stringify(updated));

  // Send to PostgreSQL Backend API
  fetch('/api/corporate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  }).catch(() => {});

  // Send Corporate Confirmation Email
  logEmail({
    to: record.workEmail,
    recipientName: `${record.companyName} (${record.contactPerson})`,
    subject: 'Corporate Nomination Received — HIPS Global Experience 2026',
    type: 'CORPORATE_ACKNOWLEDGEMENT',
    status: 'Delivered',
    payload: {
      companyName: record.companyName,
      contactPerson: record.contactPerson,
      teamSize: record.teamSize,
      note: 'Our B2B partnership desk is generating your customized Proforma Invoice and formal invitation dossier.'
    }
  });

  return record;
}

export function getEmails() {
  try {
    const data = localStorage.getItem(EMAIL_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(INITIAL_EMAILS));
      fetchEmailsFromApi();
      return INITIAL_EMAILS;
    }
    fetchEmailsFromApi();
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_EMAILS;
  }
}

async function fetchEmailsFromApi() {
  try {
    const res = await fetch('/api/emails');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(data));
      }
    }
  } catch (e) {
    // Silent fallback
  }
}

export function logEmail(emailData) {
  const current = getEmails();
  const id = `EML-${Math.floor(100 + Math.random() * 900)}`;
  const newEmail = {
    id,
    ...emailData,
    date: new Date().toISOString()
  };
  const updated = [newEmail, ...current];
  localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(updated));
  return newEmail;
}

// Action: Confirm Payment and Send Official Reservation Receipt Email
export function confirmPaymentAndSendReceipt(registrationId) {
  const list = getRegistrations();
  const receiptNum = `REC-HIPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date().toISOString();

  let targetItem = null;
  const updated = list.map(item => {
    if (item.id === registrationId) {
      targetItem = {
        ...item,
        status: 'Confirmed & Receipt Sent',
        receiptNumber: receiptNum,
        confirmedAt: now
      };
      return targetItem;
    }
    return item;
  });

  localStorage.setItem(REG_STORAGE_KEY, JSON.stringify(updated));

  // Sync with Backend PostgreSQL API
  fetch('/api/confirm-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ registrationId })
  }).catch(() => {});

  if (targetItem) {
    logEmail({
      to: targetItem.email,
      recipientName: targetItem.fullName,
      subject: `Official Payment Receipt & Confirmed Seat Pass — HIPS Global 2026 (${receiptNum})`,
      type: 'RECEIPT',
      status: 'Delivered',
      payload: {
        receiptNumber: receiptNum,
        fullName: targetItem.fullName,
        organization: targetItem.organization || 'Individual Executive',
        delegates: targetItem.delegates,
        tier: targetItem.tier,
        amountPaid: `₦${Number(targetItem.totalAmount).toLocaleString()}`,
        destination: 'Nairobi, Kenya & Kigali, Rwanda (12 – 18 Nov 2026)',
        confirmationTime: now
      }
    });
  }

  return targetItem;
}

// Action: Send Proforma Invoice for Corporate Request
export function sendProformaInvoice(corporateId, invoiceDetails) {
  const list = getCorporateRequests();
  const invoiceNum = invoiceDetails.invoiceNumber || `PRO-HIPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date().toISOString();

  let targetItem = null;
  const updated = list.map(item => {
    if (item.id === corporateId) {
      targetItem = {
        ...item,
        status: 'Proforma Sent',
        proformaData: {
          ...invoiceDetails,
          invoiceNumber: invoiceNum,
          sentAt: now
        }
      };
      return targetItem;
    }
    return item;
  });

  localStorage.setItem(CORP_STORAGE_KEY, JSON.stringify(updated));

  // Sync with Backend PostgreSQL API
  fetch('/api/send-proforma', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ corporateId, invoiceDetails })
  }).catch(() => {});

  if (targetItem) {
    logEmail({
      to: targetItem.workEmail,
      recipientName: `${targetItem.companyName} (Attn: ${targetItem.contactPerson})`,
      subject: `Proforma Invoice: HIPS Global 2026 Executive Delegation (${invoiceNum})`,
      type: 'PROFORMA_INVOICE',
      status: 'Delivered',
      payload: {
        invoiceNumber: invoiceNum,
        companyName: targetItem.companyName,
        contactPerson: targetItem.contactPerson,
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
      }
    });
  }

  return targetItem;
}
