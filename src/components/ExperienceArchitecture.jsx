import React from 'react';
import { BookOpen, Compass, Users2, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ExperienceArchitecture() {
  const quadrants = [
    {
      label: 'LEARN',
      tagline: 'Intellectual Rigor & Case Studies',
      icon: BookOpen,
      color: '#d4a359',
      details: 'High-octane professional masterminds, real-world case breakdowns, and actionable operational frameworks delivered by seasoned practitioners.',
      bullet: 'Execution playbooks, systems engineering, strategic negotiation'
    },
    {
      label: 'EXPERIENCE',
      tagline: 'Contextual & Cultural Immersion',
      icon: Compass,
      color: '#10b981',
      details: 'Stepping outside habitual comfort zones into dynamic African ecosystems—from Nairobi’s safari landscapes to Kigali’s innovation hubs.',
      bullet: 'Institutional visits, city tours, conservation & adventure'
    },
    {
      label: 'CONNECT',
      tagline: 'Relational Equity & Boardroom Access',
      icon: Users2,
      color: '#38bdf8',
      details: 'Curated peer-to-peer dialogues with high-caliber delegates, government advisors, founders, and corporate directors from diverse sectors.',
      bullet: 'Executive networking dinners, bilateral mixers, cohort alliances'
    },
    {
      label: 'REFLECT',
      tagline: 'Perspective Synthesis & Application',
      icon: Sparkles,
      color: '#c084fc',
      details: 'Dedicated spaces to distill insights, recalibrate personal and enterprise roadmaps, and build actionable implementation plans before landing home.',
      bullet: 'Guided debriefs, strategic personal leverage audits, synthesis'
    }
  ];

  return (
    <section id="architecture" style={{
      padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      background: 'linear-gradient(180deg, rgba(12, 16, 25, 0.98) 0%, rgba(7, 9, 14, 0.95) 100%)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">04. The 4D Experience Architecture</span>
          <h2>Beyond Photos & Certificates</h2>
          <p>
            An intentionally balanced four-dimensional architecture ensuring every hour delivers tangible personal transformation and measurable enterprise return.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {quadrants.map((q, idx) => {
            const Icon = q.icon;
            return (
              <div 
                key={idx}
                className="glass-panel"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.25rem) 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${q.color}`,
                  background: 'rgba(14, 19, 30, 0.8)'
                }}
              >
                <div>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: `${q.color}15`,
                    color: q.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <Icon size={24} />
                  </div>

                  <span className="mono-tag" style={{ color: q.color, fontWeight: 700, fontSize: '0.82rem' }}>
                    {q.label}
                  </span>

                  <h3 style={{ fontSize: '1.2rem', marginTop: '0.35rem', marginBottom: '0.85rem', color: '#fff' }}>
                    {q.tagline}
                  </h3>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
                    {q.details}
                  </p>
                </div>

                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.82rem',
                  color: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Check size={14} style={{ color: q.color, flexShrink: 0 }} />
                  <span>{q.bullet}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Takeaways Banner */}
        <div className="glass-panel gold-border-glow" style={{
          padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1.5rem, 4vw, 2.5rem)',
          background: 'rgba(212, 163, 89, 0.04)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ maxWidth: '750px' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.3rem' }}>
              The Return on Your Experience
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', margin: 0 }}>
              You return with tested execution systems, an expanded African commercial footprint, and relationships that unlock decade-long doors.
            </p>
          </div>
          <a href="#pricing" className="btn-gold" style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}>
            Check Investment Tiers <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
