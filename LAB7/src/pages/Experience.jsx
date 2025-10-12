import ResumeItem from "../components/ResumeItem";

export default function Experience() {
  return (
    <div className="centered-page">
      <div className="page-content">
        <h2 className="title">Work Experience</h2>
        <ResumeItem title="Company-1" date="Aug 2024 - Present" subtitle="Web Developer">
            <p>Developed a responsive website that increased sales by 20%</p>
            <p>Executed SEO strategies to boost website visibipty by 40%</p>
        </ResumeItem>
      </div>
    </div>
  );
}
