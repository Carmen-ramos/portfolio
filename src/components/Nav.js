import React from "react";
import "../stylesheets/layout/_nav.scss";

function nav() {
  return (
    <nav class="hero__menu">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Sobre mi</a>
        </li>
        <li>
          <a>Proyectos</a>
        </li>
        <li>
          <a>Competencias</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
export default nav;
