import { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimeSetter from "./TimeSetter";
import ControlButtons from "./ControlButtons";

export default function Timer() {
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (running && time > 0) {
      timerId = setInterval(() => setTime((t) => t - 1), 1000);
    }
    return () => clearInterval(timerId);
  }, [running, time]);

  return (
    <div className="centered-page">
      <div className="page-content">
        <h2 className="title">Timer</h2>
        <TimeSetter setTime={setTime} setRunning={setRunning} />
        <TimerDisplay time={time} />
        <ControlButtons setRunning={setRunning} reset={() => { setRunning(false); setTime(60); }} />
      </div>
    </div>
  );
}
