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
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {props.data.map((data) => {
          return (
            <div>
              <h3>{data.name}</h3>
              <img src={data.image} width="100%" height="50%" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderShow;
