import React, { useState, useEffect } from "react";
import TimeSetter from './components/TimeSetter';
import TimerDisplay from './components/TimerDisplay';
import ControlButtons from './components/ControlButtons';
import './App.css';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => { // Useeffect to handle timer countdown
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleSetTime = (seconds) => setTimeLeft(seconds);

  return (
    <div className="timer-container">
      <TimeSetter onSetTime={handleSetTime} />
      <TimerDisplay timeLeft={timeLeft} />
      <ControlButtons
        onStart={() => setIsRunning(true)}
        onStop={() => setIsRunning(false)}
        onReset={() => setTimeLeft(0)}
      />
    </div>
  );
}
