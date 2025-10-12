export default function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3 style={{marginBottom: '8px'}}>{title}</h3>
        {skills.map((s, i) => (
          <p>{s}</p>
        ))}
    </div>
  );
}
