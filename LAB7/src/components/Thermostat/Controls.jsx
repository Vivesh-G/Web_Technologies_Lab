import Button from "../common/Button";

export default function Controls({ increase, decrease }) {
  return (
    <div className="controls">
      <Button onClick={increase} variant="green">Increase</Button>
      <Button onClick={decrease} variant="red">Decrease</Button>
    </div>
  );
}
