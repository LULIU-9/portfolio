import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <section id="homepage" className="heroContainer">
        <Navbar />
        <Hero />
      </section>

      <About />

      <Skills />

      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
