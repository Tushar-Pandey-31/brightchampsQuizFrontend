import React from 'react';
import { Link } from 'react-router-dom';

const quizzes = [
  { id: 1, title: 'JavaScript Basics' },
  { id: 2, title: 'React Fundamentals' },
  { id: 3, title: 'CSS Mastery' },
];

function QuizList() {
  return (
    <div>
      <h1>Available Quizzes</h1>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
