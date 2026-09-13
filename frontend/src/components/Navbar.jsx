import React, { useState, useEffect } from 'react';

const Navbar = ({ isAuthenticated, username, onLogout, onOpenLogin, onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Membership', href: '#membership' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-premium ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid max-width-container d-flex justify-content-between align-items-center">
        {/* Brand Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: '1.6rem',
            letterSpacing: '0.08em',
            color: 'var(--color-text-primary)'
          }}>
            FITNEX<span style={{ color: 'var(--color-primary)' }}>ELITE</span>
          </span>
        </a>

        {/* Toggler button for mobile views */}
        <button 
          className="navbar-toggler border-0 text-white" 
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
          style={{ outline: 'none', boxShadow: 'none' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <line x1="18" y1="6" x2="6" y2="18"></line>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Navigation Menu links */}
        <div className={`collapse navbar-collapse justify-content-center ${mobileMenuOpen ? 'show' : ''}`} id="navbarLinks" style={{
          transition: 'var(--transition-smooth)'
        }}>
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3 gap-lg-4 text-center mt-3 mt-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <a 
                  className="nav-link text-uppercase" 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: 'var(--color-text-secondary)',
                    transition: 'var(--transition-smooth)',
                    padding: '0.5rem 0'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Auth CTA Buttons */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Welcome, <span className="text-white fw-bold">{username}</span>
              </span>
              <button 
                onClick={onLogout} 
                className="btn-premium-outline"
                style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem' }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={onOpenLogin}
                className="text-white border-0 bg-transparent text-uppercase fw-bold" 
                style={{ 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.15em', 
                  fontFamily: 'var(--font-heading)',
                  marginRight: '1rem',
                  cursor: 'pointer'
                }}
              >
                Login
              </button>
              <button 
                onClick={onOpenRegister}
                className="btn-premium-primary"
                style={{ padding: '0.6rem 1.6rem', fontSize: '0.75rem' }}
              >
                Join Now
              </button>
            </>
          )}
        </div>

        {/* Mobile menu CTA drawer */}
        {mobileMenuOpen && (
          <div className="d-flex d-lg-none flex-column gap-3 w-100 mt-3 pb-3 text-center border-top border-secondary pt-3">
            {isAuthenticated ? (
              <>
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                  Welcome, <span className="text-white fw-bold">{username}</span>
                </span>
                <button 
                  onClick={() => { onLogout(); setMobileMenuOpen(false); }} 
                  className="btn-premium-outline w-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => { onOpenLogin(); setMobileMenuOpen(false); }}
                  className="text-white border-0 bg-transparent text-uppercase fw-bold py-2"
                  style={{ letterSpacing: '0.15em', fontFamily: 'var(--font-heading)', cursor: 'pointer' }}
                >
                  Login
                </button>
                <button 
                  onClick={() => { onOpenRegister(); setMobileMenuOpen(false); }}
                  className="btn-premium-primary w-100"
                >
                  Join Now
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
