import React, { useState } from 'react';

const Quiz2 = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which programming language is this quiz written in?',
      options: ['Java', 'Python', 'JavaScript', 'C++'],
      correctAnswer: 'JavaScript',
    },
    // Add more questions as needed
  ];

  const initialUserAnswers = Array(questions.length).fill('');
  const [userAnswers, setUserAnswers] = useState(initialUserAnswers);
  const [score, setScore] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(Array(questions.length).fill(false));

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Calculate the score and store correct answers
    const newScore = userAnswers.reduce((totalScore, userAnswer, index) => {
      const isCorrect = userAnswer === questions[index].correctAnswer;
      setCorrectAnswers((prevCorrectAnswers) => {
        const newCorrectAnswers = [...prevCorrectAnswers];
        newCorrectAnswers[index] = isCorrect;
        return newCorrectAnswers;
      });
      return isCorrect ? totalScore + 1 : totalScore;
    }, 0);
    setScore(newScore);
  };

  const handleReset = () => {
    setUserAnswers(initialUserAnswers);
    setScore(null);
    setCorrectAnswers(Array(questions.length).fill(false));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Quiz App</h1>
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <p>{question.question}</p>
          <ul className="list-unstyled">
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label className="form-check">
                  <input
                    type="radio"
                    name={`question_${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                    className="form-check-input"
                    disabled={score !== null}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {score !== null && (
            <p className={`mt-2 ${correctAnswers[index] ? 'text-success' : 'text-danger'}`}>
              Correct Answer: {question.correctAnswer}
            </p>
          )}
        </div>
      ))}
      <div className="mb-3">
        <button onClick={handleSubmit} className="btn btn-primary mr-2" disabled={score !== null}>
          Submit
        </button>
        <button onClick={handleReset} className="btn btn-secondary" disabled={score === null}>
          Reset
        </button>
      </div>
      {score !== null && (
        <p className="mt-3" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>
          Total Score: {score}
        </p>
      )}
    </div>
  );
};

export default Quiz2;
