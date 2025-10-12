import ResumeItem from "../components/ResumeItem";

export default function Achievements() {
  return (
    <div className="centered-page">
      <div className="page-content">
        <h2 className="title">Certificates</h2>
        <ResumeItem title="Responsive Web Design - freeCodeCamp" date="June 2023" />
        <div style={{marginTop: '12px'}}>
          <ResumeItem title="Programming in Python" date="June 2024" />
        </div>
      </div>
    </div>
  );
}
