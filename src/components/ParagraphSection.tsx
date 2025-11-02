import React from 'react';

const ParagraphSection: React.FC = () => {
  return (
    <section id="intro" className="paragraph-section" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #070712 100%)',
      color: 'rgba(255,255,255,0.92)',
      padding: '6rem 1.25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        maxWidth: 860,
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <p className="intro-paragraph" style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
          lineHeight: 1.8,
          letterSpacing: '0.01em',
          margin: 0,
          opacity: 1,
        }}>
          Revolutionizing interactions with data and artificial intelligence in Saudi Arabia — independence and freedom in every solution we craft.
        </p>
      </div>

      <style>{`
        .paragraph-section {
          overflow: hidden;
        }
        .intro-paragraph {
          color: rgba(255, 255, 255, 0.92);
          text-shadow: 0 0 30px rgba(29, 78, 216, 0.15);
          animation: introFadeUp 800ms ease 100ms 1 both;
        }
        @keyframes introFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .intro-paragraph { animation: none !important; }
        }
        @media (max-width: 768px) {
          .paragraph-section { padding: 4.5rem 1rem !important; }
        }
        @media (max-width: 480px) {
          .paragraph-section { padding: 3.5rem 0.75rem !important; }
        }
      `}</style>
    </section>
  );
};

export default ParagraphSection;
