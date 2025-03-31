import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Footer = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Education Street, Learning City</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 6789</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@eduzone.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Quick Links</h3>
            <Link className="btn btn-link text-white-50" to="/Aboutus">About Us</Link>
            <Link className="btn btn-link text-white-50" to="/contact">Contact Us</Link>
            <Link className="btn btn-link text-white-50" to="/subjects">Our Subjects</Link>
            <Link className="btn btn-link text-white-50" to="/dashboard">Dashboard</Link>
            {isAuthenticated && (
              <Link className="btn btn-link text-white-50" to="/quizzes">Practice Quizzes</Link>
            )}
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Subjects</h3>
            <Link className="btn btn-link text-white-50" to="/python">Python Programming</Link>
            <Link className="btn btn-link text-white-50" to="/fsd">Full Stack Development</Link>
            <Link className="btn btn-link text-white-50" to="/etc">Technical Communication</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Newsletter</h3>
            <p>Subscribe to our newsletter for updates</p>
            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
              <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Eduzone</a>, All Right Reserved. 
							
              {/*This template is free as long as you keep the footer author's credit link/attribution link/backlink. If you'd like to use the template without the footer author's credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
              Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br /><br />
              Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="#">Cookies</Link>
                <Link to="#">Help</Link>
                <Link to="#">FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;