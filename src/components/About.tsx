import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import SpotlightCard from './SpotlightCard';
import { useScramble } from '../hooks/useScramble';

/* Stat number that scrambles into view when scrolled to */
const ScrambleStat: React.FC<{ num: string; label: string; animate: boolean }> = ({
  num,
  label,
  animate,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.7 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayed = useScramble(num, {
    enabled:  animate && inView,
    delay:    0,
    duration: 650,
  });

  return (
    <div ref={ref} className="fade-up">
      <div className="stat-num">{animate ? displayed : num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { t, lang } = useLang();
  const animate = lang === 'en';

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]); // re-observe when language changes so newly rendered elements get visible class

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="about-header">
          <span className="section-label fade-up">{t.about.label}</span>
          <h2 className="section-title fade-up" style={{ transitionDelay: '0.08s' }}>
            {t.about.title}
          </h2>
          <p className="about-body fade-up" style={{ transitionDelay: '0.14s' }}>
            {t.about.body}
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="about-divide fade-up" style={{ transitionDelay: '0.18s' }}>
          <div className="divide-col">
            <span className="divide-col-label before">Before Orion</span>
            <ul className="divide-list">
              {t.about.before.map((item, i) => (
                <li key={i} className="divide-item before fade-up" style={{ transitionDelay: `${0.22 + i * 0.07}s` }}>
                  <span className="divide-marker">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="divide-col">
            <span className="divide-col-label after">With Orion</span>
            <ul className="divide-list">
              {t.about.after.map((item, i) => (
                <li key={i} className="divide-item after fade-up" style={{ transitionDelay: `${0.3 + i * 0.07}s` }}>
                  <span className="divide-marker">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How it works — spotlight cards */}
        <div className="how-works fade-up" style={{ transitionDelay: '0.22s' }}>
          {t.about.steps.map(step => (
            <SpotlightCard key={step.num} className="step">
              <span className="step-num">{step.num}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </SpotlightCard>
          ))}
        </div>

        {/* Stats — scramble on scroll */}
        <div className="about-stats">
          {t.about.stats.map((s, i) => (
            <ScrambleStat
              key={i}
              num={s.num}
              label={s.label}
              animate={animate}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
