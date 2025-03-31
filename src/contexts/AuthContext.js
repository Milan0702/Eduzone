import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Check if user is logged in on initial load by checking token
  useEffect(() => {
    const token = localStorage.getItem('eduzone_token');
    
    if (token) {
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);
  
  // Verify token and set user if valid
  const verifyToken = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.data.success) {
        setCurrentUser(response.data.user);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('eduzone_token');
      }
    } catch (error) {
      console.error('Token verification error:', error);
      localStorage.removeItem('eduzone_token');
    } finally {
      setLoading(false);
    }
  };
  
  // Login function
  const login = async (email, password) => {
    try {
      setError(null);
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      
      if (response.data.success) {
        const { token, user } = response.data;
        
        // Store token and user info
        localStorage.setItem('eduzone_token', token);
        setCurrentUser(user);
        setIsAuthenticated(true);
        
        return { success: true, user };
      } else {
        setError(response.data.message || 'Login failed');
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during login';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  };
  
  // Sign up function
  const signup = async (name, email, password) => {
    try {
      setError(null);
      const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
      
      if (response.data.success) {
        const { token, user } = response.data;
        
        // Store token and user info
        localStorage.setItem('eduzone_token', token);
        setCurrentUser(user);
        setIsAuthenticated(true);
        
        return { success: true, user };
      } else {
        setError(response.data.message || 'Registration failed');
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during registration';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  };
  
  // Logout function
  const logout = () => {
    localStorage.removeItem('eduzone_token');
    setCurrentUser(null);
    setIsAuthenticated(false);
    window.location.href = '/';
  };
  
  // Check if user is admin
  const isAdmin = () => {
    return currentUser && currentUser.role === 'admin';
  };
  
  const value = {
    currentUser,
    isAuthenticated,
    isAdmin,
    login,
    signup,
    logout,
    error
  };
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 