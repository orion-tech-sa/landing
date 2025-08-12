import React, { useEffect, useRef, useState } from 'react';

const Innovation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionMousePosition, setSectionMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      
      // Get section bounds for relative positioning
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;
        
        // Only update if mouse is within section
        if (relativeX >= 0 && relativeX <= rect.width && relativeY >= 0 && relativeY <= rect.height) {
          setSectionMousePosition({
            x: (relativeX / rect.width - 0.5) * 2, // Normalize to -1 to 1
            y: (relativeY / rect.height - 0.5) * 2
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="innovation-section" style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at center, rgba(30, 41, 59, 0.4) 0%, rgba(0, 0, 0, 0.98) 70%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Gentle Star Field Background */}
      <div className="star-field" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
      }}>
        {/* Distant Stars */}
        {[...Array(80)].map((_, i) => {
          const baseX = Math.random() * 100;
          const baseY = Math.random() * 100;
          const driftSpeed = 0.5 + Math.random() * 1.5;
          const proximityStrength = 2 + Math.random() * 3;
          
          return (
            <div
              key={`star-${i}`}
              className="star"
              style={{
                position: 'absolute',
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                background: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
                left: `${baseX}%`,
                top: `${baseY}%`,
                borderRadius: '50%',
                animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite, starDrift${i % 3} ${10 + driftSpeed * 5}s ease-in-out infinite`,
                animationDelay: Math.random() * 3 + 's',
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.5)`,
                transform: `translate(${sectionMousePosition.x * proximityStrength}px, ${sectionMousePosition.y * proximityStrength}px)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            />
          );
        })}

        {/* Constellation Lines */}
        <svg 
          width="100%" 
          height="100%" 
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {[...Array(5)].map((_, i) => (
            <g key={`constellation-${i}`} style={{ opacity: 0.3 }}>
              <line
                x1={`${20 + i * 15}%`}
                y1={`${20 + i * 10}%`}
                x2={`${25 + i * 15}%`}
                y2={`${15 + i * 10}%`}
                stroke="rgba(0, 212, 255, 0.6)"
                strokeWidth="1"
                style={{ 
                  animation: `fadeInOut ${8 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
              <line
                x1={`${25 + i * 15}%`}
                y1={`${15 + i * 10}%`}
                x2={`${30 + i * 15}%`}
                y2={`${25 + i * 10}%`}
                stroke="rgba(0, 212, 255, 0.6)"
                strokeWidth="1"
                style={{ 
                  animation: `fadeInOut ${8 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5 + 1}s`
                }}
              />
              <line
                x1={`${30 + i * 15}%`}
                y1={`${25 + i * 10}%`}
                x2={`${35 + i * 15}%`}
                y2={`${20 + i * 10}%`}
                stroke="rgba(0, 212, 255, 0.6)"
                strokeWidth="1"
                style={{ 
                  animation: `fadeInOut ${8 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5 + 2}s`
                }}
              />
            </g>
          ))}
        </svg>

        {/* Floating Celestial Bodies */}
        {[...Array(6)].map((_, i) => {
          const baseX = Math.random() * 100;
          const baseY = Math.random() * 100;
          const size = Math.random() * 60 + 20;
          const proximityStrength = 8 + Math.random() * 12;
          
          return (
            <div
              key={`planet-${i}`}
              className="celestial-body"
              style={{
                position: 'absolute',
                width: size + 'px',
                height: size + 'px',
                background: `radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.3), rgba(124, 58, 237, 0.2))`,
                left: `${baseX}%`,
                top: `${baseY}%`,
                borderRadius: '50%',
                animation: `gentleFloat ${Math.random() * 8 + 12}s ease-in-out infinite, celestialOrbit${i % 2} ${20 + i * 5}s linear infinite`,
                animationDelay: Math.random() * 4 + 's',
                filter: 'blur(0.5px)',
                transform: `translate(${sectionMousePosition.x * proximityStrength}px, ${sectionMousePosition.y * proximityStrength}px)`,
                transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                opacity: 0.6
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div className="innovation-content">
          <div className="section-badge" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(124, 58, 237, 0.2)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            borderRadius: '50px',
            padding: '0.75rem 1.5rem',
            marginBottom: '2rem',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#8b5cf6',
            backdropFilter: 'blur(20px)'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            Innovation Lab
          </div>

          <h2 style={{
            fontSize: '4rem',
            fontWeight: '900',
            marginBottom: '2rem',
            color: 'var(--color-text-primary)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Where Ideas{' '}
            <span className="gradient-text" style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Transform Reality
            </span>
          </h2>

          <p style={{
            fontSize: '1.4rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: '1.7'
          }}>
            Step into our innovation laboratory where breakthrough technologies are born. 
            Experience the convergence of human creativity and artificial intelligence 
            as we reshape the boundaries of what's possible.
          </p>

          {/* Interactive Stats */}
          <div className="innovation-stats" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '4rem',
            maxWidth: '900px',
            margin: '4rem auto 0'
          }}>
            {[
              { number: '127+', label: 'Patents Filed', color: 'rgba(0, 212, 255, 0.8)' },
              { number: '2.3M+', label: 'Models Trained', color: 'rgba(124, 58, 237, 0.8)' },
              { number: '99.7%', label: 'Accuracy Rate', color: 'rgba(255, 107, 53, 0.8)' }
            ].map((stat, index) => (
              <div key={index} className="stat-card" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem 1rem',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.borderColor = stat.color;
                e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color.replace('0.8', '0.3')}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: stat.color,
                  marginBottom: '0.5rem',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth Space Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
            filter: brightness(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
            filter: brightness(1.5);
          }
        }

        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.4;
          }
          33% { 
            transform: translateY(-15px) translateX(8px) rotate(2deg);
            opacity: 0.7;
          }
          66% { 
            transform: translateY(5px) translateX(-10px) rotate(-2deg);
            opacity: 0.5;
          }
        }

        @keyframes fadeInOut {
          0%, 100% { 
            opacity: 0.2; 
            stroke-width: 0.5;
          }
          50% { 
            opacity: 0.8; 
            stroke-width: 1.5;
          }
        }

        /* Baseline star drift animations */
        @keyframes starDrift0 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(3px, -2px) rotate(90deg); }
          50% { transform: translate(-1px, 4px) rotate(180deg); }
          75% { transform: translate(-4px, -1px) rotate(270deg); }
        }

        @keyframes starDrift1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(-2px, 3px) rotate(120deg); }
          66% { transform: translate(4px, -3px) rotate(240deg); }
        }

        @keyframes starDrift2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          20% { transform: translate(2px, 2px) rotate(72deg); }
          40% { transform: translate(-3px, 1px) rotate(144deg); }
          60% { transform: translate(1px, -4px) rotate(216deg); }
          80% { transform: translate(-2px, -2px) rotate(288deg); }
        }

        /* Celestial body orbit animations */
        @keyframes celestialOrbit0 {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(8px, -5px) rotate(90deg); }
          50% { transform: translate(0px, 10px) rotate(180deg); }
          75% { transform: translate(-8px, -5px) rotate(270deg); }
          100% { transform: translate(0px, 0px) rotate(360deg); }
        }

        @keyframes celestialOrbit1 {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(-6px, 8px) rotate(120deg); }
          66% { transform: translate(12px, -4px) rotate(240deg); }
          100% { transform: translate(0px, 0px) rotate(360deg); }
        }

        .innovation-section {
          background-attachment: fixed;
        }

        @media (max-width: 768px) {
          .innovation-stats {
            grid-template-columns: 1fr !important;
            gap: 1.5rem;
          }
          
          .blob-1, .blob-2 {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Innovation;