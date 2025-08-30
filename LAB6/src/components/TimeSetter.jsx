import { useState } from 'react';
import Button from './Button';

export default function TimeSetter({ onSetTime }) {
  const [input, setInput] = useState("");

  return (
    <div className="time-setter">
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter seconds"
        className="input-field"
      />
      <Button
        onClick={() => {
          onSetTime(Number(input));
          setInput("");
        }}
        color="blue"
      >
        Set Time
      </Button>
    </div>
  );
}