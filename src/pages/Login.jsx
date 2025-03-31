import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path if it exists, or default to homepage
  const from = location.state?.from?.pathname || '/';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Form validation
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    try {
      const result = await login(email, password);
      
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.message || 'Failed to log in');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    }
    
    setLoading(false);
  };
  
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-sm border-0 rounded-lg">
              <div className="card-header gradient-bg py-4">
                <h3 className="text-center mb-0 text-white">Login to Eduzone</h3>
              </div>
              <div className="card-body p-4 p-md-5">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
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
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
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
                          Logging in...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-sign-in-alt me-2"></i>Login
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="text-center mt-4">
                    <p>Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link></p>
                  </div>
                </form>
                
                <div className="mt-4">
                  <div className="text-center mb-3">
                    <span className="text-muted">Demo Credentials</span>
                  </div>
                  <div className="card bg-light p-3">
                    <p className="mb-1"><strong>Admin:</strong> admin@eduzone.com / admin123</p>
                    <p className="mb-0"><strong>User:</strong> user@example.com / user123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 