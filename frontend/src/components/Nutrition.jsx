import React, { useState } from 'react';

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('mealplans');

  const tabs = [
    { id: 'mealplans', label: 'Meal Plans' },
    { id: 'recipes', label: 'Healthy Recipes' },
    { id: 'protein', label: 'Protein Guide' },
    { id: 'hydration', label: 'Hydration Tips' }
  ];

  return (
    <section id="nutrition" className="py-5" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">FUEL YOUR PERFORMANCE</span>
          <h2 className="section-title text-white">NUTRITION &amp; DIET</h2>
        </div>

        {/* Tab Navigation Menu */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="btn text-uppercase fw-semibold"
              style={{
                borderRadius: '50px',
                padding: '0.6rem 1.8rem',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                transition: 'var(--transition-smooth)',
                backgroundColor: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-surface)',
                border: activeTab === tab.id ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                color: '#fff'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card-premium p-4 p-md-5">
              
              {/* Tab 1: Meal Plans */}
              {activeTab === 'mealplans' && (
                <div className="animate-fade-in">
                  <h3 className="text-white fw-bold mb-4 text-uppercase" style={{ fontSize: '1.4rem' }}>Periodic Meal Frameworks</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border)' }}>
                        <span className="text-gold fw-bold small text-uppercase mb-2 d-block">Lean Muscle Hypertrophy</span>
                        <p className="text-secondary small">Designed to support heavy strength training blocks with a slight caloric surplus, focusing on high quality amino acids and complex glycogen replenishment.</p>
                        <ul className="text-secondary small ps-3">
                          <li>Caloric Target: 2,800 - 3,200 kcal</li>
                          <li>Macro Split: 40% Carb / 30% Protein / 30% Fat</li>
                          <li>Perfect for: Strength Training, CrossFit</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border)' }}>
                        <span className="text-crimson fw-bold small text-uppercase mb-2 d-block">Metabolic Shred (Fat Loss)</span>
                        <p className="text-secondary small">A thermogenic framework emphasizing carbohydrate timing and high-protein satiety to preserve muscle mass while burning body fat.</p>
                        <ul className="text-secondary small ps-3">
                          <li>Caloric Target: 1,800 - 2,200 kcal</li>
                          <li>Macro Split: 25% Carb / 45% Protein / 30% Fat</li>
                          <li>Perfect for: Weight Loss, HIIT Circuits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Healthy Recipes */}
              {activeTab === 'recipes' && (
                <div className="animate-fade-in">
                  <h3 className="text-white fw-bold mb-4 text-uppercase" style={{ fontSize: '1.4rem' }}>Clean Kitchen Curations</h3>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="card bg-dark border border-secondary h-100 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="Salmon Quinoa" />
                        <div className="card-body p-3">
                          <h6 className="text-white fw-bold">Salmon &amp; Quinoa Bowl</h6>
                          <p className="text-secondary small mb-0">Rich in Omega-3 fatty acids and complete plant proteins to speed up muscular tissue repair.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card bg-dark border border-secondary h-100 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=300" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="Avocado Egg Toast" />
                        <div className="card-body p-3">
                          <h6 className="text-white fw-bold">Avocado &amp; Poached Egg Toast</h6>
                          <p className="text-secondary small mb-0">High in monounsaturated healthy fats and bioavailable protein for sustained morning energy.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card bg-dark border border-secondary h-100 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=300" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="Protein Berry Shake" />
                        <div className="card-body p-3">
                          <h6 className="text-white fw-bold">Post-Workout Pro Shake</h6>
                          <p className="text-secondary small mb-0">30g Whey protein combined with antioxidant-rich mixed berries and hydration coconut water.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Protein Guide */}
              {activeTab === 'protein' && (
                <div className="animate-fade-in">
                  <h3 className="text-white fw-bold mb-3 text-uppercase" style={{ fontSize: '1.4rem' }}>Macronutrient Optimization</h3>
                  <p className="text-secondary small mb-4">Protein is the fundamental building block of recovery. Use this general performance guide to calculate your daily target intake:</p>
                  
                  <div className="table-responsive">
                    <table className="table table-dark table-striped table-hover border border-secondary small">
                      <thead>
                        <tr>
                          <th>Fitness Objective</th>
                          <th>Protein Level (per kg of BW)</th>
                          <th>Primary Sources</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Sedentary Lifestyle</td>
                          <td>0.8g - 1.0g</td>
                          <td>Legumes, Lean Poultry, Fish</td>
                        </tr>
                        <tr>
                          <td>Endurance Training</td>
                          <td>1.2g - 1.4g</td>
                          <td>Eggs, Salmon, Quinoa, Oats</td>
                        </tr>
                        <tr>
                          <td>Strength &amp; Performance</td>
                          <td>1.6g - 2.0g</td>
                          <td>Steak, Chicken Breast, Whey, Tofu</td>
                        </tr>
                        <tr>
                          <td>Caloric Deficit Preservation</td>
                          <td>2.0g - 2.2g</td>
                          <td>Casein, Egg Whites, Lean Cod</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 4: Hydration Tips */}
              {activeTab === 'hydration' && (
                <div className="animate-fade-in">
                  <h3 className="text-white fw-bold mb-4 text-uppercase" style={{ fontSize: '1.4rem' }}>Fluid &amp; Electrolyte Balance</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h6 className="text-white fw-bold text-uppercase">The 2% Rule</h6>
                      <p className="text-secondary small">Even a 2% drop in body water volume can decrease strength and high-intensity workout output by up to 15%. Drink consistently throughout the day, not just when you feel thirsty.</p>
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-white fw-bold text-uppercase">Electrolyte Timing</h6>
                      <p className="text-secondary small">During training blocks exceeding 60 minutes, plain water is insufficient. Introduce sodium, magnesium, and potassium salts to prevent cellular cramping and sustain muscular contraction firing rates.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA link to Booking */}
              <div className="mt-5 text-center pt-4 border-top border-secondary" style={{ borderColor: 'rgba(255, 255, 255, 0.05) !important' }}>
                <span className="text-secondary small me-3">Want a fully customized macro profiling?</span>
                <a href="#contact" className="btn-premium-primary" style={{ textDecoration: 'none' }}>
                  Book Diet Consultation
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
