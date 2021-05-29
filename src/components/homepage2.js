import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home/landingpage.css";
import drip1 from "../assets/drip1.png";

function Homepage2() {
  return (
    <div>
      <Container className="homepage-2-container" fluid>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <Row className="homepage-2-row">
          <Col xl={7} className="col-1">
            <img src="" alt="" />
          </Col>
          <Col xl={5} className="col-2"></Col>
        </Row>
        <Row className="homepage-2-row">
          <Col xl={5} className="col-3"></Col>
          <Col xl={7} className="col-4"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage2;
