import React, { useState } from 'react';
import { Calendar, Building, Trees, Landmark, Coffee, Shield, Palette, Mountain } from 'lucide-react';

export default function DualDestinationFlow() {
  const [selectedCity, setSelectedCity] = useState('all');

  const destinations = [
    {
      id: 'nairobi',
      name: 'Nairobi, Kenya',
      tagline: 'Business Hub — Metropolitan Edge — Wildlife Encounter',
      nights: '1 Night / 2 Days Kickoff',
      badgeColor: '#d4a359',
      overview: 'East Africa’s commercial epicenter. Nairobi sets the tempo with dynamic cross-sector business engagements, rapid economic discourse, and quintessential safari encounters on the edge of a global metropolis.',
      highlights: [
        { icon: Building, title: 'Business Conference & Roundtables', desc: 'Closed-door sessions with regional leaders on market expansion and execution.' },
        { icon: Trees, title: 'Nairobi National Park Game Drive', desc: 'Experience majestic African wildlife directly against the city skyline.' },
        { icon: Landmark, title: 'Elephant Orphanage Sanctuary', desc: 'Private guided conservation tour and environmental governance insights.' },
        { icon: Coffee, title: 'Metropolitan Sightseeing & Mixer', desc: 'Curated networking dinners at iconic Nairobi venues.' }
      ]
    },
    {
      id: 'kigali',
      name: 'Kigali, Rwanda',
      tagline: 'Excellence — Future Governance — Culture & Reflection',
      nights: '4 Nights / 5 Days Immersion',
      badgeColor: '#10b981',
      overview: 'Africa’s cleanest, most disciplined, and forward-looking smart capital. Kigali provides the anchor immersion for deep reflection, innovation case studies, institutional visits, and transformative team bonding.',
      highlights: [
        { icon: Shield, title: 'Kigali Genocide Memorial & Reflection', desc: 'A profound leadership study on national resilience, rebuilding, and reconciliation.' },
        { icon: Palette, title: 'Niyo Art Center & Art Markets', desc: 'Exploring Africa’s burgeoning creative economy, indigenous art, and cultural heritage.' },
        { icon: Building, title: 'Car-Free Zone & City Tour', desc: 'Experiencing world-class urban planning, civic order, and green sustainability.' },
        { icon: Mountain, title: 'Fazenda Sengha Adventure Experience', desc: 'Mount Kigali outdoor zip-lining, horseback riding, and executive team bonding.' }
      ]
    }
  ];

  return (
    <section id="destinations" style={{
      padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      position: 'relative',
      background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.04) 0%, rgba(7, 9, 14, 1) 70%)',
      width: '100%'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">03. Dual-City Immersion</span>
          <h2>Two Iconic African Capitals. One Synergistic Journey.</h2>
          <p>
            Why Kenya and Rwanda? Because true professional development occurs when commercial hustle meets disciplined national transformation.
          </p>
        </div>

        {/* City Filter / Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button 
            onClick={() => setSelectedCity('all')}
            className={selectedCity === 'all' ? 'btn-gold' : 'btn-secondary-dark'}
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
          >
            All Destinations (Complete Journey)
          </button>
          <button 
            onClick={() => setSelectedCity('nairobi')}
            className={selectedCity === 'nairobi' ? 'btn-gold' : 'btn-secondary-dark'}
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
          >
            Nairobi, Kenya (Leg 1)
          </button>
          <button 
            onClick={() => setSelectedCity('kigali')}
            className={selectedCity === 'kigali' ? 'btn-gold' : 'btn-secondary-dark'}
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
          >
            Kigali, Rwanda (Leg 2)
          </button>
        </div>

        {/* Dual Destination Cards - 100% Full Width */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: selectedCity === 'all' ? 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))' : '1fr',
          gap: '2.5rem',
          width: '100%'
        }}>
          {destinations
            .filter(d => selectedCity === 'all' || d.id === selectedCity)
            .map((dest) => (
              <div 
                key={dest.id}
                className="glass-panel"
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  borderTop: `4px solid ${dest.badgeColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(12, 17, 27, 0.9)',
                  width: '100%'
                }}
              >
                <div>
                  {/* City Title & Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.85rem', color: '#fff' }}>{dest.name}</h3>
                    <span className="badge-pill" style={{ background: `${dest.badgeColor}20`, color: dest.badgeColor, border: `1px solid ${dest.badgeColor}40` }}>
                      <Calendar size={12} /> {dest.nights}
                    </span>
                  </div>

                  <p style={{ color: dest.badgeColor, fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>
                    {dest.tagline}
                  </p>

                  <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '2rem' }}>
                    {dest.overview}
                  </p>

                  {/* Curated Itinerary Highlights */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                      Signature Experience Highlights
                    </div>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                      gap: '1rem'
                    }}>
                      {dest.highlights.map((h, idx) => {
                        const Icon = h.icon;
                        return (
                          <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.85rem',
                            padding: '1rem',
                            borderRadius: '12px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}>
                            <div style={{
                              padding: '0.5rem',
                              borderRadius: '8px',
                              background: `${dest.badgeColor}18`,
                              color: dest.badgeColor,
                              marginTop: '2px',
                              flexShrink: 0
                            }}>
                              <Icon size={18} />
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem' }}>
                                {h.title}
                              </div>
                              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                                {h.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Tag */}
                <div style={{
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: '1.5rem'
                }}>
                  <span>Complete Logistics Handled</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>Zero Friction Immersion</span>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
