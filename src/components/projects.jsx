import reactLogo from "../assets/react.svg";
import expressLogo from "../assets/express.svg";
import nodejsLogo from "../assets/nodejs.svg";
import socketioLogo from "../assets/socketio.svg";
import mongodbLogo from "../assets/mongodb.svg";
import discordjsLogo from "../assets/discordjs.svg";
import code from "../assets/code.svg";
import demo from "../assets/demo.svg";
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
            <div className="card-wrapper">
              <div className="card-content">
                <img className="card-img" src={vizion} alt="lucidbot" />
              </div>
              <div className="card-info">
                <nav>
                  <p>{"|"}</p>
                  <button className="card-btn">
                    <img className="icon-sm" src={demo} alt="" />
                    <span>Demo</span>
                  </button>
                  <p>{"|"}</p>
                  <button className="card-btn">
                    <img className="icon-sm" src={code} alt="" />
                    <span>Code</span>
                  </button>
                  <p>{"|"}</p>
                </nav>
                <div className="card-desc">
                  <h4 className="card-desc-title">Description</h4>
                  <p>
                    Vision is an open source full-stack messaging application
                    that allows users to communicate in real time. Showcasing a
                    modern ui and providing a fast, responsive and clean user
                    experience.
                  </p>
                </div>
                <div className="card-tag-wrapper">
                  <div className="card-tag">
                    <img className="icon-xs" src={reactLogo} alt="" />
                    <span>React</span>
                  </div>
                  <div className="card-tag">
                    <img className="icon-xs" src={nodejsLogo} alt="" />
                    <span>node-js</span>
                  </div>
                  <div className="card-tag">
                    <img className="icon-xs" src={expressLogo} alt="" />
                    <span>express</span>
                  </div>
                  <div className="card-tag">
                    <img className="icon-xs" src={mongodbLogo} alt="" />
                    <span>mongodb</span>
                  </div>
                  <div className="card-tag">
                    <img className="icon-xs" src={socketioLogo} alt="" />
                    <span>socket-io</span>
                  </div>
                </div>
              </div>

              <h3 className="card-title">Vision</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-wrapper">
              <div className="card-content">
                <img className="card-img" src={lucid} alt="lucidbot" />
              </div>
              <div className="card-info">
                <nav>
                  <p>{"|"}</p>
                  <button className="card-btn">
                    <img className="icon-sm" src={demo} alt="" />
                    <span>Demo</span>
                  </button>
                  <p>{"|"}</p>
                  <button className="card-btn">
                    <img className="icon-sm" src={code} alt="" />
                    <span>Code</span>
                  </button>
                  <p>{"|"}</p>
                </nav>
                <div className="card-desc">
                  <h4 className="card-desc-title">Description</h4>
                  <p>
                    Lucid is an open source discord bot designed for playing
                    music utilizing discords voice api. Provides full
                    documentation to all commands, and how to setup the bot for
                    yourself or server.
                  </p>
                </div>
                <div className="card-tag-wrapper">
                  <div className="card-tag">
                    <img className="icon-xs" src={discordjsLogo} alt="" />
                    <span>discordjs</span>
                  </div>
                  <div className="card-tag">
                    <img className="icon-xs" src={nodejsLogo} alt="" />
                    <span>node-js</span>
                  </div>
                  <div className="card-tag">
                    <img className="icon-xs" src={expressLogo} alt="" />
                    <span>express</span>
                  </div>
                </div>
              </div>
              <h3 className="card-title">Lucid</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
