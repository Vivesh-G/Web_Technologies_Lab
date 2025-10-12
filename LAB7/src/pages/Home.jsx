import ProfileSummary from "../components/ProfileSummary";
import ContactLinks from "../components/ContactLinks";

export default function Home() {
  return (
    <div className="centered-page">
      <div className="page-content">
        <h1 className="title">Vivesh G</h1>
        <ProfileSummary text="Hello! I'm Vivesh G, a Machine Learning developer with a passion for learning different skills & expanding my knowledge. When I'm not coding, you can find me Graphic Designing or Video Editing. Also experienced in building responsive web applications and deploying them to cloud platforms." />
        <ContactLinks />
      </div>
    </div>
  );
}
