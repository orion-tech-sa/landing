import React, { useEffect, useRef } from 'react';
import { useLang } from '../contexts/LanguageContext';
import SpotlightCard from './SpotlightCard';

const Services: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <div className="services-header">
          <span className="section-label fade-up">{t.services.label}</span>
          <h2 className="section-title fade-up" style={{ transitionDelay: '0.08s' }}>
            {t.services.title}
          </h2>
          <p className="section-desc fade-up" style={{ transitionDelay: '0.14s' }}>
            {t.services.desc}
          </p>
        </div>

        <div className="services-grid fade-up" style={{ transitionDelay: '0.2s' }}>
          {t.services.items.map(s => (
            <SpotlightCard key={s.num} className="service-card">
              <span className="service-num">{s.num}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f} className="service-feature">{f}</li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
