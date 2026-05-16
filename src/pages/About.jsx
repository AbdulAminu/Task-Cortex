import NavBar from "../components/NavBar.jsx";
import { Smile, Diamond } from "lucide-react";
export  function About() {
  return (
    <div className="about-container">
        <NavBar/>
         <div className="Diamond-cont"><Diamond color="white" className="Diamond"/>
         <Diamond color="white" className="Diamond"/>
         </div>
        <div className="contt">
      <div className="about-card">
        <h1 className="about-title">About Task Cortex</h1>

        <p className="about-text">
          Task Cortex is a modern task management application designed to help
          users organize, manage, and complete their daily tasks efficiently.The purpose of this project is to provide a simple, user-friendly,
          and responsive platform that improves productivity through effective
          task organization.
        </p>
          
        

        <h2 className="about-subtitle">Key Features</h2>
        <ul className="about-list">
          <li>Create and manage tasks easily</li>
          <li>Responsive and clean interface</li>
          <li>Simple navigation experience</li>
        </ul>

        <h2 className="about-subtitle">Technologies Used</h2>
        <ul className="about-list">
          <li>React</li>
          <li>React Router</li>
          <li>CSS / Tailwind CSS</li>
        </ul>
      </div>
      </div>
      <div className="Diamond-cont"><Diamond color="white" className="Diamond"/>
         <Diamond color="white" className="Diamond"/>
         </div>
    </div>
  );
}
export default About