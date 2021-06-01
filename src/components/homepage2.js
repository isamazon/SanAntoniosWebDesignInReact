import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home/landingpage.css";

import drip1 from "../assets/drip1.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Homepage2(props) {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Container className="homepage-2-container" fluid>
        <div
          className={props.circle1}
          data-aos="flip-up"
          data-aos-duration="5000"
        ></div>
        <div
          className={props.circle2}
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-duration="1000"
        ></div>
        <div className={props.circle3}></div>
        <div className={props.circle4}></div>
        <div className="header">
          <h1
            className="services-h1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {props.header}
          </h1>
        </div>
        <Row className="homepage-2-row">
          <Col xl={7} md={12} sm={12} xs={12} className="col-1">
            <div
              className="desc-box"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1>{props.firstserviceh1}</h1>
              <p>{props.firstservicep}</p>
            </div>
          </Col>
          {/* Description col */}
          <Col
            xl={5}
            md={12}
            sm={12}
            xs={12}
            className="col-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {props.svg1}
          </Col>
        </Row>
        <Row className="homepage-2-row">
          <Col
            xl={5}
            md={12}
            sm={12}
            xs={12}
            className="col-3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {props.svg2}
          </Col>
          <Col xl={7} md={12} sm={12} xs={12} className="col-4">
            <div
              className="desc-box"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h1>{props.secondserviceh1}</h1>
              <p>{props.secondservicep}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage2;
