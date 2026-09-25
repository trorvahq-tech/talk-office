import React from 'react';
import { 
  Printer, ArrowLeft, Download, ShieldCheck, Sparkles, Building, 
  MapPin, Calendar, CheckCircle2, XCircle, Globe, Mail, Phone, ArrowUpRight, Compass, Award, Users, BookOpen
} from 'lucide-react';

export default function ExecutivePdfDossier({ onExit, onOpenRegister, onOpenCorporate }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#04070a',
      color: '#0f172a',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      paddingBottom: '4rem'
    }}>
      {/* Floating Action Top Bar (Hidden on Print) */}
      <div className="no-print" style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        background: 'rgba(6, 18, 22, 0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 229, 212, 0.25)',
        padding: '0.85rem clamp(1rem, 4vw, 3rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onExit}
            className="btn-secondary-dark"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: '#fff',
              background: 'rgba(255,255,255,0.06)'
            }}
          >
            <ArrowLeft size={15} /> Return to Website
          </button>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 800, color: '#00E5D4', fontSize: '1.15rem' }}>
                THE TALK OFFICE
              </span>
              <span style={{ background: 'rgba(0, 229, 212, 0.15)', color: '#00E5D4', border: '1px solid rgba(0, 229, 212, 0.3)', padding: '0.15rem 0.5rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700 }}>
                FIGMA EXECUTIVE DOSSIER
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              HIPS Global Experience 2026 • Kenya × Rwanda Comprehensive Document
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={handlePrint}
            className="btn-gold"
            style={{
              background: 'linear-gradient(135deg, #00E5D4 0%, #0B6B75 100%)',
              color: '#04070a',
              fontWeight: 800,
              padding: '0.6rem 1.4rem',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 20px rgba(0, 229, 212, 0.35)',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer'
            }}
          >
            <Printer size={16} /> Save / Print PDF (A4)
          </button>
        </div>
      </div>

      {/* DOCUMENT WRAPPER (A4 FIGMA PAGES CONTAINER) */}
      <div style={{
        maxWidth: '900px',
        margin: '2rem auto',
        padding: '0 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem'
      }}>

        {/* ========================================================================= */}
        {/* PAGE 1: COVER PAGE / EXECUTIVE TITLE DOSSIER */}
        {/* ========================================================================= */}
        <div className="pdf-page" style={{
          background: 'linear-gradient(160deg, #041a1d 0%, #062b30 40%, #0a1118 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          border: '1px solid rgba(0, 229, 212, 0.3)',
          minHeight: '1120px',
          position: 'relative',
          padding: '4rem 3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden'
        }}>
          {/* Subtle Geometric Teal & Gold Watermark Accents */}
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,212,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,163,89,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* Top Brand Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 229, 212, 0.25)', paddingBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#ffffff', padding: '6px 12px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                <img src="/assets/talk-logo.png" alt="The Talk Office" style={{ height: '32px', width: 'auto', display: 'block' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 800, fontSize: '1.15rem', color: '#00E5D4', letterSpacing: '0.05em' }}>
                  THE TALK OFFICE
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Executive Development & Global Expeditions
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ background: 'rgba(212,163,89,0.15)', color: '#f5d392', border: '1px solid rgba(212,163,89,0.4)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                HIPS 4.0 EXPEDITION
              </span>
            </div>
          </div>

          {/* Hero Center Title Section */}
          <div style={{ padding: '3.5rem 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 229, 212, 0.1)', border: '1px solid rgba(0, 229, 212, 0.3)', borderRadius: '30px', padding: '0.4rem 1.1rem', color: '#00E5D4', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '1.5rem' }}>
              <Sparkles size={14} /> INTERNATIONAL PROFESSIONAL PROPOSAL & DOSSIER
            </div>

            <h1 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '3.2rem',
              lineHeight: 1.1,
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '0.02em'
            }}>
              HIPS GLOBAL <br />
              <span style={{ background: 'linear-gradient(135deg, #00E5D4 0%, #26e6e6 50%, #f5d392 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                EXPERIENCE 2026
              </span>
            </h1>

            <div style={{
              fontSize: '1.6rem',
              fontFamily: "'Cinzel', serif",
              color: '#d4a359',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '1.25rem'
            }}>
              KENYA × RWANDA
            </div>

            <div style={{
              fontSize: '1.25rem',
              color: '#f8fafc',
              fontWeight: 600,
              marginBottom: '1.5rem',
              lineHeight: 1.4,
              borderLeft: '4px solid #00E5D4',
              paddingLeft: '1.25rem'
            }}>
              IMPACT THAT SCALES: BEYOND BORDERS
            </div>

            <p style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              maxWidth: '680px',
              lineHeight: 1.65,
              margin: 0
            }}>
              An International Professional Development, Business Exposure & Cultural Experience designed for executives, business leaders, entrepreneurs, and forward-thinking corporate teams.
            </p>
          </div>

          {/* Bottom Dossier Metadata Grid */}
          <div style={{
            background: 'rgba(7, 18, 24, 0.85)',
            border: '1px solid rgba(0, 229, 212, 0.25)',
            borderRadius: '12px',
            padding: '1.75rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#00E5D4', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                EXPEDITION DATES
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                12th – 18th Nov 2026
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                6 Days / 5 Nights
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', color: '#00E5D4', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                DESTINATION HUBS
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                Nairobi × Kigali
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                Kenya & Rwanda Dual-Nation
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                REGISTRATION CLOSING
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f5d392' }}>
                16th October 2026
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                Zenith Bank Wire Guaranteed
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', fontSize: '0.75rem', color: '#64748b' }}>
            <span>THE TALK OFFICE LTD • CORPORATE DOSSIER</span>
            <span>DOCUMENT PAGE 01 / 06</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PAGE 2: PROGRAMME OVERVIEW & THE 4 PILLARS */}
        {/* ========================================================================= */}
        <div className="pdf-page" style={{
          background: '#ffffff',
          color: '#0f172a',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          minHeight: '1120px',
          padding: '3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            {/* Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #00B4B4', paddingBottom: '1rem', marginBottom: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#008B8B', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  SECTION 01 & 02 • INTELLECTUAL FOUNDATION
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: '#042226', margin: '0.2rem 0 0 0' }}>
                  Programme Overview & Intellectual Focus
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <img src="/assets/talk-logo.png" alt="Logo" style={{ height: '24px' }} />
              </div>
            </div>

            {/* 1. Programme Overview */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#042226', fontWeight: 800, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={18} color="#008B8B" /> 1. Programme Overview
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.65, margin: '0 0 0.75rem 0' }}>
                The <strong>HIPS Global Experience 2026</strong> is a curated international professional development and immersion programme designed for professionals, executives, entrepreneurs and organisational teams seeking to broaden their professional perspective through learning, business exposure, networking and cultural experience.
              </p>
              <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.65, margin: 0 }}>
                The Kenya × Rwanda experience combines structured professional engagement with guided destination experiences across Nairobi and Kigali. It is designed to move beyond a conventional conference or leisure trip by bringing professional learning and international exposure into one coherent, life-changing experience.
              </p>
            </div>

            {/* 2. Theme & Guiding Question */}
            <div style={{
              background: 'linear-gradient(135deg, #05262B 0%, #094046 100%)',
              color: '#ffffff',
              borderRadius: '12px',
              padding: '1.5rem 1.75rem',
              marginBottom: '2rem',
              borderLeft: '5px solid #00E5D4'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#00E5D4', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
                CORE THEME & GUIDING INQUIRY
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                IMPACT THAT SCALES: BEYOND BORDERS
              </div>
              <p style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
                "How do capable professionals turn knowledge, ideas and opportunity into measurable results that can scale—across roles, organisations, industries and borders?"
              </p>
            </div>

            {/* The 4 Professional Pillars Grid */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#008B8B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                THE 4 PROFESSIONAL FOCUS PILLARS
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                
                {/* Pillar 1 */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '10px', padding: '1.15rem', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ background: '#008B8B', color: '#fff', borderRadius: '4px', padding: '2px 6px', fontSize: '0.72rem', fontWeight: 800 }}>01</span>
                    <strong style={{ fontSize: '0.95rem', color: '#042226' }}>EXECUTION INTELLIGENCE</strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Turning knowledge, plans and intentions into measurable results. Participants examine the gap between knowing and delivering, and the practical systems required to consistently execute.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '10px', padding: '1.15rem', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ background: '#008B8B', color: '#fff', borderRadius: '4px', padding: '2px 6px', fontSize: '0.72rem', fontWeight: 800 }}>02</span>
                    <strong style={{ fontSize: '0.95rem', color: '#042226' }}>SYSTEMS THINKING</strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Moving from individual effort to sustainable ways of working. Exploring how organisations create architectures that allow performance and impact to continue beyond individual effort.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '10px', padding: '1.15rem', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ background: '#008B8B', color: '#fff', borderRadius: '4px', padding: '2px 6px', fontSize: '0.72rem', fontWeight: 800 }}>03</span>
                    <strong style={{ fontSize: '0.95rem', color: '#042226' }}>INFLUENCE AT SCALE</strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Creating influence beyond formal position. Focusing on professional credibility, collaboration, communication, stakeholder relationships and the ability to move people and ideas.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '10px', padding: '1.15rem', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ background: '#008B8B', color: '#fff', borderRadius: '4px', padding: '2px 6px', fontSize: '0.72rem', fontWeight: 800 }}>04</span>
                    <strong style={{ fontSize: '0.95rem', color: '#042226' }}>CAREER CAPITAL & LEVERAGE</strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    A curated networking experience designed to help participants identify key relationships, engage strategically, and convert connections into career leverage and opportunities.
                  </p>
                </div>

              </div>
            </div>

            {/* Journey Vector */}
            <div style={{ background: '#042226', borderRadius: '8px', padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontSize: '0.82rem', fontWeight: 700 }}>
              <span style={{ color: '#00E5D4' }}>THE JOURNEY:</span>
              <span>EXECUTE</span>
              <span style={{ color: '#d4a359' }}>→</span>
              <span>BUILD</span>
              <span style={{ color: '#d4a359' }}>→</span>
              <span>INFLUENCE</span>
              <span style={{ color: '#d4a359' }}>→</span>
              <span>LEVERAGE</span>
              <span style={{ color: '#d4a359' }}>→</span>
              <span style={{ color: '#00E5D4' }}>SCALE</span>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>THE TALK OFFICE • HIPS GLOBAL 2026 PROPOSAL</span>
            <span>DOCUMENT PAGE 02 / 06</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PAGE 3: DUAL DESTINATION & 4D ARCHITECTURE */}
        {/* ========================================================================= */}
        <div className="pdf-page" style={{
          background: '#ffffff',
          color: '#0f172a',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          minHeight: '1120px',
          padding: '3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            {/* Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #00B4B4', paddingBottom: '1rem', marginBottom: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#008B8B', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  SECTION 03 & 04 • STRATEGIC DESTINATIONS & ARCHITECTURE
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: '#042226', margin: '0.2rem 0 0 0' }}>
                  Why Kenya × Rwanda & 4D Model
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <img src="/assets/talk-logo.png" alt="Logo" style={{ height: '24px' }} />
              </div>
            </div>

            {/* Dual Destination Synergy */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2rem' }}>
              
              {/* Kenya Card */}
              <div style={{ background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={18} color="#0d9488" />
                  <strong style={{ fontSize: '1.05rem', color: '#042f2e' }}>KENYA — Business & Connection</strong>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  Nairobi provides the business and metropolitan component of the programme, alongside professional engagements, networking, and landmark wildlife experiences.
                </p>
                <ul style={{ fontSize: '0.8rem', color: '#0f766e', paddingLeft: '1.2rem', lineHeight: 1.5, margin: 0 }}>
                  <li>Nairobi National Park Game Drive</li>
                  <li>David Sheldrick Elephant Orphanage</li>
                  <li>Sightseeing & Institutional Business Engagements</li>
                </ul>
              </div>

              {/* Rwanda Card */}
              <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Compass size={18} color="#b45309" />
                  <strong style={{ fontSize: '1.05rem', color: '#451a03' }}>RWANDA — Exposure & Culture</strong>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  Kigali provides the cultural depth, governance insights, art, and reflection—experiencing Africa's cleanest and fastest-transforming capital.
                </p>
                <ul style={{ fontSize: '0.8rem', color: '#92400e', paddingLeft: '1.2rem', lineHeight: 1.5, margin: 0 }}>
                  <li>Kigali City Tour & Genocide Memorial</li>
                  <li>Niyo Art Center & Curated Art Market</li>
                  <li>Car-Free Zone & Fazenda Sengha Adventure</li>
                </ul>
              </div>

            </div>

            {/* 4D Architecture Table */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#008B8B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                PROPOSED 4D EXPERIENCE ARCHITECTURE
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#042226', color: '#ffffff' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', width: '30%', borderRadius: '6px 0 0 0' }}>DIMENSION</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderRadius: '0 6px 0 0' }}>WHAT IT OFFERS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#008B8B' }}>01. LEARN</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#334155' }}>Professional sessions, intellectual frameworks, and practical executive insights.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#008B8B' }}>02. EXPERIENCE</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#334155' }}>Business immersion, destination exploration, wildlife safaris, and cultural encounters.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#008B8B' }}>03. CONNECT</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#334155' }}>Cross-sector professional networking, peer exchange, and strategic relationship building.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#008B8B' }}>04. REFLECT</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#334155' }}>Structured reflection to process perspectives and design actionable workplace applications.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Experience Highlights Grid */}
            <div>
              <div style={{ fontSize: '0.8rem', color: '#008B8B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                EXPERIENCE HIGHLIGHTS AT A GLANCE
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                <div style={{ background: '#f1f5f9', padding: '0.85rem', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#0f172a', marginBottom: '0.3rem' }}>Professional Sessions</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Business masterclasses & cross-sector interaction.</div>
                </div>
                <div style={{ background: '#f1f5f9', padding: '0.85rem', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#0f172a', marginBottom: '0.3rem' }}>Wildlife & Adventure</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>National Park Safari & Mount Kigali Zipline.</div>
                </div>
                <div style={{ background: '#f1f5f9', padding: '0.85rem', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#0f172a', marginBottom: '0.3rem' }}>Art & City Exploration</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Niyo Arts, Car-Free Zone & Memorial Visit.</div>
                </div>
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>THE TALK OFFICE • HIPS GLOBAL 2026 PROPOSAL</span>
            <span>DOCUMENT PAGE 03 / 06</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PAGE 4: VALUE FOR ORGANIZATIONS & WHO SHOULD ATTEND */}
        {/* ========================================================================= */}
        <div className="pdf-page" style={{
          background: '#ffffff',
          color: '#0f172a',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          minHeight: '1120px',
          padding: '3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            {/* Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #00B4B4', paddingBottom: '1rem', marginBottom: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#008B8B', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  SECTION 05 & 06 • ORGANISATIONAL ROI & AUDIENCE
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: '#042226', margin: '0.2rem 0 0 0' }}>
                  Why Nominate & Target Delegates
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <img src="/assets/talk-logo.png" alt="Logo" style={{ height: '24px' }} />
              </div>
            </div>

            {/* Why Organisations Should Nominate */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#042226', fontWeight: 800, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building size={18} color="#008B8B" /> Why Organisations Should Nominate Their People
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.6, marginBottom: '1rem' }}>
                For forward-thinking organisations, the programme provides an unparalleled opportunity to expose selected executives and high-potential talent to new markets, international business benchmarks, cross-cultural leadership, and innovative systems thinking.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#334155', background: '#f8fafc', padding: '0.6rem 0.85rem', borderRadius: '6px' }}>
                  <CheckCircle2 size={15} color="#008B8B" /> Leadership & Management Development
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#334155', background: '#f8fafc', padding: '0.6rem 0.85rem', borderRadius: '6px' }}>
                  <CheckCircle2 size={15} color="#008B8B" /> High-Potential Talent Acceleration
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#334155', background: '#f8fafc', padding: '0.6rem 0.85rem', borderRadius: '6px' }}>
                  <CheckCircle2 size={15} color="#008B8B" /> Executive Retention & Global Exposure
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#334155', background: '#f8fafc', padding: '0.6rem 0.85rem', borderRadius: '6px' }}>
                  <CheckCircle2 size={15} color="#008B8B" /> Cross-Border Networking & B2B Pipeline
                </div>
              </div>
            </div>

            {/* Who Should Attend */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#042226', fontWeight: 800, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={18} color="#008B8B" /> Who Should Attend
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem', fontSize: '0.82rem', color: '#475569' }}>
                <div style={{ padding: '0.5rem 0.75rem', borderLeft: '3px solid #008B8B', background: '#f8fafc' }}>
                  • Senior & Mid-Level Corporate Professionals
                </div>
                <div style={{ padding: '0.5rem 0.75rem', borderLeft: '3px solid #008B8B', background: '#f8fafc' }}>
                  • C-Suite Executives, Directors & Unit Heads
                </div>
                <div style={{ padding: '0.5rem 0.75rem', borderLeft: '3px solid #008B8B', background: '#f8fafc' }}>
                  • High-Potential Fast-Track Leaders
                </div>
                <div style={{ padding: '0.5rem 0.75rem', borderLeft: '3px solid #008B8B', background: '#f8fafc' }}>
                  • Entrepreneurs & Scale-Up Founders
                </div>
                <div style={{ padding: '0.5rem 0.75rem', borderLeft: '3px solid #008B8B', background: '#f8fafc' }}>
                  • HR & Learning / People Development Directors
                </div>
                <div style={{ padding: '0.5rem 0.75rem', borderLeft: '3px solid #008B8B', background: '#f8fafc' }}>
                  • Public Sector Leaders & Policy Professionals
                </div>
              </div>
            </div>

            {/* Participant Key Takeaways */}
            <div style={{ background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#0d9488', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                CORE PARTICIPANT TAKEAWAYS & COMPETENCIES
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.8rem', color: '#134e4a' }}>
                <div>✓ Multi-African Market Business Exposure</div>
                <div>✓ Executive Execution Intelligence Framework</div>
                <div>✓ Cross-Sector Leadership Network</div>
                <div>✓ Systems Thinking for Scalable Growth</div>
                <div>✓ High-Leverage Strategic Career Capital</div>
                <div>✓ Certificate of International Executive Completion</div>
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>THE TALK OFFICE • HIPS GLOBAL 2026 PROPOSAL</span>
            <span>DOCUMENT PAGE 04 / 06</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PAGE 5: INVESTMENT, INCLUSIONS & EXCLUSIONS */}
        {/* ========================================================================= */}
        <div className="pdf-page" style={{
          background: '#ffffff',
          color: '#0f172a',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          minHeight: '1120px',
          padding: '3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            {/* Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #00B4B4', paddingBottom: '1rem', marginBottom: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#008B8B', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  SECTION 07 & 08 • INVESTMENT & DELIVERABLES
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: '#042226', margin: '0.2rem 0 0 0' }}>
                  Programme Investment & Package Scope
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <img src="/assets/talk-logo.png" alt="Logo" style={{ height: '24px' }} />
              </div>
            </div>

            {/* Pricing Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2rem' }}>
              
              {/* Sharing Tier */}
              <div style={{
                background: 'linear-gradient(135deg, #05262B 0%, #0c3c42 100%)',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #00E5D4'
              }}>
                <span style={{ background: 'rgba(0, 229, 212, 0.2)', color: '#00E5D4', padding: '2px 8px', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  TIER 01 • SHARING
                </span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0.5rem 0 0.2rem 0' }}>
                  ₦2,500,000
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.75rem' }}>
                  Per person • Twin sharing accommodation
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem' }}>
                  From Lagos Hub (Abuja connecting rates apply)
                </div>
              </div>

              {/* Single Occupancy Tier */}
              <div style={{
                background: 'linear-gradient(135deg, #171c26 0%, #0d1219 100%)',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #d4a359'
              }}>
                <span style={{ background: 'rgba(212, 163, 89, 0.2)', color: '#f5d392', padding: '2px 8px', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  TIER 02 • SINGLE OCCUPANCY
                </span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f5d392', margin: '0.5rem 0 0.2rem 0' }}>
                  ₦3,000,000
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.75rem' }}>
                  Per person • Private single executive suite
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem' }}>
                  Full private executive rooming in Nairobi & Kigali
                </div>
              </div>

            </div>

            {/* Inclusions vs Exclusions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              
              {/* Inclusions */}
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} /> PACKAGE INCLUDES
                </div>
                <ul style={{ fontSize: '0.8rem', color: '#334155', paddingLeft: '1.2rem', lineHeight: 1.6, margin: 0 }}>
                  <li>Return multi-flight tickets from Lagos</li>
                  <li>1 night accommodation in Nairobi</li>
                  <li>4 nights accommodation in Kigali</li>
                  <li>All scheduled airport & overland transfers</li>
                  <li>Executive conference facility & masterclasses</li>
                  <li>Guided institutional & company visits</li>
                  <li>Daily breakfast</li>
                  <li>Listed sightseeing (National Park, Genocide Memorial, Niyo Arts)</li>
                  <li>Official Certificate of Completion</li>
                </ul>
              </div>

              {/* Exclusions */}
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', color: '#dc2626', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <XCircle size={16} /> NOT INCLUDED
                </div>
                <ul style={{ fontSize: '0.8rem', color: '#7f1d1d', paddingLeft: '1.2rem', lineHeight: 1.6, margin: 0 }}>
                  <li>Personal expenses & incidental shopping</li>
                  <li>Airport VIP lounge access</li>
                  <li>Lunches</li>
                  <li>Visa fees (where applicable)</li>
                  <li>Optional unlisted adventure activities</li>
                  <li>Fun night / dinner party beverages</li>
                </ul>
              </div>

            </div>

            {/* Wire Settlement Details Box */}
            <div style={{
              background: '#042226',
              color: '#fff',
              borderRadius: '10px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#00E5D4', fontWeight: 800, textTransform: 'uppercase' }}>
                  OFFICIAL SETTLEMENT ACCOUNT
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginTop: '0.2rem' }}>
                  Zenith Bank PLC • Account Name: <strong>The Talk Office</strong>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.72rem', color: '#d4a359', fontWeight: 800, textTransform: 'uppercase' }}>
                  ACCOUNT NUMBER
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f5d392', fontFamily: 'monospace' }}>
                  1019925375
                </div>
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>THE TALK OFFICE • HIPS GLOBAL 2026 PROPOSAL</span>
            <span>DOCUMENT PAGE 05 / 06</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PAGE 6: ADVISORY, CONTACT & INSTITUTIONAL SIGN-OFF */}
        {/* ========================================================================= */}
        <div className="pdf-page" style={{
          background: 'linear-gradient(160deg, #041a1d 0%, #062b30 40%, #0a1118 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          border: '1px solid rgba(0, 229, 212, 0.3)',
          minHeight: '1120px',
          padding: '3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            {/* Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 229, 212, 0.25)', paddingBottom: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#00E5D4', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  SECTION 09 • ADMISSION & SIGN-OFF
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: '#ffffff', margin: '0.2rem 0 0 0' }}>
                  Programme Advisory & Booking Desk
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <img src="/assets/talk-logo.png" alt="Logo" style={{ height: '28px', background: '#fff', padding: '4px 8px', borderRadius: '6px' }} />
              </div>
            </div>

            {/* Destination Flow Diagram */}
            <div style={{ background: 'rgba(7, 18, 24, 0.9)', border: '1px solid rgba(0, 229, 212, 0.25)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#00E5D4', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', textAlign: 'center' }}>
                PROPOSED DESTINATION FLOW
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>NAIROBI, KENYA</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>Business • Networking • Safari • City</div>
                </div>
                <div style={{ color: '#00E5D4', fontSize: '1.2rem', fontWeight: 800 }}>➔</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>KIGALI, RWANDA</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>Culture • Art • Adventure • Reflection</div>
                </div>
                <div style={{ color: '#00E5D4', fontSize: '1.2rem', fontWeight: 800 }}>➔</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f5d392' }}>GLOBAL RETURN</div>
                  <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.2rem' }}>Perspective • Capital • Scale</div>
                </div>
              </div>
            </div>

            {/* Programme Advisory Note */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                PROGRAMME ADVISORY & LOGISTICS NOTE
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                The detailed flight schedule, accommodation bookings, masterclass engagements and day-to-day itinerary will be communicated to confirmed delegates 4 weeks prior to departure. The itinerary is subject to operational considerations, airline schedules and venue availability. Reasonable efforts will be maintained to uphold the highest executive standard.
              </p>
            </div>

            {/* Official Contact Desk */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,229,212,0.12) 0%, rgba(212,163,89,0.08) 100%)',
              border: '1px solid rgba(0, 229, 212, 0.35)',
              borderRadius: '12px',
              padding: '1.75rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#00E5D4', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>DIRECT INQUIRIES & ADMISSIONS</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginTop: '0.3rem' }}>08166399901</div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.2rem' }}>hello@thetalkoffice.com</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>www.thetalkoffice.com</div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-light)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>OFFICIAL SOCIAL CHANNELS</div>
                <div style={{ fontSize: '0.85rem', color: '#f8fafc', marginTop: '0.3rem' }}>Instagram: <strong>@hips.connect</strong></div>
                <div style={{ fontSize: '0.85rem', color: '#f8fafc', marginTop: '0.2rem' }}>Instagram: <strong>@thetalkoffice</strong></div>
                <div style={{ fontSize: '0.75rem', color: '#00E5D4', marginTop: '0.4rem', fontWeight: 600 }}>#HIPSGlobal2026 #ImpactThatScales</div>
              </div>
            </div>

          </div>

          <div>
            <div style={{ textAlign: 'center', margin: '1.5rem 0 1rem 0' }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 800, color: '#00E5D4', fontSize: '1rem', letterSpacing: '0.08em' }}>
                THE TALK OFFICE LTD • EXECUTIVE DOSSIER 2026
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>
                &copy; {new Date().getFullYear()} The Talk Office & HIPS Connect. All Rights Reserved.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', fontSize: '0.75rem', color: '#64748b' }}>
              <span>AUTHORIZED ISSUANCE • NAIROBI & KIGALI EXPEDITION</span>
              <span>DOCUMENT PAGE 06 / 06</span>
            </div>
          </div>
        </div>

      </div>

      {/* Print Specific CSS */}
      <style>{`
        @media print {
          body, html {
            background: #ffffff !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .pdf-page {
            box-shadow: none !important;
            border-radius: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
            width: 100% !important;
            min-height: 100vh !important;
            margin: 0 !important;
            padding: 2.5cm 2cm !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
