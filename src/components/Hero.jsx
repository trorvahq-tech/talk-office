import React from 'react';
import { MapPin, Calendar, Clock, Award, ArrowRight, Compass, Users, Sparkles, CheckCircle2, Plane, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Hero({ onOpenRegister, onOpenBrochure }) {
  return (
    <section style={{
      position: 'relative',
      paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
      paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(18, 26, 42, 0.75) 0%, rgba(5, 7, 10, 1) 80%)',
      borderBottom: '1px solid var(--border-subtle)',
      width: '100%'
    }}>
      <div className="container">
        
        {/* Full-Width 2-Column Split Hero Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
          width: '100%',
          marginBottom: '3.5rem'
        }}>
          
          {/* Left Column: Core Value & Call to Action */}
          <div>
            {/* Top Badges */}
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <div className="badge-pill badge-gold">
                <Sparkles size={13} />
                <span>HIPS 4.0 Executive Immersion</span>
              </div>
              <div className="badge-pill badge-emerald">
                <MapPin size={13} />
                <span>Kenya & Rwanda Dual Experience</span>
              </div>
              <div className="badge-pill" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                <Calendar size={13} />
                <span>12th – 18th Nov 2026</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: '900',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              color: '#ffffff'
            }}>
              HIPS GLOBAL EXPERIENCE 2026
              <span style={{ display: 'block', marginTop: '0.35rem' }} className="gold-text-gradient">
                IMPACT THAT SCALES: BEYOND BORDERS
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.02rem, 1.8vw, 1.18rem)',
              color: '#cbd5e1',
              lineHeight: 1.65,
              marginBottom: '2rem',
              fontWeight: 400
            }}>
              An international professional development, high-level business exposure, and cultural experience across <strong>Nairobi and Kigali</strong>. Designed for executives, innovators, and organizational teams ready to turn capability into scalable results.
            </p>

            {/* Action Callouts */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button 
                onClick={onOpenRegister}
                className="btn-gold" 
                style={{ fontSize: '1.02rem', padding: '1rem 2.4rem' }}
              >
                Apply / Reserve Seat <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={onOpenBrochure}
                className="btn-outline-gold"
                style={{ fontSize: '1.02rem', padding: '1rem 2.2rem' }}
              >
                <Compass size={18} /> View Experience Blueprint
              </button>
            </div>

            {/* Micro Inclusions Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Multi-Flight Tickets Included</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                <span>5 Nights Luxury Stays</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} style={{ color: '#38bdf8' }} />
                <span>Official Zenith Bank Escrow</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Flight & Capital Radar HUD */}
          <div className="glass-panel" style={{
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            background: 'rgba(11, 16, 26, 0.92)',
            border: '1px solid rgba(212, 163, 89, 0.35)',
            position: 'relative'
          }}>
            {/* HUD Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                <span className="mono-tag" style={{ color: 'var(--gold-light)', fontWeight: 700 }}>Flight Expedition Route & Schedule</span>
              </div>
              <span className="badge-pill badge-gold" style={{ fontSize: '0.7rem' }}>
                Zenith Verified
              </span>
            </div>

            {/* Flight Path SVG Map Simulation */}
            <div style={{
              background: 'rgba(5, 7, 10, 0.8)',
              borderRadius: '12px',
              padding: '1.5rem 1.25rem',
              border: '1px solid rgba(255,255,255,0.05)',
              marginBottom: '1.5rem',
              position: 'relative'
            }}>
              {/* Route Points */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                
                {/* Point 1: Lagos */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', border: '1.5px solid #38bdf8', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                    <Plane size={15} />
                  </div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>LAGOS (LOS)</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Departure Point</div>
                </div>

                {/* Point 2: Nairobi */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(212, 163, 89, 0.15)', border: '1.5px solid var(--gold-primary)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                    <MapPin size={15} />
                  </div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>NAIROBI (NBO)</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold-light)' }}>1 Night / 2 Days</div>
                </div>

                {/* Point 3: Kigali */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '1.5px solid #10b981', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                    <Award size={15} />
                  </div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>KIGALI (KGL)</div>
                  <div style={{ fontSize: '0.72rem', color: '#34d399' }}>4 Nights / 5 Days</div>
                </div>
              </div>

              {/* Connecting Flight Progress Bar */}
              <div style={{
                margin: '1.25rem 0.5rem 0 0.5rem',
                height: '4px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '2px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  background: 'linear-gradient(90deg, #38bdf8 0%, #d4a359 50%, #10b981 100%)',
                  animation: 'routeFlow 3s ease-in-out infinite'
                }} />
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '0.9rem' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Confirmed Cohort Dates</div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', marginTop: '0.2rem' }}>12 – 18 Nov 2026</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '0.9rem' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Registration Cutoff</div>
                <div style={{ fontWeight: 700, color: 'var(--gold-light)', fontSize: '0.95rem', marginTop: '0.2rem' }}>16 Oct 2026</div>
              </div>
            </div>

            {/* Seat Capacity Bar */}
            <div style={{
              background: 'rgba(212, 163, 89, 0.08)',
              border: '1px solid rgba(212, 163, 89, 0.25)',
              borderRadius: '10px',
              padding: '0.9rem 1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={16} style={{ color: 'var(--gold-primary)' }} />
                <span style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 600 }}>Limited Cohort Capacity</span>
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--gold-light)', fontWeight: 700 }}>
                Strictly 25 Delegates Max
              </span>
            </div>
          </div>

        </div>

        {/* Full Width Quick Facts 4-Card Ribbon */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.25rem',
          width: '100%'
        }}>
          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(212, 163, 89, 0.15)', color: 'var(--gold-light)', padding: '0.75rem', borderRadius: '12px', flexShrink: 0 }}>
              <Clock size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Duration</div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>6 Days / 5 Nights</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '0.75rem', borderRadius: '12px', flexShrink: 0 }}>
              <MapPin size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Destinations</div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>Nairobi & Kigali</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '0.75rem', borderRadius: '12px', flexShrink: 0 }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Credential</div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>HIPS Executive Certificate</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '0.75rem', borderRadius: '12px', flexShrink: 0 }}>
              <Users size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Cohort</div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>C-Suite & Visionaries</div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes routeFlow {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
