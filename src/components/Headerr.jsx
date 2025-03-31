import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SearchBar from './SearchBar';

function Headerr() {
    const { isAuthenticated, currentUser, logout, isAdmin } = useAuth();
    const [scrolled, setScrolled] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();
    
    // Toggle profile dropdown
    const toggleProfile = () => {
        setProfileOpen(!profileOpen);
    };
    
    // Add scroll event listener to change navbar style on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileOpen && !event.target.closest('.profile-dropdown')) {
                setProfileOpen(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [profileOpen]);

    const handleLogin = () => {
        navigate('/login');
    };
    
    return (
        <div className="p-0">
            {/* Navbar Start */}
            <nav className={`navbar navbar-expand-lg sticky-top ${scrolled ? 'navbar-scrolled shadow-sm' : ''}`} 
                 style={{ 
                     backgroundColor: scrolled ? 'var(--light)' : 'rgba(245, 247, 250, 0.95)',
                     transition: 'all 0.3s ease-in-out'
                 }}>
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <h1 className="m-0" style={{ fontSize: '1.8rem', color: 'var(--dark)' }}>
                            <i className="fa fa-book-reader me-2" style={{ color: 'var(--primary)' }} />Eduzone
                        </h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="/" className="nav-item nav-link" style={{ fontSize: '1rem', padding: '20px 15px', color: 'var(--dark)', fontWeight: '500' }}>Home</NavLink>
                            
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ fontSize: '1rem', padding: '20px 15px', color: 'var(--dark)', fontWeight: '500', cursor: 'pointer' }}>Subjects</a>
                                <div className="dropdown-menu rounded border-0 shadow-sm m-0" style={{ backgroundColor: 'var(--light)', borderRadius: '0.5rem' }}>
                                    <NavLink to="/subjects" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                        <i className="fas fa-book me-2" style={{ color: 'var(--primary)' }}></i>All Subjects
                                    </NavLink>
                                    <NavLink to="/python" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                        <i className="fab fa-python me-2" style={{ color: 'var(--python-color)' }}></i>Python
                                    </NavLink>
                                    <NavLink to="/fsd" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                        <i className="fas fa-code me-2" style={{ color: 'var(--fsd-color)' }}></i>Full Stack Development
                                    </NavLink>
                                    <NavLink to="/etc" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                        <i className="fas fa-file-alt me-2" style={{ color: 'var(--etc-color)' }}></i>Technical Communication
                                    </NavLink>
                                </div>
                            </div>
                            
                            {isAuthenticated && (
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ fontSize: '1rem', padding: '20px 15px', color: 'var(--dark)', fontWeight: '500', cursor: 'pointer' }}>Quizzes</a>
                                    <div className="dropdown-menu rounded border-0 shadow-sm m-0" style={{ backgroundColor: 'var(--light)', borderRadius: '0.5rem' }}>
                                        <NavLink to="/quizzes" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                            <i className="fas fa-list-ul me-2" style={{ color: 'var(--primary)' }}></i>All Quizzes
                                        </NavLink>
                                        <NavLink to="/quiz1" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                            <i className="fab fa-html5 me-2" style={{ color: '#e15a46' }}></i>HTML Quiz
                                        </NavLink>
                                        <NavLink to="/python-quiz" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                            <i className="fab fa-python me-2" style={{ color: 'var(--python-color)' }}></i>Python Quiz
                                        </NavLink>
                                        <NavLink to="/javascript-quiz" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                            <i className="fab fa-js-square me-2" style={{ color: '#d4b85e' }}></i>JavaScript Quiz
                                        </NavLink>
                                        <NavLink to="/technical-quiz" className="dropdown-item" style={{ padding: '0.6rem 1.5rem', color: 'var(--dark)' }}>
                                            <i className="fas fa-file-alt me-2" style={{ color: 'var(--etc-color)' }}></i>Technical Communication Quiz
                                        </NavLink>
                                    </div>
                                </div>
                            )}
                            
                            {isAuthenticated && (
                                <NavLink to="/dashboard" className="nav-item nav-link" style={{ fontSize: '1rem', padding: '20px 15px', color: 'var(--dark)', fontWeight: '500' }}>
                                    <i className="fas fa-tachometer-alt me-1" style={{ color: 'var(--primary)' }}></i> Dashboard
                                </NavLink>
                            )}
                            
                            <NavLink to="/contact" className="nav-item nav-link" style={{ fontSize: '1rem', padding: '20px 15px', color: 'var(--dark)', fontWeight: '500' }}>Contact</NavLink>
                            <NavLink to="/Aboutus" className="nav-item nav-link" style={{ fontSize: '1rem', padding: '20px 15px', color: 'var(--dark)', fontWeight: '500' }}>About</NavLink>
                            
                            {/* Admin Link - Only visible to admin users */}
                            {isAdmin() && (
                                <NavLink to="/admin" className="nav-item nav-link" style={{ fontSize: '1rem', padding: '20px 15px', color: 'var(--dark)', fontWeight: '500' }}>
                                    <i className="fas fa-user-shield me-1" style={{ color: 'var(--primary)' }}></i> Admin
                                </NavLink>
                            )}
                        </div>
                        
                        {/* Search bar */}
                        <div className="me-3 d-none d-lg-block">
                            <SearchBar />
                        </div>
                        
                        <div className="d-flex align-items-center">
                            {isAuthenticated ? (
                                <div className="profile-dropdown me-2" onClick={toggleProfile}>
                                    <button className="btn btn-light rounded-circle p-2" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                        <i className="fas fa-user" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                                    </button>
                                    
                                    {/* Profile dropdown content */}
                                    <div className={`profile-dropdown-content ${profileOpen ? 'active' : ''}`} style={{ display: profileOpen ? 'block' : 'none' }}>
                                        <div className="p-3 border-bottom">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light p-2 me-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <i className="fas fa-user" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: 'bold', color: 'var(--dark)' }}>
                                                        {currentUser?.name || 'User'}
                                                    </div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>
                                                        {currentUser?.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/dashboard" className="profile-dropdown-item">
                                            <i className="fas fa-tachometer-alt me-2" style={{ color: 'var(--primary)' }}></i>
                                            Dashboard
                                        </NavLink>
                                        {isAdmin() && (
                                            <NavLink to="/admin" className="profile-dropdown-item">
                                                <i className="fas fa-user-shield me-2" style={{ color: 'var(--primary)' }}></i>
                                                Admin Panel
                                            </NavLink>
                                        )}
                                        <div className="profile-dropdown-divider"></div>
                                        <a onClick={logout} 
                                           className="profile-dropdown-item" style={{ cursor: 'pointer' }}>
                                            <i className="fas fa-sign-out-alt me-2" style={{ color: 'var(--danger)' }}></i>
                                            Log Out
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <button 
                                    className="btn rounded-pill px-3 d-none d-lg-block" 
                                    style={{ backgroundColor: 'var(--primary)', color: 'white', fontSize: '0.9rem', transition: 'all 0.3s' }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-dark)'}
                                    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary)'}
                                    onClick={handleLogin}
                                >
                                    <i className="fas fa-sign-in-alt me-1"></i> Log In
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </div>
    )
}

export default Headerr