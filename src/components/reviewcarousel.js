import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import "../styles/home/review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Reviewcarousel extends Component {
  render() {
    const settings = {
      dots: true,
      carousel: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      cssEase: "linear",
    };
    return (
      <Slider {...settings} className="slider-2">
        <div className="review-cnt">
          <div className="inner-cnt"></div>
        </div>
        <div className="review-cnt">
          <div className="inner-cnt"></div>
        </div>
        <div className="review-cnt">
          <div className="inner-cnt"></div>
        </div>
        <div className="review-cnt">
          <div className="inner-cnt"></div>
        </div>
        <div className="review-cnt">
          <div className="inner-cnt"></div>
        </div>
        <div className="review-cnt">
          <div className="inner-cnt"></div>
        </div>
      </Slider>
    );
  }
}

export default Reviewcarousel;
