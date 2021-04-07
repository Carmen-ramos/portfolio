import React from "react";
import "../stylesheets/layout/_bio.scss";

function Bio() {
  return (
    <section class="sectionInsomnia">
      <article class="article">
        <h2 class="article__tittle2"> Insomnia tips</h2>
        <h3 class="article__title3">Looking trough a window</h3>
        <p class="article__paragraph">
          Donec accumsan,nulla ut volutpat porttitor,quam odio tempus felis, at
          luctus ex diam nec lectus. Vivamus semper sodales rutrum.
        </p>
        <div class="article__buttom">
          <a class="article__buttom--link" href="" text>
            {" "}
            Go
          </a>
        </div>
      </article>
    </section>
  );
}
export default Bio;
