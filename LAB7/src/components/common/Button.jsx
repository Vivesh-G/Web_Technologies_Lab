export default function Button({ onClick, children, variant = 'default', type = 'button', className = '' }) {
  const baseClass = 'btn';
  const variantClass = variant === 'green' ? 'btn-green' : variant === 'red' ? 'btn-red' : variant === 'blue' ? 'btn-blue' : variant === 'yellow' ? 'btn-yellow' : variant === 'gray' ? 'btn-gray' : '';
  return (
    <button type={type} onClick={onClick} className={`${baseClass} ${variantClass} ${className}`.trim()}>
      {children}
    </button>
  );
}
