import "../stylesheets/App.scss";
import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Bio from "./Bio";
import Footer from "./Footer";
import Projects from "./Projects";
import Data from "../data/data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Bio />
      <Projects data={Data} />
      <Footer />
    </div>
  );
}

export default App;
