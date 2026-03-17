import React, { useEffect, useMemo, useState } from 'react';
import OrionConstellation from './OrionConstellation';
import { useLang } from '../contexts/LanguageContext';
import { useScramble } from '../hooks/useScramble';
import { useTypewriter } from '../hooks/useTypewriter';

const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

const ORDERS = [
  {
    cls:   'hero-order-a',
    type:  'EXECUTED',
    value: 'BUY 500 × ARAMCO',
    meta:  'VWAP · 28.4ms latency',
    dot:   'green',
  },
  {
    cls:   'hero-order-b',
    type:  'ALGO RUNNING',
    value: 'TWAP · SABIC × 200',
    meta:  'Risk nominal · 2 of 5 filled',
    dot:   'blue',
  },
  {
    cls:   'hero-order-c',
    type:  'SIGNAL',
    value: 'Order flow imbalance',
    meta:  'ARAMCO · Executing in 3ms',
    dot:   'green',
  },
];

const Hero: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { t, lang } = useLang();
  const animate = lang === 'en' && !prefersReducedMotion;

  const titleDisplay = useScramble(t.hero.title, {
    enabled:  animate,
    delay:    750,
    duration: 1100,
  });

  const { displayed: eyebrowDisplay, done: eyebrowDone } = useTypewriter(t.hero.eyebrow, {
    enabled: animate,
    speed:   32,
    delay:   160,
  });

  useEffect(() => {
    try { setMouse({ x: window.innerWidth / 2, y: window.innerHeight / 2 }); } catch {}
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const stars = useMemo(() => {
    let count = 28;
    try {
      const w = window.innerWidth;
      if (w < 480) count = 12;
      else if (w < 768) count = 18;
    } catch {}
    return Array.from({ length: count }).map((_, i) => ({
      id:       i,
      size:     Math.random() * 1.1 + 0.3,
      left:     Math.random() * 100,
      top:      Math.random() * 100,
      duration: Math.random() * 9 + 8,
      delay:    Math.random() * 12,
    }));
  }, []);

  return (
    <section className="hero">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-scanline" aria-hidden="true" />
      <OrionConstellation />

      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(580px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.022), transparent 55%)`,
          pointerEvents: 'none', zIndex: 2,
        }}
      />

      {/* Stars */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 2 }}>
        {stars.map(s => (
          <div
            key={s.id}
            style={{
              position: 'absolute',
              width: `${s.size}px`, height: `${s.size}px`,
              borderRadius: '50%',
              left: `${s.left}%`, top: `${s.top}%`,
              background: 'rgba(210, 225, 255, 0.65)',
              animation: `float ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Rising chart line */}
      <svg
        className="hero-chart"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0"    />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path
          className="hero-chart-fill"
          d="M0 210 L0 185 L40 175 L75 180 L110 162 L150 168 L185 148 L220 155 L260 132 L295 140 L330 118 L370 125 L405 105 L440 112 L480 90 L515 98 L550 76 L590 84 L625 62 L660 70 L700 50 L735 58 L770 38 L810 46 L845 28 L880 35 L920 16 L955 24 L990 8 L1030 16 L1065 4 L1100 12 L1140 2 L1175 10 L1200 6 L1200 210 Z"
        />
        {/* Chart line */}
        <path
          className="hero-chart-line"
          d="M0 185 L40 175 L75 180 L110 162 L150 168 L185 148 L220 155 L260 132 L295 140 L330 118 L370 125 L405 105 L440 112 L480 90 L515 98 L550 76 L590 84 L625 62 L660 70 L700 50 L735 58 L770 38 L810 46 L845 28 L880 35 L920 16 L955 24 L990 8 L1030 16 L1065 4 L1100 12 L1140 2 L1175 10 L1200 6"
        />
      </svg>

      {/* Floating order execution cards */}
      <div className="hero-orders" aria-hidden="true">
        {ORDERS.map(o => (
          <div key={o.cls} className={`hero-order ${o.cls}`}>
            <div className="hero-order-header">
              <span className={`hero-order-dot ${o.dot === 'blue' ? 'blue' : ''}`} />
              <span className="hero-order-type">{o.type}</span>
            </div>
            <div className="hero-order-value">{o.value}</div>
            <div className="hero-order-meta">{o.meta}</div>
          </div>
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          <div className="hero-eyebrow">
            {animate ? eyebrowDisplay : t.hero.eyebrow}
            {animate && !eyebrowDone && <span className="cursor-blink" aria-hidden="true" />}
          </div>
          <h1 className="hero-title">
            {animate ? titleDisplay : t.hero.title}
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-ctas">
            <a href="#contact"  className="btn btn-primary">{t.hero.cta}</a>
            <a href="#services" className="btn btn-outline">{t.hero.secondary}</a>
          </div>
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
