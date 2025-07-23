import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, currentUser, isAdmin } = useAuth();
  
  // Use REACT_APP_API_URL environment variable or default to localhost
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem('eduzone_token');
        const response = await fetch(`${API_URL}/api/contacts`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        
        if (data.success) {
          setContacts(data.data);
        } else {
          throw new Error(data.message || 'Failed to fetch contacts');
        }
      } catch (err) {
        console.error('Error fetching contacts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated && isAdmin()) {
      fetchContacts();
    }
  }, [isAuthenticated, isAdmin, API_URL]);

  // Redirect non-admin users
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (isAuthenticated && !isAdmin()) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">
          <h3>Access Denied</h3>
          <p>You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading contact data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="text-center mb-5">Admin Dashboard</h1>
        
        <div className="card mb-5">
          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">Contact Form Submissions</h3>
          </div>
          <div className="card-body">
            {contacts.length === 0 ? (
              <div className="alert alert-info">No submissions yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact._id || contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.subject}</td>
                        <td>{contact.message.substring(0, 50)}...</td>
                        <td>{new Date(contact.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin; 