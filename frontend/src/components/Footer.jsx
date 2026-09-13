import React, { useState } from 'react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="py-5" style={{ backgroundColor: '#050505', borderTop: '1px solid var(--color-border)' }}>
      <div className="container py-4">
        <div className="row g-4">
          
          {/* Col 1: Brand & Bio */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white fw-bold mb-3 text-uppercase" style={{ letterSpacing: '0.08em' }}>
              FITNEX<span style={{ color: 'var(--color-primary)' }}>ELITE</span>
            </h5>
            <p className="text-secondary small mb-4" style={{ maxWidth: '300px' }}>
              A luxury, performance-focused club dedicated to biomechanics, elite coaching, and premium athletic restoration.
            </p>
            {/* Social icons */}
            <div className="d-flex gap-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-secondary border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => {e.target.style.color = '#fff'; e.target.style.borderColor = 'var(--color-primary)';}} onMouseLeave={(e) => {e.target.style.color = 'var(--color-text-secondary)'; e.target.style.borderColor = 'var(--color-border)';}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-secondary border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => {e.target.style.color = '#fff'; e.target.style.borderColor = 'var(--color-primary)';}} onMouseLeave={(e) => {e.target.style.color = 'var(--color-text-secondary)'; e.target.style.borderColor = 'var(--color-border)';}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-secondary border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => {e.target.style.color = '#fff'; e.target.style.borderColor = 'var(--color-primary)';}} onMouseLeave={(e) => {e.target.style.color = 'var(--color-text-secondary)'; e.target.style.borderColor = 'var(--color-border)';}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              Navigation
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#home" className="text-secondary text-decoration-none" style={{ transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.target.style.color='var(--color-primary)'} onMouseLeave={(e) => e.target.style.color='var(--color-text-secondary)'}>Home</a></li>
              <li><a href="#about" className="text-secondary text-decoration-none" style={{ transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.target.style.color='var(--color-primary)'} onMouseLeave={(e) => e.target.style.color='var(--color-text-secondary)'}>About</a></li>
              <li><a href="#programs" className="text-secondary text-decoration-none" style={{ transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.target.style.color='var(--color-primary)'} onMouseLeave={(e) => e.target.style.color='var(--color-text-secondary)'}>Programs</a></li>
              <li><a href="#trainers" className="text-secondary text-decoration-none" style={{ transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.target.style.color='var(--color-primary)'} onMouseLeave={(e) => e.target.style.color='var(--color-text-secondary)'}>Trainers</a></li>
              <li><a href="#membership" className="text-secondary text-decoration-none" style={{ transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.target.style.color='var(--color-primary)'} onMouseLeave={(e) => e.target.style.color='var(--color-text-secondary)'}>Membership</a></li>
              <li><a href="#gallery" className="text-secondary text-decoration-none" style={{ transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.target.style.color='var(--color-primary)'} onMouseLeave={(e) => e.target.style.color='var(--color-text-secondary)'}>Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Programs Shortcuts */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              Our Classes
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#programs" className="text-secondary text-decoration-none">Strength Training</a></li>
              <li><a href="#programs" className="text-secondary text-decoration-none">Fat Shredding Circuits</a></li>
              <li><a href="#programs" className="text-secondary text-decoration-none">HIIT Conditioning</a></li>
              <li><a href="#programs" className="text-secondary text-decoration-none">Yoga &amp; Mindfulness</a></li>
              <li><a href="#programs" className="text-secondary text-decoration-none">Calisthenics &amp; Mobility</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              THE ELITE CHRONICLE
            </h6>
            <p className="text-secondary small mb-3">
              Subscribe to receive private announcements, expert fitness advice, and nutrition releases.
            </p>
            {subscribed ? (
              <span className="text-gold small fw-bold">✓ Subscribed successfully!</span>
            ) : (
              <form onSubmit={handleSubscribe} className="d-flex gap-2">
                <input 
                  type="email" 
                  required 
                  placeholder="name@email.com" 
                  className="form-control input-premium w-100 py-2 px-3 small"
                  style={{ fontSize: '0.8rem' }}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-danger p-2" style={{ backgroundColor: 'var(--color-primary)', border: 'none', borderRadius: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom divider and copyright details */}
        <div className="mt-5 pt-4 border-top border-secondary d-flex flex-column flex-sm-row justify-content-between align-items-center small" style={{ borderColor: 'rgba(255, 255, 255, 0.05) !important' }}>
          <span className="text-secondary">&copy; {new Date().getFullYear()} FITNEX ELITE. All rights reserved.</span>
          <div className="d-flex gap-3 mt-3 mt-sm-0">
            <a href="#privacy" className="text-secondary text-decoration-none">Privacy Policy</a>
            <a href="#terms" className="text-secondary text-decoration-none">Terms of Access</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
