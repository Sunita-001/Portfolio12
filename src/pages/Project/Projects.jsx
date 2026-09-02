import "./Projects.css";

export default function Project() {
  return (
    <section className="project reveal" id="project">

      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        <div className="project-card coming-soon">

          <h3>Projects Coming Soon</h3>

          <p>
            I'm currently working on a few projects and refining them
            before showcasing them here. Check back soon to explore my work.
          </p>

          <div className="skills">
            <span>Building</span>
            <span>Learning</span>
            <span>Creating</span>
          </div>

        </div>

      </div>

    </section>
  );
}