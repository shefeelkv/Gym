import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Left Column - Large Luxury Image Showcase */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800" 
                alt="Fitnex Elite Interior" 
                className="img-fluid rounded-3 shadow-lg"
                style={{ 
                  width: '100%', 
                  height: '550px', 
                  objectFit: 'cover',
                  border: '1px solid var(--color-border)',
                  filter: 'brightness(80%)'
                }}
              />
              {/* Floating luxury label badge */}
              <div 
                className="position-absolute d-flex flex-column justify-content-center align-items-center bg-dark text-center p-4 border border-secondary"
                style={{
                  bottom: '-30px',
                  right: '20px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  backgroundColor: '#0f0f0f'
                }}
              >
                <span className="text-gold fw-bold" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>12+</span>
                <span className="text-white text-uppercase fw-semibold" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Years of Luxury Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Column - Luxury Text Layout (Story, Mission, Vision) */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <span className="section-tagline">OUR LEGACY</span>
            <h2 className="section-title text-white mb-4">
              ABOUT FITNEX ELITE
            </h2>
            <p className="lead text-white fw-semibold mb-4" style={{ fontSize: '1.15rem' }}>
              We believe fitness is not a chore—it is an elevated lifestyle of strength, wellness, and self-mastery.
            </p>
            <p className="text-secondary mb-4">
              Established in 2014, FITNEX ELITE was founded on the philosophy that true health optimization requires expert human coaching combined with medical-grade equipment and an environment that inspires excellence. We provide our members with an exclusive sanctuary designed to unlock maximum human capability.
            </p>

            {/* Accordion/Tab-like Grid details */}
            <div className="row g-4 mt-2">
              <div className="col-md-6">
                <div className="p-4 rounded-3" style={{ backgroundColor: 'var(--color-surface)', borderLeft: '3px solid var(--color-primary)' }}>
                  <h4 className="text-white fw-bold mb-2" style={{ fontSize: '1rem', textTransform: 'uppercase' }}>Our Mission</h4>
                  <p className="text-secondary small mb-0">
                    To deliver bespoke coaching and world-class recovery facilities that empower members to realize their full athletic and life potential.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 rounded-3" style={{ backgroundColor: 'var(--color-surface)', borderLeft: '3px solid var(--color-gold)' }}>
                  <h4 className="text-white fw-bold mb-2" style={{ fontSize: '1rem', textTransform: 'uppercase' }}>Our Vision</h4>
                  <p className="text-secondary small mb-0">
                    To remain the global benchmark for luxury athletic performance clubs, fostering a community of driven, healthy individuals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-2">
              <blockquote className="border-start border-danger ps-3 my-3">
                <p className="fst-italic text-secondary small">
                  "The equipment is pristine, the coaching is highly technical, and the privacy and focus inside the gym are unparalleled."
                </p>
                <footer className="blockquote-footer text-uppercase small mt-1 text-gold" style={{ fontSize: '0.65rem' }}>
                  Alexander Sterling, Head Coach
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
