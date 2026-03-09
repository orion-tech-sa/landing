import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    try {
      setMouse({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    } catch {}
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero">
      {/* Atmospheric layers (CSS-driven animations) */}
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-layer hero-layer-1" />
        <div className="hero-layer hero-layer-2" />
        <div className="hero-layer hero-layer-3" />
        <div className="hero-side-left" />
        <div className="hero-side-right" />
      </div>

      {/* Mouse-tracking radial — only truly dynamic inline style */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(800px at ${mouse.x}px ${mouse.y}px, rgba(201, 168, 76, 0.07), transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          <div className="hero-logo-wrap">
            <img src="/orion-logo.png" alt="Orion" className="hero-logo" />
            <div className="hero-logo-glow" aria-hidden="true" />
          </div>

          <h1 className="hero-title">Precision in Every Trade</h1>
          <p className="hero-subtitle">
            Algorithmic execution and market intelligence for the Saudi capital markets —
            built on risk-aware systems that deliver.
          </p>
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
