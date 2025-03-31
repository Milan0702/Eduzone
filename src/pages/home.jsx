import React from 'react'
import { NavLink } from 'react-router-dom'
import Testimonial from './Testimonial'
import { useAuth } from '../contexts/AuthContext'

function Home() {
    const { login, isAuthenticated, logout, currentUser } = useAuth();
    
    // Handler for login button clicks
    const handleLogin = () => {
        login();
    }
    
    return (
        <div>
            {/* Carousel Start */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="d-block w-100" alt="Carousel 1" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-2 text-white animated slideInDown mb-4">Eduzone-Where Learning Takes Center Stage</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2 ">One stop educational platform offering wide range of resources for all your exam preparations. </p>
                                        <div className="d-flex gap-3 flex-wrap">
                                            <NavLink to="/subjects" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                                                <i className="fas fa-book-open me-2"></i>Explore Subjects
                                            </NavLink>
                                            <NavLink to="/quizzes" className="btn btn-light py-md-3 px-md-5 animated slideInRight">
                                                <i className="fas fa-clipboard-list me-2"></i>Take Quizzes
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="Carousel 2" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-2 text-white animated slideInDown mb-4">Access All the Faculty Notes And Tutorials,All In One Platform</h1>
                                        <div className="d-flex gap-3 flex-wrap">
                                            {isAuthenticated ? (
                                                <NavLink to="/dashboard" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                                                    <i className="fas fa-tachometer-alt me-2"></i>Go to Dashboard
                                                </NavLink>
                                            ) : (
                                                <NavLink to="/login" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                                                    <i className="fas fa-sign-in-alt me-2"></i>Login to Access
                                                </NavLink>
                                            )}
                                            <NavLink to="/aboutus" className="btn btn-light py-md-3 px-md-5 animated slideInRight">
                                                <i className="fas fa-info-circle me-2"></i>Learn About Us
                                            </NavLink>
                                        </div>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="Carousel 3" />
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon mr-5" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Carousel End */}
            {/* Subjects Showcase Start */}
            <div className="container-xxl py-5 overflow-hidden">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="display-5 mb-4 position-relative">
                            <span className="position-relative z-index-1">Ace every Subject</span>
                            <svg className="position-absolute start-50 top-100 translate-middle" width="180" height="12" viewBox="0 0 180 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5C21 3 61 1 89 8.5C117 16 159 8.5 179 5" stroke="var(--bs-primary)" strokeWidth="4" strokeLinecap="round"/>
                            </svg>
                        </h1>
                        <p className="fs-5 text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                            From Programming Languages Such as Python To Crucial Technical Communication Subjects, 
                            Prepare And Learn For Every Exam.
                        </p>
                    </div>
                    
                    <div className="row g-4 justify-content-center">
                        {/* Python Card */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="subject-card h-100 rounded overflow-hidden shadow-hover position-relative">
                                <div className="subject-icon-bg bg-soft-primary position-absolute" style={{ width: '150px', height: '150px', borderRadius: '50%', top: '-40px', right: '-40px', opacity: '0.2' }}></div>
                                <div className="p-4 p-lg-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle shadow-sm mb-4" style={{ width: '70px', height: '70px' }}>
                                        <i className="fab fa-python fa-2x text-white"></i>
                                    </div>
                                    <h3 className="mb-3">Python</h3>
                                    <p className="mb-4">Master Python programming with comprehensive tutorials, projects, and hands-on coding exercises.</p>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                                <i className="fas fa-video text-white" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            <span className="ms-2 small text-muted">42 Videos</span>
                                        </div>
                                        <div className="d-flex align-items-center ms-4">
                                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                                <i className="fas fa-file-alt text-white" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            <span className="ms-2 small text-muted">25 Resources</span>
                                        </div>
                                    </div>
                                    <NavLink to="/python" className="btn btn-outline-primary rounded-pill px-4">
                                        Start Learning <i className="fas fa-arrow-right ms-2"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        
                        {/* Full Stack Development Card */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="subject-card h-100 rounded overflow-hidden shadow-hover position-relative">
                                <div className="subject-icon-bg bg-soft-success position-absolute" style={{ width: '150px', height: '150px', borderRadius: '50%', top: '-40px', right: '-40px', opacity: '0.2' }}></div>
                                <div className="p-4 p-lg-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-success rounded-circle shadow-sm mb-4" style={{ width: '70px', height: '70px' }}>
                                        <i className="fas fa-laptop-code fa-2x text-white"></i>
                                    </div>
                                    <h3 className="mb-3">Full Stack Development</h3>
                                    <p className="mb-4">Build complete web applications from frontend to backend with modern frameworks and technologies.</p>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                                <i className="fas fa-video text-white" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            <span className="ms-2 small text-muted">56 Videos</span>
                                        </div>
                                        <div className="d-flex align-items-center ms-4">
                                            <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                                <i className="fas fa-file-alt text-white" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            <span className="ms-2 small text-muted">38 Resources</span>
                                        </div>
                                    </div>
                                    <NavLink to="/fsd" className="btn btn-outline-success rounded-pill px-4">
                                        Start Learning <i className="fas fa-arrow-right ms-2"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        
                        {/* Technical Communication Card */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="subject-card h-100 rounded overflow-hidden shadow-hover position-relative">
                                <div className="subject-icon-bg bg-soft-warning position-absolute" style={{ width: '150px', height: '150px', borderRadius: '50%', top: '-40px', right: '-40px', opacity: '0.2' }}></div>
                                <div className="p-4 p-lg-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-warning rounded-circle shadow-sm mb-4" style={{ width: '70px', height: '70px' }}>
                                        <i className="fas fa-comments fa-2x text-white"></i>
                                    </div>
                                    <h3 className="mb-3">Technical Communication</h3>
                                    <p className="mb-4">Learn to effectively communicate complex technical information through various professional formats.</p>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                                <i className="fas fa-video text-white" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            <span className="ms-2 small text-muted">34 Videos</span>
                                        </div>
                                        <div className="d-flex align-items-center ms-4">
                                            <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                                <i className="fas fa-file-alt text-white" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            <span className="ms-2 small text-muted">22 Resources</span>
                                        </div>
                                    </div>
                                    <NavLink to="/etc" className="btn btn-outline-warning rounded-pill px-4">
                                        Start Learning <i className="fas fa-arrow-right ms-2"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.7s">
                        <NavLink to="/subjects" className="btn btn-primary rounded-pill px-5 py-3">
                            <i className="fas fa-th-large me-2"></i> Explore All Subjects
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* Subjects Showcase End */}
            
            {/* Feature Showcase Start */}
            <div className="container-xxl py-5 bg-gradient" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9f2fe 100%)" }}>
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "700px" }}>
                        <h5 className="text-primary text-uppercase">Why Students Love Eduzone</h5>
                        <h1 className="mb-4">Elevate Your Learning Experience</h1>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="feature-box text-center rounded p-4" style={{ boxShadow: "0 0 45px rgba(0, 0, 0, .08)" }}>
                                <div className="feature-icon bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                                     style={{ width: "90px", height: "90px", border: "2px solid var(--primary)", padding: "22px" }}>
                                    <i className="fas fa-book-reader fa-3x text-primary"></i>
                                </div>
                                <h4 className="mb-3">Interactive Learning</h4>
                                <p className="mb-3">Engage with our immersive learning materials designed to keep you motivated and excited.</p>
                                <a className="btn btn-sm btn-outline-primary rounded-pill px-3" href="/subjects">
                                    <i className="fas fa-arrow-right me-1"></i> Explore Resources
                                </a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="feature-box text-center rounded p-4" style={{ boxShadow: "0 0 45px rgba(0, 0, 0, .08)" }}>
                                <div className="feature-icon bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                                     style={{ width: "90px", height: "90px", border: "2px solid var(--primary)", padding: "22px" }}>
                                    <i className="fas fa-laptop-code fa-3x text-primary"></i>
                                </div>
                                <h4 className="mb-3">Hands-On Exercises</h4>
                                <p className="mb-3">Practice with real-world coding challenges and interactive exercises to build practical skills.</p>
                                <a className="btn btn-sm btn-outline-primary rounded-pill px-3" href="/subjects">
                                    <i className="fas fa-arrow-right me-1"></i> Start Practicing
                                </a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="feature-box text-center rounded p-4" style={{ boxShadow: "0 0 45px rgba(0, 0, 0, .08)" }}>
                                <div className="feature-icon bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                                     style={{ width: "90px", height: "90px", border: "2px solid var(--primary)", padding: "22px" }}>
                                    <i className="fas fa-users fa-3x text-primary"></i>
                                </div>
                                <h4 className="mb-3">Community Access</h4>
                                <p className="mb-3">Join our vibrant community of learners and educators to share knowledge and ideas.</p>
                                <a className="btn btn-sm btn-outline-primary rounded-pill px-3" href="/dashboard">
                                    <i className="fas fa-arrow-right me-1"></i> Join Community
                                </a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="feature-box text-center rounded p-4" style={{ boxShadow: "0 0 45px rgba(0, 0, 0, .08)" }}>
                                <div className="feature-icon bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                                     style={{ width: "90px", height: "90px", border: "2px solid var(--primary)", padding: "22px" }}>
                                    <i className="fas fa-headset fa-3x text-primary"></i>
                                </div>
                                <h4 className="mb-3">Expert Support</h4>
                                <p className="mb-3">Get personalized guidance from industry professionals whenever you need help.</p>
                                <a className="btn btn-sm btn-outline-primary rounded-pill px-3" href="/contact">
                                    <i className="fas fa-arrow-right me-1"></i> Contact Experts
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-5">
                        {isAuthenticated ? (
                            <NavLink className="btn btn-primary py-3 px-5 rounded-pill" to="/dashboard">
                                <i className="fas fa-graduation-cap me-2"></i>Access Your Learning Portal
                            </NavLink>
                        ) : (
                            <NavLink className="btn btn-primary py-3 px-5 rounded-pill" to="/login">
                                <i className="fas fa-sign-in-alt me-2"></i>Sign Up to Get Started
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
            {/* Feature Showcase End */}
            
            {/* Learning Path Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "700px" }}>
                        <h5 className="text-primary text-uppercase">Your Learning Journey</h5>
                        <h1 className="mb-4">Clear Path to Success</h1>
                        <p className="mb-0">Follow our structured learning path to transform from beginner to expert at your own pace</p>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="timeline-wrapper position-relative">
                                {/* Line */}
                                <div className="timeline-line position-absolute" style={{ 
                                    top: "24px", bottom: "24px", width: "4px", 
                                    left: "50%", transform: "translateX(-50%)", 
                                    backgroundColor: "var(--primary)",
                                    zIndex: "0"
                                }}></div>
                                
                                {/* Step 1 */}
                                <div className="row g-0 justify-content-end justify-content-md-around align-items-center timeline-nodes wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="col-9 col-md-5 order-3 order-md-1 timeline-content bg-light p-4 shadow-sm rounded">
                                        <h4 className="mb-3">1. Assess Your Skills</h4>
                                        <p>Take our diagnostic quizzes to identify your current knowledge level and receive a personalized learning plan.</p>
                                        <div className="d-flex align-items-center mt-3">
                                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: "40px", height: "40px" }}>
                                                <i className="fas fa-clipboard-check text-white"></i>
                                            </div>
                                            <div className="ms-3">
                                                <NavLink to="/quizzes" className="text-primary fw-bold">Start Assessment</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-center py-5">
                                        <div className="timeline-icon d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm bg-white border border-primary border-3" 
                                             style={{ width: "50px", height: "50px", zIndex: "1", position: "relative" }}>
                                            <i className="fas fa-search fs-5 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Step 2 */}
                                <div className="row g-0 justify-content-start justify-content-md-around align-items-center timeline-nodes my-lg-5 my-4 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="col-9 col-md-5 order-1 order-md-3 timeline-content bg-light p-4 shadow-sm rounded">
                                        <h4 className="mb-3">2. Explore Learning Materials</h4>
                                        <p>Access comprehensive course materials, video tutorials, interactive coding exercises, and downloadable resources.</p>
                                        <div className="d-flex align-items-center mt-3">
                                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: "40px", height: "40px" }}>
                                                <i className="fas fa-book-open text-white"></i>
                                            </div>
                                            <div className="ms-3">
                                                <NavLink to="/subjects" className="text-primary fw-bold">Browse Subjects</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-center py-5">
                                        <div className="timeline-icon d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm bg-white border border-primary border-3"
                                             style={{ width: "50px", height: "50px", zIndex: "1", position: "relative" }}>
                                            <i className="fas fa-laptop-code fs-5 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Step 3 */}
                                <div className="row g-0 justify-content-end justify-content-md-around align-items-center timeline-nodes wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="col-9 col-md-5 order-3 order-md-1 timeline-content bg-light p-4 shadow-sm rounded">
                                        <h4 className="mb-3">3. Practice & Apply</h4>
                                        <p>Test your understanding with practical exercises, projects, and challenges that reinforce your learning.</p>
                                        <div className="d-flex align-items-center mt-3">
                                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: "40px", height: "40px" }}>
                                                <i className="fas fa-code text-white"></i>
                                            </div>
                                            <div className="ms-3">
                                                <NavLink to="/dashboard" className="text-primary fw-bold">Access Projects</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-center py-5">
                                        <div className="timeline-icon d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm bg-white border border-primary border-3" 
                                             style={{ width: "50px", height: "50px", zIndex: "1", position: "relative" }}>
                                            <i className="fas fa-tasks fs-5 text-primary"></i>
                            </div>
                        </div>
                                </div>
                                
                                {/* Step 4 */}
                                <div className="row g-0 justify-content-start justify-content-md-around align-items-center timeline-nodes my-lg-5 my-4 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="col-9 col-md-5 order-1 order-md-3 timeline-content bg-light p-4 shadow-sm rounded">
                                        <h4 className="mb-3">4. Get Certified</h4>
                                        <p>Complete assessments and final projects to earn certifications that demonstrate your expertise to employers.</p>
                                        <div className="d-flex align-items-center mt-3">
                                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: "40px", height: "40px" }}>
                                                <i className="fas fa-medal text-white"></i>
                                            </div>
                                            <div className="ms-3">
                                                <NavLink to="/dashboard" className="text-primary fw-bold">View Certifications</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 col-sm-1 order-2 timeline-icons text-center py-5">
                                        <div className="timeline-icon d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm bg-white border border-primary border-3" 
                                             style={{ width: "50px", height: "50px", zIndex: "1", position: "relative" }}>
                                            <i className="fas fa-certificate fs-5 text-primary"></i>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="text-muted mb-4">Ready to take your first step?</p>
                        {isAuthenticated ? (
                            <NavLink className="btn btn-primary py-3 px-5 rounded-pill" to="/dashboard">
                                <i className="fas fa-running me-2"></i>Begin Your Journey
                            </NavLink>
                        ) : (
                            <NavLink className="btn btn-primary py-3 px-5 rounded-pill" to="/login">
                                <i className="fas fa-user-plus me-2"></i>Create Your Account
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
            {/* Learning Path End */}

            {/* Classes Start */}
            <div className="container-xxl py-5" id="subject" >
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <h1 className="mb-3">Subjects</h1>
                        <div className="mb-4">
                            <NavLink to="/subjects" className="btn btn-outline-primary">
                                <i className="fas fa-book me-2"></i>Explore All Subjects
                            </NavLink>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-1.jpg" alt />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                {
                            isAuthenticated ? (
                                <>
                            <NavLink to="/python" className="d-block text-center h3 mt-3 mb-4" >Python</NavLink>
                            <div className="text-center">
                                <NavLink to="/python-quiz" className="btn btn-sm btn-primary">
                                    <i className="fas fa-question-circle me-1"></i>Take Quiz
                                </NavLink>
                            </div>
                                </>
                        
                        ) :
                        (
                         <> 
                         <NavLink onClick={() => login()} className="d-block text-center h3 mt-3 mb-4" >Python</NavLink>   
                         </>
                        )
                    }
                                    
                                    
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-2.jpg" alt />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                {
                            isAuthenticated ? (
                                <>
                            <NavLink to="/fsd" className="d-block text-center h3 mt-3 mb-4" >FSD</NavLink>
                            <div className="text-center">
                                <NavLink to="/javascript-quiz" className="btn btn-sm btn-success">
                                    <i className="fas fa-question-circle me-1"></i>Take Quiz
                                </NavLink>
                            </div>
                                </>
                        
                        ) :
                        (
                         <> 
                         <NavLink onClick={() => login()} className="d-block text-center h3 mt-3 mb-4" >FSD</NavLink>   
                         </>
                        )
                    }
                                    
                                   
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-3.jpg" alt />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                {
                            isAuthenticated ? (
                                <>
                            <NavLink to="/etc" className="d-block text-center h3 mt-3 mb-4" >ETC</NavLink>
                            <div className="text-center">
                                <NavLink to="/technical-quiz" className="btn btn-sm btn-warning">
                                    <i className="fas fa-question-circle me-1"></i>Take Quiz
                                </NavLink>
                            </div>
                                </>
                        
                        ) :
                        (
                         <> 
                         <NavLink onClick={() => login()} className="d-block text-center h3 mt-3 mb-4" >ETC</NavLink>   
                         </>
                        )
                    }
                                    
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Classes End */}

            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <h1 className="mb-3">Know Your Tutor</h1>
                        
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt />
                                <div className="team-text">
                                    <h3>Sandeep</h3>
                                    <p>ETC Expert</p>
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-square btn-primary mx-1" href="https://www.youtube.com/watch?v=_xLENSGFZAc&pp=ygUSc2FuZGVlcCBtYWhlc2h3YXJp"><i className="fab fa-youtube" /></a>

                                        <a className="btn btn-square btn-primary  mx-1" href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkNoZ3VrTUZRUlRkTExobk1SRlM0bWt0Uzktd3xBQ3Jtc0trdGhhSUd4LUxwOXJXc0ZTaXNOSEc0WTNHRk5lRnRlUjhmUFJ5NWlYMU1wcU55ZFB5OG1zSk5senpmWmFCcktCUEprWmhHWWlScVU3OXpLYlZodGxsWWtMS2gxTHpNaU9xV21rZDBDazBoc0Z4SUVSNA&q=https%3A%2F%2Fwww.instagram.com%2Fsandeep__maheshwari&v=_CcWEDyPiE0"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt />
                                <div className="team-text">
                                    <h3>Lewis</h3>
                                    <p>Full Stack Expert</p>
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-square btn-primary mx-1" href="https://www.youtube.com/watch?v=5-MLMzbUlPY"><i className="fab fa-youtube" /></a>

                                        <a className="btn btn-square btn-primary  mx-1" href="https://www.instagram.com/lewismenelaws/"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt />
                                <div className="team-text">
                                    <h3>Jenny</h3>
                                    <p>Python Expert</p>
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-square btn-primary mx-1" href="https://www.youtube.com/watch?v=DInMru2Eq6E"><i className="fab fa-youtube" /></a>
                                        <a className="btn btn-square btn-primary  mx-1" href="https://www.instagram.com/jayantikhat..."><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            {/* Testimonial Start */}

     <Testimonial/>

            {/* Testimonial End */}
        </div>

    )
}

export default Home