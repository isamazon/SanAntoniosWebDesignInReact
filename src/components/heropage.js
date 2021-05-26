import React from "react";
import "../styles/home/landingpage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
// SVGS
import SVG from "./svgs/SVG";
import Svgcarousel from "./svgcarousel";
class heropage extends Component {
  constructor() {
    super();
    this.state = {
      heroheader: "SAN ANTONIO'S WEB DESIGN",
      heroparagraph:
        "A media company Based in San Antonio, focused on app development, web design, and Seo. We develop and design your online image so you can focus on your business. Let us handle your online presence, while you focus on servicing your clientele. As Software Engineers We deliver top-notch quality that no other company can offer. With San Antonio's Web Design you aren't just getting a Web Designer, you're getting a Software Engineering team who will push you to the top of your niche.",
      mainsvg: SVG.Mainsvg,
    };
  }

  render() {
    return (
      <div>
        <Container fluid className="hero-page-main">
          <Row className="row-1">
            <Col xl={5} className="info-column">
              <h1 className="hero-header">{this.state.heroheader}</h1>
              <p className="hero-paragraph">{this.state.heroparagraph}</p>
            </Col>
            <Col xl={7} className="work-container">
              <div className="svg-container">{this.state.mainsvg}</div>
              <h1 className="workh1">See some of our previous work</h1>
              <div className="carousel-container">
                <Svgcarousel />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default heropage;
