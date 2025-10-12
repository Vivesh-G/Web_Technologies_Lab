import ResumeItem from "../components/ResumeItem";

export default function Projects() {
  return (
    <div className="centered-page">
      <div className="page-content">
        <h2 className="title">Projects</h2>
        <ResumeItem title="E-comm Website" date="June 2025">
            <p>Developed an E-commerce website using MERN stack</p>
            <p>Dockerized it and deployed on AWS as a prototype</p>
        </ResumeItem>

        <div style={{marginTop: '16px'}}>
          <ResumeItem title="Learning Management System" date="March 2025">
              <p>Built a secure role-based login system (Admin, Faculty, Students)</p>
              <p>Created dashboards with grades and attendance management</p>
          </ResumeItem>
        </div>
      </div>
    </div>
  );
}
