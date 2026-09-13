import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trainers = ({ isAuthenticated, onOpenLogin }) => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingTrainer, setBookingTrainer] = useState(null);
  
  // Form fields
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState('');

  // Fallback trainer profiles
  const fallbackTrainers = [
    {
      id: 1,
      name: "Alexander Sterling",
      role: "Head Strength & Conditioning Coach",
      experience: "10+ Years",
      specialization: "Olympic Weightlifting, Powerlifting, Sports Performance",
      certification: "CSCS (NSCA), USAW Level 2, NASM-PES",
      photo_url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400",
      social_facebook: "https://facebook.com",
      social_instagram: "https://instagram.com",
      social_twitter: "https://twitter.com"
    },
    {
      id: 2,
      name: "Seraphina Vance",
      role: "Director of Yoga & Mindfulness",
      experience: "8+ Years",
      specialization: "Vinyasa Flow, Asthanga, Athletic Joint Mobility, Breathwork",
      certification: "E-RYT 500 Yoga Alliance, FRCms (Functional Range Conditioning)",
      photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      social_facebook: "https://facebook.com",
      social_instagram: "https://instagram.com",
      social_twitter: "https://twitter.com"
    },
    {
      id: 3,
      name: "Marcus Thorne",
      role: "HIIT & Cardio Performance Coordinator",
      experience: "7+ Years",
      specialization: "Metabolic Conditioning, Kettlebell Athletics, Functional Performance",
      certification: "B.S. Exercise Science, ACE-CPT, RKC Kettlebell Coach",
      photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      social_facebook: "https://facebook.com",
      social_instagram: "https://instagram.com",
      social_twitter: "https://twitter.com"
    },
    {
      id: 4,
      name: "Elena Rostova",
      role: "Calisthenics & Injury Prevention Specialist",
      experience: "9+ Years",
      specialization: "Bodyweight Strength, Posture Correction, Injury Rehabilitation",
      certification: "NASM-CES (Corrective Exercise), FMS Level 1, CrossFit L2",
      photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      social_facebook: "https://facebook.com",
      social_instagram: "https://instagram.com",
      social_twitter: "https://twitter.com"
    }
  ];

  useEffect(() => {
    axios.get('/api/trainers/')
      .then(res => {
        setTrainers(res.data.length > 0 ? res.data : fallbackTrainers);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Using fallback trainers due to API status:", err.message);
        setTrainers(fallbackTrainers);
        setLoading(false);
      });
  }, []);

  const handleBookClick = (trainer) => {
    if (!isAuthenticated) {
      alert("Please login to schedule a direct training session.");
      onOpenLogin();
      return;
    }
    setBookingTrainer(trainer);
    setBookingSuccess(false);
    setBookingError('');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');
    
    if (!token) {
      setBookingError("Authentication token expired. Please login again.");
      return;
    }

    const bookingPayload = {
      trainer: bookingTrainer.id,
      booking_date: bookingDate,
      booking_time: bookingTime + ":00", // Django TimeField expects HH:MM:SS
      member_name: localStorage.getItem('username') || "Member",
      member_email: localStorage.getItem('user_email') || "member@fitnex.com"
    };

    axios.post('/api/bookings/', bookingPayload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setBookingSuccess(true);
      setBookingDate('');
      setBookingTime('');
    })
    .catch(err => {
      setBookingError(err.response?.data ? JSON.stringify(err.response.data) : "Failed to record session booking. Try again.");
    });
  };

  return (
    <section id="trainers" className="py-5" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">WORLD CLASS PERFORMANCE COACHES</span>
          <h2 className="section-title text-white">ELITE TRAINERS</h2>
        </div>

        <div className="row g-4">
          {trainers.map((trainer) => (
            <div className="col-md-6 col-lg-3" key={trainer.id}>
              <div 
                className="card border-0 h-100 position-relative overflow-hidden text-center"
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
                {/* Photo container */}
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={trainer.photo_url} 
                    alt={trainer.name} 
                    className="w-100 h-100 object-fit-cover"
                    style={{ filter: 'grayscale(15%) contrast(105%)' }}
                  />
                  
                  {/* Social icons Overlay */}
                  <div 
                    className="position-absolute w-100 d-flex justify-content-center gap-3"
                    style={{
                      bottom: '15px',
                      left: 0,
                      zIndex: 3
                    }}
                  >
                    {trainer.social_instagram && (
                      <a href={trainer.social_instagram} target="_blank" rel="noreferrer" className="text-white p-2 rounded-circle" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)', border: '1px solid var(--color-border)', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    )}
                    {trainer.social_facebook && (
                      <a href={trainer.social_facebook} target="_blank" rel="noreferrer" className="text-white p-2 rounded-circle" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)', border: '1px solid var(--color-border)', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h4 className="text-white fw-bold mb-1" style={{ fontSize: '1.25rem' }}>{trainer.name}</h4>
                    <span className="text-gold d-block mb-3 text-uppercase fw-semibold" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>
                      {trainer.role} ({trainer.experience})
                    </span>
                    <p className="text-secondary small mb-2">
                      <strong>Focus:</strong> {trainer.specialization}
                    </p>
                    <p className="text-secondary small mb-0">
                      <strong>Credentials:</strong> {trainer.certification}
                    </p>
                  </div>

                  <div className="mt-4 pt-2">
                    <button 
                      onClick={() => handleBookClick(trainer)}
                      className="btn-premium-outline w-100"
                      style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Scheduling Modal */}
      {bookingTrainer && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-dark-content">
              <div className="modal-header modal-dark-header border-0 pb-0">
                <h4 className="modal-title fw-bold text-white text-uppercase">Book 1-on-1 Performance Session</h4>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setBookingTrainer(null)}
                ></button>
              </div>
              <div className="modal-body pt-3">
                {bookingSuccess ? (
                  <div className="text-center py-4">
                    <div className="d-inline-flex p-3 rounded-circle bg-success-subtle border border-success mb-3">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h5 className="text-white fw-bold mb-2">Booking Confirmed!</h5>
                    <p className="text-secondary small">
                      Your workout session with <strong>{bookingTrainer.name}</strong> has been successfully booked. Check your email for access instructions and details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3 p-2 bg-dark rounded border border-secondary">
                      <img 
                        src={bookingTrainer.photo_url} 
                        alt={bookingTrainer.name}
                        className="rounded-circle object-fit-cover"
                        style={{ width: '50px', height: '50px' }}
                      />
                      <div>
                        <h6 className="text-white fw-bold mb-0">{bookingTrainer.name}</h6>
                        <span className="text-secondary small">{bookingTrainer.role}</span>
                      </div>
                    </div>

                    {bookingError && (
                      <div className="alert alert-danger py-2 small mb-0">
                        {bookingError}
                      </div>
                    )}

                    <div>
                      <label className="text-white small mb-1">Select Date</label>
                      <input 
                        type="date" 
                        required 
                        className="form-control input-premium w-100"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <label className="text-white small mb-1">Select Time</label>
                      <input 
                        type="time" 
                        required 
                        className="form-control input-premium w-100"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-premium-primary mt-2"
                    >
                      Confirm Direct Booking
                    </button>
                  </form>
                )}
              </div>
              <div className="modal-footer modal-dark-footer border-0">
                <button 
                  type="button" 
                  className="btn-premium-outline"
                  onClick={() => setBookingTrainer(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trainers;
