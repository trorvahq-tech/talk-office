import React, { useState } from 'react';
import { Cpu, Network, Megaphone, KeyRound, CheckCircle, Lightbulb } from 'lucide-react';

export default function PillarsHIPS() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: '01',
      title: 'Execution Intelligence',
      subtitle: 'Closing the Knowing-Doing Gap',
      icon: Cpu,
      color: '#d4a359',
      summary: 'Turning knowledge, plans, and intentions into measurable, uncompromising results.',
      deepDive: 'High performers frequently know what needs to be done, yet fail to bridge the execution chasm. This pillar equips participants with rigorous frameworks to dismantle bottlenecks, eliminate friction, and install execution rhythms that guarantee consistent delivery.',
      keyOutcomes: [
        'Diagnosing execution failure points in high-stakes projects',
        'Frameworks for disciplined operational cadence and milestone delivery',
        'Metrics that drive accountability across distributed and local teams',
        'Translating complex strategy into immediate tactical action'
      ]
    },
    {
      id: '02',
      title: 'Systems Thinking',
      subtitle: 'From Individual Hustle to Sustainable Infrastructure',
      icon: Network,
      color: '#10b981',
      summary: 'Moving from heroic individual effort to enduring, repeatable organizational systems.',
      deepDive: 'Impact that relies exclusively on your physical presence is unscalable. In this module, delegates learn how to engineer repeatable operating blueprints, institutional workflows, and culture structures that multiply output without executive burnout.',
      keyOutcomes: [
        'Designing self-reinforcing operational flywheels',
        'De-risking single-point-of-failure leadership dependencies',
        'Process automation and systemic workflow harmonization',
        'Creating organizational capacity that expands year-over-year'
      ]
    },
    {
      id: '03',
      title: 'Influence at Scale',
      subtitle: 'Authority Beyond Formal Rank',
      icon: Megaphone,
      color: '#38bdf8',
      summary: 'Commanding professional credibility, cross-border trust, and persuasive narrative mastery.',
      deepDive: 'True leadership influence does not flow from a title on a business card. It is forged through strategic communication, stakeholder alignment, emotional intelligence, and the capacity to mobilize diverse teams across different African and international markets.',
      keyOutcomes: [
        'Mastering boardroom diplomacy and multi-stakeholder negotiation',
        'Building cross-cultural professional credibility and trust',
        'Narrative design: communicating visions that drive action',
        'Managing upward and laterally to influence strategic policy'
      ]
    },
    {
      id: '04',
      title: 'Career Capital & Leverage',
      subtitle: 'From Casual Contacts to Strategic Leverage',
      icon: KeyRound,
      color: '#c084fc',
      summary: 'Curated networking that turns relational equity into market leverage and global opportunities.',
      deepDive: 'Networking without intentionality is noise. This pillar teaches leaders how to audit their relationship ecosystem, unlock high-trust networks across international corridors, and convert professional capital into career acceleration and strategic partnerships.',
      keyOutcomes: [
        'Building an asymmetric professional network across Africa and beyond',
        'Monetizing and institutionalizing personal leadership brand',
        'Strategic positioning for board seats and international advisory roles',
        'Forging high-trust partnerships with global peers'
      ]
    }
  ];

  return (
    <section id="pillars" style={{
      padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      background: 'linear-gradient(180deg, rgba(7, 9, 14, 0.95) 0%, rgba(12, 16, 25, 0.98) 100%)',
      position: 'relative',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">02. Intellectual Foundation</span>
          <h2>The Four Pillars of HIPS 4.0</h2>
          <p>
            Designed to address the exact strategic competencies modern leaders require to thrive, influence, and build legacies across borders.
          </p>
        </div>

        {/* 4 Pillars Grid Selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === idx;
            return (
              <div 
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className="glass-panel"
                style={{
                  padding: '1.75rem 1.5rem',
                  cursor: 'pointer',
                  borderColor: isSelected ? pillar.color : 'var(--border-subtle)',
                  background: isSelected ? 'rgba(22, 30, 48, 0.88)' : 'var(--bg-card)',
                  boxShadow: isSelected ? `0 8px 30px ${pillar.color}25` : 'none',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: `${pillar.color}18`,
                    color: pillar.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={22} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    color: pillar.color,
                    fontSize: '1.1rem'
                  }}>
                    {pillar.id}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: '#fff' }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{pillar.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Active Pillar Deep Dive Showcase */}
        {(() => {
          const current = pillars[activeTab];
          return (
            <div className="glass-panel gold-border-glow" style={{
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              background: 'rgba(13, 18, 29, 0.92)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge-pill" style={{ background: `${current.color}20`, color: current.color, border: `1px solid ${current.color}40` }}>
                      Pillar {current.id} Focus
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                      Core Immersion Module
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.75rem', color: '#fff' }}>{current.title}</h3>
                  <h4 style={{ fontSize: '1.05rem', color: current.color, marginBottom: '1.25rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    {current.summary}
                  </h4>
                  <p style={{ lineHeight: 1.75, fontSize: '0.98rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>
                    {current.deepDive}
                  </p>
                </div>

                {/* Key Deliverables Box */}
                <div style={{
                  background: 'rgba(7, 9, 14, 0.75)',
                  border: `1px solid ${current.color}35`,
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: current.color }}>
                    <Lightbulb size={20} />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Executive Takeaways & Practical Output
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {current.keyOutcomes.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle size={18} style={{ color: current.color, flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5 }}>
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
