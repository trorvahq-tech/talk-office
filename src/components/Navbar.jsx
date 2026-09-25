import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, PhoneCall } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function Navbar({ onOpenRegister, onOpenCorporate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: '4 Pillars', href: '#pillars' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Investment', href: '#pricing' },
  ];

  return (
    <>
      {/* Top Notification Bar - Single Straight Line */}
      <div style={{
        background: 'linear-gradient(90deg, #090d15 0%, #121824 50%, #090d15 100%)',
        borderBottom: '1px solid rgba(212, 163, 89, 0.25)',
        padding: '0.45rem 1rem',
        fontSize: '0.8rem',
        color: '#f8fafc',
        width: '100%',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'nowrap', 
          gap: '1rem',
          minWidth: 'fit-content'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'nowrap', flexShrink: 0 }}>
            <span className="badge-pill badge-gold" style={{ padding: '0.15rem 0.55rem', fontSize: '0.7rem', whiteSpace: 'nowrap' }}>
              <Sparkles size={12} /> HIPS 4.0 EXPEDITION
            </span>
            <span style={{ color: '#cbd5e1', fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
              Nairobi, Kenya & Kigali, Rwanda — <strong>12th – 18th November 2026</strong>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'nowrap', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold-light)', whiteSpace: 'nowrap' }}>
              <span>Registration Closes: <strong>16 Oct 2026</strong></span>
            </div>
            <a href="tel:08166399901" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#cbd5e1', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
              <PhoneCall size={12} /> 08166399901
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        background: isScrolled ? 'rgba(5, 7, 10, 0.95)' : 'rgba(5, 7, 10, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(212, 163, 89, 0.25)' : '1px solid rgba(255, 255, 255, 0.06)',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.65rem 0' : '0.85rem 0'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: '1rem'
        }}>
          {/* Animated Brand Logo */}
          <a href="#" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <AnimatedLogo size={30} />
          </a>

          {/* Desktop Nav Links - Pure Straight Horizontal Line */}
          <nav className="desktop-nav" style={{ 
            display: 'none', 
            alignItems: 'center', 
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '1.65rem',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}>
            {navLinks.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#cbd5e1',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-light)'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Straight Horizontal Row */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '0.65rem',
            flexShrink: 0
          }}>
            <button 
              onClick={onOpenCorporate}
              className="btn-secondary-dark"
              style={{ padding: '0.52rem 0.95rem', fontSize: '0.8rem', display: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
              id="corporate-btn-header"
            >
              Corporate Pass
            </button>
            <button 
              onClick={onOpenRegister}
              className="btn-gold"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Reserve Seat <ArrowUpRight size={14} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                borderRadius: '8px',
                padding: '0.45rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#090d15',
            borderBottom: '1px solid rgba(212, 163, 89, 0.3)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 15px 30px rgba(0,0,0,0.85)'
          }}>
            {navLinks.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  padding: '0.45rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)'
                }}
              >
                {item.label}
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenCorporate(); }}
                className="btn-outline-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Corporate / Team Nomination
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Reserve Seat Now
              </button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { 
            display: flex !important; 
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            align-items: center !important;
          }
          .desktop-nav a {
            white-space: nowrap !important;
          }
          .mobile-toggle { display: none !important; }
          #corporate-btn-header { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
