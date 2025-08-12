import React, { useState, useEffect, useRef } from 'react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card, index) => {
      card.setAttribute('style', `animation-delay: ${index * 0.1}s`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
      title: 'Neural AI Systems',
      subtitle: 'Advanced Machine Intelligence',
      description: 'Revolutionary AI systems that learn, adapt, and evolve. Our neural networks process complex patterns with human-like intuition while delivering superhuman accuracy and speed.',
      features: [
        'Large Language Models (LLM)',
        'Computer Vision & Recognition',
        'Predictive Intelligence',
        'Natural Language Processing',
        'Automated Decision Making'
      ],
      gradient: 'var(--color-gradient-primary)',
      bgColor: 'rgba(0, 212, 255, 0.05)'
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
      title: 'Quantum Analytics',
      subtitle: 'Real-time Data Intelligence',
      description: 'Transform massive datasets into actionable insights in real-time. Our quantum-inspired algorithms process terabytes of data with unprecedented speed and precision.',
      features: [
        'Real-time Stream Processing',
        'Advanced Data Visualization',
        'Business Intelligence Dashboards',
        'Anomaly Detection',
        'Performance Optimization'
      ],
      gradient: 'var(--color-gradient-secondary)',
      bgColor: 'rgba(255, 107, 53, 0.05)'
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.5-1.5 4.5 0 6s4.5 1.5 6 0l6-6c1.5-1.5 1.5-4.5 0-6s-4.5-1.5-6 0l-3 3"/><path d="m14 10 4-4"/><path d="m8 16 4-4"/></svg>,
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable Enterprise Solutions',
      description: 'Military-grade cloud infrastructure that scales infinitely. Deploy globally with zero-downtime, automatic scaling, and enterprise-level security protocols.',
      features: [
        'Global Edge Deployment',
        'Auto-scaling Infrastructure',
        'Zero-downtime Deployment',
        'Enterprise Security',
        'Multi-cloud Strategy'
      ],
      gradient: 'var(--color-gradient-tertiary)',
      bgColor: 'rgba(102, 126, 234, 0.05)'
    }
  ];

  return (
    <section id="services" className="section" ref={sectionRef} style={{ 
      background: 'linear-gradient(135deg, var(--color-background-secondary) 0%, var(--color-background-tertiary) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="text-center mb-12">
          <div className="section-badge" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(124, 58, 237, 0.1)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            borderRadius: '50px',
            padding: '0.5rem 1rem',
            marginBottom: '2rem',
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#8b5cf6'
          }}>
            <span style={{ fontSize: '1rem' }}>⚡</span>
            Solutions Portfolio
          </div>

          <h2 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '800', 
            marginBottom: '1.5rem',
            color: 'var(--color-text-primary)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Enterprise-grade{' '}
            <span className="gradient-text">AI Solutions</span>
          </h2>
          
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'var(--color-text-secondary)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Comprehensive suite of AI-powered tools and platforms designed to transform 
            your business operations, accelerate growth, and unlock new possibilities.
          </p>
        </div>
        
        {/* Interactive Service Cards */}
        <div className="services-grid" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2.5rem',
          marginTop: '5rem' 
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card card"
              onMouseEnter={() => setActiveService(index)}
              style={{
                background: service.bgColor,
                border: activeService === index ? `2px solid ${service.gradient.includes('primary') ? 'var(--color-accent)' : service.gradient.includes('secondary') ? 'var(--color-accent-secondary)' : '#8b5cf6'}` : '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Hover Effect Background */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: activeService === index ? '0' : '-100%',
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${service.gradient.includes('primary') ? 'rgba(0, 212, 255, 0.1)' : service.gradient.includes('secondary') ? 'rgba(255, 107, 53, 0.1)' : 'rgba(139, 92, 246, 0.1)'} 0%, transparent 70%)`,
                transition: 'left 0.5s ease',
                pointerEvents: 'none'
              }} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Service Header */}
                <div className="service-header" style={{ marginBottom: '2rem' }}>
                  <div className="service-icon" style={{
                    width: '80px',
                    height: '80px',
                    background: service.gradient,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    boxShadow: `0 20px 40px ${service.gradient.includes('primary') ? 'rgba(0, 212, 255, 0.3)' : service.gradient.includes('secondary') ? 'rgba(255, 107, 53, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
                    transition: 'all 0.4s ease'
                  }}>
                    {service.icon}
                  </div>
                  
                  <div className="service-subtitle" style={{
                    fontSize: '0.85rem',
                    color: service.gradient.includes('primary') ? 'var(--color-accent)' : service.gradient.includes('secondary') ? 'var(--color-accent-secondary)' : '#8b5cf6',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {service.subtitle}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    marginBottom: '1rem',
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.01em'
                  }}>
                    {service.title}
                  </h3>
                </div>

                {/* Service Description */}
                <p style={{ 
                  color: 'var(--color-text-secondary)', 
                  marginBottom: '2rem',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="service-features">
                  <h4 style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-primary)',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Key Capabilities
                  </h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    display: 'grid',
                    gap: '0.75rem'
                  }}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-secondary)'
                      }}>
                        <span style={{ 
                          color: service.gradient.includes('primary') ? 'var(--color-accent)' : service.gradient.includes('secondary') ? 'var(--color-accent-secondary)' : '#8b5cf6',
                          marginRight: '0.75rem',
                          fontSize: '1.1rem'
                        }}>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service CTA */}
                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <button 
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      background: activeService === index ? service.gradient : 'rgba(255, 255, 255, 0.05)',
                      color: activeService === index ? 'white' : 'var(--color-text-primary)',
                      border: activeService === index ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span>Learn More</span>
                    <span style={{ fontSize: '1.2rem' }}>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="cta-section" style={{ 
          marginTop: '6rem',
          textAlign: 'center',
          padding: '4rem 0',
          background: 'rgba(0, 212, 255, 0.05)',
          borderRadius: '24px',
          border: '1px solid rgba(0, 212, 255, 0.1)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'var(--color-text-primary)'
          }}>
            Ready to transform your business?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join 500+ enterprises already leveraging Orion AI to drive innovation and growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
              Start Building Today
            </a>
            <a href="#about" className="btn btn-secondary">
              Schedule Demo
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .service-icon:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.4) !important;
        }

        .service-card:hover .service-icon {
          transform: translateY(-5px) scale(1.05);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;