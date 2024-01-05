import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SSC from "../../images/ssc.png";
import HSC from "../../images/hsc.png";
import BSC from "../../images/bsc.png";
import SPCSN from "../../images/spscn.png";
import SPSC from "../../images/spsc.png";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img src={SSC} alt="SSC Certificate" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img src={HSC} alt="HSC Certificate" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img src={BSC} alt="BSC Certificate" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img src={SPCSN} alt="SPCSN Certificate" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img src={SPSC} alt="SPSC Certificate" style={{ width: "100%", height: "100%" }} />
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
