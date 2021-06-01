import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import "../styles/home/review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import review1 from "../assets/review1.jpg";
class Reviewcarousel extends Component {
  render() {
    const settings = {
      dots: true,

      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 0,
      cssEase: "linear",
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 6,
            infinite: true,
            speed: 25000,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 6,
            infinite: true,
            speed: 35000,
            dots: false,
          },
        },
      ],
    };
    return (
      <Slider {...settings} className="slider-2">
        <div className="review-cnt">
          <div
            className="inner-cnt"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="quote-box">
              <div className="sidebar"></div>
              <p>
                "Best quality website I've ever seen. Super kind and helpful.
                Really takes the time to help you..."
              </p>
            </div>
            <div className="quoter-box">
              <img src={review1} alt="" className="profile-pic" />
              <div className="quoter-info">
                <p className="name">- Austin Weeks</p>
                <p className="company-name"> CEO - SpaceGuy Gaming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-cnt">
          <div
            className="inner-cnt"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            <div className="quote-box">
              <div className="sidebar"></div>
              <p>"Good web designs at a fair price."</p>
            </div>
            <div className="quoter-box">
              <img src={""} alt="" className="profile-pic" />
              <div className="quoter-info">
                <p className="name">- Austin Weeks</p>
                <p className="company-name"> CEO - SpaceGuy Gaming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-cnt">
          <div
            className="inner-cnt"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="quote-box">
              <div className="sidebar"></div>
              <p>
                "I encourage anyone who needs a website design or needs
                mentoring on how to build one to contact San Antonio's Web
                design.."
              </p>
            </div>
            <div className="quoter-box">
              <img src={""} alt="" className="profile-pic" />
              <div className="quoter-info">
                <p className="name">- Austin Weeks</p>
                <p className="company-name"> CEO - SpaceGuy Gaming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-cnt">
          <div
            className="inner-cnt"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="quote-box">
              <div className="sidebar"></div>
              <p>"Good web designs at a fair price."</p>
            </div>
            <div className="quoter-box">
              <img src={""} alt="" className="profile-pic" />
              <div className="quoter-info">
                <p className="name">- Austin Weeks</p>
                <p className="company-name"> CEO - SpaceGuy Gaming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-cnt">
          <div
            className="inner-cnt"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="quote-box">
              <div className="sidebar"></div>
              <p>"Good web designs at a fair price."</p>
            </div>
            <div className="quoter-box">
              <img src={""} alt="" className="profile-pic" />
              <div className="quoter-info">
                <p className="name">- Austin Weeks</p>
                <p className="company-name"> CEO - SpaceGuy Gaming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-cnt">
          <div
            className="inner-cnt"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="quote-box">
              <div className="sidebar"></div>
              <p>"Good web designs at a fair price."</p>
            </div>
            <div className="quoter-box">
              <img src={""} alt="" className="profile-pic" />
              <div className="quoter-info">
                <p className="name">- Austn Weeks</p>
                <p className="company-name"> CEO - SpaceGuy Gaming</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Reviewcarousel;
