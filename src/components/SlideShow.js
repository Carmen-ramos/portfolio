import React from "react";
import { Slide } from "react-slideshow-image";
import photo1 from "../images/401141.jpg";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
};

function SlideShow(props) {
  return (
    <>
      <section className="projects">
        <h2 className="projects__title">Mis proyectos</h2>
        <Slide {...properties}>
          {props.data.map((data) => {
            return (
              <div>
                <h4>{data.name}</h4>
                <img src={data.iamge} width="100%" />
              </div>
            );
          })}
        </Slide>
      </section>
    </>
  );
}
export default SlideShow;
