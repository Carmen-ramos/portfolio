import React from "react";
import "../stylesheets/layout/_projects.scss";

function Projects() {
  return (
    <section id="section__reasons" class="section-reasons">
      <h2 class="section-title"> My projects </h2>

      <div class="Article-Container">
        <article class=" article1">
          <h3 class="article1-title">Spacelabers</h3>
          <a href="carmen-ramos.github.io/spacelabers/.">
            <img src="../images/spacelabers.jpg" />
          </a>
          <p>Lorem ipsum dolor sit, amet consectetur.</p>
        </article>

        <article class="article2">
          <h3 class="article2-tittle"> Curabitur acerat</h3>
          <p>Mauris mattis urna quis lorem molestie.</p>
        </article>

        <article class=" article3">
          <h3 class="article3-tittle"> Morbi dictum</h3>
          <p>Aliquam in dolor et dolor tincidunt</p>
        </article>
      </div>

      <div class="reason__buttom">
        <a class="reason__buttom--link" href="" text>
          More reasons{" "}
        </a>
      </div>
    </section>
  );
}
export default Projects;
