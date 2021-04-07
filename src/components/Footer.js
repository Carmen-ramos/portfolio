import React from "react";
import "../stylesheets/layout/_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <small className="footer__copyright">Carmen Ramos &copy; 2021</small>
        <a
          className="footer__link"
          href="http://www.adalab.es"
          target="_blank"
          rel="noopener noreferrer"
          title="Ir a web de Adalab"
        >
          <img
            className="footer__img"
            src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
            alt="Logo Adalab"
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
