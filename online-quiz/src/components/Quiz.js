import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Timer from './Timer';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 'JavaScript',
  },
];

function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  const handleTimeUp = () => {
    navigate('/result', { state: { score, total: questions.length } });
  };

  return (
    <div>
      <h2>Quiz {id}</h2>
      <Timer initialTime={60} onTimeUp={handleTimeUp} />
      <h3>{questions[currentQuestion].question}</h3>
      <ul>
        {questions[currentQuestion].options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              cursor: 'pointer',
              color: selectedOption === option ? 'blue' : 'black',
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
}

export default Quiz;
