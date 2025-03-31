import React, { useState, useEffect } from 'react';

const CourseProgress = ({ courseId, totalModules = 4 }) => {
  const [progress, setProgress] = useState(0);
  
  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(`course_progress_${courseId}`);
    if (savedProgress) {
      setProgress(parseInt(savedProgress, 10));
    }
  }, [courseId]);
  
  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`course_progress_${courseId}`, progress.toString());
  }, [courseId, progress]);
  
  const handleModuleComplete = (moduleIndex) => {
    // Mark the module as completed
    if (moduleIndex + 1 > progress) {
      setProgress(moduleIndex + 1);
    }
  };
  
  const resetProgress = () => {
    setProgress(0);
  };
  
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Course Progress</h4>
          <button 
            className="btn btn-sm btn-light" 
            onClick={resetProgress}
            title="Reset Progress"
          >
            <i className="fas fa-redo"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="progress mb-3">
          <div 
            className="progress-bar" 
            role="progressbar" 
            style={{ width: `${(progress / totalModules) * 100}%` }} 
            aria-valuenow={(progress / totalModules) * 100} 
            aria-valuemin="0" 
            aria-valuemax="100"
          >
            {Math.round((progress / totalModules) * 100)}%
          </div>
        </div>
        
        <div className="d-flex flex-wrap">
          {Array.from({ length: totalModules }).map((_, index) => (
            <div key={index} className="me-2 mb-2">
              <button
                className={`btn ${
                  index < progress 
                    ? 'btn-success' 
                    : 'btn-outline-secondary'
                }`}
                onClick={() => handleModuleComplete(index)}
              >
                Module {index + 1}
                {index < progress && <i className="fas fa-check ms-1"></i>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProgress; 