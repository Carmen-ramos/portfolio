import React from "react";
import "../stylesheets/layout/_hero.scss";

function Hero() {
  return (
    <section class="hero">
      <div class="herocontainer">
        <h1 class="herocontainer__tittle">
          <span class="herocontainer__tittle--item">Anonymous</span>
          <span class="herocontainer__tittle--item">proxy</span>
        </h1>
        <p class="herocontainer__paragrhap">
          In hac habitasse platea dictumst.
        </p>

        <a class="herocontainer__scrolldowm" href="#section__reasons">
          {" "}
          <img
            class="herocontainer__scrolldowm--img"
            src="./assets/images/ico-scroll-down.svg"
            alt="icono flecha hacia abajo"
            title="icono redirige a la seccion 3 Reason for purchase"
          />
        </a>
      </div>
    </section>
  );
}
export default Hero;
