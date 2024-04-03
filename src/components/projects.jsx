import lucid from "/lucidbot.jpg";
import gen from "/cv-generator-preview.png";
import "../styles/projects.css";

function Projects() {
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  function onPointerEnter(e) {
    console.log(e.target);
    let diffX = (centerX - e.clientX) / 15;
    let diffY = (centerY - e.clientY) / 15;

    e.target.style.transition = `all 0.1s`;
    e.target.style.transform = `translateY(${diffY}px) translateX(${diffX}px)`;
  }

  function onPointerMove(e) {
    let diffX = (centerX - e.clientX) / 40;
    let diffY = (centerY - e.clientY) / 40;

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
          <div className="project-card lucid">
            <img
              onPointerLeave={onPointerLeave}
              onPointerEnter={onPointerEnter}
              onPointerMove={onPointerMove}
              src={lucid}
              alt=""
            />
          </div>
          <div className="project-card gen">
            <img
              onPointerLeave={onPointerLeave}
              onPointerEnter={onPointerEnter}
              onPointerMove={onPointerMove}
              src={gen}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
