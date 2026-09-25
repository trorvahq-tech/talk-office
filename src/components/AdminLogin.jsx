import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowLeft, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function AdminLogin({ onLoginSuccess, onExit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const cleanEmail = email.trim().toLowerCase();
      const cleanPassword = password.trim();

      if (cleanEmail === 'admin@talkoffice.com' && cleanPassword === 'Password@0099') {
        sessionStorage.setItem('hips_admin_authenticated', 'true');
        sessionStorage.setItem('hips_admin_user', cleanEmail);
        setIsLoading(false);
        onLoginSuccess();
      } else {
        setIsLoading(false);
        setError('Invalid credentials. Please verify your administrator email and password.');
      }
    }, 400);
  };



  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'radial-gradient(circle at 50% 20%, #101624 0%, #05070a 70%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }}>
      {/* Background Ambient Glows */}
      <div style={{
        position: 'absolute',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 163, 89, 0.12) 0%, transparent 70%)',
        top: '10%',
        left: '20%',
        pointerEvents: 'none',
        filter: 'blur(50px)'
      }} />
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        bottom: '10%',
        right: '20%',
        pointerEvents: 'none',
        filter: 'blur(50px)'
      }} />

      {/* Login Card */}
      <div className="glass-panel" style={{
        maxWidth: '460px',
        width: '100%',
        padding: 'clamp(2rem, 5vw, 2.75rem)',
        borderRadius: '24px',
        border: '1px solid rgba(212, 163, 89, 0.35)',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
        position: 'relative',
        zIndex: 10,
        background: 'rgba(9, 13, 21, 0.92)',
        backdropFilter: 'blur(20px)'
      }}>
        {/* Top Back Link */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
          <button
            onClick={onExit}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              padding: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
          >
            <ArrowLeft size={14} /> Back to Live Site
          </button>

          <span className="badge-pill badge-gold" style={{ fontSize: '0.68rem', padding: '0.15rem 0.55rem' }}>
            <ShieldCheck size={12} /> RESTRICTED ACCESS
          </span>
        </div>

        {/* Center Brand Identity */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <AnimatedLogo size={36} showText={false} />
          </div>
          <h1 style={{
            fontSize: '1.5rem',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.04em',
            color: '#fff',
            marginBottom: '0.3rem'
          }}>
            TALK OFFICE <span style={{ color: 'var(--gold-primary)' }}>ADMIN</span>
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0 }}>
            HIPS Global Experience 2026 Operations Console
          </p>
        </div>


        {/* Error Alert */}
        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            marginBottom: '1.25rem',
            color: '#fca5a5',
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <AlertCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Mail size={13} /> Administrator Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@talkoffice.com"
              className="form-input"
              style={{ padding: '0.8rem 1rem' }}
              autoComplete="username"
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.75rem' }}>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Lock size={13} /> Secure Access Key
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="form-input"
                style={{ padding: '0.8rem 2.75rem 0.8rem 1rem' }}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-gold"
            style={{
              width: '100%',
              padding: '0.85rem',
              fontSize: '0.95rem',
              justifyContent: 'center',
              cursor: isLoading ? 'wait' : 'pointer',
              opacity: isLoading ? 0.8 : 1
            }}
          >
            {isLoading ? (
              <span>Authenticating Session...</span>
            ) : (
              <>
                Enter Admin Console <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          fontSize: '0.75rem',
          color: '#64748b'
        }}>
          Protected by The Talk Office Enterprise Security • HIPS 4.0
        </div>
      </div>
    </div>
  );
}
