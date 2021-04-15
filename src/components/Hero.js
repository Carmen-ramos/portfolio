import React from "react";
import Nav from "./Nav";
import SocialNav from "./SocialNav";
import "../stylesheets/layout/_hero.scss";

function Hero() {
  return (
    <section class="hero">
      <SocialNav />
      <div class="herocontainer">
        <h1 class="herocontainer__tittle">
          <span class="herocontainer__tittle--item">Carmen</span>
          <span class="herocontainer__tittle--item">Ramos</span>
        </h1>
        <p class="herocontainer__paragrhap">Desarrolladora Front End Junior</p>
        <Nav />
      </div>
    </section>
  );
}
export default Hero;
