import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
