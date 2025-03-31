import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Form validation
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      setLoading(false);
      return;
    }
    
    try {
      const result = await signup(name, email, password);
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message || 'Failed to create account');
      }
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    }
    
    setLoading(false);
  };
  
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 rounded-lg">
              <div className="card-header gradient-bg py-4">
                <h3 className="text-center mb-0 text-white">Create an Account</h3>
              </div>
              <div className="card-body p-4 p-md-5">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-user text-primary"></i>
                      </span>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-envelope text-primary"></i>
                      </span>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-lock text-primary"></i>
                      </span>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <small className="text-muted">Password must be at least 6 characters</small>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-lock text-primary"></i>
                      </span>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-primary py-3"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-user-plus me-2"></i>Create Account
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="text-center mt-4">
                    <p>Already have an account? <Link to="/login" className="text-primary">Log In</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 