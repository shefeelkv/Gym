import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const programsOptions = [
    "General Inquiry",
    "Book Free Trial",
    "Strength Training",
    "Weight Loss",
    "Weight Gain & Hypertrophy",
    "CrossFit",
    "HIIT",
    "Restorative & Power Yoga",
    "Functional Fitness",
    "Cardio & Endurance",
    "Personal Training",
    "Mobility & Recovery"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const payload = { name, phone, email, program, message };

    axios.post('/api/contact/', payload)
      .then(res => {
        setSuccess(true);
        setName('');
        setPhone('');
        setEmail('');
        setProgram('General Inquiry');
        setMessage('');
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to transmit contact request. Please check connections and fields.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">INITIATE YOUR JOURNEY</span>
          <h2 className="section-title text-white">CONTACT US</h2>
        </div>

        <div className="row g-5">
          
          {/* Left Column: Details & Google Map */}
          <div className="col-lg-5">
            <h4 className="text-white fw-bold mb-4 text-uppercase" style={{ fontSize: '1.25rem' }}>
              CLUB COORDINATES
            </h4>
            
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex gap-3 align-items-start">
                <div className="text-crimson mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="text-white fw-semibold d-block text-uppercase small">Flagship Facility</span>
                  <span className="text-secondary small">742 Performance Avenue, Suite 100, Manhattan, NY 10001</span>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start">
                <div className="text-crimson mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="text-white fw-semibold d-block text-uppercase small">Direct Lines</span>
                  <span className="text-secondary small">+1 (212) 555-9080 (Front Desk) / info@fitnexelite.com</span>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start">
                <div className="text-crimson mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <span className="text-white fw-semibold d-block text-uppercase small">Club Operating Hours</span>
                  <span className="text-secondary small">Mon - Fri: 5:00 AM - Midnight / Sat - Sun: 6:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3 overflow-hidden border border-secondary" style={{ height: '240px' }}>
              <iframe 
                title="Fitnex Elite Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.428481283623!2d-73.98785368459384!3d40.75128497932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d200!2d-73.987!3d40.751!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire+State+Building!5e0!3m2!1sen!2sus!4v1563229620582!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(100%) contrast(120%)' }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Input Form */}
          <div className="col-lg-7">
            <div className="card-premium p-4 p-md-5">
              <h4 className="text-white fw-bold mb-4 text-uppercase" style={{ fontSize: '1.25rem' }}>
                REQUEST INFORMATION
              </h4>

              {success ? (
                <div className="text-center py-4 animate-fade-in">
                  <div className="d-inline-flex p-3 rounded-circle bg-success-subtle border border-success mb-3">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h5 className="text-white fw-bold mb-2">Request Submitted!</h5>
                  <p className="text-secondary small mb-0">
                    Thank you. An elite concierge representative will contact you via phone or email within 12 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  
                  {error && (
                    <div className="alert alert-danger py-2 small mb-0">
                      {error}
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="text-secondary small mb-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="form-control input-premium w-100"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-secondary small mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+1 (212) 555-0199"
                        className="form-control input-premium w-100"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="text-secondary small mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="form-control input-premium w-100"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-secondary small mb-1">Program of Interest</label>
                      <select 
                        className="form-select input-premium w-100" 
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")` }}
                      >
                        {programsOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-secondary small mb-1">Personal Message</label>
                    <textarea 
                      rows="4" 
                      required 
                      placeholder="Outline any special considerations, target goals, or trial availability dates..."
                      className="form-control input-premium w-100"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn-premium-primary mt-2 align-self-start"
                  >
                    {loading ? 'Submitting...' : 'Submit Inquiry'}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
