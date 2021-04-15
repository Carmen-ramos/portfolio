import React from "react";
import "../stylesheets/layout/_nav.scss";

function nav() {
  return (
    <nav class="heromenu">
      <ul className="heromenu__ul">
        <li className="heromenu__ul--li">
          <a className="heromenu__ul--li link">Home</a>
        </li>
        <li className="heromenu__ul--li">
          <a className="heromenu__ul--li link">Sobre mi</a>
        </li>
        <li className="heromenu__ul--li">
          <a className="heromenu__ul--li link">Proyectos</a>
        </li>
        <li className="heromenu__ul--li">
          <a className="heromenu__ul--li link">Competencias</a>
        </li>
        <li className="heromenu__ul--li">
          <a className="heromenu__ul--li link">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
export default nav;
