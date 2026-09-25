import React from 'react';
import { X, Download, ArrowRight } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function BrochureModal({ isOpen, onClose, onOpenRegister }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px', padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
        
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

        {/* Brochure Content Preview */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <AnimatedLogo size={24} showText={false} />
            <span className="badge-pill badge-gold" style={{ fontSize: '0.72rem' }}>
              OFFICIAL PROGRAMME BLUEPRINT
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#fff', marginBottom: '0.35rem' }}>
            HIPS Global Experience 2026: Executive Briefing
          </h2>
          <p style={{ color: 'var(--gold-light)', fontSize: '0.92rem', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
            Nairobi, Kenya & Kigali, Rwanda — 12th – 18th November 2026
          </p>

          <div style={{
            background: 'rgba(14, 20, 32, 0.9)',
            border: '1px solid rgba(212, 163, 89, 0.25)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            maxHeight: '380px',
            overflowY: 'auto'
          }}>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>1. Programme Overview & Philosophy</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1rem' }}>
              The HIPS Global Experience 2026 combines structured professional engagement with guided destination experiences across Nairobi and Kigali. It moves beyond conventional conferences and leisure trips to deliver actionable execution intelligence, systems thinking, and leadership leverage.
            </p>

            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>2. Destination Architecture</h4>
            <ul style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.65, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
              <li><strong>Nairobi, Kenya (1 Night / 2 Days):</strong> Business conference, cross-sector networking, Nairobi National Park game drive, Elephant Orphanage conservation visit.</li>
              <li><strong>Kigali, Rwanda (4 Nights / 5 Days):</strong> Kigali City Tour, Kigali Genocide Memorial, Niyo Art Center, Car-Free Zone, Fazenda Sengha adventure experience, institutional reflection sessions.</li>
            </ul>

            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>3. Participation Investment & Logistics</h4>
            <ul style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.65, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
              <li><strong>Sharing Accommodation:</strong> ₦2,500,000 per person (From Lagos).</li>
              <li><strong>Single Occupancy:</strong> ₦3,000,000 per person (From Lagos).</li>
              <li><strong>Inclusions:</strong> Return multi-flight tickets from Lagos, 5 nights hotel stays, airport transfers, conference facilities, daily breakfast, tours, and certificate.</li>
              <li><strong>Payment Deadline:</strong> 16th October 2026 (Zenith Bank Acc: 1019925375).</li>
            </ul>

            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>4. Verified Contact</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', margin: 0 }}>
              The Talk Office • Email: hello@thetalkoffice.com • Phone: 08166399901 • Instagram: @hips.connect | @thetalkoffice
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <button 
              onClick={handlePrint}
              className="btn-secondary-dark"
              style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={16} /> Save / Print Document
            </button>

            <button 
              onClick={() => { onClose(); onOpenRegister(); }}
              className="btn-gold"
              style={{ padding: '0.75rem 1.75rem' }}
            >
              Proceed to Reserve Seat <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
