import React from "react";
import "../stylesheets/layout/_hero.scss";

function Hero() {
  return (
    <section class="hero">
      <div class="herocontainer">
        <h1 class="herocontainer__tittle">
          <span class="herocontainer__tittle--item">Carmen</span>
          <span class="herocontainer__tittle--item">Ramos</span>
        </h1>
        <p class="herocontainer__paragrhap">Desarrolladora Front End Junior</p>

        <a class="herocontainer__scrolldowm" href="#section__reasons">
          <i class="fas fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
}
export default Hero;
