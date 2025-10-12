import ResumeItem from "../components/ResumeItem";

export default function Education() {
  return (
    <div className="centered-page">
      <div className="page-content">
        <h2 className="title">Education</h2>
        <ResumeItem title="Shiv Nadar University Chennai" date="2023 - Present" subtitle="B.Tech Artificial Intelligence and Data Science">
              CGPA: 9.5
        </ResumeItem>

        <div style={{marginTop: '16px'}}>
          <ResumeItem title="Higher Secondary School" date="2021 - 2023">
              Grade Obtained: 97%
          </ResumeItem>
        </div>
      </div>
    </div>
  );
}
