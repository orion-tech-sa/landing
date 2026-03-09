import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about',    label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact',  label: 'Contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <a
            href="#"
            className="header-logo"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img src="/orion-logo-white.svg" alt="Orion" />
          </a>

          <nav className="header-nav" aria-label="Main navigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary header-cta">Get in Touch</a>
          </nav>

          <button
            className="mobile-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-nav">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
