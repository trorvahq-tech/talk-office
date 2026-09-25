import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What are the visa and entry requirements for Kenya and Rwanda?',
      a: 'For Nigerian passport holders, Rwanda offers 30-day visa-free entry upon arrival. For Kenya, an Electronic Travel Authorisation (eTA) is processed online prior to departure. Our logistics team provides complete step-by-step guidance and support for all confirmed delegates.'
    },
    {
      q: 'When is the final payment deadline for the November 2026 cohort?',
      a: 'To secure multi-flight blocks and guaranteed hotel bookings across Nairobi and Kigali, full payment or approved corporate commitment must be completed by 16th October 2026 (roughly 4 weeks prior to departure).'
    },
    {
      q: 'How are connecting flights handled for delegates traveling from Abuja?',
      a: 'The standard package includes multi-flight tickets originating and concluding in Lagos. For delegates departing from Abuja, an additional local flight rate will apply for the Abuja–Lagos connection, coordinated by our travel team.'
    },
    {
      q: 'Can my organisation pay directly and receive an official invoice?',
      a: 'Yes. We frequently work with corporate HR and L&D departments. We issue formal invitation letters, WHT tax clearance documentation, and proforma invoices for official wire processing directly to The Talk Office Zenith Bank account.'
    },
    {
      q: 'What type of accommodation is provided during the 6 days / 5 nights?',
      a: 'Delegates are hosted in vetted 4-to-5 star executive partner hotels: 1 night in Nairobi and 4 nights in Kigali. You can choose between twin executive sharing (₦2.5M) or private single occupancy (₦3.0M).'
    },
    {
      q: 'What health precautions or vaccination cards are required?',
      a: 'A valid Yellow Fever vaccination card is mandatory for travel across East African borders. We recommend ensuring your card is active at least 10 days before departure.'
    },
    {
      q: 'What happens after I complete my payment?',
      a: 'Once your payment is verified with Zenith Bank, you will receive an official confirmation receipt, followed by your Delegate Onboarding Pack, pre-programme reading materials, and dedicated concierge access.'
    }
  ];

  return (
    <section id="faq" style={{
      padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      background: 'linear-gradient(180deg, rgba(7, 9, 14, 0.98) 0%, rgba(12, 16, 25, 0.95) 100%)',
      position: 'relative',
      width: '100%'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">08. Frequently Asked Questions</span>
          <h2>Essential Travel & Programme Logistics</h2>
          <p>
            Everything you need to know about preparations, visas, payments, and the dual-destination experience.
          </p>
        </div>

        {/* FAQ Accordion List - 100% Full Width */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="glass-panel"
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  borderColor: isOpen ? 'var(--gold-primary)' : 'var(--border-subtle)',
                  background: isOpen ? 'rgba(20, 27, 42, 0.92)' : 'var(--bg-card)',
                  transition: 'all 0.25s ease',
                  width: '100%'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.45rem clamp(1.2rem, 3vw, 2rem)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    gap: '1rem'
                  }}
                >
                  <span>{faq.q}</span>
                  <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    color: 'var(--gold-primary)',
                    flexShrink: 0
                  }}>
                    <ChevronDown size={22} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 clamp(1.2rem, 3vw, 2rem) 1.6rem clamp(1.2rem, 3vw, 2rem)',
                    color: '#cbd5e1',
                    fontSize: '0.98rem',
                    lineHeight: 1.75,
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '1rem'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
