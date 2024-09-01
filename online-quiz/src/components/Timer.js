import React, { useState, useEffect } from 'react';

function Timer({ initialTime = 60, onTimeUp }) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
      if (onTimeUp) onTimeUp();
    }

    return () => clearInterval(timer);
  }, [time, onTimeUp]);

  return (
    <div>
      <h2>Time Remaining: {time} seconds</h2>
    </div>
  );
}

export default Timer;
