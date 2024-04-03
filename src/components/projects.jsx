import lucid from "/lucidbotLogo.svg";
import vizion from "/vizionLogo.svg";
import "../styles/projects.css";

function Projects() {
  return (
    <>
      <div className="projects">
        <h2 className="title">
          <p>( 02 )</p>
          <span>PROJECTS</span>
        </h2>
        <p className="flavor-text">( Pick a project, any project )</p>
        <div className="project-container">
          <div className="card">
            <div className="card-content">
              <img className="card-img" src={vizion} alt="lucidbot" />
            </div>
            <h3 className="card-title">Vision</h3>
          </div>
          <div className="card">
            <div className="card-content">
              <img className="card-img" src={lucid} alt="lucidbot" />
            </div>
            <h3 className="card-title">Lucid</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
