import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { NavLink } from 'react-router-dom';
import CourseProgress from '../components/CourseProgress';

const Dashboard = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const [recentActivity, setRecentActivity] = useState([]);
  
  useEffect(() => {
    if (isAuthenticated) {
      // Load recent activity from localStorage
      const loadRecentActivity = () => {
        const pythonProgress = localStorage.getItem('course_progress_python') || '0';
        const fsdProgress = localStorage.getItem('course_progress_fsd') || '0';
        const etcProgress = localStorage.getItem('course_progress_etc') || '0';
        
        const quizResults = localStorage.getItem('quiz_results') ? 
          JSON.parse(localStorage.getItem('quiz_results')) : [];
          
        // Create activity log
        const activities = [
          ...quizResults.map(result => ({
            type: 'quiz',
            title: result.quizName,
            date: new Date(result.date),
            score: result.score,
            total: result.total
          }))
        ];
        
        // Add course progress activities
        if (parseInt(pythonProgress) > 0) {
          activities.push({
            type: 'course',
            title: 'Python',
            progress: parseInt(pythonProgress),
            total: 4,
            path: '/python'
          });
        }
        
        if (parseInt(fsdProgress) > 0) {
          activities.push({
            type: 'course',
            title: 'Full Stack Development',
            progress: parseInt(fsdProgress),
            total: 4,
            path: '/fsd'
          });
        }
        
        if (parseInt(etcProgress) > 0) {
          activities.push({
            type: 'course',
            title: 'English Technical Communication',
            progress: parseInt(etcProgress),
            total: 4,
            path: '/etc'
          });
        }
        
        // Sort by most recent first (for quiz results)
        activities.sort((a, b) => {
          if (a.date && b.date) {
            return new Date(b.date) - new Date(a.date);
          }
          return 0;
        });
        
        setRecentActivity(activities);
      };
      
      loadRecentActivity();
    }
  }, [isAuthenticated]);
  
  if (!isAuthenticated) {
    return (
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body text-center p-5">
                <h2 className="mb-4">Please Login to Access Your Dashboard</h2>
                <p className="lead mb-4">Track your progress, view your quiz results, and access all your course materials in one place.</p>
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
      <div className="row">
        <div className="col-lg-4">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Profile</h4>
            </div>
            <div className="card-body text-center">
              <div className="mb-3">
                <div 
                  className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto" 
                  style={{ width: '100px', height: '100px' }}
                >
                  <i className="fas fa-user fa-3x text-secondary"></i>
                </div>
              </div>
              <h5>{currentUser.name}</h5>
              <p className="text-muted">{currentUser.email}</p>
            </div>
          </div>
          
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Quick Links</h4>
            </div>
            <div className="card-body">
              <div className="list-group">
                <NavLink to="/python" className="list-group-item list-group-item-action">
                  <i className="fab fa-python me-2"></i> Python Course
                </NavLink>
                <NavLink to="/fsd" className="list-group-item list-group-item-action">
                  <i className="fab fa-html5 me-2"></i> Full Stack Development
                </NavLink>
                <NavLink to="/etc" className="list-group-item list-group-item-action">
                  <i className="fas fa-comment me-2"></i> English Technical Communication
                </NavLink>
                <NavLink to="/quiz1" className="list-group-item list-group-item-action">
                  <i className="fas fa-question-circle me-2"></i> HTML Quiz
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Your Progress</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">Python</h5>
                      <CourseProgress courseId="python" totalModules={4} />
                      <NavLink to="/python" className="btn btn-sm btn-outline-primary mt-2">
                        Continue Learning
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">Full Stack Dev</h5>
                      <CourseProgress courseId="fsd" totalModules={4} />
                      <NavLink to="/fsd" className="btn btn-sm btn-outline-primary mt-2">
                        Continue Learning
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">ETC</h5>
                      <CourseProgress courseId="etc" totalModules={4} />
                      <NavLink to="/etc" className="btn btn-sm btn-outline-primary mt-2">
                        Continue Learning
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Recent Activity</h4>
            </div>
            <div className="card-body">
              {recentActivity.length === 0 ? (
                <div className="alert alert-info">
                  No recent activity. Start learning courses or take quizzes to track your progress!
                </div>
              ) : (
                <div className="list-group">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="list-group-item">
                      {activity.type === 'quiz' ? (
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">
                              <i className="fas fa-clipboard-check me-2 text-success"></i>
                              {activity.title}
                            </h6>
                            <small className="text-muted">
                              Completed on {activity.date.toLocaleDateString()}
                            </small>
                          </div>
                          <span className="badge bg-primary rounded-pill">
                            Score: {activity.score}/{activity.total}
                          </span>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">
                              <i className="fas fa-book-reader me-2 text-primary"></i>
                              {activity.title}
                            </h6>
                            <div className="progress" style={{ height: '10px', width: '200px' }}>
                              <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{ width: `${(activity.progress / activity.total) * 100}%` }} 
                                aria-valuenow={(activity.progress / activity.total) * 100} 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <small className="text-muted">
                              {activity.progress} of {activity.total} modules completed
                            </small>
                          </div>
                          <NavLink to={activity.path} className="btn btn-sm btn-outline-primary">
                            Continue
                          </NavLink>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 