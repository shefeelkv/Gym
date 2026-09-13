import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import Memberships from './components/Memberships';
import Trainers from './components/Trainers';
import BMICalculator from './components/BMICalculator';
import Nutrition from './components/Nutrition';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  
  // Auth states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  // Modal states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  
  // Auth Form fields
  const [loginUserVal, setLoginUserVal] = useState('');
  const [loginPassVal, setLoginPassVal] = useState('');
  const [loginError, setLoginError] = useState('');

  const [regUserVal, setRegUserVal] = useState('');
  const [regEmailVal, setRegEmailVal] = useState('');
  const [regPassVal, setRegPassVal] = useState('');
  const [regPhoneVal, setRegPhoneVal] = useState('');
  const [regError, setRegError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Trigger initial luxury loading timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500);

    // Check token on mount
    const accessToken = localStorage.getItem('access_token');
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('user_email');
    if (accessToken && storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
      if (storedEmail) setUserEmail(storedEmail);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    setAuthLoading(true);

    const payload = {
      username: loginUserVal,
      password: loginPassVal
    };

    axios.post('/api/auth/login/', payload)
      .then(res => {
        const { access, refresh } = res.data;
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
        localStorage.setItem('username', loginUserVal);
        localStorage.setItem('user_email', loginUserVal + "@fitnex.com"); // standard mock email since simplejwt returns tokens

        setIsAuthenticated(true);
        setUsername(loginUserVal);
        setUserEmail(loginUserVal + "@fitnex.com");
        
        setShowLoginModal(false);
        setLoginUserVal('');
        setLoginPassVal('');
        setAuthLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoginError("Invalid username or password. Please try again.");
        setAuthLoading(false);
      });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegError('');
    setAuthLoading(true);

    const payload = {
      username: regUserVal,
      email: regEmailVal,
      password: regPassVal,
      phone: regPhoneVal,
      role: 'member'
    };

    axios.post('/api/auth/register/', payload)
      .then(res => {
        const { access, refresh, user } = res.data;
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
        localStorage.setItem('username', user.username);
        localStorage.setItem('user_email', user.email);

        setIsAuthenticated(true);
        setUsername(user.username);
        setUserEmail(user.email);

        setShowRegisterModal(false);
        setRegUserVal('');
        setRegEmailVal('');
        setRegPassVal('');
        setRegPhoneVal('');
        setAuthLoading(false);
      })
      .catch(err => {
        console.error(err);
        setRegError(err.response?.data ? JSON.stringify(err.response.data) : "Registration failed. Try other credentials.");
        setAuthLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_email');
    setIsAuthenticated(false);
    setUsername('');
    setUserEmail('');
  };

  const handleSelectPlan = (plan) => {
    if (!isAuthenticated) {
      alert(`To select the ${plan.name} plan, please join Fitnex Elite first.`);
      setShowRegisterModal(true);
    } else {
      alert(`Congratulations! You are subscribing to ${plan.name}. Our billing representative will coordinate your banking setups.`);
    }
  };

  if (initialLoading) {
    return (
      <div 
        className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-white" 
        style={{ backgroundColor: 'var(--color-bg-primary)' }}
      >
        <span 
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: '2.5rem',
            letterSpacing: '0.1em',
            animation: 'fadeIn 1s ease-in-out infinite alternate'
          }}
        >
          FITNEX<span style={{ color: 'var(--color-primary)' }}>ELITE</span>
        </span>
        <div className="spinner-border text-danger mt-4" role="status" style={{ width: '3rem', height: '3rem', color: 'var(--color-primary) !important' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Navigation */}
      <Navbar 
        isAuthenticated={isAuthenticated}
        username={username}
        onLogout={handleLogout}
        onOpenLogin={() => { setShowLoginModal(true); setShowRegisterModal(false); }}
        onOpenRegister={() => { setShowRegisterModal(true); setShowLoginModal(false); }}
      />

      {/* Main Sections */}
      <Hero onJoinClick={() => setShowRegisterModal(true)} />
      <About />
      <WhyChooseUs />
      <Programs />
      <Memberships onSelectPlan={handleSelectPlan} />
      <Trainers isAuthenticated={isAuthenticated} onOpenLogin={() => setShowLoginModal(true)} />
      <BMICalculator />
      <Nutrition />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-dark-content">
              <div className="modal-header modal-dark-header border-0 pb-0">
                <h4 className="modal-title fw-bold text-white text-uppercase">MEMBER LOGIN</h4>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowLoginModal(false)}></button>
              </div>
              <div className="modal-body pt-3">
                <form onSubmit={handleLoginSubmit} className="d-flex flex-column gap-3">
                  
                  {loginError && (
                    <div className="alert alert-danger py-2 small mb-0">
                      {loginError}
                    </div>
                  )}

                  <div>
                    <label className="text-secondary small mb-1">Username</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control input-premium w-100"
                      value={loginUserVal}
                      onChange={(e) => setLoginUserVal(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-secondary small mb-1">Password</label>
                    <input 
                      type="password" 
                      required 
                      className="form-control input-premium w-100"
                      value={loginPassVal}
                      onChange={(e) => setLoginPassVal(e.target.value)}
                    />
                  </div>

                  <button type="submit" disabled={authLoading} className="btn-premium-primary mt-2">
                    {authLoading ? 'Signing In...' : 'Sign In'}
                  </button>
                  
                  <span className="text-secondary small text-center mt-2">
                    Don't have an account?{' '}
                    <button 
                      type="button" 
                      onClick={() => { setShowRegisterModal(true); setShowLoginModal(false); }}
                      className="btn btn-link text-crimson text-decoration-none p-0 fw-semibold small"
                    >
                      Join Now
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegisterModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-dark-content">
              <div className="modal-header modal-dark-header border-0 pb-0">
                <h4 className="modal-title fw-bold text-white text-uppercase">BECOME A MEMBER</h4>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowRegisterModal(false)}></button>
              </div>
              <div className="modal-body pt-3">
                <form onSubmit={handleRegisterSubmit} className="d-flex flex-column gap-3">
                  
                  {regError && (
                    <div className="alert alert-danger py-2 small mb-0" style={{ wordBreak: 'break-word' }}>
                      {regError}
                    </div>
                  )}

                  <div>
                    <label className="text-secondary small mb-1">Select Username</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control input-premium w-100"
                      value={regUserVal}
                      onChange={(e) => setRegUserVal(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-secondary small mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="form-control input-premium w-100"
                      value={regEmailVal}
                      onChange={(e) => setRegEmailVal(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-secondary small mb-1">Create Password</label>
                    <input 
                      type="password" 
                      required 
                      className="form-control input-premium w-100"
                      value={regPassVal}
                      onChange={(e) => setRegPassVal(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-secondary small mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      className="form-control input-premium w-100"
                      value={regPhoneVal}
                      onChange={(e) => setRegPhoneVal(e.target.value)}
                    />
                  </div>

                  <button type="submit" disabled={authLoading} className="btn-premium-primary mt-2">
                    {authLoading ? 'Creating Account...' : 'Complete Register'}
                  </button>

                  <span className="text-secondary small text-center mt-2">
                    Already a member?{' '}
                    <button 
                      type="button" 
                      onClick={() => { setShowLoginModal(true); setShowRegisterModal(false); }}
                      className="btn btn-link text-crimson text-decoration-none p-0 fw-semibold small"
                    >
                      Login Here
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
