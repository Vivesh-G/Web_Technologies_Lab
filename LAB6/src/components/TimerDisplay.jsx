export default function TimerDisplay({ timeLeft }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  return (
    <h1 className="timer-display">
      {minutes}:{seconds.toString().padStart(2, "0")}
    </h1>
  );
}