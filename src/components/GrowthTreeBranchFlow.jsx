import React, { useState } from 'react';
import { GitBranch, Compass, Trees, Building2, ShieldCheck, Mountain, Award, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export default function GrowthTreeBranchFlow({ onOpenRegister, onOpenBrochure }) {
  const [activeBranch, setActiveBranch] = useState(0);

  const branches = [
    {
      stage: 'STAGE 01 — ROOT',
      title: 'Intellectual Genesis & Diagnostics',
      location: 'Pre-Immersion & Arrival',
      icon: GitBranch,
      color: '#d4a359',
      tag: 'Strategic Diagnostic',
      summary: 'Before setting foot on East African soil, every leader completes a diagnostic to map their organization’s execution failure points.',
      takeaways: [
        'Identification of core operational friction points and know-do gaps',
        'Personalized Executive Immersion Dossier & reading pack',
        'Cohort pre-alignment briefing with The Talk Office faculty'
      ],
      destination: 'Cohort Genesis'
    },
    {
      stage: 'STAGE 02 — TRUNK (LEG 1)',
      title: 'Commercial Hustle & Wildlife Frontier',
      location: 'Nairobi, Kenya (1 Night / 2 Days)',
      icon: Trees,
      color: '#f5d392',
      tag: 'Commercial Catalyst',
      summary: 'Touching down in East Africa’s commercial epicenter. Deep immersion into high-speed cross-border trade, capital flows, and natural governance.',
      takeaways: [
        'Closed-door Business Roundtable with East African CEOs',
        'Nairobi National Park Wildlife Safari against city skyline',
        'David Sheldrick Wildlife Trust conservation governance study'
      ],
      destination: 'Nairobi Metropolis'
    },
    {
      stage: 'STAGE 03 — BRANCH (LEG 2)',
      title: 'Disciplined Governance & Clean Architecture',
      location: 'Kigali, Rwanda (4 Nights / 5 Days)',
      icon: Building2,
      color: '#10b981',
      tag: 'Institutional Transformation',
      summary: 'Transitioning to Africa’s most organized and visionary capital. Studying how a nation rebuilt systems, institutional trust, and civic execution.',
      takeaways: [
        'Kigali Genocide Memorial: A Masterclass in Leadership Resilience',
        'Car-Free Smart City Tour & Green Urban Sustainability Blueprint',
        'Niyo Art Center: Exploring Africa’s Creative & Intellectual Economy'
      ],
      destination: 'Kigali Smart Capital'
    },
    {
      stage: 'STAGE 04 — CANOPY',
      title: 'High-Altitude Syndicate & Team Bonding',
      location: 'Fazenda Sengha & Mount Kigali',
      icon: Mountain,
      color: '#38bdf8',
      tag: 'Leadership Altitude',
      summary: 'Ascending Mount Kigali for outdoor zip-lining, horseback riding, and executive debriefs designed to build lifelong trust and partnership.',
      takeaways: [
        'Fazenda Sengha adventure syndicate and executive team challenges',
        'Bilateral networking dinners with international advisors',
        'Cross-examination of personal and organizational growth roadmaps'
      ],
      destination: 'Mount Kigali Canopy'
    },
    {
      stage: 'STAGE 05 — HARVEST',
      title: 'Scalable Systems & Boardroom Legacy',
      location: 'Certification & Beyond',
      icon: Award,
      color: '#c084fc',
      tag: 'Impact Execution',
      summary: 'Returning to your enterprise with tested frameworks, verified international credentials, and relationships that yield multi-year ROI.',
      takeaways: [
        'Official HIPS Executive Certificate of Completion',
        'Lifetime induction into the HIPS Cross-Border Alumni Network',
        'Direct implementation blueprint for immediate corporate ROI'
      ],
      destination: 'Global Impact'
    }
  ];

  return (
    <section id="growth-tree" style={{
      padding: 'clamp(4rem, 7vw, 7rem) 0',
      background: 'linear-gradient(180deg, rgba(5, 7, 10, 0.98) 0%, rgba(10, 14, 22, 0.98) 50%, rgba(5, 7, 10, 0.98) 100%)',
      position: 'relative',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Interactive Architecture</span>
          <h2>The Branching Tree of Scaled Impact</h2>
          <p>
            Experience how the 6-day journey branches systematically from intellectual roots into dynamic destination tracks and enduring enterprise harvest.
          </p>
        </div>

        {/* Tree Branch Visual Navigation Track */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {branches.map((b, idx) => {
            const Icon = b.icon;
            const isCurrent = activeBranch === idx;
            return (
              <div 
                key={idx}
                onClick={() => setActiveBranch(idx)}
                style={{
                  background: isCurrent ? 'rgba(20, 28, 44, 0.95)' : 'rgba(12, 17, 26, 0.7)',
                  border: `1px solid ${isCurrent ? b.color : 'rgba(255,255,255,0.08)'}`,
                  borderTop: `4px solid ${b.color}`,
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isCurrent ? 'translateY(-4px)' : 'none',
                  boxShadow: isCurrent ? `0 8px 24px ${b.color}20` : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: `${b.color}15`,
                    color: b.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={18} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: b.color, fontWeight: 700 }}>
                    0{idx + 1}
                  </span>
                </div>

                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  {b.stage}
                </div>
                <h4 style={{ fontSize: '0.98rem', color: '#fff', marginTop: '0.2rem', marginBottom: '0.4rem', fontWeight: 700 }}>
                  {b.title}
                </h4>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  {b.destination}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Branch Deep-Dive Panel */}
        {(() => {
          const current = branches[activeBranch];
          const Icon = current.icon;
          return (
            <div className="glass-panel" style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              border: `1px solid ${current.color}40`,
              background: 'rgba(10, 15, 24, 0.95)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge-pill" style={{ background: `${current.color}20`, color: current.color, border: `1px solid ${current.color}40` }}>
                      <Icon size={13} /> {current.stage}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                      {current.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)', color: '#fff', marginBottom: '0.75rem' }}>
                    {current.title}
                  </h3>

                  <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {current.summary}
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button 
                      onClick={onOpenRegister}
                      className="btn-gold" 
                      style={{ padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}
                    >
                      Reserve for This Immersion <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={onOpenBrochure}
                      className="btn-outline-gold" 
                      style={{ padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}
                    >
                      View Blueprint
                    </button>
                  </div>
                </div>

                {/* Key Deliverables Card */}
                <div style={{
                  background: 'rgba(6, 9, 15, 0.85)',
                  border: `1px solid ${current.color}35`,
                  borderRadius: '16px',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)'
                }}>
                  <div style={{ fontSize: '0.78rem', color: current.color, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontWeight: 700 }}>
                    Core Branch Deliverables & Exposure
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {current.takeaways.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                        <div style={{
                          padding: '0.35rem',
                          borderRadius: '6px',
                          background: `${current.color}18`,
                          color: current.color,
                          marginTop: '2px',
                          flexShrink: 0
                        }}>
                          <CheckCircle2 size={16} />
                        </div>
                        <span style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
