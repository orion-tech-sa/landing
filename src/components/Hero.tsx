import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      {/* Dynamic background with mouse interaction */}
      <div 
        className="hero-bg-interactive"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.15), transparent 40%)`,
          pointerEvents: 'none',
          transition: 'background 0.3s ease'
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content animate-fade-in-up" style={{ paddingTop: '80px' }}>
          {/* Modern logo/brand */}
          <div className="hero-brand" style={{ 
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <div className="brand-icon" style={{
              width: '60px',
              height: '60px',
              background: 'var(--color-gradient-primary)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
          </div>

          <h1 className="hero-title">
            Build the future with{' '}
            <span className="gradient-text">Orion AI</span>
          </h1>
          
          <p className="hero-subtitle">
            Next-generation artificial intelligence and data analytics platform. 
            Transform your business with cutting-edge technology that adapts, learns, and evolves.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="hero-actions" style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
            <a href="#contact" className="btn btn-primary">
              <span>Start Building</span>
              <span style={{ marginLeft: '0.5rem' }}>→</span>
            </a>
            <a href="#about" className="btn btn-secondary">
              <span>Watch Demo</span>
              <span style={{ marginLeft: '0.5rem' }}>▶</span>
            </a>
          </div>

          {/* Feature highlights */}
          <div className="hero-features" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            opacity: 0.8
          }}>
            {[
              { 
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.5-1.5 4.5 0 6s4.5 1.5 6 0l6-6c1.5-1.5 1.5-4.5 0-6s-4.5-1.5-6 0l-3 3"/><path d="m14 10 4-4"/><path d="m8 16 4-4"/></svg>, 
                label: 'Lightning Fast' 
              },
              { 
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>, 
                label: 'AI-Powered' 
              },
              { 
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="m7 11V7a5 5 0 0 1 10 0v4"/></svg>, 
                label: 'Secure & Private' 
              }
            ].map((feature, index) => (
              <div key={index} className="feature-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)'
              }}>
                <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>{feature.icon}</span>
                {feature.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="particles-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'var(--color-accent)',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's',
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: `0 0 10px var(--color-accent)`
            }}
          />
        ))}
      </div>

      {/* Enhanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes floatMobile {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-10px) rotate(180deg);
            opacity: 1;
          }
        }

        .hero-content {
          animation: fadeInUp 1.2s ease-out;
        }

        .hero-brand {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-actions {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .hero-features {
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .brand-icon:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.4);
        }

        .particle {
          filter: blur(0.5px);
        }

        .feature-item {
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          color: var(--color-text-primary);
          transform: translateY(-2px);
        }

        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .brand-icon {
            animation: floatMobile 3s ease-in-out infinite !important;
          }
          
          .particle {
            animation: floatMobile 4s ease-in-out infinite !important;
          }
          
          .hero-content {
            padding-top: 100px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;