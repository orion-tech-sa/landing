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
      {/* Atmospheric Background */}
      <div className="hero-atmosphere">
        <div className="smoke-layer-1"></div>
        <div className="smoke-layer-2"></div>
        <div className="smoke-layer-3"></div>
        <div className="side-smoke-left"></div>
        <div className="side-smoke-right"></div>
      </div>

      {/* Dynamic background with mouse interaction */}
      <div 
        className="hero-bg-interactive"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(15, 30, 85, 0.15), transparent 50%)`,
          pointerEvents: 'none',
          transition: 'background 0.3s ease',
          zIndex: 1
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          minHeight: '100vh',
          justifyContent: 'center',
          paddingTop: '2rem',
          paddingBottom: '2rem'
        }}>
          
          {/* Orion Logo */}
          <div className="orion-logo-container" style={{
            position: 'relative',
            marginBottom: '3rem',
            width: '3150px',
            height: '1400px',
            maxWidth: '95vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            filter: 'drop-shadow(0 0 60px rgba(29, 78, 216, 0.8))'
          }}>
            <img 
              src="/orion-logo.png" 
              alt="Orion Logo" 
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
            
            {/* Enhanced cosmic glow */}
            <div className="cosmic-glow" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(ellipse, rgba(15, 30, 85, 0.2) 0%, rgba(25, 40, 95, 0.1) 30%, transparent 70%)',
              borderRadius: '50%',
              animation: 'cosmicPulse 6s ease-in-out infinite',
              zIndex: -1
            }}></div>
            
            {/* Nebula effects */}
            <div className="nebula-layer" style={{
              position: 'absolute',
              top: '20%',
              left: '20%',
              width: '60%',
              height: '60%',
              background: 'radial-gradient(circle, rgba(35, 50, 105, 0.1) 0%, transparent 60%)',
              borderRadius: '50%',
              animation: 'nebulaFloat 8s ease-in-out infinite',
              zIndex: 0
            }}></div>
          </div>

          {/* Revolutionary Tagline */}
          <div className="hero-tagline" style={{ marginBottom: '2rem' }}>
            <h1 className="hero-title" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #1d4ed8 50%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 50px rgba(29, 78, 216, 0.5)'
            }}>
              The Future of Intelligence
            </h1>
            
            <p className="hero-subtitle" style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              maxWidth: '800px',
              margin: '0 auto 2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              Orion revolutionizes how you interact with data and artificial intelligence. 
              Experience unprecedented power, precision, and possibilities in every solution we craft.
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="hero-actions" style={{ 
            display: 'flex', 
            gap: '2rem', 
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
            <a href="#contact" className="btn btn-primary hero-cta-primary">
              <span>Launch Your Journey</span>
              <span style={{ marginLeft: '0.8rem', fontSize: '1.2rem' }}>🚀</span>
            </a>
            <a href="#about" className="btn btn-secondary hero-cta-secondary">
              <span>Discover Orion</span>
              <span style={{ marginLeft: '0.8rem' }}>✨</span>
            </a>
          </div>

          {/* Innovation highlights */}
          <div className="hero-innovations" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            width: '100%',
            margin: '0 auto'
          }}>
            {[
              { 
                icon: '🧠',
                title: 'Neural Intelligence',
                description: 'Advanced AI that thinks, learns, and evolves with your needs'
              },
              { 
                icon: '⚡',
                title: 'Quantum Speed',
                description: 'Lightning-fast processing that redefines performance standards'
              },
              { 
                icon: '🔮',
                title: 'Predictive Vision',
                description: 'Foresight capabilities that anticipate tomorrow\'s challenges today'
              }
            ].map((innovation, index) => (
              <div key={index} className="innovation-card" style={{
                background: 'rgba(29, 78, 216, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(29, 78, 216, 0.2)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{innovation.icon}</div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 600, 
                  marginBottom: '0.8rem',
                  color: '#ffffff'
                }}>
                  {innovation.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.5,
                  fontSize: '0.95rem'
                }}>
                  {innovation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating light particles */}
      <div className="particles-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 2
      }}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: Math.random() * 3 + 2 + 'px',
              height: Math.random() * 3 + 2 + 'px',
              background: 'rgba(15, 30, 85, 0.6)',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 4 + 6}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's',
              opacity: Math.random() * 0.8 + 0.2,
              boxShadow: `0 0 20px rgba(15, 30, 85, 0.8)`
            }}
          />
        ))}
      </div>

      {/* Enhanced animations and styles */}
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #000000 0%, #050510 50%, #0a0a1a 100%);
          overflow: hidden;
        }

        .hero-atmosphere {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .smoke-layer-1 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 30% 70%, rgba(15, 30, 85, 0.15) 0%, rgba(25, 40, 95, 0.08) 25%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(35, 50, 105, 0.12) 0%, transparent 40%);
          animation: smokeFloat1 20s ease-in-out infinite;
          filter: blur(1px);
        }

        .smoke-layer-2 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 70% 30%, rgba(25, 40, 95, 0.12) 0%, rgba(15, 30, 85, 0.06) 30%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(35, 50, 105, 0.08) 0%, transparent 45%);
          animation: smokeFloat2 25s ease-in-out infinite reverse;
          filter: blur(0.5px);
        }

        .smoke-layer-3 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 50% 50%, rgba(35, 50, 105, 0.1) 0%, rgba(25, 40, 95, 0.05) 35%, transparent 70%),
            radial-gradient(circle at 90% 10%, rgba(15, 30, 85, 0.06) 0%, transparent 50%);
          animation: smokeFloat3 30s ease-in-out infinite;
          filter: blur(2px);
        }

        .side-smoke-left {
          position: absolute;
          top: 0;
          left: -20%;
          width: 60%;
          height: 100%;
          background: 
            radial-gradient(ellipse 80% 100% at 0% 50%, rgba(15, 30, 85, 0.25) 0%, rgba(25, 40, 95, 0.15) 30%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 20% 70%, rgba(35, 50, 105, 0.2) 0%, transparent 60%);
          animation: sideSmoke1 15s ease-in-out infinite;
          filter: blur(3px);
        }

        .side-smoke-right {
          position: absolute;
          top: 0;
          right: -20%;
          width: 60%;
          height: 100%;
          background: 
            radial-gradient(ellipse 80% 100% at 100% 50%, rgba(15, 30, 85, 0.2) 0%, rgba(25, 40, 95, 0.12) 30%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 30%, rgba(35, 50, 105, 0.15) 0%, transparent 60%);
          animation: sideSmoke2 18s ease-in-out infinite;
          filter: blur(4px);
        }

        @keyframes smokeFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-10px, -20px) rotate(1deg); }
          66% { transform: translate(10px, -10px) rotate(-1deg); }
        }

        @keyframes smokeFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, 15px) rotate(2deg); }
        }

        @keyframes smokeFloat3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(8px, -8px) rotate(-0.5deg); }
          75% { transform: translate(-8px, 8px) rotate(0.5deg); }
        }

        @keyframes sideSmoke1 {
          0%, 100% { 
            transform: translateX(0) scaleY(1);
            opacity: 0.25;
          }
          50% { 
            transform: translateX(15px) scaleY(1.1);
            opacity: 0.4;
          }
        }

        @keyframes sideSmoke2 {
          0%, 100% { 
            transform: translateX(0) scaleY(1);
            opacity: 0.2;
          }
          33% { 
            transform: translateX(-10px) scaleY(1.05);
            opacity: 0.35;
          }
          66% { 
            transform: translateX(-20px) scaleY(0.95);
            opacity: 0.3;
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-40px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.2;
          }
        }

        @keyframes cosmicPulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          33% { 
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.3;
          }
          66% { 
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.1;
          }
        }

        @keyframes nebulaFloat {
          0%, 100% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.1;
          }
          25% { 
            transform: rotate(90deg) scale(1.1);
            opacity: 0.2;
          }
          50% { 
            transform: rotate(180deg) scale(0.9);
            opacity: 0.15;
          }
          75% { 
            transform: rotate(270deg) scale(1.05);
            opacity: 0.25;
          }
        }

        .hero-logo {
          transition: all 0.5s ease;
        }

        .hero-logo:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 60px rgba(29, 78, 216, 0.8)) !important;
        }

        .hero-cta-primary {
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
          box-shadow: 0 10px 30px rgba(29, 78, 216, 0.4);
          font-size: 1.1rem;
          padding: 1.2rem 2.5rem;
          font-weight: 600;
        }

        .hero-cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.6);
        }

        .hero-cta-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(29, 78, 216, 0.5);
          backdrop-filter: blur(20px);
          color: white;
        }

        .hero-cta-secondary:hover {
          background: rgba(29, 78, 216, 0.2);
          border-color: rgba(29, 78, 216, 0.8);
          transform: translateY(-3px);
        }

        .innovation-card:hover {
          transform: translateY(-5px);
          background: rgba(29, 78, 216, 0.2);
          border-color: rgba(29, 78, 216, 0.4);
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.2);
        }

        .particle {
          filter: blur(0.5px);
        }

        /* Mobile optimizations */
        @media (max-width: 1024px) {
          .orion-logo-container {
            width: 80vw !important;
            height: auto !important;
            max-width: 600px !important;
            margin-bottom: 2rem !important;
          }
          
          .hero-content {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          
          .container {
            padding: 0 1rem !important;
          }
        }

        @media (max-width: 768px) {
          .orion-logo-container {
            width: 85vw !important;
            height: auto !important;
            max-width: 500px !important;
            margin-bottom: 1.5rem !important;
          }
          
          .hero-logo {
            width: 90vw !important;
            max-width: 400px !important;
          }
          
          .hero-actions {
            flex-direction: column;
            gap: 1rem !important;
            margin-bottom: 2rem !important;
          }

          .hero-innovations {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-top: 1rem !important;
          }

          .innovation-card {
            padding: 1.5rem !important;
          }
          
          .hero-title {
            font-size: clamp(2rem, 5vw, 3rem) !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-subtitle {
            font-size: clamp(1rem, 2vw, 1.2rem) !important;
            padding: 0 1rem;
          }
          
          .side-smoke-left, .side-smoke-right {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .orion-logo-container {
            width: 90vw !important;
            height: auto !important;
            max-width: 350px !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-cta-primary, .hero-cta-secondary {
            padding: 1rem 1.5rem !important;
            font-size: 0.95rem !important;
            width: 100%;
            max-width: 280px;
          }
          
          .hero-title {
            font-size: clamp(1.8rem, 4vw, 2.5rem) !important;
          }
          
          .hero-subtitle {
            font-size: clamp(0.9rem, 1.8vw, 1.1rem) !important;
            padding: 0 0.5rem;
            line-height: 1.5 !important;
          }
          
          .innovation-card {
            padding: 1.2rem !important;
          }
          
          .hero-content {
            min-height: 100vh !important;
            justify-content: flex-start !important;
            padding-top: 2rem !important;
          }
          
          .container {
            padding: 0 0.5rem !important;
          }
        }

        @media (max-width: 360px) {
          .orion-logo-container {
            width: 95vw !important;
            max-width: 300px !important;
            margin-bottom: 0.8rem !important;
          }
          
          .hero-title {
            font-size: clamp(1.5rem, 3.5vw, 2rem) !important;
          }
          
          .hero-subtitle {
            font-size: clamp(0.85rem, 1.6vw, 1rem) !important;
            margin-bottom: 1.5rem !important;
          }
          
          .hero-cta-primary, .hero-cta-secondary {
            padding: 0.9rem 1.2rem !important;
            font-size: 0.9rem !important;
          }
          
          .innovation-card {
            padding: 1rem !important;
          }
          
          .innovation-card div {
            font-size: 2rem !important;
          }
          
          .innovation-card h3 {
            font-size: 1.1rem !important;
          }
          
          .innovation-card p {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;