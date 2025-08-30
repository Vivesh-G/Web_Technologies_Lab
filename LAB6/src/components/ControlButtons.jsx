import Button from './Button';

export default function ControlButtons({ onStart, onStop, onReset }) {
  return (
    <div className="control-buttons">
      <Button onClick={onStart} color="green">Start</Button>
      <Button onClick={onStop} color="red">Stop</Button>
      <Button onClick={onReset} color="gray">Reset</Button>
    </div>
  );
}