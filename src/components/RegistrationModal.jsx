import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Send, Sparkles, ArrowRight, Clock, Mail } from 'lucide-react';
import { saveRegistration } from '../services/adminStore';

export default function RegistrationModal({ isOpen, onClose, initialData = {} }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    tier: initialData.tier || 'sharing',
    departure: initialData.departure || 'lagos',
    delegates: initialData.count || 1,
    notes: '',
    receiptUploaded: false
  });

  const [copiedBank, setCopiedBank] = useState(false);

  const pricePerPax = formData.tier === 'sharing' ? 2500000 : 3000000;
  const totalPrice = pricePerPax * formData.delegates;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('1019925375');
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 3000);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCompleteSubmission = () => {
    // Save to persistent Admin database and trigger automated acknowledgement email
    saveRegistration({
      ...formData,
      totalAmount: totalPrice,
      paymentMethod: 'Zenith Bank Transfer'
    });
    setStep(3);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello The Talk Office, I want to confirm my registration for HIPS Global Experience 2026 (Kenya & Rwanda).
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Organization: ${formData.organization || 'Individual'}
Package: ${formData.tier === 'sharing' ? 'Sharing (₦2.5M)' : 'Single Occupancy (₦3M)'}
Delegates: ${formData.delegates}
Departure: ${formData.departure.toUpperCase()}
Total: ₦${totalPrice.toLocaleString()}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2348166399901?text=${encoded}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px', padding: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            color: '#94a3b8',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="badge-pill badge-gold" style={{ fontSize: '0.72rem' }}>
              <Sparkles size={12} /> HIPS GLOBAL 2026
            </span>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Step {step} of 3</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.65rem)', color: '#fff' }}>
            {step === 1 && 'Delegate Application & Seat Reservation'}
            {step === 2 && 'Bank Transfer & Payment Verification'}
            {step === 3 && 'Application Confirmed'}
          </h2>
        </div>

        {/* Step 1: Delegate Form */}
        {step === 1 && (
          <form onSubmit={handleSubmitForm}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required
                  placeholder="e.g. Dr. Jane Doe"
                  className="form-input"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Official Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="jane@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number / WhatsApp *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  placeholder="080... or +234..."
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Organization / Company</label>
                <input 
                  type="text" 
                  name="organization" 
                  placeholder="Company or Institution"
                  className="form-input"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Role / Designation</label>
                <input 
                  type="text" 
                  name="role" 
                  placeholder="e.g. Managing Director / VP"
                  className="form-input"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Accommodation Package *</label>
                <select 
                  name="tier" 
                  className="form-select"
                  value={formData.tier}
                  onChange={handleChange}
                >
                  <option value="sharing">Sharing Accommodation (₦2,500,000 / person)</option>
                  <option value="single">Single Occupancy (₦3,000,000 / person)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Departure Hub *</label>
                <select 
                  name="departure" 
                  className="form-select"
                  value={formData.departure}
                  onChange={handleChange}
                >
                  <option value="lagos">Lagos, Nigeria (Standard)</option>
                  <option value="abuja">Abuja, Nigeria (+ Connecting flight fee)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Number of Delegates *</label>
                <input 
                  type="number" 
                  name="delegates" 
                  min="1"
                  max="10"
                  className="form-input"
                  value={formData.delegates}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Investment Summary Pill */}
            <div style={{
              background: 'rgba(212, 163, 89, 0.08)',
              border: '1px solid rgba(212, 163, 89, 0.25)',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Total Program Investment</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--gold-light)' }}>
                  ₦{totalPrice.toLocaleString()}
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', textAlign: 'right' }}>
                Zenith Bank Wire — Closes Oct 16, 2026
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={onClose}
                className="btn-secondary-dark"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn-gold"
                style={{ padding: '0.75rem 1.75rem' }}
              >
                Proceed to Payment <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Payment Instructions & Proof */}
        {step === 2 && (
          <div>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              To complete and lock in your seat reservation for <strong>{formData.fullName}</strong> ({formData.delegates} Delegate{formData.delegates > 1 ? 's' : ''}), please make your wire transfer to our official corporate account:
            </p>

            <div style={{
              background: 'rgba(14, 20, 32, 0.9)',
              border: '1px solid rgba(212, 163, 89, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>BANK</span>
                  <div style={{ fontWeight: 700, color: '#fff' }}>Zenith Bank</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>ACCOUNT NAME</span>
                  <div style={{ fontWeight: 700, color: '#fff' }}>The Talk Office</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>TOTAL AMOUNT</span>
                  <div style={{ fontWeight: 800, color: 'var(--gold-light)' }}>₦{totalPrice.toLocaleString()}</div>
                </div>
              </div>

              <div style={{
                background: 'rgba(212, 163, 89, 0.1)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px dashed var(--gold-primary)'
              }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--gold-light)' }}>ACCOUNT NUMBER</span>
                  <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>
                    1019925375
                  </div>
                </div>
                <button 
                  onClick={handleCopyAccount}
                  style={{
                    background: 'var(--gold-gradient)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.4rem 0.75rem',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {copiedBank ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                  {copiedBank ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.4rem' }}>
                Forward Payment Proof & Verification
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                After transfer, email proof to <strong style={{ color: '#fff' }}>hello@thetalkoffice.com</strong> or submit directly via our WhatsApp admissions desk for prompt reservation issuance.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button 
                onClick={handleWhatsAppDirect}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', background: '#25D366', color: '#000' }}
              >
                <Send size={16} /> Send Confirmation on WhatsApp
              </button>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button 
                  onClick={() => setStep(1)}
                  className="btn-secondary-dark"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  Back
                </button>
                <button 
                  onClick={handleCompleteSubmission}
                  className="btn-outline-gold"
                  style={{ flex: 2, justifyContent: 'center' }}
                >
                  I Have Completed Payment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Success Confirmation - Pending Money Receipt */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(234, 179, 8, 0.15)',
              color: '#fde047',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
              border: '1px solid rgba(234, 179, 8, 0.3)'
            }}>
              <Clock size={34} />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(234, 179, 8, 0.15)', color: '#fde047', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              <Clock size={13} /> PENDING RECEIPT OF PAYMENT FROM OUR END
            </div>

            <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.6rem' }}>
              Thank You for Your Reservation Interest!
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', maxWidth: '520px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
              Dear <strong>{formData.fullName}</strong>, we have received your reservation request for <strong>{formData.delegates} delegate(s)</strong>. An acknowledgement email has just been sent to <strong style={{ color: 'var(--gold-light)' }}>{formData.email}</strong>.
            </p>

            <div style={{
              background: 'rgba(14, 20, 32, 0.9)',
              borderRadius: '12px',
              padding: '1.25rem',
              textAlign: 'left',
              marginBottom: '1.75rem',
              border: '1px solid rgba(212, 163, 89, 0.25)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-light)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <Mail size={15} /> Payment Reconciliation & Next Steps:
              </div>
              <ul style={{ fontSize: '0.84rem', color: '#94a3b8', paddingLeft: '1.2rem', lineHeight: 1.6, margin: 0 }}>
                <li>Our finance desk is currently verifying the incoming Zenith Bank credit transaction.</li>
                <li><strong>Once payment is confirmed by our admin team</strong>, an official email containing your validated receipt, confirmed seat allocation, and boarding dossier will be sent to <strong>{formData.email}</strong>.</li>
                <li>For immediate priority verification, forward your bank receipt to <strong style={{ color: '#fff' }}>hello@thetalkoffice.com</strong> or WhatsApp <strong style={{ color: '#fff' }}>08166399901</strong>.</li>
              </ul>
            </div>

            <button 
              onClick={onClose}
              className="btn-gold"
              style={{ padding: '0.75rem 2rem' }}
            >
              Done / Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
