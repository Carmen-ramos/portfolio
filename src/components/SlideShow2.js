import React from "react";
import { Slide } from "react-slideshow-image";
import "../stylesheets/layout/_slideshow.scss";
import photo1 from "../images/401141.jpg";
import photo2 from "../images/bk4.jpg";
import photo3 from "../images/tree2.jpg";

const properties = {
  infinite: true,
  indicators: true,
  arrows: true,
  slidestoShow: 1,
};
const Slideshow = () => {
  return (
    <div>
      <Slide>
        <div className="each-slide">
          <img src={photo1} />
          <span>Slide 1</span>
        </div>
        <div className="each-slide">
          <img src={photo2} />
          <span>Slide 2</span>
        </div>
        <div className="each-slide">
          <img src={photo3} />
          <span>Slide 3</span>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
