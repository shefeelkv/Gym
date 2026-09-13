import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Memberships = ({ onSelectPlan }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFeaturesArray = (features) => {
    if (Array.isArray(features)) return features;
    if (typeof features === 'string') {
      try {
        const parsed = JSON.parse(features);
        if (Array.isArray(parsed)) return parsed;
        return [features];
      } catch (e) {
        return [features];
      }
    }
    return [];
  };


  // Fallback membership plans
  const fallbackPlans = [
    {
      id: 1,
      name: "Basic Access",
      price: "$99",
      tier: "basic",
      features: [
        "Full Gym Floor Access",
        "Advanced Cardio & Weight Zones",
        "Luxury Locker Rooms & Showers",
        "Complimentary Towel Service",
        "Free High-speed Wi-Fi"
      ],
      is_featured: false
    },
    {
      id: 2,
      name: "Premium Elite",
      price: "$199",
      tier: "premium",
      features: [
        "Everything in Basic Access",
        "Unlimited Signature Group Classes",
        "Monthly 1-on-1 Diet Consultation",
        "Monthly Bio-impedance Progress Tracking",
        "Access to Luxury Steam & Sauna Room",
        "1 Complimentary PT Taster Session"
      ],
      is_featured: true
    },
    {
      id: 3,
      name: "Elite Club",
      price: "$399",
      tier: "elite",
      features: [
        "Unlimited Club & Spa Access",
        "Dedicated Personal Trainer (2x/week)",
        "Fully Custom Macro/Micro Meal Plan",
        "Priority Class & Event Bookings",
        "Private VIP Keyed Locker",
        "Unlimited Guest Passes (1/day)",
        "24/7 Digital Concierge Support"
      ],
      is_featured: false
    }
  ];

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/memberships/')
      .then(res => {
        setPlans(res.data.length > 0 ? res.data : fallbackPlans);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Using fallback memberships due to API status:", err.message);
        setPlans(fallbackPrograms => fallbackPlans);
        setLoading(false);
      });
  }, []);

  return (
    <section id="membership" className="py-5" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">CHOOSE YOUR ACCESS TIER</span>
          <h2 className="section-title text-white">MEMBERSHIP PLANS</h2>
        </div>

        <div className="row justify-content-center align-items-center g-4">
          {plans.map((plan) => (
            <div 
              className={`col-md-6 col-lg-4 ${plan.is_featured ? 'order-first order-lg-0 py-3' : ''}`} 
              key={plan.id}
            >
              <div 
                className={`card-premium h-100 d-flex flex-column justify-content-between ${plan.is_featured ? 'featured glow-crimson' : ''}`}
                style={{
                  minHeight: plan.is_featured ? '520px' : '480px',
                  boxShadow: plan.is_featured ? 'var(--shadow-glow)' : 'var(--shadow-subtle)'
                }}
              >
                {/* Plan Header */}
                <div>
                  {plan.is_featured && (
                    <span 
                      className="badge bg-danger rounded-pill px-3 py-2 text-uppercase mb-3 align-self-start fw-bold"
                      style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}
                    >
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-white fw-bold mb-1 text-uppercase" style={{ fontSize: '1.4rem' }}>{plan.name}</h3>
                  <div className="d-flex align-items-baseline mb-4 mt-2">
                    <span className="text-white fw-extrabold" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>{plan.price}</span>
                    <span className="text-secondary ms-2 small">/ month</span>
                  </div>

                  {/* Divider */}
                  <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }} />

                  {/* Features List */}
                  <ul className="list-unstyled mb-5 mt-4 d-flex flex-column gap-3">
                    {getFeaturesArray(plan.features).map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center text-secondary small">

                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke={plan.is_featured ? "var(--color-primary)" : "var(--color-accent)"} 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="me-2 flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Action Button */}
                <div className="mt-auto">
                  <button 
                    onClick={() => onSelectPlan(plan)}
                    className={plan.is_featured ? 'btn-premium-primary w-100' : 'btn-premium-outline w-100'}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
