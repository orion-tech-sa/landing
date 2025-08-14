import React from 'react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  return (
    <footer id="contact" style={{ 
      background: 'linear-gradient(135deg, var(--color-background-tertiary) 0%, var(--color-background) 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '6rem 0 2rem',
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
          radial-gradient(circle at 10% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Footer Content */}
        <div className="footer-grid" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          {/* Company Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--color-gradient-primary)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)'
              }}>
                ⚡
              </div>
              <span style={{ 
                fontSize: '1.8rem', 
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
            
            <p style={{ 
              color: 'var(--color-text-secondary)',
              lineHeight: '1.7',
              marginBottom: '2rem',
              fontSize: '1.1rem',
              maxWidth: '500px'
            }}>
              Building the future with next-generation AI and data intelligence. 
              Transform your business with cutting-edge technology that learns, 
              adapts, and evolves with your needs.
            </p>
            
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent)' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@orion.sa" style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                >
                  info@orion.sa
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginTop: '2rem'
            }}>
              {[
                { 
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5 0-1.2-.5-2.4-1.3-3.3a5 5 0 0 0 .1-3.9s-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6.2 0C6.5 5.8 5.4 6.2 5.4 6.2a5 5 0 0 0 .1 3.9A5.4 5.4 0 0 0 4.2 13c0 3.5 3 5.5 6 5.5-.4.4-.8 1-1 1.6-.2.3-.1.7.3.9l.4.1c.5.1 1-.2 1.1-.7.1-.5 0-1.1.8-1.5z"/></svg>, 
                  label: 'GitHub', 
                  href: '#' 
                },
                { 
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>, 
                  label: 'LinkedIn', 
                  href: '#' 
                },
                { 
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>, 
                  label: 'Twitter', 
                  href: '#' 
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-gradient-primary)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 212, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ 
              color: 'var(--color-text-primary)',
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '2rem',
              letterSpacing: '-0.01em'
            }}>
              Solutions
            </h4>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {[
                'Neural AI Systems',
                'Quantum Analytics',
                'Cloud Infrastructure',
                'Enterprise Security',
                'Custom Development'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#services" style={{ 
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                  >
                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ 
              color: 'var(--color-text-primary)',
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '2rem',
              letterSpacing: '-0.01em'
            }}>
              Company
            </h4>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {[
                'About Us',
                'Careers',
                'News & Blog',
                'Case Studies',
                'Contact'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#about" style={{ 
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                  >
                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ 
          background: 'rgba(0, 212, 255, 0.05)',
          border: '1px solid rgba(0, 212, 255, 0.1)',
          borderRadius: '20px',
          padding: '3rem 2rem',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'var(--color-text-primary)'
          }}>
            Ready to build the future?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Join the AI revolution with Orion's cutting-edge platform.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
              Start Building Today
            </a>
            <a href="#about" className="btn btn-secondary">
              Book a Demo
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <p style={{ 
            color: 'var(--color-text-secondary)',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.1rem' }}>⚡</span>
            © 2025 Orion Technologies. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Security'].map((item, index) => (
              <a 
                key={index} 
                href={item === 'Privacy Policy' || item === 'Terms of Service' ? undefined : "#"}
                onClick={
                  item === 'Privacy Policy' ? (e) => { e.preventDefault(); onPrivacyClick?.(); } :
                  item === 'Terms of Service' ? (e) => { e.preventDefault(); onTermsClick?.(); } :
                  undefined
                }
                style={{ 
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .footer-grid > div:first-child {
            grid-column: span 1 !important;
          }
        }
        
        @media (max-width: 480px) {
          .footer-grid {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;