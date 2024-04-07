import Rain from "./components/rain";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="main">
        <Rain />
        <Header />
        <Hero />
      </div>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
