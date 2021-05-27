import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import SVG from "./svgs/SVG";
import "../styles/home/landingpage.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
class Svgcarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      pauseOnHover: true,
      cssEase: "linear",
    };
    return (
      <Slider {...settings} className="slider">
        <div onClick={this.props.click1} className="svg-link">
          {SVG.Projsmall}
        </div>
        <div onClick={this.props.click2} className="svg-link">
          {SVG.Proj2small}
        </div>
        <div className="svg-link">{SVG.Projsmall}</div>
        <div className="svg-link">{SVG.Projsmall}</div>
        <div className="svg-link">{SVG.Projsmall}</div>
      </Slider>
    );
  }
}

export default Svgcarousel;
