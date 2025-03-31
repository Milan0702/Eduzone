import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const Quizzes = () => {
  const { isAuthenticated } = useAuth();

  const quizzes = [
    {
      id: 'html-quiz',
      title: 'HTML Quiz',
      description: 'Test your knowledge of HTML basics, tags, and document structure.',
      questions: 7,
      timeLimit: '10 minutes',
      difficulty: 'Beginner',
      color: 'danger',
      icon: 'fab fa-html5',
      path: '/quiz1'
    },
    {
      id: 'python-quiz',
      title: 'Python Quiz',
      description: 'Challenge yourself with questions about Python syntax, data structures, and basic concepts.',
      questions: 8,
      timeLimit: '15 minutes',
      difficulty: 'Intermediate',
      color: 'primary',
      icon: 'fab fa-python',
      path: '/python-quiz'
    },
    {
      id: 'javascript-quiz',
      title: 'JavaScript Quiz',
      description: 'Test your understanding of JavaScript fundamentals, functions, and DOM manipulation.',
      questions: 10,
      timeLimit: '15 minutes',
      difficulty: 'Intermediate',
      color: 'warning',
      icon: 'fab fa-js',
      path: '/javascript-quiz'
    },
    {
      id: 'tech-quiz',
      title: 'Technical Communication Quiz',
      description: 'Evaluate your understanding of effective technical writing and communication principles.',
      questions: 10,
      timeLimit: '15 minutes',
      difficulty: 'Intermediate',
      color: 'info',
      icon: 'fas fa-book',
      path: '/technical-quiz'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1>Interactive Quizzes</h1>
          <p className="lead">Test your knowledge and track your progress with our interactive quizzes</p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body text-center p-5">
                <h2 className="mb-4">Please Login to Access Quizzes</h2>
                <p className="lead mb-4">Our quizzes are designed to help you test your knowledge and track your learning progress.</p>
                <NavLink 
                  className="btn btn-primary btn-lg" 
                  to="/login"
                >
                  <i className="fas fa-sign-in-alt me-2"></i> Login to Continue
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1>Interactive Quizzes</h1>
        <p className="lead">Test your knowledge and track your progress with our interactive quizzes</p>
      </div>
      
      <div className="row">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className={`card-header bg-${quiz.color} text-white`}>
                <h3 className="mb-0">
                  <i className={`${quiz.icon} me-2`}></i>
                  {quiz.title}
                </h3>
              </div>
              <div className="card-body d-flex flex-column">
                <p>{quiz.description}</p>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span><i className="fas fa-question-circle me-2"></i>Questions:</span>
                    <span className="fw-bold">{quiz.questions}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span><i className="fas fa-clock me-2"></i>Time Limit:</span>
                    <span className="fw-bold">{quiz.timeLimit}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span><i className="fas fa-layer-group me-2"></i>Difficulty:</span>
                    <span className="fw-bold">{quiz.difficulty}</span>
                  </div>
                </div>
                
                <Link 
                  to={quiz.path} 
                  className={`btn btn-${quiz.color} mt-auto`}
                >
                  <i className="fas fa-play-circle me-2"></i>
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="card mt-5 bg-light border-0">
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h3>Track Your Quiz Progress</h3>
              <p className="mb-md-0">
                All quiz results are saved in your personal dashboard. Monitor your progress and identify areas for improvement.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <Link to="/dashboard" className="btn btn-outline-primary">
                <i className="fas fa-chart-line me-2"></i>
                View My Progress
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes; 