import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/home/finance.css";
import Paypal from "../assets/paypal.png";
import Zip from "../assets/zip.png";
import Fundinghero from "../assets/fundinghero.png";
function Finance(props) {
  return (
    <div>
      <Container fluid className="finance-cnt-container">
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
        <Row className="title-row">
          <Col className="title-col">
            <h1>
              AFFORDABLE <span>FINANCING</span>
            </h1>
          </Col>
        </Row>
        <Row className="pay-row">
          <Col lg={3} className="paypal-div">
            <img src={Paypal} className="img" alt="" />
            <p>
              Set up auto payments with paypal debit or paypal credit. Currently
              Starting as low as 200.00 every two weeks.
            </p>
          </Col>
          <Col lg={3} className="funding-div">
            <img src={Fundinghero} className="img" alt="" />
            <p>
              Our top-rated business loan partners. Discover which brand is the
              right choice for you.
            </p>
          </Col>
          <Col lg={3} className="zip-div">
            <img src={Zip} className="img" alt="" />
            <p>
              Manage your expenses your way with transparent fees. $200.00
              minumum monthly repayment and no interest ever.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Finance;
