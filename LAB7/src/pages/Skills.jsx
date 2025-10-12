import SkillCategory from "../components/SkillCategory";

export default function Skills() {
  const languages = ["Python", "JavaScript", "C", "C++"];
  const web = ["HTML", "CSS", "Wordpress"];
  const frameworks = ["FastAPI", "React", "Express", "Node"];

  return (
    <div className="centered-page">
      <div className="page-content">
        <h2 className="title">Skills</h2>
        <SkillCategory title="Programming Languages" skills={languages} />
        <SkillCategory title="Web Development" skills={web} />
        <SkillCategory title="Frameworks / Libraries" skills={frameworks} />
      </div>
    </div>
  );
}
