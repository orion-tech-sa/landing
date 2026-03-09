import React, { useEffect, useRef } from 'react';
import { useLang } from '../contexts/LanguageContext';

const PILLAR_ICONS = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="market">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="risk">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="algo">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>,
];

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="about-intro">
          <div>
            <span className="section-label fade-up">{t.about.label}</span>
            <h2 className="section-title fade-up" style={{ transitionDelay: '0.1s' }}>
              {t.about.title}
            </h2>
          </div>
          <p className="section-desc fade-up" style={{ transitionDelay: '0.15s' }}>
            {t.about.desc}
          </p>
        </div>

        <div className="about-pillars">
          {t.about.pillars.map((p, i) => (
            <div
              key={p.title}
              className="pillar fade-up"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="pillar-icon">{PILLAR_ICONS[i]}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-stats">
          {t.about.stats.map((s, i) => (
            <div key={s.label} className="fade-up" style={{ transitionDelay: `${0.2 + i * 0.1}s` }}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
