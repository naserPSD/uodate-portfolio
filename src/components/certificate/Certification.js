import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import HSC from "../../images/hsc.png";
import SSC from "../../images/ssc.png";
// Import other certificate images (BSC, SPCSN, SPSC) similarly

export default function Certification() {
  return (
    <Container fluid className="certificate-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="certificate-description d-flex justify-content-start">
            <Zoom left cascade>
              <h1 className="aboutme-heading">Certification</h1>
            </Zoom>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="col-sm-12 col-md8">
            <Fade bottom duration={1000} distance="20px">
              <div className="cert-card">
                <div className="content">
                  <a href={HSC} target="_blank" rel="noopener noreferrer">
                    <div className="content-overlay"></div>
                    <div className="cert-header" style={{ backgroundColor: "white" }}>
                      <img className="logo_img" src={HSC} alt="HSC Certificate" />
                    </div>
                    <div className="content-details fadeIn-top">
                      <h3 className="content-title" style={{ color: "black" }}>
                        Certificate
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="cert-body">
                  <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                    HSC Certificate 
                  </h2>
                </div>
              </div>
            </Fade>
          </Col>
          
          {/* Add similar Col components for other certificates */}
          
        </Row>

        <div className="blog--viewAll">
          <Link to="/certificatepage">
            <button className="btn btn-primary">
              View All
              <HiArrowRight className="viewArr" />
            </button>
          </Link>
        </div>
      </Container>
    </Container>
  );
}
