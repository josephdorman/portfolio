import logo from "/logo.svg";
import "../styles/header.css";

function Header({ aboutRef, projectRef, contactRef, homeRef }) {
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <div className="logo">
          <button onClick={scrollToHome}>
            <img id="logo-img" src={logo}></img>
          </button>
        </div>
        <nav>
          <ul className="nav-buttons">
            <li>
              <button onClick={scrollToAbout}>ABOUT</button>
            </li>
            <li>
              <button onClick={scrollToProject}>PROJECTS</button>
            </li>
            <li>
              <button onClick={scrollToContact}>CONTACT</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
