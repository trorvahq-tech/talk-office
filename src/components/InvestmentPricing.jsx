import React, { useState } from 'react';
import { Check, X, Copy, CheckCircle2, ArrowRight, Sparkles, CreditCard } from 'lucide-react';

export default function InvestmentPricing({ onOpenRegister }) {
  const [selectedTier, setSelectedTier] = useState('sharing');
  const [departureCity, setDepartureCity] = useState('lagos');
  const [delegateCount, setDelegateCount] = useState(1);
  const [copiedBank, setCopiedBank] = useState(false);

  const pricing = {
    sharing: 2500000,
    single: 3000000
  };

  const currentPricePerPax = pricing[selectedTier];
  const totalPrice = currentPricePerPax * delegateCount;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('1019925375');
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 3000);
  };

  const includedItems = [
    'Return multi-flight tickets from Lagos (Kenya and Rwanda legs)',
    '1 night accommodation in Nairobi, Kenya',
    '4 nights accommodation in Kigali, Rwanda',
    'Dedicated airport transfers & executive overland transit',
    'Conference facility & high-level mastermind rooms',
    'Professional tour arrangements & local logistical leads',
    'Daily executive breakfast',
    'Institutional visits & private access passes',
    'Certificate of Completion from The Talk Office / HIPS',
    'Guided tours & scheduled sightseeing activities',
    'Scheduled professional engagements & business networking'
  ];

  const notIncludedItems = [
    'Personal daily expenses & retail shopping',
    'Airport lounge VIP access',
    'Lunches & optional off-programme meals',
    'Visa fees (where applicable based on passport)',
    'Unscheduled optional leisure activities',
    'Fun night / exclusive private dinner party charges'
  ];

  return (
    <section id="pricing" style={{
      padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      background: 'radial-gradient(ellipse at 50% 100%, rgba(212, 163, 89, 0.08) 0%, rgba(7, 9, 14, 1) 75%)',
      position: 'relative',
      width: '100%'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">07. Investment & Packages</span>
          <h2>Transparent Investment in Your Global Impact</h2>
          <p>
            An all-encompassing executive immersion package covering flights, multi-city luxury accommodation, masterminds, and excursions.
          </p>
        </div>

        {/* Pricing Cards Grid - 100% Full Width */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '2.5rem',
          width: '100%',
          marginBottom: '3.5rem'
        }}>
          {/* Option A: Sharing */}
          <div 
            className="glass-panel"
            onClick={() => setSelectedTier('sharing')}
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '20px',
              cursor: 'pointer',
              borderColor: selectedTier === 'sharing' ? 'var(--gold-primary)' : 'var(--border-subtle)',
              background: selectedTier === 'sharing' ? 'rgba(22, 30, 48, 0.94)' : 'var(--bg-card)',
              boxShadow: selectedTier === 'sharing' ? '0 10px 35px rgba(212, 163, 89, 0.2)' : 'none',
              transform: selectedTier === 'sharing' ? 'scale(1.01)' : 'scale(1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              width: '100%'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge-pill badge-gold">Cohort Favorite</span>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '2px solid var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {selectedTier === 'sharing' && <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--gold-primary)' }} />}
              </div>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.4rem' }}>Sharing Accommodation</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Twin executive room sharing with a vetted fellow cohort delegate.
            </p>

            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Per Person (From Lagos)</div>
              <div style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--gold-light)' }}>
                ₦2,500,000
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Multi-flight tickets & hotel stays included</div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedTier('sharing'); onOpenRegister({ tier: 'sharing', departure: departureCity, count: delegateCount }); }}
              className="btn-gold" 
              style={{ width: '100%', justifyContent: 'center', padding: '0.95rem' }}
            >
              Select Sharing Tier <ArrowRight size={16} />
            </button>
          </div>

          {/* Option B: Single Occupancy */}
          <div 
            className="glass-panel"
            onClick={() => setSelectedTier('single')}
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '20px',
              cursor: 'pointer',
              borderColor: selectedTier === 'single' ? '#38bdf8' : 'var(--border-subtle)',
              background: selectedTier === 'single' ? 'rgba(22, 30, 48, 0.94)' : 'var(--bg-card)',
              boxShadow: selectedTier === 'single' ? '0 10px 35px rgba(56, 189, 248, 0.2)' : 'none',
              transform: selectedTier === 'single' ? 'scale(1.01)' : 'scale(1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              width: '100%'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge-pill" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                Maximum Privacy
              </span>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '2px solid #38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {selectedTier === 'single' && <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#38bdf8' }} />}
              </div>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.4rem' }}>Single Occupancy</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Private single executive room throughout Nairobi and Kigali stays.
            </p>

            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Per Person (From Lagos)</div>
              <div style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#38bdf8' }}>
                ₦3,000,000
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Private room + multi-flights included</div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedTier('single'); onOpenRegister({ tier: 'single', departure: departureCity, count: delegateCount }); }}
              className="btn-outline-gold" 
              style={{ width: '100%', justifyContent: 'center', borderColor: '#38bdf8', color: '#38bdf8', padding: '0.95rem' }}
            >
              Select Single Tier <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Dynamic Calculator & Bank Transfer Panel - 100% Full Width */}
        <div className="glass-panel gold-border-glow" style={{
          width: '100%',
          marginBottom: '3.5rem',
          padding: 'clamp(2rem, 4vw, 3rem)',
          background: 'rgba(14, 20, 32, 0.94)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Customizer */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <Sparkles size={20} style={{ color: 'var(--gold-primary)' }} />
                <h4 style={{ fontSize: '1.35rem', color: '#fff', margin: 0 }}>
                  Customize Registration
                </h4>
              </div>

              {/* City Selection */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">Departure City</label>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => setDepartureCity('lagos')}
                    style={{
                      flex: 1,
                      padding: '0.85rem',
                      borderRadius: '8px',
                      border: departureCity === 'lagos' ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.1)',
                      background: departureCity === 'lagos' ? 'rgba(212, 163, 89, 0.15)' : 'rgba(255,255,255,0.03)',
                      color: departureCity === 'lagos' ? '#fff' : '#94a3b8',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Lagos (Standard)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDepartureCity('abuja')}
                    style={{
                      flex: 1,
                      padding: '0.85rem',
                      borderRadius: '8px',
                      border: departureCity === 'abuja' ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.1)',
                      background: departureCity === 'abuja' ? 'rgba(212, 163, 89, 0.15)' : 'rgba(255,255,255,0.03)',
                      color: departureCity === 'abuja' ? '#fff' : '#94a3b8',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Abuja (+ Flight Rate)
                  </button>
                </div>
                {departureCity === 'abuja' && (
                  <p style={{ fontSize: '0.82rem', color: 'var(--gold-light)', marginTop: '0.4rem' }}>
                    * An additional local connecting flight rate applies for Abuja–Lagos transit.
                  </p>
                )}
              </div>

              {/* Number of Delegates */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label className="form-label">Number of Delegates</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <button 
                    type="button"
                    onClick={() => setDelegateCount(Math.max(1, delegateCount - 1))}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff',
                      fontSize: '1.3rem',
                      cursor: 'pointer'
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', minWidth: '35px', textAlign: 'center' }}>
                    {delegateCount}
                  </span>
                  <button 
                    type="button"
                    onClick={() => setDelegateCount(delegateCount + 1)}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff',
                      fontSize: '1.3rem',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </button>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    ({selectedTier === 'sharing' ? 'Sharing' : 'Single'} Occupancy)
                  </span>
                </div>
              </div>

              {/* Subtotal Display */}
              <div style={{
                background: 'rgba(0,0,0,0.35)',
                padding: '1.5rem',
                borderRadius: '14px',
                border: '1px solid rgba(212, 163, 89, 0.25)'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Estimated Total Investment</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--gold-light)', fontFamily: 'var(--font-heading)' }}>
                  ₦{totalPrice.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.25rem' }}>
                  Deadline for fee completion: <strong>16th October 2026</strong>
                </div>
              </div>
            </div>

            {/* Official Bank Wire Details */}
            <div style={{
              background: 'rgba(7, 9, 14, 0.88)',
              border: '1px solid rgba(212, 163, 89, 0.3)',
              borderRadius: '16px',
              padding: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <CreditCard size={22} style={{ color: 'var(--gold-primary)' }} />
                <h4 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>
                  Official Zenith Bank Account
                </h4>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
                Payments should be remitted directly to the corporate account of <strong>The Talk Office</strong>:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1.25rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Bank Name</span>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem' }}>Zenith Bank</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1.25rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Account Name</span>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem' }}>The Talk Office</div>
                </div>

                <div style={{
                  background: 'rgba(212, 163, 89, 0.08)',
                  border: '1px dashed var(--gold-primary)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', textTransform: 'uppercase' }}>Account Number</span>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.35rem', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                      1019925375
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyAccount}
                    style={{
                      background: 'var(--gold-gradient)',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.55rem 0.95rem',
                      color: '#000',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    {copiedBank ? <CheckCircle2 size={15} /> : <Copy size={15} />}
                    {copiedBank ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <button 
                onClick={() => onOpenRegister({ tier: selectedTier, departure: departureCity, count: delegateCount, totalPrice })}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '0.9rem' }}
              >
                Proceed to Register & Submit Receipt <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown: What's Included vs Not Included - 100% Full Width */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '2.5rem',
          width: '100%'
        }}>
          {/* Included */}
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 2.5rem)', borderTop: '3px solid #10b981', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', color: '#34d399' }}>
              <CheckCircle2 size={22} />
              <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0 }}>What Your Package Includes</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {includedItems.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Check size={18} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Included */}
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 2.5rem)', borderTop: '3px solid #64748b', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', color: '#94a3b8' }}>
              <X size={22} />
              <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0 }}>What Is Not Included</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {notIncludedItems.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <X size={18} style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
