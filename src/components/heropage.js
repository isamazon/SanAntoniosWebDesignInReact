import React from "react";
import "../styles/home/landingpage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
// SVGS
import SVG from "./svgs/SVG";
import Svgcarousel from "./svgcarousel";
import BG1 from "../assets/background1.png";
class heropage extends Component {
  constructor() {
    super();
    this.state = {
      heroheader: "SAN ANTONIO'S WEB DESIGN",
      heroparagraph:
        "A media company Based in San Antonio, focused on app development, web design, and Seo. We develop and design your online image so you can focus on your business. Let us handle your online presence, while you focus on servicing your clientele. As Software Engineers We deliver top-notch quality that no other company can offer. With San Antonio's Web Design you aren't just getting a Web Designer, you're getting a Software Engineering team who will push you to the top of your niche.",
      mainsvg: SVG.Mainsvg,
      worktitle: "",
      workdesc: "",
    };
  }

  render() {
    return (
      <div>
        <Container fluid className="hero-page-main">
          <Row className="row-1">
            <Col xl={5} md={12} className="info-column">
              <h1 className="hero-header">{this.state.heroheader}</h1>
              <p className="hero-paragraph">{this.state.heroparagraph}</p>
              <div className="work-cont">
                <h1 className="work-h1">{this.state.worktitle}</h1>
                <p>{this.state.workdesc}</p>
              </div>
            </Col>
            <Col xl={7} md={12} className="work-col">
              <div className="svg-container">{this.state.mainsvg}</div>
              <h1 className="workh1">Click below for previous work</h1>
              <div className="carousel-container">
                <Svgcarousel
                  click1={() => this.setState({ mainsvg: SVG.Proj1 })}
                  click2={() => this.setState({ mainsvg: SVG.Proj2 })}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default heropage;