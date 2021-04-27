import React from "react";
import { Slide } from "react-slideshow-image";
import photo1 from "../images/401141.jpg";
import "../stylesheets/layout/_slideshow.scss";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  slidesToShow: 3,
  arrows: true,
  slidesToScroll: 1,
};

function SlideShow(props) {
  const slideShow = props.data.map((data) => {
    return (
      <div className="each-slide slide-container1">
        <h4 className="each-span">{data.name}</h4>
        <img src={data.image} width="100%" />
      </div>
    );
  });
  return (
    <section className="projects">
      <h2 className="projects__title">Mis proyectos</h2>
      <Slide {...properties}>
        <div>{slideShow}</div>
      </Slide>
    </section>
  );
}
export default SlideShow;
