export default function TimerDisplay({ time }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-display">
      <div className="time">{formatTime(time)}</div>
    </div>
  );
}
