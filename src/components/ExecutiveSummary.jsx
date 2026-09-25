import React from 'react';
import { Target, Sparkles } from 'lucide-react';

export default function ExecutiveSummary() {
  const steps = [
    { title: 'EXECUTE', desc: 'Close the knowing-doing gap' },
    { title: 'BUILD', desc: 'Design repeatable systems' },
    { title: 'INFLUENCE', desc: 'Multiply authority & trust' },
    { title: 'LEVERAGE', desc: 'Convert networks to capital' },
    { title: 'SCALE', desc: 'Create impact beyond borders' },
  ];

  return (
    <section id="overview" style={{ padding: 'clamp(4rem, 7vw, 6.5rem) 0', position: 'relative', width: '100%' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">01. Programme Overview</span>
          <h2>Redefining Executive Professional Development</h2>
          <p>
            Moving beyond conventional classrooms and standard tourist trips to forge an immersive international arena where ideas transform into measurable, scalable results.
          </p>
        </div>

        {/* Core Narrative Grid - 100% Full Width */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem',
          width: '100%'
        }}>
          {/* Card 1: The Central Philosophy */}
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '90px',
              height: '90px',
              background: 'rgba(212, 163, 89, 0.08)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(212, 163, 89, 0.35)',
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 800
            }}>01</div>

            <div style={{ display: 'inline-flex', padding: '0.85rem', borderRadius: '14px', background: 'rgba(212, 163, 89, 0.12)', color: 'var(--gold-primary)', marginBottom: '1.5rem' }}>
              <Target size={26} />
            </div>

            <h3 style={{ fontSize: '1.55rem', marginBottom: '1rem', color: '#fff' }}>The Central Philosophy</h3>
            <p style={{ lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '1.02rem' }}>
              The HIPS Global Experience 2026 brings structured professional engagement together with guided destination experiences across two of Africa’s most dynamic capitals: <strong>Nairobi and Kigali</strong>.
            </p>
            <p style={{ lineHeight: 1.75, color: 'var(--gold-light)', fontSize: '1.02rem' }}>
              "Participants learn beyond the classroom, experience environments beyond their usual context, build meaningful connections, and return with perspectives they apply directly to their organisations."
            </p>
          </div>

          {/* Card 2: The Guiding Question */}
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)', position: 'relative', overflow: 'hidden', borderColor: 'rgba(16, 185, 129, 0.35)' }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '90px',
              height: '90px',
              background: 'rgba(16, 185, 129, 0.08)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(16, 185, 129, 0.35)',
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 800
            }}>02</div>

            <div style={{ display: 'inline-flex', padding: '0.85rem', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.12)', color: '#34d399', marginBottom: '1.5rem' }}>
              <Sparkles size={26} />
            </div>

            <h3 style={{ fontSize: '1.55rem', marginBottom: '1rem', color: '#fff' }}>The Guiding Question</h3>
            <div style={{
              background: 'rgba(16, 185, 129, 0.06)',
              borderLeft: '3px solid #10b981',
              padding: '1.25rem',
              borderRadius: '0 10px 10px 0',
              marginBottom: '1.25rem'
            }}>
              <p style={{ fontStyle: 'italic', color: '#f1f5f9', fontSize: '1.08rem', fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                "How do capable professionals turn knowledge, ideas, and opportunity into measurable results that can scale—across roles, organisations, industries, and borders?"
              </p>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Extending the intellectual foundation of HIPS 4.0 into cross-border execution intelligence, governance, and career capital.
            </p>
          </div>
        </div>

        {/* Transformation Pipeline Journey - 100% Full Width */}
        <div className="glass-panel gold-border-glow" style={{ padding: 'clamp(2rem, 4vw, 3rem)', background: 'rgba(12, 16, 26, 0.92)', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="mono-tag" style={{ color: 'var(--gold-primary)' }}>The HIPS Leadership Trajectory</span>
            <h3 style={{ fontSize: '1.8rem', marginTop: '0.35rem', color: '#fff' }}>The 5-Stage Scale Progression</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1.25rem',
            width: '100%'
          }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '1.75rem 1.25rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--gold-gradient)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  {idx + 1}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>{step.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
