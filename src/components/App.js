import "../stylesheets/App.scss";
import Hero from "./Hero";
import Bio from "./Bio";
import Footer from "./Footer";
import Slideshow from "./SlideShow2";
import Data from "../data/data.json";
import Skills from "./Skills.js";
import Contact from "./Contact.js";

function App() {
  return (
    <>
      <Hero />
      <Bio />
      <Slideshow data={Data} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
