import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fallback premium testimonials
  const fallbackTestimonials = [
    {
      id: 1,
      name: "Brandon C.",
      role: "Corporate Executive",
      rating: 5,
      review: "FITNEX ELITE redefined how I view fitness. The environment is premium, and the trainers possess athletic depth rather than just counting reps. It's the highlight of my stressful day.",
      success_story: "Lost 18 lbs of body fat while building significant muscle mass over 6 months.",
      photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "Diana K.",
      role: "Professional Dancer",
      rating: 5,
      review: "The recovery facilities and mobility-focused classes here saved my career. It's not just a gym; it's a sanctuary for high-performance athletic restoration.",
      success_story: "Rehabilitated chronic hip tightness, improving active flexibility by 25%.",
      photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      name: "Julian R.",
      role: "Tech Founder",
      rating: 5,
      review: "The Elite membership is worth every single dollar. Having my trainer collaborate directly with the nutrition team takes away all the guesswork. Highly professional.",
      success_story: "Gained 12 lbs of clean muscle mass and improved deadlift to 2x bodyweight.",
      photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  useEffect(() => {
    axios.get('/api/testimonials/')
      .then(res => {
        setTestimonials(res.data.length > 0 ? res.data : fallbackTestimonials);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Using fallback testimonials due to API status:", err.message);
        setTestimonials(fallbackTestimonials);
        setLoading(false);
      });
  }, []);

  // Auto sliding interval logic
  useEffect(() => {
    if (testimonials.length === 0) return;
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Swap slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [testimonials]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-5" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">MEMBER SUCCESS STORIES</span>
          <h2 className="section-title text-white">TESTIMONIALS</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div 
              className="card-premium p-4 p-md-5 text-center position-relative"
              style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              
              {/* Quote Icon watermark */}
              <div 
                className="position-absolute"
                style={{
                  top: '15px',
                  left: '30px',
                  fontSize: '8rem',
                  fontFamily: 'Georgia, serif',
                  lineHeight: 1,
                  color: 'rgba(193, 18, 31, 0.05)',
                  pointerEvents: 'none'
                }}
              >
                &ldquo;
              </div>

              {/* Slider Content Wrapper */}
              <div className="animate-fade-in" key={currentIndex}>
                
                {/* Rating Stars */}
                <div className="d-flex justify-content-center gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="var(--color-gold)">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="lead text-white fst-italic mb-4 px-md-5" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
                  "{current.review}"
                </p>

                {/* Success highlight box */}
                {current.success_story && (
                  <div className="d-inline-flex align-items-center bg-dark border border-secondary px-3 py-2 rounded-pill mb-4 gap-2">
                    <span className="text-gold fw-bold small text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Transformation:</span>
                    <span className="text-white small" style={{ fontSize: '0.75rem' }}>{current.success_story}</span>
                  </div>
                )}

                {/* User details */}
                <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
                  <img 
                    src={current.photo_url} 
                    alt={current.name} 
                    className="rounded-circle object-fit-cover"
                    style={{ width: '60px', height: '60px', border: '2px solid var(--color-primary)' }}
                  />
                  <div className="text-start">
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: '1.05rem' }}>{current.name}</h5>
                    <span className="text-secondary small">{current.role}</span>
                  </div>
                </div>

              </div>

              {/* Slider Indicators and arrows */}
              <div className="d-flex justify-content-between align-items-center mt-5 pt-3">
                
                {/* Arrow Left */}
                <button 
                  onClick={handlePrev}
                  className="btn btn-outline-secondary border-secondary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', color: '#fff' }}
                >
                  &larr;
                </button>

                {/* Dots indicator */}
                <div className="d-flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="border-0 rounded-circle"
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: currentIndex === index ? 'var(--color-primary)' : 'var(--color-border)',
                        padding: 0,
                        transition: 'var(--transition-smooth)'
                      }}
                    ></button>
                  ))}
                </div>

                {/* Arrow Right */}
                <button 
                  onClick={handleNext}
                  className="btn btn-outline-secondary border-secondary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', color: '#fff' }}
                >
                  &rarr;
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
