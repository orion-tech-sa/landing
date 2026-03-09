import React, { useEffect, useRef } from 'react';
import { useLang } from '../contexts/LanguageContext';

const SERVICE_ICONS = [
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="data">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>,
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="exec">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>,
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="ai">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>,
];

const Services: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <div className="services-header">
          <span className="section-label fade-up">{t.services.label}</span>
          <h2 className="section-title fade-up" style={{ transitionDelay: '0.1s' }}>
            {t.services.title}
          </h2>
          <p className="section-desc fade-up" style={{ transitionDelay: '0.15s' }}>
            {t.services.desc}
          </p>
        </div>

        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <div
              key={s.num}
              className="service-card fade-up"
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="service-num">{s.num}</div>
              <div className="service-icon">{SERVICE_ICONS[i]}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f} className="service-feature">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
