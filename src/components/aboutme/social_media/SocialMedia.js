import React from "react";
import {
  // AiOutlineInstagram,
  // AiFillFacebook,
  
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { CgMail } from "react-icons/cg";
import { FaMobile } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
        <Col md={3}>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <CgMail />
              </Zoom>
            </a>
          </Col>
          
          <Col md={3}>
            <a
              href="https://github.com/naserPSD"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          {/* <Col md={3}>
            <a
              href="01749051692"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaMobile />
              </Zoom>
            </a>
          </Col> */}
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/md-naser-bin-hossain-9712b7285/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
