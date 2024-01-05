import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import Particle from "../../Particle";
import { Link } from 'react-router-dom';
import HSC from "../../images/hsc.png";
import SSC from "../../images/ssc.png";
import BSC from "../../images/bsc.png";
import SPCSN from "../../images/spscn.png";
import SPSC from "../../images/spsc.png";

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
               {/* <Link to="/ranking">
      <li className="socialicons">
        <a
          href="https://test-app-portfolio.web.app/"
          target="_blank"
          rel="noreferrer"
          className="iconcolour homesocialicons"
        >
         
        </a>
      </li>
    </Link> */}
            <Zoom left cascade>
            <h1 style={{ color: "rgb(134 61 176)", marginBottom: "20px" }}>Certificates</h1>
            
            </Zoom>
         
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                <Row>
                    <Col md={12} className="mt-5">
                <Row className="g-5">
                
                        {/* HSC Certificate */}
                        <Col md={4} className="col-sm-12 col-md8">
                          <Fade bottom duration={1000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={HSC}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    <img
                                      className="logo_img"
                                      src={HSC}
                                      alt="HSC Certificate"
                                    />
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  HSC Certificate 
                                </h2>
                                {/* <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  HSC Issuer
                                </h3> */}
                                
                              </div>
                            </div>
                          </Fade>
                        </Col>
   
                        {/* SSC Certificate */}
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={SSC}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    <img
                                      className="logo_img"
                                      src={SSC}
                                      alt="SSC Certificate"
                                    />
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                  
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  SSC Certificate 
                                </h2>
                                {/* <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  SSC Issuer
                                </h3> */}
                                
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={SPCSN}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    <img
                                      className="logo_img"
                                      src={SPCSN}
                                      alt="SPSCN Certificate"
                                    />
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  SPSCN Certificate 
                                </h2>
                                {/* <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  SPSCN Issuer
                                </h3> */}
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        {/* Add similar structures for BSC, SPCSN, and SPSC */}
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={SPSC}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    <img
                                      className="logo_img"
                                      src={SPSC}
                                      alt="SPSC Certificate"
                                    />
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                 SPSC Certificate 
                                </h2>
                                {/* <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  SPSC Issuer
                                </h3> */}
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        
                      <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={BSC}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    <img
                                      className="logo_img"
                                      src={BSC}
                                      alt="BSC Certificate"
                                    />
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  BSC Certificate 
                                </h2>
                                {/* <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  BSC Issuer
                                </h3> */}
                              </div>
                            </div>
                          </Fade>
                          </Col>
                      </Row>
                    </Col>
                  </Row>
                  
                </Container>
              </Container>
            </div>
          </div>

        </Container>
      </Container>
    </section>
  );
}
