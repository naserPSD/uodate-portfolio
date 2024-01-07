import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import { Link } from 'react-router-dom';
// import Ranking from "../../components/ranking/Ranking";
import { CgMail } from "react-icons/cg";
import { DiFirebase } from "react-icons/di";
import {

  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MD NASER BIN HOSSAIN</strong>
              </h1>

              <div className="typing-homeclass">
                
              </div>
              
             
              <div className="sociallink-home ">
  <ul className="homeaboutsociallinks ">
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{
        background: "#134E5E",
        color: "rgba(251, 217, 173, 0.972)", /* Set text color to transparent */
        WebkitTextFillColor: "#151F2D", /* For older Safari versions */
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        border: "2px solid #FAD6A8", /* Add a white border */
      }}
      contentArrowStyle={{ borderRight: "7px solid" }}
    >
                  
                    <div className="social-icons-box ">
                      <ul className="social-icons-list ">
                        <li className="socialicons ">
                          <a
                            href="https://github.com/naserPSD"
                            target="_blank"
                            rel="noreferrer"
                            className="iconBtn"
                          >
                            <div className="icon-box ">
                              <AiFillGithub className="icon" />
                            </div>
                          </a>
                        </li>
                        <li className="socialicons">
                          <a
                            href="https://www.linkedin.com/in/md-naser-bin-hossain-9712b7285/"
                            target="_blank"
                            rel="noreferrer"
                            className="iconBtn "
                          >
                            <div className="icon-box">
                              <FaLinkedinIn className="icon" />
                            </div>
                          </a>
                        </li>
                        <li className="socialicons">
                          <a
                            href="https://mail.google.com/mail/u/0/#inbox"
                            target="_blank"
                            rel="noreferrer"
                            className="iconBtn"
                          >
                            <div className="icon-box">
                              <CgMail className="icon" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </VerticalTimelineElement>

                </ul>
              </div>

            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="./profile.png"
                      alt="home pic"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
