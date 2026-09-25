import React, { useState } from 'react';
import { X, Building, CheckCircle2, ArrowRight, Clock, Mail } from 'lucide-react';
import { saveCorporateRequest } from '../services/adminStore';

export default function CorporateNominationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    workEmail: '',
    contactPhone: '',
    teamSize: '3-5',
    preferredOccupancy: 'sharing',
    specificRequirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveCorporateRequest(formData);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px', padding: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
        
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

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge-pill badge-emerald" style={{ fontSize: '0.72rem' }}>
                <Building size={12} /> B2B & ENTERPRISE
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.65rem)', color: '#fff', marginBottom: '0.4rem' }}>
              Corporate Nomination & Group Invoice
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Request a tailored executive proposal, proforma invoice, and team onboarding package for your organization's delegates.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Company / Institution Name *</label>
                  <input 
                    type="text" 
                    name="companyName" 
                    required
                    placeholder="e.g. Zenith Global Ltd"
                    className="form-input"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Person / HR Lead *</label>
                  <input 
                    type="text" 
                    name="contactPerson" 
                    required
                    placeholder="Name & Title"
                    className="form-input"
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Corporate Email Address *</label>
                  <input 
                    type="email" 
                    name="workEmail" 
                    required
                    placeholder="hr@company.com"
                    className="form-input"
                    value={formData.workEmail}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Direct Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    name="contactPhone" 
                    required
                    placeholder="080... or +234..."
                    className="form-input"
                    value={formData.contactPhone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Estimated Team Size *</label>
                  <select 
                    name="teamSize" 
                    className="form-select"
                    value={formData.teamSize}
                    onChange={handleChange}
                  >
                    <option value="2-3">2 – 3 Leaders</option>
                    <option value="3-5">3 – 5 Leaders (Recommended)</option>
                    <option value="6-10">6 – 10 Leaders (Executive Cohort)</option>
                    <option value="10+">10+ Leaders (Custom Enterprise Deck)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Rooming</label>
                  <select 
                    name="preferredOccupancy" 
                    className="form-select"
                    value={formData.preferredOccupancy}
                    onChange={handleChange}
                  >
                    <option value="mixed">Mixed (Combination of Single & Sharing)</option>
                    <option value="sharing">Sharing Accommodation (₦2,500,000 / pax)</option>
                    <option value="single">All Single Occupancy (₦3,000,000 / pax)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Requests / Procurement Notes</label>
                <textarea 
                  name="specificRequirements"
                  rows="3"
                  placeholder="e.g. Flight routing from Abuja, corporate billing requirements, L&D budget timing..."
                  className="form-textarea"
                  value={formData.specificRequirements}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
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
                  Generate Corporate Proposal <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>
              Corporate Request Submitted
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
              We have received the nomination request for <strong>{formData.companyName}</strong>. Our enterprise team is compiling your formal invitation letter, schedule, and proforma invoice for <strong>{formData.workEmail}</strong>.
            </p>

            <button 
              onClick={onClose}
              className="btn-gold"
              style={{ padding: '0.75rem 2rem' }}
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
