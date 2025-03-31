import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const Subjects = () => {
  const { isAuthenticated, login } = useAuth();

  const subjects = [
    {
      id: 'python',
      title: 'Python',
      description: 'Master Python programming from basics to advanced concepts including data structures, object-oriented programming, and data analysis.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'primary',
      path: '/python',
      quizPath: '/python-quiz'
    },
    {
      id: 'fsd',
      title: 'Full Stack Development',
      description: 'Learn all aspects of web development from frontend (HTML, CSS, JavaScript) to backend technologies and databases.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'success',
      path: '/fsd',
      quizPath: '/javascript-quiz'
    },
    {
      id: 'etc',
      title: 'English Technical Communication',
      description: 'Develop effective technical communication skills for professional environments including documentation, presentations, and reports.',
      image: '/images/etc-icon.png',
      color: 'warning',
      path: '/etc',
      quizPath: '/technical-quiz'
    }
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="mb-3">Our Subjects</h1>
          <p className="fs-5">Explore our comprehensive range of subjects designed to help you master in-demand skills</p>
        </div>

        {/* Subjects Overview */}
        <div className="row g-4 mb-5">
          {subjects.map((subject) => (
            <div key={subject.id} className="col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded">
                <div className={`card-header bg-${subject.color} text-white py-4 text-center`}>
                  <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-3" style={{ width: '80px', height: '80px' }}>
                    <img 
                      src={subject.image} 
                      alt={subject.title} 
                      className="img-fluid" 
                      style={{ maxWidth: '50px', maxHeight: '50px' }} 
                    />
                  </div>
                  <h3 className="mb-0">{subject.title}</h3>
                </div>
                <div className="card-body p-4">
                  <p className="card-text">{subject.description}</p>
                  <div className="d-flex justify-content-between mt-auto">
                    {isAuthenticated ? (
                      <Link to={subject.path} className={`btn btn-${subject.color}`}>
                        <i className="fas fa-book-open me-2"></i>Start Learning
                      </Link>
                    ) : (
                      <Link to="/login" className={`btn btn-${subject.color}`}>
                        <i className="fas fa-lock me-2"></i>Log in to Access
                      </Link>
                    )}
                    {isAuthenticated ? (
                      <Link to={subject.quizPath} className="btn btn-outline-dark">
                        <i className="fas fa-question-circle me-2"></i>Take Quiz
                      </Link>
                    ) : (
                      <Link to="/login" className="btn btn-outline-dark">
                        <i className="fas fa-lock me-2"></i>Login for Quiz
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Learn With Us */}
        <div className="card border-0 shadow-sm rounded mb-5">
          <div className="card-body p-5">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-4">Why Learn With Us?</h2>
                <p className="lead">At Eduzone, we provide comprehensive learning experiences designed to help you achieve your academic and career goals.</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 ps-0">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Comprehensive course materials created by experts
                  </li>
                  <li className="list-group-item border-0 ps-0">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Interactive quizzes to test your knowledge
                  </li>
                  <li className="list-group-item border-0 ps-0">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Progress tracking to monitor your learning journey
                  </li>
                  <li className="list-group-item border-0 ps-0">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Personalized dashboard for organized learning
                  </li>
                </ul>
                
                {isAuthenticated ? (
                  <Link to="/quizzes" className="btn btn-primary mt-3">
                    <i className="fas fa-question-circle me-2"></i>Explore All Quizzes
                  </Link>
                ) : (
                  <Link to="/login" className="btn btn-primary mt-3">
                    <i className="fas fa-sign-in-alt me-2"></i>Login to Access Quizzes
                  </Link>
                )}
              </div>
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/_uQrJ0TkZlc"
                    title="Educational Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="mb-4">Ready to start your learning journey?</h3>
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn btn-primary btn-lg px-5">
              <i className="fas fa-tachometer-alt me-2"></i>Go to Dashboard
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-lg px-5">
              <i className="fas fa-sign-in-alt me-2"></i>Sign Up Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subjects; 