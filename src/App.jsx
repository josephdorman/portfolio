import Rain from "./components/rain";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { useRef } from "react";
import "./styles/App.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div ref={homeRef} className="main">
        <Rain />
        <Header
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <Hero />
      </div>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={projectRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
