import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother counter rise
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.floor(startValue + easeOutQuad(percentage) * (target - startValue));
      
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span className="counter-num">{count}{suffix}</span>;
};

const Hero = ({ onJoinClick }) => {
  return (
    <section 
      id="home" 
      className="position-relative d-flex align-items-center justify-content-center min-vh-100 text-white"
      style={{
        background: `linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.9)), url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920') no-repeat center center/cover`,
        paddingTop: '80px',
        paddingBottom: '40px'
      }}
    >
      {/* Visual highlights */}
      <div 
        className="position-absolute rounded-circle"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(193, 18, 31, 0.1) 0%, transparent 70%)',
          top: '10%',
          right: '5%',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container py-5">
        <div className="row align-items-center min-vh-75">
          {/* Hero Left Content */}
          <div className="col-lg-7 text-center text-lg-start animate-slide-up">
            <span className="section-tagline" style={{ display: 'block', marginBottom: '1rem' }}>
              EXCLUSIVITY &amp; POWER
            </span>
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Transform Your Body.<br />
              <span style={{ color: 'var(--color-primary)' }}>Elevate Your Lifestyle.</span>
            </h1>
            <p 
              className="lead text-secondary mb-4" 
              style={{ 
                maxWidth: '600px', 
                fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
                lineHeight: 1.6
              }}
            >
              Join FITNEX ELITE, a premium fitness center offering expert coaching, modern equipment, and personalized fitness programs designed for lasting, high-performance results.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-5">
              <button onClick={onJoinClick} className="btn-premium-primary">
                Join Now
              </button>
              <a href="#contact" className="btn-premium-outline" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                Book Free Trial
              </a>
            </div>
          </div>

          {/* Hero Right - Luxury equipment/Athlete image showcase */}
          <div className="col-lg-5 d-none d-lg-block animate-fade-in text-center">
            <div className="position-relative d-inline-block">
              <div 
                className="position-absolute"
                style={{
                  top: '-15px',
                  left: '-15px',
                  right: '15px',
                  bottom: '15px',
                  border: '2px solid var(--color-primary)',
                  borderRadius: '16px',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              ></div>
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=500" 
                alt="Elite Athlete Training" 
                className="img-fluid rounded-3 shadow-lg position-relative"
                style={{ 
                  maxWidth: '100%', 
                  height: '480px', 
                  objectFit: 'cover',
                  borderRadius: '16px',
                  zIndex: 2,
                  filter: 'grayscale(30%) contrast(110%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Statistics Cards */}
        <div className="row justify-content-center g-4 mt-5 pt-4 border-top border-secondary animate-fade-in" style={{ borderColor: 'rgba(255, 255, 255, 0.1) !important' }}>
          <div className="col-6 col-md-3 text-center">
            <div className="px-2">
              <AnimatedCounter target={5000} suffix="+" />
              <p className="text-secondary text-uppercase fw-semibold mb-0" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                Active Members
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="px-2">
              <AnimatedCounter target={25} suffix="+" />
              <p className="text-secondary text-uppercase fw-semibold mb-0" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                Certified Trainers
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="px-2">
              <AnimatedCounter target={12} suffix="+" />
              <p className="text-secondary text-uppercase fw-semibold mb-0" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                Years Experience
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="px-2">
              <AnimatedCounter target={98} suffix="%" />
              <p className="text-secondary text-uppercase fw-semibold mb-0" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
