import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ requireAdmin = false }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();
  
  // If admin route and user is not admin
  if (requireAdmin && !isAdmin()) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">
          <h3>Access Denied</h3>
          <p>You don't have permission to access this page.</p>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If authenticated, render children
  return <Outlet />;
};

export default ProtectedRoute; 