import React, { useEffect, useRef } from 'react';
import { useLang } from '../contexts/LanguageContext';

const Innovation: React.FC = () => {
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
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="contact-inner">
          <span className="section-label fade-up">{t.contact.label}</span>
          <h2 className="section-title fade-up" style={{ transitionDelay: '0.08s' }}>
            {t.contact.title}
          </h2>
          <p className="section-desc fade-up" style={{ transitionDelay: '0.14s' }}>
            {t.contact.desc}
          </p>

          <p className="contact-note fade-up" style={{ transitionDelay: '0.2s' }}>
            {t.contact.note}
          </p>

          <a
            href="mailto:info@orion.sa"
            className="contact-email fade-up"
            style={{ transitionDelay: '0.24s' }}
          >
            info@orion.sa
          </a>

          <div className="contact-socials fade-up" style={{ transitionDelay: '0.28s' }}>
            <a
              href="https://www.linkedin.com/company/orion-sa-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://x.com/Orion_Saudi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
