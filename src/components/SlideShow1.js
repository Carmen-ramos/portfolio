import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderShow = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    nextArrow: <div>Next</div>,
    prevArrow: <div className="slick-prev">Previous</div>,
  };
  return (
    <div className="container">
      <h2>Proyectos</h2>
      <Slider {...settings}>
        {props.data.map((data) => {
          return (
            <div>
              <span>{data.name}</span>
              <img
                src={data.image}
                style={{
                  width: "200px",
                  height: "400px",
                  border: "1px solid blue",
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderShow;
