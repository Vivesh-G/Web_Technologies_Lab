export default function TimeSetter({ setTime, setRunning }) {
  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value) * 60; // Convert minutes to seconds
    setTime(newTime);
    setRunning(false); // Stop timer when changing time
  };

  return (
    <div className="time-setter">
      <label htmlFor="time-input">Set Time (minutes): </label>
      <input
        id="time-input"
        type="number"
        min="1"
        max="60"
        defaultValue="1"
        onChange={handleTimeChange}
      />
    </div>
  );
}
