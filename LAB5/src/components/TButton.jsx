export default function TButton({ buttonName, buttonFunction }) {
  return (
    <div>
      <button
        onClick={buttonFunction}
      >
        {buttonName}
      </button>
    </div>
  );
}