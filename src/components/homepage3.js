import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home/review.css";
import Reviewcarousel from "./reviewcarousel";
function Homepage3() {
  return (
    <div>
      <Container fluid className="container-fld">
        <Row className="review-row">
          <Col lg={12} className="col-1">
            <div className="review-text">
              <h1>
                WEB DESIGN <span>REVIEWS</span>
              </h1>
              <p>
                Talk is cheap, so just look at our reviews. Let our customers
                tell you how awesome our services are, whether it's web app
                development or E-commerce Development. San Antonio's Web Design
                is here to stay and we want to make sure you are too!
              </p>
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
