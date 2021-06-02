import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Googlemap from "./map";
import "../styles/home/maps.css";
import "../styles/home/landingpage.css";
function Mappage(props) {
  return (
    <div>
      <Container fluid className="map-page">
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
        <Row className="map-info-row">
          <h1>Find us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            quibusdam iure maxime laborum aut, placeat necessitatibus! Fuga
            voluptas ut voluptatum, suscipit quidem consectetur ex perspiciatis
            dolor, vel earum inventore quod.
          </p>
        </Row>
        <Row className="map-row" data-aos="flip-up" data-aos-duration="2000">
          <Googlemap />
        </Row>
      </Container>
    </div>
  );
}

export default Mappage;
