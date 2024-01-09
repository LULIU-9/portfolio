import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>parallax</section>
      <section>services</section>
      <section>parallax</section>
      <section>project1</section>
      <section>project2</section>
      <section>project3</section>
      <section>contact</section>
    </div>
  );
};

export default App;
