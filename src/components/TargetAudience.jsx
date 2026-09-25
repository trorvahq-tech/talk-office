import React from 'react';
import { UserCheck, Building, XCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function TargetAudience({ onOpenCorporate }) {
  const attendees = [
    'Senior and Mid-Level Professionals seeking rapid career elevation',
    'C-Suite Executives, Directors and Business Unit Heads',
    'High-Growth Entrepreneurs and Founders scaling enterprise systems',
    'HR, Talent and Learning & Development (L&D) Executives',
    'Public Sector Leaders and Governance Strategists',
    'Professionals in transition preparing for cross-border board roles'
  ];

  const corporateReasons = [
    { title: 'Talent Acceleration', desc: 'Fast-track high-potential leaders with global strategic perspectives.' },
    { title: 'Operational Systems Upgrade', desc: 'Participants return with tools to eliminate bottlenecks and improve execution.' },
    { title: 'Regional Business Exposure', desc: 'Direct access to East African commercial networks in Kenya and Rwanda.' },
    { title: 'Executive Retention', desc: 'High-impact development experience that signals corporate investment in talent.' }
  ];

  const notFor = [
    'Casual tourists looking for an unguided vacation with no structured learning',
    'Individuals seeking elementary classroom lectures or academic theory',
    'Professionals unwilling to actively engage in closed-door peer dialogues'
  ];

  return (
    <section id="corporate" style={{
      padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      background: 'linear-gradient(180deg, rgba(7, 9, 14, 0.95) 0%, rgba(12, 16, 25, 0.98) 100%)',
      position: 'relative',
      width: '100%'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">06. Cohort Profile & Corporate Nomination</span>
          <h2>Curated For Visionary Leaders & Teams</h2>
          <p>
            An intentionally assembled cohort of forward-thinking professionals and enterprise teams designed for high-trust synergy.
          </p>
        </div>

        {/* 2-Column Profile Grid - 100% Full Width */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem',
          width: '100%'
        }}>
          {/* Box 1: Who Should Attend */}
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderTop: '4px solid var(--gold-primary)', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(212, 163, 89, 0.15)', color: 'var(--gold-primary)', flexShrink: 0 }}>
                <UserCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: '#fff', margin: 0 }}>Who Should Attend</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {attendees.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--gold-primary)', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: Not For You If */}
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderTop: '4px solid #ef4444', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', flexShrink: 0 }}>
                <XCircle size={24} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: '#fff', margin: 0 }}>This Is NOT For You If</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {notFor.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <XCircle size={18} style={{ color: '#f87171', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '12px',
              padding: '1.1rem',
              fontSize: '0.88rem',
              color: '#cbd5e1'
            }}>
              <strong>Cohort Quality Guarantee:</strong> Every application is vetted to preserve the intellectual rigor and executive caliber of the room.
            </div>
          </div>
        </div>

        {/* Corporate Nomination Section - 100% Full Width */}
        <div className="glass-panel gold-border-glow" style={{
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          background: 'rgba(14, 20, 32, 0.94)',
          position: 'relative',
          width: '100%'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="badge-pill badge-emerald" style={{ marginBottom: '0.75rem' }}>
                <Building size={12} /> Enterprise & Talent Strategy
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', color: '#fff', margin: '0.35rem 0' }}>
                Why Organizations Should Nominate Leaders
              </h3>
              <p style={{ color: '#94a3b8', maxWidth: '800px', fontSize: '1rem', lineHeight: 1.6 }}>
                Equip your high-potential talent with the systems thinking, execution intelligence, and cross-border leverage needed to scale your enterprise.
              </p>
            </div>

            <button 
              onClick={onOpenCorporate}
              className="btn-gold" 
              style={{ padding: '0.9rem 2rem', fontSize: '0.95rem' }}
            >
              Request Corporate Invoice / Proposal <ArrowRight size={16} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
            width: '100%'
          }}>
            {corporateReasons.map((r, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '1.5rem'
              }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>{r.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0, lineHeight: 1.55 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
