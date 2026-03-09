import React, { useEffect, useRef } from 'react';

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Market Intelligence',
    desc: 'Real-time data feeds, order-book depth, and Saudi market microstructure analytics — giving you the edge before the open.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Risk-Aware Execution',
    desc: 'Pre-trade risk checks, position limits, and smart order routing — every order evaluated before it leaves the system.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Algorithmic Systems',
    desc: 'TWAP, VWAP, and custom alpha strategies engineered to minimise market impact on Tadawul and the Saudi derivatives market.',
  },
];

const stats = [
  { num: '<1ms',  label: 'Execution Latency' },
  { num: '99.9%', label: 'System Uptime' },
  { num: '24/7',  label: 'Market Coverage' },
  { num: 'SAR',   label: 'Native Currency' },
];

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

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
            <span className="section-label fade-up">About Orion</span>
            <h2 className="section-title fade-up" style={{ transitionDelay: '0.1s' }}>
              Built for Saudi Markets
            </h2>
          </div>
          <p className="section-desc fade-up" style={{ transitionDelay: '0.15s' }}>
            Orion is a Saudi-based algorithmic trading and market intelligence firm. We design systems
            that operate at the intersection of data, speed, and discipline — enabling institutional
            participants to execute with precision on Tadawul and beyond.
          </p>
        </div>

        <div className="about-pillars">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="pillar fade-up"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-stats">
          {stats.map((s, i) => (
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
