import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div>
      <h1>Quiz Completed</h1>
      <h2>Your Score: {score} / {total}</h2>
      <Link to="/">Go Back to Quizzes</Link>
    </div>
  );
}

export default Result;
