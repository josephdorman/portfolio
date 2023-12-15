import { useRef } from "react";
import lucid from "/lucidbot.jpg";
import "../styles/projects.css";

function Projects() {
  const ref = useRef(null);

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  function onPointerMove(e) {
    let diffX = (centerX - e.clientX) / 12;
    let diffY = (centerY - e.clientY) / 12;

    ref.current.style.transform = `translateY(${diffY}px) translateX(${diffX}px)`;
  }

  return (
    <>
      <div className="projects">
        <h2 className="title">
          <p>( 02 )</p>
          <span>PROJECTS</span>
        </h2>
        <div className="project-container">
          <div onPointerMove={onPointerMove} className="project-card lucid">
            <img ref={ref} src={lucid} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
