import Button from "../common/Button";

export default function ControlButtons({ setRunning, reset }) {
  return (
    <div className="btn-group">
      <Button onClick={() => setRunning(true)} variant="blue">Start</Button>
      <Button onClick={() => setRunning(false)} variant="yellow">Stop</Button>
      <Button onClick={reset} variant="gray">Reset</Button>
    </div>
  );
}
