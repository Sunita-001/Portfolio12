import "./Services.css";
import { FaCode, FaBrain, FaUsers } from "react-icons/fa";

function Services() {

  return (
    <div className="services" id="service">

      <div className="title">
        <h2>What I Do</h2>
      </div>

      <div className="services-container">

        {/* AI - FIRST */}

        <div className="service-card">
          <FaBrain className="service-icon" />

          <h3>AI & Technology</h3>

          <p>
            I'm interested in Artificial Intelligence and emerging
            technologies, and I enjoy exploring how technology can be
            used to solve practical problems and create meaningful solutions.
          </p>
        </div>


        {/* COMMUNITY - SECOND */}

        <div className="service-card">
          <FaUsers className="service-icon" />

          <h3>Community & Engagement</h3>

          <p>
            Through my experience as a Social Media Lead at Google
            Developer Groups on Campus and an Unstop Campus Ambassador,
            I contribute to community engagement, communication, and
            student-focused initiatives.
          </p>
        </div>


        {/* FRONTEND - THIRD */}

        <div className="service-card">
          <FaCode className="service-icon" />

          <h3>Frontend Development</h3>

          <p>
            I build responsive and interactive web experiences using
            HTML, CSS, JavaScript, and React, with a focus on clean
            interfaces and user-friendly experiences.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Services;