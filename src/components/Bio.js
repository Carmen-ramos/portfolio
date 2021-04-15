import React from "react";
import "../stylesheets/layout/_bio.scss";
import carmen from "../images/profile.png";

function Bio() {
  return (
    <>
      <section class="sectionInsomnia">
        <article class="article">
          <div className="article__container">
            <div className="article__img">
              <h2 className="article__tittle2">Sobre mí</h2>
              <img
                class="article__img--photo"
                src={carmen}
                alt="Carmen photo"
              />
            </div>
            <div>
              <p class="article__paragraph">
                ¡Hola a todo el mundo!
                <br />
                Soy Carmen, una publicista reconvertida en programadora front
                end a través de Adalab.
                <br /> Actualmente estoy buscando mi primera experiencia laboral
                y mientras llega, sigo formándome y trabajando en mis propios
                proyectos. Creo firmemente en el trabajo en equipo y en el
                sentimiento de comunidad para aprender unos de otros, por lo que
                me encantaría participar en proyectos Open source.
                <br />
                He llegado al mundo de la programación para quedarme.
              </p>
              <p className="article__paragraph--claim"> Let's code together!</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
export default Bio;
