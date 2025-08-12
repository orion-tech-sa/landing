import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        background: scrolled 
          ? 'rgba(0, 0, 0, 0.9)' 
          : 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '0 2rem' 
        }}>
          {/* Enhanced Logo */}
          <div className="logo-container" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            cursor: 'pointer'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="logo-icon" style={{
              width: '40px',
              height: '40px',
              background: 'var(--color-gradient-primary)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <span style={{ 
              fontSize: '1.5rem', 
              fontWeight: '800',
              background: 'var(--color-gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em'
            }}>
              ORION
            </span>
          </div>
        
          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex' }}>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '2.5rem',
              alignItems: 'center',
              margin: 0,
              padding: 0
            }}>
              {[
                { href: '#about', label: 'Platform' },
                { href: '#services', label: 'Solutions' },
                { href: '#contact', label: 'Company' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} style={{ 
                    color: 'var(--color-text-secondary)', 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: '500',
                    position: 'relative',
                    padding: '0.5rem 0'
                  }}
                  className="nav-link"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                  }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn btn-primary" style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem'
                }}>
                  Get Started
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem'
          }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {[
                { href: '#about', label: 'Platform' },
                { href: '#services', label: 'Solutions' },
                { href: '#contact', label: 'Company' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ 
                      color: 'var(--color-text-secondary)', 
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '500'
                    }}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" 
                  className="btn btn-primary" 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ width: 'fit-content' }}>
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Enhanced Styles */}
      <style>{`
        .logo-icon:hover {
          transform: scale(1.1) rotate(15deg);
          box-shadow: 0 12px 30px rgba(0, 212, 255, 0.4);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--color-gradient-primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
        }

        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;