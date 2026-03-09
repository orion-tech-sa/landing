import React, { useEffect, useMemo, useState } from 'react';
import OrionConstellation from './OrionConstellation';
import { useLang } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { t } = useLang();

  useEffect(() => {
    try {
      setMouse({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    } catch {}
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const stars = useMemo(() => {
    let count = 55;
    try {
      const w = window.innerWidth;
      if (w < 480) count = 25;
      else if (w < 768) count = 38;
    } catch {}
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size:     Math.random() * 1.6 + 0.4,
      left:     Math.random() * 100,
      top:      Math.random() * 100,
      duration: Math.random() * 6 + 5,
      delay:    Math.random() * 8,
      isGold:   Math.random() > 0.88,
    }));
  }, []);

  return (
    <section className="hero">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-layer hero-layer-1" />
        <div className="hero-layer hero-layer-2" />
        <div className="hero-layer hero-layer-3" />
        <div className="hero-side-left" />
        <div className="hero-side-right" />
      </div>

      <OrionConstellation />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(900px at ${mouse.x}px ${mouse.y}px, rgba(201, 168, 76, 0.05), transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 2 }}
      >
        {stars.map(s => (
          <div
            key={s.id}
            style={{
              position: 'absolute',
              width:  `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: '50%',
              left: `${s.left}%`,
              top:  `${s.top}%`,
              background: s.isGold ? 'rgba(232, 201, 106, 0.9)' : 'rgba(210, 230, 255, 0.8)',
              boxShadow: s.isGold
                ? `0 0 ${s.size * 4}px rgba(201, 168, 76, 0.45)`
                : `0 0 ${s.size * 3}px rgba(180, 215, 255, 0.35)`,
              animation: `float ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
              filter: 'blur(0.2px)',
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          <div className="hero-logo-wrap">
            <img src="/orion-logo-white.svg" alt="Orion" className="hero-logo" />
            <div className="hero-logo-glow" aria-hidden="true" />
          </div>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
