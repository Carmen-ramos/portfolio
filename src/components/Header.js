import React from "react";

function Header() {
  return (
    <header class="header">
      <nav class="header__menu">
        <a class="header__menu--img" href="https://adalab.es/">
          {" "}
          <img
            class="imgheader"
            src="./assets/images/ico-menu.svg"
            href=""
            alt=" icono nav fijo"
            title="redirige a la home de Adalab"
          ></img>
        </a>
      </nav>
    </header>
  );
}
export default Header;
