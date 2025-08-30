export default function Button({ onClick, color, children }) {
  return (
    <button 
      onClick={onClick} 
      className={`btn btn-${color}`}
    >
      {children}
    </button>
  );
}