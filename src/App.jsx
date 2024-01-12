import "./app.scss";
import AboutMe from "./components/about/AboutMe";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <AboutMe />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
