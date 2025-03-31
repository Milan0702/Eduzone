import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const JavaScriptQuiz = () => {
  const questions = [
    {
      question: '1. What is JavaScript?',
      options: [
        'A compiled programming language', 
        'A markup language', 
        'A scripting language for web development', 
        'A database management system'
      ],
      correctAnswer: 'A scripting language for web development',
    },
    {
      question: '2. Who created JavaScript?',
      options: [
        'Brendan Eich', 
        'Tim Berners-Lee', 
        'James Gosling', 
        'Guido van Rossum'
      ],
      correctAnswer: 'Brendan Eich',
    },
    {
      question: '3. Which of the following is NOT a JavaScript data type?',
      options: [
        'String', 
        'Number', 
        'Boolean', 
        'Character'
      ],
      correctAnswer: 'Character',
    },
    {
      question: '4. What symbol is used for single-line comments in JavaScript?',
      options: [
        '#', 
        '//', 
        '/* */', 
        '--'
      ],
      correctAnswer: '//',
    },
    {
      question: '5. What will be the output of: console.log(2 + "2")?',
      options: [
        '4', 
        '22', 
        'Error', 
        'undefined'
      ],
      correctAnswer: '22',
    },
    {
      question: '6. Which method is used to add an element at the end of an array in JavaScript?',
      options: [
        'push()', 
        'append()', 
        'add()', 
        'insert()'
      ],
      correctAnswer: 'push()',
    },
    {
      question: '7. What is the "this" keyword in JavaScript?',
      options: [
        'It refers to the function itself', 
        'It refers to the global object', 
        'It refers to the object the function is a property of', 
        'None of the above'
      ],
      correctAnswer: 'It refers to the object the function is a property of',
    },
    {
      question: '8. What is the output of: console.log("JavaScript".length)?',
      options: [
        '9', 
        '10', 
        '11', 
        'Error'
      ],
      correctAnswer: '10',
    },
    {
      question: '9. What is the correct way to check if a variable "x" is equal to 5 in value and type?',
      options: [
        'x = 5', 
        'x == 5', 
        'x === 5', 
        'x.equals(5)'
      ],
      correctAnswer: 'x === 5',
    },
    {
      question: '10. Which function is used to parse a string to an integer in JavaScript?',
      options: [
        'Integer.parse()', 
        'parseInteger()', 
        'parseInt()', 
        'Number.parseInteger()'
      ],
      correctAnswer: 'parseInt()',
    }
  ];

  const initialUserAnswers = Array(questions.length).fill('');
  const [userAnswers, setUserAnswers] = useState(initialUserAnswers);
  const [score, setScore] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(Array(questions.length).fill(false));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizMode, setQuizMode] = useState('quiz'); // 'quiz', 'review', 'result'
  const [timeLeft, setTimeLeft] = useState(null);
  const [timer, setTimer] = useState(null);

  // Start timer when quiz starts
  useEffect(() => {
    if (quizMode === 'quiz' && timeLeft === null) {
      // Set 15 minutes (900 seconds) for the quiz
      setTimeLeft(900);
    }
  }, [quizMode]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && quizMode === 'quiz') {
      const timerInterval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      
      setTimer(timerInterval);
      
      return () => clearInterval(timerInterval);
    } else if (timeLeft === 0 && quizMode === 'quiz') {
      // Auto submit when time is up
      handleSubmit();
    }
  }, [timeLeft, quizMode]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Stop the timer
    if (timer) {
      clearInterval(timer);
    }
    
    // Calculate the score and store correct answers
    let newScore = 0;
    const newCorrectAnswers = Array(questions.length).fill(false);
    
    questions.forEach((question, index) => {
      const isCorrect = userAnswers[index] === question.correctAnswer;
      newCorrectAnswers[index] = isCorrect;
      if (isCorrect) {
        newScore += 1;
      }
    });
    
    setCorrectAnswers(newCorrectAnswers);
    setScore(newScore);
    setQuizMode('result');
    
    // Save quiz results to localStorage
    const quizResult = {
      quizName: 'JavaScript Quiz',
      date: new Date().toISOString(),
      score: newScore,
      total: questions.length,
      answers: userAnswers,
      correct: newCorrectAnswers
    };
    
    // Get existing results or initialize empty array
    const existingResults = localStorage.getItem('quiz_results') 
      ? JSON.parse(localStorage.getItem('quiz_results')) 
      : [];
      
    // Add new result to array
    const updatedResults = [quizResult, ...existingResults].slice(0, 10); // Keep only last 10 results
    
    // Save back to localStorage
    localStorage.setItem('quiz_results', JSON.stringify(updatedResults));
  };

  const handleReset = () => {
    setUserAnswers(initialUserAnswers);
    setScore(null);
    setCorrectAnswers(Array(questions.length).fill(false));
    setCurrentQuestionIndex(0);
    setQuizMode('quiz');
    setTimeLeft(900);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const switchToReviewMode = () => {
    setQuizMode('review');
    setCurrentQuestionIndex(0);
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const getProgressPercentage = () => {
    return (userAnswers.filter(answer => answer !== '').length / questions.length) * 100;
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-warning text-white">
              <h2 className="text-center mb-0">JavaScript Quiz</h2>
            </div>
            
            {quizMode === 'quiz' && (
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="badge bg-warning p-2">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                  </div>
                  <div>
                    <span className="badge bg-danger p-2">
                      <i className="fas fa-clock me-1"></i> Time left: {formatTime(timeLeft)}
                    </span>
                  </div>
                </div>
                
                <div className="progress mb-4">
                  <div 
                    className="progress-bar bg-warning" 
                    role="progressbar" 
                    style={{ width: `${getProgressPercentage()}%` }} 
                    aria-valuenow={getProgressPercentage()} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  >
                    {Math.round(getProgressPercentage())}% Completed
                  </div>
                </div>
                
                <div className="question-container mb-4">
                  <h4>{questions[currentQuestionIndex].question}</h4>
                  <div className="list-group mt-3">
                    {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                      <label key={optionIndex} className="list-group-item list-group-item-action d-flex align-items-center">
                        <input
                          type="radio"
                          name={`question_${currentQuestionIndex}`}
                          value={option}
                          checked={userAnswers[currentQuestionIndex] === option}
                          onChange={() => handleOptionChange(currentQuestionIndex, option)}
                          className="form-check-input me-3"
                        />
                        <span className="w-100">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="d-flex justify-content-between mt-4">
                  <button 
                    onClick={goToPreviousQuestion} 
                    className="btn btn-secondary" 
                    disabled={currentQuestionIndex === 0}
                  >
                    <i className="fas fa-arrow-left me-1"></i> Previous
                  </button>
                  {currentQuestionIndex < questions.length - 1 ? (
                    <button 
                      onClick={goToNextQuestion} 
                      className="btn btn-primary"
                    >
                      Next <i className="fas fa-arrow-right ms-1"></i>
                    </button>
                  ) : (
                    <button 
                      onClick={handleSubmit} 
                      className="btn btn-success"
                    >
                      Submit Quiz <i className="fas fa-check ms-1"></i>
                    </button>
                  )}
                </div>
                
                <div className="mt-4">
                  <p className="text-center">Question Navigation:</p>
                  <div className="d-flex flex-wrap justify-content-center">
                    {questions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => jumpToQuestion(index)}
                        className={`btn btn-sm m-1 ${
                          currentQuestionIndex === index
                            ? 'btn-warning'
                            : userAnswers[index]
                            ? 'btn-success'
                            : 'btn-outline-secondary'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {quizMode === 'review' && (
              <div className="card-body">
                <div className="mb-4">
                  <h4>{questions[currentQuestionIndex].question}</h4>
                  <div className="list-group mt-3">
                    {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                      <div 
                        key={optionIndex} 
                        className={`list-group-item d-flex justify-content-between align-items-center ${
                          option === questions[currentQuestionIndex].correctAnswer
                            ? 'list-group-item-success'
                            : userAnswers[currentQuestionIndex] === option && option !== questions[currentQuestionIndex].correctAnswer
                            ? 'list-group-item-danger'
                            : ''
                        }`}
                      >
                        <span>{option}</span>
                        {option === questions[currentQuestionIndex].correctAnswer && (
                          <i className="fas fa-check-circle text-success ms-2"></i>
                        )}
                        {userAnswers[currentQuestionIndex] === option && 
                         option !== questions[currentQuestionIndex].correctAnswer && (
                          <i className="fas fa-times-circle text-danger ms-2"></i>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="d-flex justify-content-between mt-4">
                  <button 
                    onClick={goToPreviousQuestion} 
                    className="btn btn-secondary" 
                    disabled={currentQuestionIndex === 0}
                  >
                    <i className="fas fa-arrow-left me-1"></i> Previous
                  </button>
                  
                  {currentQuestionIndex < questions.length - 1 ? (
                    <button 
                      onClick={goToNextQuestion} 
                      className="btn btn-primary"
                    >
                      Next <i className="fas fa-arrow-right ms-1"></i>
                    </button>
                  ) : (
                    <button 
                      onClick={() => setQuizMode('result')} 
                      className="btn btn-info"
                    >
                      Back to Results <i className="fas fa-list ms-1"></i>
                    </button>
                  )}
                </div>
                
                <div className="mt-4">
                  <p className="text-center">Question Navigation:</p>
                  <div className="d-flex flex-wrap justify-content-center">
                    {questions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => jumpToQuestion(index)}
                        className={`btn btn-sm m-1 ${
                          currentQuestionIndex === index
                            ? 'btn-warning'
                            : correctAnswers[index]
                            ? 'btn-success'
                            : 'btn-danger'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {quizMode === 'result' && (
              <div className="card-body text-center">
                <h3 className="mb-4">Quiz Results</h3>
                
                <div className="result-summary p-4 mb-4 rounded" style={{ backgroundColor: '#f8f9fa' }}>
                  <h1 className={`display-1 ${score/questions.length >= 0.7 ? 'text-success' : score/questions.length >= 0.4 ? 'text-warning' : 'text-danger'}`}>
                    {score}/{questions.length}
                  </h1>
                  
                  <div className="progress mb-3">
                    <div 
                      className={`progress-bar ${score/questions.length >= 0.7 ? 'bg-success' : score/questions.length >= 0.4 ? 'bg-warning' : 'bg-danger'}`}
                      role="progressbar" 
                      style={{ width: `${(score/questions.length)*100}%` }} 
                      aria-valuenow={(score/questions.length)*100} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      {Math.round((score/questions.length)*100)}%
                    </div>
                  </div>
                  
                  <p className="lead">
                    {score/questions.length >= 0.7 
                      ? 'Excellent! You have a strong understanding of JavaScript fundamentals.' 
                      : score/questions.length >= 0.4 
                      ? 'Good effort! Continue practicing to improve your JavaScript skills.' 
                      : 'Keep learning! You need more practice with JavaScript concepts.'}
                  </p>
                </div>
                
                <div className="d-flex justify-content-center gap-3">
                  <button 
                    onClick={switchToReviewMode} 
                    className="btn btn-info"
                  >
                    <i className="fas fa-search me-1"></i> Review Answers
                  </button>
                  <button 
                    onClick={handleReset} 
                    className="btn btn-primary"
                  >
                    <i className="fas fa-redo me-1"></i> Retake Quiz
                  </button>
                  <NavLink to="/dashboard" className="btn btn-success">
                    <i className="fas fa-tachometer-alt me-1"></i> Go to Dashboard
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptQuiz; 