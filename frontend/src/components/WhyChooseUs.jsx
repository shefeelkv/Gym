import React from 'react';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Certified Trainers",
      description: "Our coaching roster includes CSCS, NASM, and Kinesiology graduates who tailor every movement to your biomechanics.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Personalized Programs",
      description: "No templated workouts. We script individual periodic structures aligned with your biometric data and goals.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      )
    },
    {
      title: "Modern Equipment",
      description: "Train on luxury biomechanical equipment from brands like Technogym, Hammer Strength, and Eleiko platforms.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
          <line x1="6" y1="5" x2="6" y2="19" />
          <line x1="18" y1="5" x2="18" y2="19" />
          <rect x="2" y="9" width="4" height="6" rx="1" />
          <rect x="18" y="9" width="4" height="6" rx="1" />
          <line x1="6" y1="12" x2="18" y2="12" />
        </svg>
      )
    },
    {
      title: "Nutrition Support",
      description: "Collaborate with on-site certified dietitians to structure tailored macro and micronutrient frameworks.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
          <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
          <path d="M12 9v3l2 2" />
        </svg>
      )
    },
    {
      title: "Flexible Schedule",
      description: "Access our facility from 5:00 AM to midnight, with group schedules built around working professionals.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      title: "Premium Environment",
      description: "Enjoy clean air filtration, high-end private locker rooms, dry saunas, towel services, and a dedicated lounge.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">THE ELITE DIFFERENCE</span>
          <h2 className="section-title text-white">WHY CHOOSE US</h2>
        </div>

        <div className="row g-4">
          {points.map((point, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card-premium h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="mb-4 d-inline-flex p-3 rounded-circle" style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
                    {point.icon}
                  </div>
                  <h4 className="text-white fw-bold mb-3" style={{ fontSize: '1.25rem' }}>{point.title}</h4>
                  <p className="text-secondary small mb-0">{point.description}</p>
                </div>
                {/* Visual subtle glow accent inside card */}
                <div 
                  className="position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-40px',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(193, 18, 31, 0.03) 0%, transparent 70%)',
                    borderRadius: '50%'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
