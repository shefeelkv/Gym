import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  
  const [bmiScore, setBmiScore] = useState(null);
  const [category, setCategory] = useState('');
  const [advice, setAdvice] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const score = parseFloat((parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(1));
    setBmiScore(score);

    // Categories and suggestions
    let cat = '';
    let rec = '';

    if (score < 18.5) {
      cat = "Underweight";
      rec = "Focus on caloric surplus with nutrient-dense foods. Pair with our 'Weight Gain & Hypertrophy' program to build healthy lean muscle mass. Target 1.6g to 2.0g of protein per kg of bodyweight.";
    } else if (score >= 18.5 && score < 25) {
      cat = "Normal Weight";
      rec = "Excellent body composition index. Focus on body recomposition and cardiovascular efficiency with our 'Functional Fitness' or 'Strength Training' modules to sustain muscle definition.";
    } else if (score >= 25 && score < 30) {
      cat = "Overweight";
      rec = "Target a moderate caloric deficit (300-500 kcal). Integrate high-intensity conditioning blocks like our 'HIIT' or 'CrossFit' programs, coupled with structured resistance training to preserve active tissue.";
    } else {
      cat = "Obese";
      rec = "Prioritize aerobic conditioning and active joint mobility. We recommend starting with our 'Cardio & Endurance' or 'Mobility & Recovery' programs alongside customized 1-on-1 personal training.";
    }

    setCategory(cat);
    setAdvice(rec);
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setGender('male');
    setBmiScore(null);
    setCategory('');
    setAdvice('');
  };

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">ANALYZE YOUR BODY COMPOSITION</span>
          <h2 className="section-title text-white">BMI CALCULATOR</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card-premium p-4 p-md-5">
              <div className="row g-4 align-items-center">
                
                {/* Inputs Form */}
                <div className="col-md-6 border-end-0 border-md-end border-secondary pe-md-4" style={{ borderColor: 'rgba(255, 255, 255, 0.08) !important' }}>
                  <h4 className="text-white fw-bold mb-4 text-uppercase" style={{ fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                    Enter Metrics
                  </h4>
                  <form onSubmit={calculateBMI} className="d-flex flex-column gap-3">
                    
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="text-secondary small mb-1">Height (cm)</label>
                        <input 
                          type="number" 
                          required 
                          placeholder="e.g. 175"
                          className="form-control input-premium w-100"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          min="100"
                          max="250"
                        />
                      </div>
                      <div className="col-6">
                        <label className="text-secondary small mb-1">Weight (kg)</label>
                        <input 
                          type="number" 
                          required 
                          placeholder="e.g. 70"
                          className="form-control input-premium w-100"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          min="30"
                          max="250"
                        />
                      </div>
                    </div>

                    <div className="row g-3">
                      <div className="col-6">
                        <label className="text-secondary small mb-1">Age</label>
                        <input 
                          type="number" 
                          required 
                          placeholder="e.g. 28"
                          className="form-control input-premium w-100"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          min="10"
                          max="100"
                        />
                      </div>
                      <div className="col-6">
                        <label className="text-secondary small mb-1">Gender</label>
                        <select 
                          className="form-select input-premium w-100" 
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")` }}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex gap-3 mt-3">
                      <button type="submit" className="btn-premium-primary flex-grow-1">
                        Calculate BMI
                      </button>
                      {bmiScore && (
                        <button type="button" onClick={resetCalculator} className="btn-premium-outline">
                          Reset
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* Calculation Outputs Showcase */}
                <div className="col-md-6 ps-md-4 mt-5 mt-md-0 text-center text-md-start">
                  {bmiScore ? (
                    <div className="animate-fade-in">
                      <span className="text-gold fw-bold small text-uppercase letter-spacing-1">Results Analysis</span>
                      <div className="my-3">
                        <span className="text-secondary small">Your BMI Score</span>
                        <h2 className="text-white fw-black mb-1 mt-1" style={{ fontSize: '4.5rem', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                          {bmiScore}
                        </h2>
                        <span 
                          className="badge px-3 py-2 text-uppercase fw-semibold"
                          style={{
                            backgroundColor: category === 'Normal Weight' ? 'rgba(25, 135, 84, 0.25)' : 'rgba(193, 18, 31, 0.25)',
                            border: category === 'Normal Weight' ? '1px solid #198754' : '1px solid var(--color-primary)',
                            color: '#fff',
                            fontSize: '0.75rem',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Category: {category}
                        </span>
                      </div>
                      
                      <div className="p-3 rounded bg-dark border border-secondary mt-4">
                        <span className="text-white fw-bold d-block mb-1 small text-uppercase">EXPERT ADVICE:</span>
                        <p className="text-secondary small mb-0">{advice}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4 text-secondary">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-3" style={{ opacity: 0.5 }}>
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                      </svg>
                      <h5 className="text-white fw-semibold mb-1">Calculation Pending</h5>
                      <p className="small mb-0">Fill out your parameters to get custom luxury trainer analysis and program mappings.</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
