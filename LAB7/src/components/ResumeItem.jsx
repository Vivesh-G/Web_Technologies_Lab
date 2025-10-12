export default function ResumeItem({ title, date, subtitle, children }) {
  return (
    <div className="resume-item">
      <p><strong>{title}</strong></p>
      {date && <p>{date}</p>}
      {subtitle && <p className="sub-content">{subtitle}</p>}
      {children}
    </div>
  );
}
