import React from 'react';

export default function AnimatedLogo({ size = 34, showText = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}>
      {/* Animated Emblem Frame */}
      <div style={{
        position: 'relative',
        width: `${size + 14}px`,
        height: `${size + 14}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Outer Rotating Geometric Circuit Ring */}
        <svg 
          viewBox="0 0 100 100" 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            animation: 'rotateOrbit 12s linear infinite',
            pointerEvents: 'none'
          }}
        >
          <circle 
            cx="50" 
            cy="50" 
            r="46" 
            fill="none" 
            stroke="rgba(212, 163, 89, 0.4)" 
            strokeWidth="1.5" 
            strokeDasharray="14 10 30 10" 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="rgba(16, 185, 129, 0.4)" 
            strokeWidth="1" 
            strokeDasharray="8 16 20 8" 
          />
          <circle cx="50" cy="4" r="3" fill="#d4a359" />
          <circle cx="96" cy="50" r="2.5" fill="#10b981" />
          <circle cx="50" cy="96" r="3" fill="#f5d392" />
        </svg>

        {/* Counter-rotating Inner Hex Aura */}
        <div style={{
          position: 'absolute',
          inset: '3px',
          borderRadius: '10px',
          border: '1px dashed rgba(212, 163, 89, 0.5)',
          animation: 'reverseRotateOrbit 8s linear infinite'
        }} />

        {/* Logo Container with Shimmer */}
        <div style={{
          position: 'relative',
          background: '#ffffff',
          borderRadius: '8px',
          padding: '4px 7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
          zIndex: 2,
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/talk-logo.png" 
            alt="The Talk Office" 
            style={{ 
              height: `${size - 6}px`, 
              width: 'auto', 
              objectFit: 'contain',
              display: 'block'
            }} 
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.7) 50%, transparent 80%)',
            animation: 'logoGleam 3s infinite'
          }} />
        </div>
      </div>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: '800', 
            fontSize: '1.2rem', 
            letterSpacing: '0.06em',
            color: '#ffffff',
            lineHeight: 1.1
          }}>
            HIPS <span style={{ color: 'var(--gold-primary)' }}>GLOBAL</span>
          </span>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.68rem', 
            color: 'var(--text-muted)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase'
          }}>
            Experience 2026
          </span>
        </div>
      )}

      <style>{`
        @keyframes rotateOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes reverseRotateOrbit {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes logoGleam {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
      `}</style>
    </div>
  );
}
