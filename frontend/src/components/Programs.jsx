import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Fallback premium data if backend is not active
  const fallbackPrograms = [
    {
      id: 1,
      title: "Strength Training",
      description: "Develop raw power and lean muscle mass with our barbell-focused structural strength routines designed for maximum efficiency.",
      duration: "60 Mins",
      difficulty: "Intermediate",
      image_url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "Weight Loss",
      description: "High-intensity fat cremation circuits combined with customized nutritional planning for rapid, sustainable body transformation.",
      duration: "45 Mins",
      difficulty: "Beginner",
      image_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Weight Gain & Hypertrophy",
      description: "Targeted mechanical tension and volume-based training regimes specifically tailored to pack on clean, quality muscle mass.",
      duration: "75 Mins",
      difficulty: "Advanced",
      image_url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      title: "CrossFit",
      description: "Constantly varied functional movements executed at high intensity. Prepare yourself for any physical challenge life throws your way.",
      duration: "60 Mins",
      difficulty: "Advanced",
      image_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      title: "HIIT",
      description: "Maximize caloric afterburn with explosive athletic training blocks. Excellent for cardiovascular endurance and rapid conditioning.",
      duration: "30 Mins",
      difficulty: "Intermediate",
      image_url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 6,
      title: "Restorative & Power Yoga",
      description: "Synchronize movement and breath to increase flexibility, core stability, mental clarity, and athletic joint longevity.",
      duration: "60 Mins",
      difficulty: "Beginner",
      image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 7,
      title: "Functional Fitness",
      description: "Multi-planar resistance training focused on improving movements you perform daily. Build a body that performs as good as it looks.",
      duration: "50 Mins",
      difficulty: "Intermediate",
      image_url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 8,
      title: "Cardio & Endurance",
      description: "Zone-based aerobic training utilizing cutting-edge Technogym treadmills and rower units to optimize energy system efficiency.",
      duration: "45 Mins",
      difficulty: "Beginner",
      image_url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 9,
      title: "Personal Training",
      description: "One-on-one coaching with our elite instructors. Fully custom programming, posture screening, and dedicated performance analysis.",
      duration: "60 Mins",
      difficulty: "All Levels",
      image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 10,
      title: "Mobility & Recovery",
      description: "Fascial release, joint flossing, and active stretching classes dedicated to preventing injuries and speeding up athletic recovery.",
      duration: "45 Mins",
      difficulty: "Beginner",
      image_url: "https://images.unsplash.com/photo-1607962837359-5e7e89f866ad?auto=format&fit=crop&q=80&w=600"
    }
  ];

  useEffect(() => {
    axios.get('/api/programs/')
      .then(res => {
        setPrograms(res.data.length > 0 ? res.data : fallbackPrograms);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Using fallback programs due to API status:", err.message);
        setPrograms(fallbackPrograms);
        setLoading(false);
      });
  }, []);

  return (
    <section id="programs" className="py-5" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">TRAIN ACCORDING TO YOUR GOALS</span>
          <h2 className="section-title text-white">OUR FITNESS PROGRAMS</h2>
        </div>

        <div className="row g-4">
          {programs.map((program) => (
            <div className="col-md-6 col-lg-4" key={program.id}>
              <div 
                className="card border-0 h-100 position-relative overflow-hidden shadow-lg"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--color-border)',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(193,18,31,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                {/* Program Card Image with Zoom Container */}
                <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                  <img 
                    src={program.image_url} 
                    alt={program.title}
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: 'transform 0.6s ease' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  {/* Difficulty Tag */}
                  <span 
                    className="position-absolute top-3 right-3 badge rounded-pill px-3 py-2 fw-semibold text-uppercase"
                    style={{
                      backgroundColor: 'rgba(10, 10, 10, 0.8)',
                      backdropFilter: 'blur(5px)',
                      color: program.difficulty.toLowerCase() === 'advanced' ? 'var(--color-gold)' : 'var(--color-text-primary)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.05em',
                      right: '15px',
                      top: '15px'
                    }}
                  >
                    {program.difficulty}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h4 className="text-white fw-bold mb-2" style={{ fontSize: '1.2rem' }}>{program.title}</h4>
                    <p className="text-secondary small mb-3 text-truncate-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {program.description}
                    </p>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top border-secondary" style={{ borderColor: 'rgba(255, 255, 255, 0.05) !important' }}>
                    <span className="text-secondary small d-flex align-items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {program.duration}
                    </span>
                    <button 
                      onClick={() => setSelectedProgram(program)}
                      className="btn btn-link text-crimson text-decoration-none fw-bold p-0 text-uppercase"
                      style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}
                    >
                      Learn More &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-dark-content">
              <div className="modal-header modal-dark-header border-0 pb-0">
                <h4 className="modal-title fw-bold text-white text-uppercase">{selectedProgram.title}</h4>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setSelectedProgram(null)}
                ></button>
              </div>
              <div className="modal-body pt-3">
                <img 
                  src={selectedProgram.image_url} 
                  alt={selectedProgram.title}
                  className="img-fluid rounded mb-3 w-100"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="d-flex gap-3 mb-3">
                  <span className="badge bg-secondary px-3 py-2 text-uppercase" style={{ fontSize: '0.7rem' }}>
                    Duration: {selectedProgram.duration}
                  </span>
                  <span className="badge bg-danger px-3 py-2 text-uppercase" style={{ fontSize: '0.7rem' }}>
                    Level: {selectedProgram.difficulty}
                  </span>
                </div>
                <h5 className="text-white fw-bold mb-2">Program Overview</h5>
                <p className="text-secondary small">{selectedProgram.description}</p>
                <div className="p-3 rounded bg-dark border border-secondary mt-3">
                  <span className="text-gold fw-bold d-block mb-1 small text-uppercase">Exclusive Inclusions</span>
                  <ul className="text-secondary small mb-0 ps-3">
                    <li>Comprehensive body composition screenings</li>
                    <li>Integrated customized nutritional tracking app access</li>
                    <li>Flexible booking windows via digital desk support</li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer modal-dark-footer border-0">
                <button 
                  type="button" 
                  className="btn-premium-outline"
                  onClick={() => setSelectedProgram(null)}
                >
                  Close
                </button>
                <a 
                  href="#contact" 
                  className="btn-premium-primary"
                  onClick={() => setSelectedProgram(null)}
                  style={{ textDecoration: 'none' }}
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
