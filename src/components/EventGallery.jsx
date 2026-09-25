import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventGallery() {
  const [activeModalImg, setActiveModalImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/assets/gallery-3.jpg',
      title: 'HIPS Executive Mastermind In Session',
      caption: 'High-focus boardroom delivery, cross-examining systems thinking and strategic problem-solving.',
      tag: 'Executive Mastermind'
    },
    {
      src: '/assets/gallery-4.jpg',
      title: 'Interactive Case Studies & Engagement',
      caption: 'Dynamic peer engagement, breaking down execution playbooks with distinguished attendees.',
      tag: 'Peer Dialogue'
    },
    {
      src: '/assets/gallery-5.jpg',
      title: 'Cohort Synergy & Strategy Workshop',
      caption: 'Participants dissecting institutional leverage and operational scale frameworks.',
      tag: 'Strategy Workshop'
    },
    {
      src: '/assets/gallery-1.jpg',
      title: 'High-Trust Networking & Connections',
      caption: 'Meaningful bilateral conversations forging career capital and cross-sector partnerships.',
      tag: 'Curated Networking'
    },
    {
      src: '/assets/gallery-2.jpg',
      title: 'Celebration & Certification Moments',
      caption: 'Honoring transformational leadership milestones and certified cohort graduates.',
      tag: 'Graduation & Impact'
    }
  ];

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setActiveModalImg(images[index]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIdx);
    setActiveModalImg(images[nextIdx]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIdx);
    setActiveModalImg(images[prevIdx]);
  };

  return (
    <section id="gallery" style={{
      padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      background: 'radial-gradient(circle at 20% 80%, rgba(212, 163, 89, 0.05) 0%, rgba(7, 9, 14, 1) 70%)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">05. Proven Track Record</span>
          <h2>Glimpse Into The HIPS Experience</h2>
          <p>
            Real moments from past HIPS editions where ambitious professionals gather, learn, connect, and elevate their impact.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {images.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              onClick={() => handleOpenModal(idx)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                aspectRatio: '4/3',
                background: '#090d14'
              }}
            >
              <img 
                src={item.src} 
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                  display: 'block'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
              />
              
              {/* Overlay on hover */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(5, 7, 12, 0.95) 100%)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                pointerEvents: 'none'
              }}>
                <span className="badge-pill badge-gold" style={{ alignSelf: 'flex-start', padding: '0.2rem 0.6rem', fontSize: '0.7rem', marginBottom: '0.4rem' }}>
                  {item.tag}
                </span>
                <h4 style={{ fontSize: '0.98rem', color: '#fff', margin: 0, fontWeight: 700 }}>
                  {item.title}
                </h4>
              </div>

              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <ZoomIn size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Metric Bar */}
        <div className="glass-panel" style={{
          padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1.5rem, 4vw, 2.5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div>
            <div className="gold-text-gradient" style={{ fontSize: '2.3rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              100%
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
              Actionable Frameworks
            </div>
          </div>

          <div>
            <div className="gold-text-gradient" style={{ fontSize: '2.3rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              4.0+
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
              Editions of HIPS Pedagogy
            </div>
          </div>

          <div>
            <div className="gold-text-gradient" style={{ fontSize: '2.3rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              2 Nations
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
              Kenya & Rwanda Immersion
            </div>
          </div>

          <div>
            <div className="gold-text-gradient" style={{ fontSize: '2.3rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              Zero
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
              Fluff or Passive Theory
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div 
          className="modal-overlay" 
          onClick={() => setActiveModalImg(null)}
          style={{ zIndex: 100000 }}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              background: '#0a0f18',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(212, 163, 89, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.9)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveModalImg(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              style={{
                position: 'absolute',
                top: '50%',
                left: '16px',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={handleNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '16px',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Image */}
            <img 
              src={activeModalImg.src} 
              alt={activeModalImg.title}
              style={{
                width: '100%',
                maxHeight: '62vh',
                objectFit: 'contain',
                background: '#04060a',
                display: 'block'
              }}
            />

            {/* Modal Caption */}
            <div style={{ padding: '1.5rem 1.75rem', background: '#0a0e17' }}>
              <span className="badge-pill badge-gold" style={{ marginBottom: '0.4rem' }}>
                {activeModalImg.tag}
              </span>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.35rem' }}>
                {activeModalImg.title}
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', margin: 0 }}>
                {activeModalImg.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
