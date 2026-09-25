import React, { useState, useEffect } from 'react';
import { 
  Users, Building, Mail, CheckCircle2, Clock, 
  Send, Plus, Trash2, ArrowLeft, Download, Eye, Sparkles, RefreshCw, LogOut, Lock
} from 'lucide-react';
import { 
  getRegistrations, 
  getCorporateRequests, 
  getEmails, 
  confirmPaymentAndSendReceipt, 
  sendProformaInvoice 
} from '../services/adminStore';
import AdminLogin from './AdminLogin';

export default function AdminPortal({ onExit }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('hips_admin_authenticated') === 'true'
  );
  const [activeTab, setActiveTab] = useState('registrations'); // 'registrations' | 'corporate' | 'emails'
  const [registrations, setRegistrations] = useState([]);
  const [corporateRequests, setCorporateRequests] = useState([]);
  const [emails, setEmails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');

  const handleLogout = () => {
    sessionStorage.removeItem('hips_admin_authenticated');
    sessionStorage.removeItem('hips_admin_user');
    setIsAuthenticated(false);
  };

  // Selected for Proforma Invoice Generation
  const [activeProformaCorp, setActiveProformaCorp] = useState(null);
  const [proformaItems, setProformaItems] = useState([
    { description: 'HIPS 2026 Executive Delegate Pass — Sharing Accommodation (Kenya & Rwanda)', qty: 3, unitPrice: 2500000, total: 7500000 },
    { description: 'HIPS 2026 VIP Executive Pass — Single Occupancy Suite (Kenya & Rwanda)', qty: 1, unitPrice: 3000000, total: 3000000 }
  ]);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [vatPercent, setVatPercent] = useState(7.5);
  const [proformaNotes, setProformaNotes] = useState('Payment Due on or before 16th October 2026 to guarantee seat allocation and dual-nation flight issuance.');

  // Modal for Viewing Full Rendered Email
  const [viewingEmail, setViewingEmail] = useState(null);

  // Notification Toast
  const [toastMessage, setToastMessage] = useState(null);

  const loadData = () => {
    setRegistrations(getRegistrations());
    setCorporateRequests(getCorporateRequests());
    setEmails(getEmails());
  };

  useEffect(() => {
    loadData();
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Metrics
  const totalRegistrationsCount = registrations.length;
  const pendingPaymentsCount = registrations.filter(r => r.status === 'Pending Verification').length;
  const confirmedPaymentsCount = registrations.filter(r => r.status.includes('Confirmed')).length;
  const corporateCount = corporateRequests.length;
  const totalRevenueProjected = registrations.reduce((sum, r) => sum + (Number(r.totalAmount) || 0), 0);

  // Handle Confirm Payment
  const handleConfirmPayment = (regId) => {
    const updated = confirmPaymentAndSendReceipt(regId);
    loadData();
    showToast(`Payment confirmed for ${updated.fullName}! Official receipt & reservation email dispatched.`);
  };

  // Open Proforma Modal
  const handleOpenProformaModal = (corp) => {
    setActiveProformaCorp(corp);
    const count = corp.delegatesCount || (corp.teamSize === '2-3' ? 3 : corp.teamSize === '6-10' ? 6 : 4);
    const unitPrice = corp.preferredOccupancy === 'single' ? 3000000 : 2500000;
    setProformaItems([
      {
        description: `HIPS Global 2026 Executive Delegation Pass — ${corp.preferredOccupancy === 'single' ? 'Single Occupancy' : 'Sharing'} (Kenya & Rwanda)`,
        qty: count,
        unitPrice: unitPrice,
        total: count * unitPrice
      }
    ]);
  };

  // Proforma calculations
  const subtotal = proformaItems.reduce((acc, item) => acc + (Number(item.total) || 0), 0);
  const discountAmount = (subtotal * Number(discountPercent)) / 100;
  const taxableAmount = subtotal - discountAmount;
  const vatAmount = (taxableAmount * Number(vatPercent)) / 100;
  const grandTotal = taxableAmount + vatAmount;

  const handleUpdateItem = (index, field, value) => {
    const newItems = [...proformaItems];
    newItems[index][field] = value;
    if (field === 'qty' || field === 'unitPrice') {
      const q = field === 'qty' ? Number(value) : Number(newItems[index].qty);
      const p = field === 'unitPrice' ? Number(value) : Number(newItems[index].unitPrice);
      newItems[index].total = q * p;
    }
    setProformaItems(newItems);
  };

  const handleAddItem = () => {
    setProformaItems([
      ...proformaItems,
      { description: 'Flight Logistics / VIP Airport Concierge Addon', qty: 1, unitPrice: 250000, total: 250000 }
    ]);
  };

  const handleRemoveItem = (index) => {
    if (proformaItems.length > 1) {
      setProformaItems(proformaItems.filter((_, i) => i !== index));
    }
  };

  const handleSendProforma = () => {
    if (!activeProformaCorp) return;
    sendProformaInvoice(activeProformaCorp.id, {
      items: proformaItems,
      subtotal,
      discountAmount,
      discountPercent,
      vatPercent,
      vatAmount,
      totalAmount: grandTotal,
      notes: proformaNotes
    });
    loadData();
    setActiveProformaCorp(null);
    showToast(`Proforma Invoice sent to ${activeProformaCorp.workEmail}!`);
  };

  // Filtered lists
  const filteredRegistrations = registrations.filter(r => {
    const matchSearch = (r.fullName + r.email + (r.organization || '')).toLowerCase().includes(searchTerm.toLowerCase());
    if (filterStatus === 'ALL') return matchSearch;
    if (filterStatus === 'PENDING') return matchSearch && r.status === 'Pending Verification';
    if (filterStatus === 'CONFIRMED') return matchSearch && r.status.includes('Confirmed');
    return matchSearch;
  });

  const filteredCorporate = corporateRequests.filter(c => {
    return (c.companyName + c.contactPerson + c.workEmail).toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (!isAuthenticated) {
    return (
      <AdminLogin 
        onLoginSuccess={() => {
          setIsAuthenticated(true);
          loadData();
        }} 
        onExit={onExit} 
      />
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#04060a',
      color: '#f8fafc',
      fontFamily: 'var(--font-body)',
      paddingBottom: '4rem'
    }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 99999,
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: '#ffffff',
          padding: '0.85rem 1.35rem',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontWeight: 600,
          fontSize: '0.9rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <CheckCircle2 size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <header style={{
        background: '#090d15',
        borderBottom: '1px solid rgba(212, 163, 89, 0.25)',
        padding: '1rem clamp(1rem, 4vw, 3rem)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={onExit}
              className="btn-secondary-dark"
              style={{
                padding: '0.45rem 0.9rem',
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <ArrowLeft size={14} /> Back to Live Site
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 800, 
                  color: 'var(--gold-primary)', 
                  fontSize: '1.25rem' 
                }}>
                  TALK OFFICE
                </span>
                <span className="badge-pill badge-gold" style={{ fontSize: '0.68rem', padding: '0.1rem 0.5rem' }}>
                  ADMIN PORTAL
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                HIPS Global 2026 (Kenya & Rwanda) — Admissions & Finance Operations
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button 
              onClick={loadData}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#cbd5e1',
                borderRadius: '8px',
                padding: '0.5rem 0.85rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <RefreshCw size={13} /> Refresh Data
            </button>

            <div style={{
              background: 'rgba(212, 163, 89, 0.1)',
              border: '1px solid rgba(212, 163, 89, 0.3)',
              borderRadius: '8px',
              padding: '0.4rem 0.85rem',
              fontSize: '0.78rem',
              color: 'var(--gold-light)',
              fontFamily: 'var(--font-mono)'
            }}>
              Logged in: <strong>admin@talkoffice.com</strong>
            </div>

            <button
              onClick={handleLogout}
              style={{
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#fca5a5',
                borderRadius: '8px',
                padding: '0.5rem 0.85rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 600
              }}
              title="Sign Out of Admin Session"
            >
              <LogOut size={13} /> Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}>
        
        {/* Metric Cards Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {/* Card 1: Total Registrations */}
          <div className="glass-panel" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>Total Registrations</span>
              <Users size={18} color="var(--gold-primary)" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>
              {totalRegistrationsCount}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
              Individual & Group Delegates
            </div>
          </div>

          {/* Card 2: Pending Money Receipt */}
          <div className="glass-panel" style={{ padding: '1.25rem', borderColor: pendingPaymentsCount > 0 ? 'rgba(234, 179, 8, 0.4)' : 'var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#eab308', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>Pending Money Receipt</span>
              <Clock size={18} color="#eab308" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fde047' }}>
              {pendingPaymentsCount}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#eab308', marginTop: '0.25rem' }}>
              Awaiting Admin Payment Confirmation
            </div>
          </div>

          {/* Card 3: Confirmed Receipts Sent */}
          <div className="glass-panel" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>Confirmed & Receipt Sent</span>
              <CheckCircle2 size={18} color="#10b981" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#34d399' }}>
              {confirmedPaymentsCount}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
              Tickets & Welcome Packs Issued
            </div>
          </div>

          {/* Card 4: Corporate Pass Requests */}
          <div className="glass-panel" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#38bdf8', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>Corporate Pass Requests</span>
              <Building size={18} color="#38bdf8" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#bae6fd' }}>
              {corporateCount}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
              Enterprise & B2B Inquiries
            </div>
          </div>

          {/* Card 5: Total Pipeline Value */}
          <div className="glass-panel" style={{ padding: '1.25rem', background: 'linear-gradient(135deg, rgba(14,20,32,0.9) 0%, rgba(212,163,89,0.08) 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gold-light)', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>Registered Volume</span>
              <Sparkles size={18} color="var(--gold-primary)" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold-light)' }}>
              ₦{totalRevenueProjected.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>
              Zenith Wire Admissions
            </div>
          </div>
        </div>

        {/* Tab Selector Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingBottom: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('registrations')}
              style={{
                background: activeTab === 'registrations' ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.04)',
                color: activeTab === 'registrations' ? '#05070a' : '#cbd5e1',
                fontWeight: 700,
                fontSize: '0.88rem',
                border: 'none',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
            >
              <Users size={16} /> Delegate Registrations & Payments ({registrations.length})
            </button>

            <button 
              onClick={() => setActiveTab('corporate')}
              style={{
                background: activeTab === 'corporate' ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.04)',
                color: activeTab === 'corporate' ? '#05070a' : '#cbd5e1',
                fontWeight: 700,
                fontSize: '0.88rem',
                border: 'none',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
            >
              <Building size={16} /> Corporate Pass & Proforma Invoices ({corporateRequests.length})
            </button>

            <button 
              onClick={() => setActiveTab('emails')}
              style={{
                background: activeTab === 'emails' ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.04)',
                color: activeTab === 'emails' ? '#05070a' : '#cbd5e1',
                fontWeight: 700,
                fontSize: '0.88rem',
                border: 'none',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
            >
              <Mail size={16} /> Email Outbox & Dispatches ({emails.length})
            </button>
          </div>

          {/* Search Input */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Search name, email, company..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ width: '260px', padding: '0.5rem 0.85rem', fontSize: '0.85rem' }}
            />
          </div>
        </div>

        {/* TAB 1: DELEGATE REGISTRATIONS & PAYMENTS */}
        {activeTab === 'registrations' && (
          <div>
            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <button 
                onClick={() => setFilterStatus('ALL')}
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.78rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: filterStatus === 'ALL' ? 'rgba(255,255,255,0.15)' : 'transparent',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                All ({registrations.length})
              </button>
              <button 
                onClick={() => setFilterStatus('PENDING')}
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.78rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(234, 179, 8, 0.3)',
                  background: filterStatus === 'PENDING' ? 'rgba(234, 179, 8, 0.2)' : 'transparent',
                  color: '#fde047',
                  cursor: 'pointer'
                }}
              >
                Pending Money Receipt ({pendingPaymentsCount})
              </button>
              <button 
                onClick={() => setFilterStatus('CONFIRMED')}
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.78rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  background: filterStatus === 'CONFIRMED' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                  color: '#34d399',
                  cursor: 'pointer'
                }}
              >
                Confirmed & Sent ({confirmedPaymentsCount})
              </button>
            </div>

            {/* Table */}
            <div className="glass-panel" style={{ overflowX: 'auto', padding: '0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Delegate / Applicant</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Organization & Role</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Package / Hub</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Amount (₦)</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Status</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600, textAlign: 'right' }}>Admin Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRegistrations.map((reg) => {
                    const isPending = reg.status === 'Pending Verification';
                    return (
                      <tr key={reg.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.2s' }}>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ fontWeight: 700, color: '#fff' }}>{reg.fullName}</div>
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{reg.email}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{reg.phone}</div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ color: '#e2e8f0', fontWeight: 500 }}>{reg.organization || 'Individual'}</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{reg.role || 'Executive'}</div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ textTransform: 'capitalize', color: 'var(--gold-light)' }}>
                            {reg.tier === 'sharing' ? 'Sharing (₦2.5M)' : 'Single Occupancy (₦3M)'}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            {reg.delegates} Pax • {reg.departure?.toUpperCase()} Hub
                          </div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                            ₦{Number(reg.totalAmount).toLocaleString()}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                            {new Date(reg.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          {isPending ? (
                            <span style={{
                              background: 'rgba(234, 179, 8, 0.15)',
                              color: '#fde047',
                              border: '1px solid rgba(234, 179, 8, 0.4)',
                              borderRadius: '20px',
                              padding: '0.25rem 0.65rem',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}>
                              <Clock size={12} /> Pending Money Receipt
                            </span>
                          ) : (
                            <span style={{
                              background: 'rgba(16, 185, 129, 0.15)',
                              color: '#34d399',
                              border: '1px solid rgba(16, 185, 129, 0.4)',
                              borderRadius: '20px',
                              padding: '0.25rem 0.65rem',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}>
                              <CheckCircle2 size={12} /> Confirmed & Receipt Sent
                            </span>
                          )}
                          {reg.receiptNumber && (
                            <div style={{ fontSize: '0.7rem', color: 'var(--gold-light)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                              #{reg.receiptNumber}
                            </div>
                          )}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                          {isPending ? (
                            <button 
                              onClick={() => handleConfirmPayment(reg.id)}
                              className="btn-gold"
                              style={{
                                padding: '0.45rem 0.95rem',
                                fontSize: '0.78rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem'
                              }}
                            >
                              <CheckCircle2 size={14} /> Confirm Money & Send Receipt Email
                            </button>
                          ) : (
                            <span style={{ fontSize: '0.78rem', color: '#10b981', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                              <CheckCircle2 size={14} /> Reservation Active
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {filteredRegistrations.length === 0 && (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                  No delegate registrations match your filter.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: CORPORATE PASS & PROFORMA INVOICES */}
        {activeTab === 'corporate' && (
          <div>
            <div className="glass-panel" style={{ overflowX: 'auto', padding: '0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Company / Enterprise</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>HR / Executive Contact</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Team Scope</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Requirements & Notes</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Status</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600, textAlign: 'right' }}>Proforma Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCorporate.map((corp) => {
                    const isProformaSent = corp.status === 'Proforma Sent';
                    return (
                      <tr key={corp.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ fontWeight: 700, color: '#fff' }}>{corp.companyName}</div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b' }}>ID: {corp.id}</div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ color: '#e2e8f0' }}>{corp.contactPerson}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>{corp.workEmail}</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{corp.contactPhone}</div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ color: '#fff' }}>{corp.teamSize} Leaders</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'capitalize' }}>
                            {corp.preferredOccupancy} Rooming
                          </div>
                        </td>
                        <td style={{ padding: '1rem', maxWidth: '280px' }}>
                          <div style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                            {corp.specificRequirements || 'Standard executive itinerary requested.'}
                          </div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          {isProformaSent ? (
                            <span style={{
                              background: 'rgba(56, 189, 248, 0.15)',
                              color: '#38bdf8',
                              border: '1px solid rgba(56, 189, 248, 0.4)',
                              borderRadius: '20px',
                              padding: '0.25rem 0.65rem',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}>
                              <CheckCircle2 size={12} /> Proforma Sent
                            </span>
                          ) : (
                            <span style={{
                              background: 'rgba(234, 179, 8, 0.15)',
                              color: '#fde047',
                              border: '1px solid rgba(234, 179, 8, 0.4)',
                              borderRadius: '20px',
                              padding: '0.25rem 0.65rem',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}>
                              <Clock size={12} /> Needs Proforma
                            </span>
                          )}
                          {corp.proformaData?.invoiceNumber && (
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                              #{corp.proformaData.invoiceNumber}
                            </div>
                          )}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                          <button 
                            onClick={() => handleOpenProformaModal(corp)}
                            className={isProformaSent ? 'btn-outline-gold' : 'btn-gold'}
                            style={{
                              padding: '0.45rem 0.95rem',
                              fontSize: '0.78rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem'
                            }}
                          >
                            <Send size={14} /> {isProformaSent ? 'Update / Resend Proforma' : 'Generate & Send Proforma Invoice'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: EMAIL OUTBOX & DISPATCHES */}
        {activeTab === 'emails' && (
          <div>
            <div className="glass-panel" style={{ overflowX: 'auto', padding: '0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Recipient</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Email Subject</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Email Type</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Dispatched Time</th>
                    <th style={{ padding: '1rem', color: '#94a3b8', fontWeight: 600, textAlign: 'right' }}>Preview HTML</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((eml) => (
                    <tr key={eml.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: 600, color: '#fff' }}>{eml.recipientName}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>{eml.to}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ color: '#e2e8f0', fontWeight: 500 }}>{eml.subject}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span className="badge-pill" style={{
                          fontSize: '0.68rem',
                          background: eml.type === 'RECEIPT' ? 'rgba(16, 185, 129, 0.15)' : eml.type === 'PROFORMA_INVOICE' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(212, 163, 89, 0.15)',
                          color: eml.type === 'RECEIPT' ? '#34d399' : eml.type === 'PROFORMA_INVOICE' ? '#38bdf8' : 'var(--gold-light)'
                        }}>
                          {eml.type}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.8rem' }}>
                        {new Date(eml.date).toLocaleString()}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right' }}>
                        <button 
                          onClick={() => setViewingEmail(eml)}
                          className="btn-secondary-dark"
                          style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                          <Eye size={13} /> View Email Template
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* PROFORMA INVOICE GENERATOR MODAL (TABLE STYLE INPUTS) */}
      {activeProformaCorp && (
        <div className="modal-overlay" onClick={() => setActiveProformaCorp(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '840px', padding: '2rem' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge-pill badge-emerald" style={{ fontSize: '0.72rem', marginBottom: '0.4rem' }}>
                  <Building size={12} /> ENTERPRISE PROFORMA INVOICE BUILDER
                </span>
                <h2 style={{ fontSize: '1.4rem', color: '#fff' }}>
                  Proforma Invoice for {activeProformaCorp.companyName}
                </h2>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                  Recipient: <strong>{activeProformaCorp.contactPerson}</strong> ({activeProformaCorp.workEmail})
                </div>
              </div>
              <button 
                onClick={() => setActiveProformaCorp(null)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {/* Table Line Items */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--gold-light)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Invoice Line Items
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '0.75rem',
                overflowX: 'auto'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}>
                      <th style={{ padding: '0.5rem', textAlign: 'left' }}>Item Description</th>
                      <th style={{ padding: '0.5rem', width: '80px', textAlign: 'center' }}>Qty</th>
                      <th style={{ padding: '0.5rem', width: '150px', textAlign: 'right' }}>Unit Rate (₦)</th>
                      <th style={{ padding: '0.5rem', width: '150px', textAlign: 'right' }}>Total (₦)</th>
                      <th style={{ padding: '0.5rem', width: '50px' }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {proformaItems.map((item, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '0.5rem' }}>
                          <input 
                            type="text" 
                            className="form-input" 
                            style={{ padding: '0.45rem', fontSize: '0.82rem' }}
                            value={item.description}
                            onChange={(e) => handleUpdateItem(idx, 'description', e.target.value)}
                          />
                        </td>
                        <td style={{ padding: '0.5rem' }}>
                          <input 
                            type="number" 
                            min="1"
                            className="form-input" 
                            style={{ padding: '0.45rem', textAlign: 'center', fontSize: '0.82rem' }}
                            value={item.qty}
                            onChange={(e) => handleUpdateItem(idx, 'qty', e.target.value)}
                          />
                        </td>
                        <td style={{ padding: '0.5rem' }}>
                          <input 
                            type="number" 
                            className="form-input" 
                            style={{ padding: '0.45rem', textAlign: 'right', fontSize: '0.82rem' }}
                            value={item.unitPrice}
                            onChange={(e) => handleUpdateItem(idx, 'unitPrice', e.target.value)}
                          />
                        </td>
                        <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 700, color: 'var(--gold-light)' }}>
                          ₦{Number(item.total).toLocaleString()}
                        </td>
                        <td style={{ padding: '0.5rem', textAlign: 'center' }}>
                          <button 
                            onClick={() => handleRemoveItem(idx)}
                            style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                          >
                            <Trash2 size={15} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button 
                  onClick={handleAddItem}
                  className="btn-secondary-dark"
                  style={{ marginTop: '0.75rem', padding: '0.4rem 0.8rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Plus size={14} /> Add Line Item
                </button>
              </div>
            </div>

            {/* Calculations and Taxes Table Format */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <label className="form-label">Payment Terms & Notes</label>
                <textarea 
                  className="form-textarea"
                  rows="3"
                  value={proformaNotes}
                  onChange={(e) => setProformaNotes(e.target.value)}
                  style={{ fontSize: '0.82rem' }}
                />
              </div>

              <div style={{
                background: 'rgba(14, 20, 32, 0.9)',
                border: '1px solid rgba(212, 163, 89, 0.25)',
                borderRadius: '8px',
                padding: '1rem',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', color: '#94a3b8' }}>
                  <span>Subtotal:</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>₦{subtotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', color: '#94a3b8' }}>
                  <span>Corporate Discount (%):</span>
                  <input 
                    type="number" 
                    min="0" 
                    max="50" 
                    value={discountPercent} 
                    onChange={(e) => setDiscountPercent(e.target.value)}
                    className="form-input"
                    style={{ width: '70px', padding: '0.2rem 0.4rem', textAlign: 'right', fontSize: '0.8rem' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', color: '#94a3b8' }}>
                  <span>VAT / WHT (%):</span>
                  <input 
                    type="number" 
                    min="0" 
                    max="20" 
                    value={vatPercent} 
                    onChange={(e) => setVatPercent(e.target.value)}
                    className="form-input"
                    style={{ width: '70px', padding: '0.2rem 0.4rem', textAlign: 'right', fontSize: '0.8rem' }}
                  />
                </div>
                <div style={{
                  borderTop: '1px solid rgba(212, 163, 89, 0.3)',
                  paddingTop: '0.6rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontWeight: 700, color: '#fff' }}>Total Invoiced Amount:</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gold-light)' }}>
                    ₦{grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button 
                onClick={() => setActiveProformaCorp(null)}
                className="btn-secondary-dark"
                style={{ padding: '0.65rem 1.25rem' }}
              >
                Cancel
              </button>
              <button 
                onClick={handleSendProforma}
                className="btn-gold"
                style={{ padding: '0.65rem 1.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Send size={15} /> Dispatch Proforma Invoice to {activeProformaCorp.workEmail}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* RENDERED EMAIL PREVIEW MODAL */}
      {viewingEmail && (
        <div className="modal-overlay" onClick={() => setViewingEmail(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px', padding: '2rem', background: '#07090e' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
              <div>
                <span className="badge-pill badge-gold" style={{ fontSize: '0.7rem' }}>
                  OFFICIAL EMAIL PREVIEW
                </span>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                  To: <strong>{viewingEmail.to}</strong>
                </div>
              </div>
              <button onClick={() => setViewingEmail(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                ✕
              </button>
            </div>

            {/* Simulated HTML Email Container */}
            <div style={{
              background: '#0d131f',
              border: '1px solid rgba(212, 163, 89, 0.35)',
              borderRadius: '12px',
              padding: '1.75rem',
              color: '#f8fafc',
              fontFamily: 'Arial, sans-serif'
            }}>
              {/* Email Brand Header */}
              <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(212,163,89,0.2)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                <h2 style={{ fontFamily: 'Georgia, serif', color: '#d4a359', letterSpacing: '2px', margin: 0 }}>
                  THE TALK OFFICE
                </h2>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  HIPS Global Experience 2026 • Kenya & Rwanda Expedition
                </div>
              </div>

              {/* Email Subject */}
              <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.4 }}>
                {viewingEmail.subject}
              </h3>

              {/* Email Body Content Depending on Type */}
              {viewingEmail.type === 'ACKNOWLEDGEMENT_PENDING_RECEIPT' && (
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  <p>Dear <strong>{viewingEmail.payload?.fullName}</strong>,</p>
                  <p>
                    Thank you for submitting your seat reservation for the <strong>HIPS Global Experience 2026</strong>. We have logged your request.
                  </p>
                  <div style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '8px', padding: '1rem', margin: '1.25rem 0' }}>
                    <div style={{ color: '#fde047', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Status: Payment Verification in Progress
                    </div>
                    <div style={{ fontSize: '0.84rem' }}>
                      Our finance team is currently cross-checking the incoming wire confirmation with Zenith Bank. Your official confirmed receipt and seat pass will be delivered automatically upon reconciliation.
                    </div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    If you have already transferred, please ensure your proof is forwarded to hello@thetalkoffice.com or WhatsApp 08166399901.
                  </p>
                </div>
              )}

              {viewingEmail.type === 'RECEIPT' && (
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  <p>Dear <strong>{viewingEmail.payload?.fullName}</strong>,</p>
                  <p>
                    We are pleased to confirm that your wire transfer of <strong style={{ color: '#34d399' }}>{viewingEmail.payload?.amountPaid || viewingEmail.payload?.amount}</strong> has been successfully reconciled.
                  </p>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '1rem', margin: '1.25rem 0' }}>
                    <div style={{ color: '#34d399', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>
                      Official Receipt Number: {viewingEmail.payload?.receiptNumber}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#f8fafc' }}>
                      • Program: HIPS 4.0 Dual-Nation Expedition (Kenya & Rwanda)<br/>
                      • Dates: 12th – 18th November 2026<br/>
                      • Seat Allocation: {viewingEmail.payload?.delegates || 1} Executive Delegate(s)<br/>
                      • Departure Hub: Lagos / Abuja
                    </div>
                  </div>
                  <p>
                    Your executive travel dossier, masterclass schedules, and hotel check-in credentials will be forwarded 30 days prior to departure.
                  </p>
                </div>
              )}

              {viewingEmail.type === 'PROFORMA_INVOICE' && (
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  <p>Dear <strong>{viewingEmail.recipientName}</strong>,</p>
                  <p>
                    Please find below the official Proforma Invoice for your executive team's delegation to the <strong>HIPS Global Experience 2026</strong>.
                  </p>
                  <div style={{ background: 'rgba(212, 163, 89, 0.08)', border: '1px solid rgba(212, 163, 89, 0.3)', borderRadius: '8px', padding: '1rem', margin: '1.25rem 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#d4a359', marginBottom: '0.5rem' }}>
                      <span>Invoice #: {viewingEmail.payload?.invoiceNumber}</span>
                      <span>Due: {viewingEmail.payload?.dueDate}</span>
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                      Total Amount: {viewingEmail.payload?.totalAmount}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.5rem' }}>
                      Settlement Account: Zenith Bank PLC • 1019925375 (The Talk Office Ltd)
                    </div>
                  </div>
                </div>
              )}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', marginTop: '1.5rem', textAlign: 'center', fontSize: '0.75rem', color: '#64748b' }}>
                The Talk Office • Executive Development & Global Learning Expeditions • Admissions Desk
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
              <button onClick={() => setViewingEmail(null)} className="btn-gold" style={{ padding: '0.55rem 1.5rem', fontSize: '0.85rem' }}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
