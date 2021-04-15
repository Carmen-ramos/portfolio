import "../stylesheets/App.scss";
import Hero from "./Hero";
import Bio from "./Bio";
import Footer from "./Footer";
import Projects from "./Projects";
import Data from "../data/data.json";
import Skills from "./Skills.js";
import Contact from "./Contact.js";

function App() {
  return (
    <>
      <Hero />
      <Bio />
      <Projects data={Data} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
