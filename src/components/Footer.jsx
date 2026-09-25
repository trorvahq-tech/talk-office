import React from 'react';
import { Mail, Phone, Globe, ShieldCheck, ArrowUp, Lock } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer({ onOpenRegister, onOpenCorporate, onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#040609',
      borderTop: '1px solid rgba(212, 163, 89, 0.25)',
      padding: 'clamp(3.5rem, 6vw, 5rem) 0 2rem 0',
      position: 'relative',
      width: '100%'
    }}>
      <div className="container">
        
        {/* Main Footer Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem',
          width: '100%'
        }}>
          {/* Col 1: Brand & Logo */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <AnimatedLogo size={32} />
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Designing transformative executive learning, systems thinking masterminds, and cross-border immersion programs that forge impact beyond borders.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href="https://instagram.com/hips.connect" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)'
                }}
                title="@hips.connect"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href="https://instagram.com/thetalkoffice" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)'
                }}
                title="@thetalkoffice"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href="mailto:hello@thetalkoffice.com"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)'
                }}
                title="Email hello@thetalkoffice.com"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Programme Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '1.15rem' }}>Experience Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <a href="#overview">Overview & Core Philosophy</a>
              <a href="#pillars">HIPS 4.0 Intellectual Pillars</a>
              <a href="#growth-tree">Growth Tree Roadmap</a>
              <a href="#destinations">Kenya & Rwanda Flow</a>
              <a href="#architecture">4D Immersion Architecture</a>
              <a href="#gallery">Past Cohort Moments</a>
              <a href="#pricing">Investment & Inclusions</a>
              <a href="#faq">Travel & Logistics FAQ</a>
            </div>
          </div>

          {/* Col 3: Verified Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '1.15rem' }}>Admissions & Concierge</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={17} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <a href="tel:08166399901" style={{ color: '#fff', fontWeight: 600 }}>08166399901</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={17} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <a href="mailto:hello@thetalkoffice.com" style={{ color: '#cbd5e1' }}>hello@thetalkoffice.com</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Globe size={17} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <a href="http://www.thetalkoffice.com" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1' }}>www.thetalkoffice.com</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <InstagramIcon size={17} />
                <span>@hips.connect &nbsp;|&nbsp; @thetalkoffice</span>
              </div>
            </div>
          </div>

          {/* Col 4: Corporate Escrow / Verification */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '1.15rem' }}>Bank Verification</h4>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(212, 163, 89, 0.25)',
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                <ShieldCheck size={16} /> Zenith Bank Direct
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Account Name: <strong>The Talk Office</strong><br />
                Account No: <strong style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>1019925375</strong><br />
                Deadline: <span style={{ color: 'var(--gold-light)' }}>16th October 2026</span>
              </div>
            </div>

            <button 
              onClick={onOpenRegister}
              className="btn-gold"
              style={{ width: '100%', marginTop: '1rem', fontSize: '0.85rem', padding: '0.75rem' }}
            >
              Reserve Seat Today
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            &copy; {new Date().getFullYear()} The Talk Office & HIPS Connect. All rights reserved. HIPS Global Experience 2026.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={onOpenAdmin}
              style={{
                background: 'rgba(212, 163, 89, 0.08)',
                border: '1px solid rgba(212, 163, 89, 0.25)',
                color: 'var(--gold-light)',
                padding: '0.45rem 0.85rem',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.76rem',
                fontWeight: 600
              }}
              title="Access Admin Desk & Payment Reconciliations"
            >
              <Lock size={12} /> Admin Operations
            </button>

            <button 
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                padding: '0.45rem 0.9rem',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.76rem'
              }}
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
