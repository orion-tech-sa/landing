import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: sectionRef } = useScrollAnimation();

  return (
    <section id="about" className="section section-transition fade-in-section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-badge" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(0, 212, 255, 0.1)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            borderRadius: '50px',
            padding: '0.5rem 1rem',
            marginBottom: '2rem',
            fontSize: '0.85rem',
            fontWeight: '500',
            color: 'var(--color-accent)'
          }}>
            <span style={{ fontSize: '1rem' }}>✨</span>
            Platform Overview
          </div>
          
          <h2 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '800', 
            marginBottom: '1.5rem',
            color: 'var(--color-text-primary)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Redefining AI with{' '}
            <span className="gradient-text">Orion Intelligence</span>
          </h2>
          
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'var(--color-text-secondary)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Our next-generation platform combines advanced machine learning, 
            real-time analytics, and intuitive interfaces to deliver unprecedented 
            insights and automation capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-3" style={{ marginTop: '5rem', gap: '2.5rem' }}>
          {[
            {
              icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
              title: 'Neural Processing',
              description: 'Advanced neural networks that learn and adapt in real-time, processing complex patterns with human-like intelligence and unprecedented accuracy.',
              gradient: 'var(--color-gradient-primary)',
              delay: '0.1s'
            },
            {
              icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
              title: 'Quantum Speed',
              description: 'Lightning-fast processing powered by quantum-inspired algorithms that handle massive datasets in milliseconds, not hours.',
              gradient: 'var(--color-gradient-secondary)',
              delay: '0.2s'
            },
            {
              icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
              title: 'Enterprise Security',
              description: 'Military-grade encryption and privacy-first architecture ensuring your data remains secure while delivering powerful insights.',
              gradient: 'var(--color-gradient-tertiary)',
              delay: '0.3s'
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="feature-card card text-center stagger-animation"
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `conic-gradient(from 0deg, transparent, ${feature.gradient.includes('primary') ? 'rgba(0, 212, 255, 0.1)' : feature.gradient.includes('secondary') ? 'rgba(255, 107, 53, 0.1)' : 'rgba(102, 126, 234, 0.1)'}, transparent)`,
                animation: 'rotate 8s linear infinite',
                opacity: 0.7
              }} />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="feature-icon" style={{
                  width: '90px',
                  height: '90px',
                  background: feature.gradient,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontSize: '2.5rem',
                  boxShadow: `0 20px 40px ${feature.gradient.includes('primary') ? 'rgba(0, 212, 255, 0.3)' : feature.gradient.includes('secondary') ? 'rgba(255, 107, 53, 0.3)' : 'rgba(102, 126, 234, 0.3)'}`,
                  transition: 'all 0.4s ease'
                }}>
                  {feature.icon}
                </div>
                
                <h3 style={{ 
                  fontSize: '1.6rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  {feature.title}
                </h3>
                
                <p style={{ 
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section" style={{
          marginTop: '6rem',
          padding: '3rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div className="grid" style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            textAlign: 'center'
          }}>
            {[
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '10ms', label: 'Response Time' },
              { number: '500+', label: 'Enterprise Clients' },
              { number: '50B+', label: 'Data Points Processed' }
            ].map((stat, index) => (
              <div key={index} className="stat-item" style={{
                animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s both`
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'var(--color-accent)',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .feature-icon:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.4);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.05) translateY(-5px);
        }

        @media (max-width: 768px) {
          .stats-section .grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;