// client/src/Contact.js

import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // Use REACT_APP_API_URL environment variable or default to localhost
  const API_URL = 'http://localhost:5000/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({
      submitted: false,
      success: false,
      message: ''
    });

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmitStatus({
          success: false,
          error: true,
          message: 'Please fill out all fields.'
        });
        setLoading(false);
        return;
      }

      // Submit to the API
      const response = await axios.post(`${API_URL}/contact`, formData);
      
      if (response.data.success) {
        setSubmitStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          submitted: true, 
          success: false,
          message: response.data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-wrapper">
      {/* Hero Section */}
      <div className="gradient-bg py-5">
        <div className="container py-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3 text-white">Get In Touch</h1>
              <p className="lead text-white-50 mb-0">
                Have questions or feedback? We're here to help you on your learning journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-4">
            <h3 className="mb-4">Contact Information</h3>
            <p className="text-secondary mb-4">
              Reach out to us using any of the methods below. We aim to respond to all inquiries within 24 hours during business days.
            </p>

            <div className="d-flex align-items-center mb-4">
              <div className="rounded-circle bg-light p-3 me-3" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-map-marker-alt fs-4" style={{ color: "var(--primary)" }}></i>
              </div>
              <div>
                <h6 className="mb-1">Our Location</h6>
                <p className="text-secondary mb-0">123 Education Street, Learning City, 10001</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="rounded-circle bg-light p-3 me-3" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-envelope fs-4" style={{ color: "var(--primary)" }}></i>
              </div>
              <div>
                <h6 className="mb-1">Email Address</h6>
                <p className="text-secondary mb-0">info@eduzone.com</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="rounded-circle bg-light p-3 me-3" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-phone-alt fs-4" style={{ color: "var(--primary)" }}></i>
              </div>
              <div>
                <h6 className="mb-1">Phone Number</h6>
                <p className="text-secondary mb-0">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="rounded-circle bg-light p-3 me-3" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-clock fs-4" style={{ color: "var(--primary)" }}></i>
              </div>
              <div>
                <h6 className="mb-1">Working Hours</h6>
                <p className="text-secondary mb-0">Monday - Friday: 9AM - 5PM</p>
              </div>
            </div>

            <div className="d-flex mt-4">
              <a href="#" className="btn btn-light rounded-circle me-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fab fa-facebook-f" style={{ color: "var(--primary)" }}></i>
              </a>
              <a href="#" className="btn btn-light rounded-circle me-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fab fa-twitter" style={{ color: "var(--primary)" }}></i>
              </a>
              <a href="#" className="btn btn-light rounded-circle me-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fab fa-linkedin-in" style={{ color: "var(--primary)" }}></i>
              </a>
              <a href="#" className="btn btn-light rounded-circle" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fab fa-instagram" style={{ color: "var(--primary)" }}></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4">
              <div className="card-body">
                <h3 className="mb-4">Send Us A Message</h3>
                
                {submitStatus.submitted && (
                  <div 
                    className={`alert ${submitStatus.success ? 'alert-success' : 'alert-danger'} mb-4`} 
                    role="alert"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    {submitStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: "0.5rem", borderColor: "#e6e9ed" }}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: "0.5rem", borderColor: "#e6e9ed" }}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "0.5rem", borderColor: "#e6e9ed" }}
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                  
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ height: "150px", borderRadius: "0.5rem", borderColor: "#e6e9ed" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                  
                  <div className="text-end">
                    <button 
                      className="btn px-4 py-2 rounded-pill"
                      type="submit"
                      disabled={loading}
                      style={{ 
                        backgroundColor: "var(--primary)", 
                        color: "white",
                        minWidth: "140px"
                      }}
                    >
                      {loading ? (
                        <span>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </span>
                      ) : (
                        <span>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container-fluid px-0 mb-5">
        <div className="row g-0">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7423870974253!2d-73.98529252346234!3d40.7487238713729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690354631864!5m2!1sen!2sus"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
