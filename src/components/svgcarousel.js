import React from "react";
import { Component } from "react";
import Slider from "react-slick";
class Svgcarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}></Slider>
      </div>
    );
  }
}

export default Svgcarousel;
