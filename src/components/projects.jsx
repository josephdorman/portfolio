import lucid from "/lucidbot.jpg";
import "../styles/projects.css";

function Projects() {
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  function onPointerEnter(e) {
    let diffX = (centerX - e.clientX) / 15;
    let diffY = (centerY - e.clientY) / 15;

    e.target.style.transition = `all 0.1s`;
    e.target.style.transform = `translateY(${diffY}px) translateX(${diffX}px)`;
  }

  function onPointerMove(e) {
    let diffX = (centerX - e.clientX) / 15;
    let diffY = (centerY - e.clientY) / 15;

    e.target.style.transition = `none`;
    e.target.style.transform = `translateY(${diffY}px) translateX(${diffX}px)`;
  }

  function onPointerLeave(e) {
    e.target.style.transition = `all 1s`;
    e.target.style.transform = `translateY(0px) translateX(0px)`;
  }

  return (
    <>
      <div className="projects">
        <h2 className="title">
          <p>( 02 )</p>
          <span>PROJECTS</span>
        </h2>
        <div className="project-container">
          <div
            onPointerLeave={onPointerLeave}
            onPointerEnter={onPointerEnter}
            onPointerMove={onPointerMove}
            className="project-card lucid"
          >
            <img src={lucid} alt="" />
          </div>
          <div
            onPointerLeave={onPointerLeave}
            onPointerEnter={onPointerEnter}
            onPointerMove={onPointerMove}
            className="project-card lucid"
          >
            <img src={lucid} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
