import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home/review.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Reviewcarousel from "./reviewcarousel";
function Homepage3() {
  return (
    <div>
      <Container fluid className="container-fld">
        <Row className="review-row">
          <Col lg={12} md={12} sm={12} xs={12} className="col-1">
            <div className="review-text">
              <h1 data-aos="fade-down" data-aos-duration="1200">
                WEB DESIGN <span>REVIEWS</span>
              </h1>
              <p data-aos="fade-up" data-aos-duration="1500">
                Talk is cheap, so just look at our reviews. Let our customers
                tell you how awesome our services are, whether it's web app
                development or E-commerce Development. San Antonio's Web Design
                is here to stay and we want to make sure you are too!
              </p>
              <a
                href=""
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                More reviews
              </a>
            </div>
          </Col>
          <Col lg={12} className="review-col">
            <Reviewcarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage3;
