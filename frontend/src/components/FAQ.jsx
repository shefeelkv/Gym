import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are there any joining fees or hidden contracts?",
      answer: "No. FITNEX ELITE operates with 100% transparency. Our Basic, Premium, and Elite tiers are billed on a month-to-month basis. You can freeze or terminate your membership with a simple 10-day notice prior to your billing cycle."
    },
    {
      question: "Can I try the facilities before committing to a membership?",
      answer: "Yes, you can register for a complimentary 1-Day Trial. This gives you unrestricted access to our weights floor, cardio deck, locker rooms, and sauna. Simply submit the trial form in our Contact section to secure your invitation."
    },
    {
      question: "How do I book 1-on-1 personal training sessions?",
      answer: "Members can book direct coaching sessions through our Trainer portal. Select a trainer profile, pick an open date/time, and confirm your session. Note that Elite memberships include 2 prepaid sessions weekly, while others are scheduled on a pay-as-you-go basis."
    },
    {
      question: "What are your club operating hours?",
      answer: "FITNEX ELITE is open Monday through Friday from 5:00 AM to midnight. On Saturdays and Sundays, the facility is open from 6:00 AM to 10:00 PM. Our digital concierge support desk is online 24/7 for account queries."
    },
    {
      question: "Are lockers, towels, and steam rooms included in all plans?",
      answer: "Complimentary premium towels, toiletries, and digital keypads lockers are included for all members. Full access to our thermal suites, saunas, and steam rooms is included in the Premium and Elite access tiers."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-5" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">GOT QUESTIONS? WE HAVE ANSWERS</span>
          <h2 className="section-title text-white">FREQUENTLY ASKED</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-3">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div 
                    key={index} 
                    className="rounded-3"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      transition: 'var(--transition-smooth)',
                      borderColor: isOpen ? 'var(--color-primary)' : 'var(--color-border)'
                    }}
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="btn text-white w-100 text-start d-flex justify-content-between align-items-center p-4 border-0"
                      style={{ outline: 'none', boxShadow: 'none' }}
                    >
                      <span className="fw-semibold text-uppercase" style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                        {faq.question}
                      </span>
                      <span 
                        style={{ 
                          fontSize: '1.5rem', 
                          lineHeight: 1, 
                          color: isOpen ? 'var(--color-primary)' : 'var(--color-accent)',
                          transition: 'transform 0.3s ease',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
                        }}
                      >
                        +
                      </span>
                    </button>

                    {/* Collapsible Answer */}
                    <div 
                      style={{
                        maxHeight: isOpen ? '300px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div className="px-4 pb-4 pt-0 text-secondary small" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
                        <p className="mb-0 pt-3">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
