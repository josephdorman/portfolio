import lucid from "/lucidbot.jpg";
import "../styles/projects.css";

function Projects() {
  return (
    <>
      <div className="projects">
        <h2 className="title">
          <p>( 02 )</p>
          <span>PROJECTS</span>
        </h2>
        <div className="project-container">
          <div className="project-card lucid">
            <img src={lucid} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
