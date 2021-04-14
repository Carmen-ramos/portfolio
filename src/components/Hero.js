import React from "react";
import "../stylesheets/layout/_hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="herocontainer">
        <h1 className="herocontainer__tittle">Carmen Ramos</h1>
        <h2 className="herocontainer__paragrhap">Junior Front End Developer</h2>
        <p className="herocontainer__paragrhap">
          You can reach me in social media
        </p>

        <ul className="herocontainer__ul">
          <li className="herocontainer__ul--li">
            <a
              className="herocontainer__ul--li item"
              href="https://github.com/Carmen-ramos"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li className="herocontainer__ul--li">
            <a
              className="herocontainer__ul--li item"
              href="https://twitter.com/CM_Ramart"
            >
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li className="herocontainer__ul--li">
            <a
              className="herocontainer__ul--li item"
              href="https://www.linkedin.com/in/carmen-ramart/"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="herocontainer__ul--li">
            <a
              className="herocontainer__ul--li item"
              href="mailto:carmen.rama91@gmail.com"
            >
              <i class="fas fa-envelope-square"></i>
            </a>
          </li>
        </ul>

        <h2>Let's code together</h2>
      </div>
    </section>
  );
}
export default Hero;
