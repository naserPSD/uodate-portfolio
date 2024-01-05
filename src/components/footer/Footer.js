import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiPhp,
  DiJava,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
  DiAndroid,
  DiFirebase,
} from "react-icons/di";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <h3>Designed and Developed by Md Naser Bin Hossain</h3> */}
        </Col>
        <Col md="4" className="footer-copywright">
          {/* <h3>Copyright © {year} Md Naser Bin Hossain</h3> */}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/naserPSD"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgMail />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/md-naser-bin-hossain-9712b7285/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* <li className="socialicons">
        <a
          href="https://console.firebase.google.com/?_gl=1*zb5062*_ga*NjQzNzA1ODkzLjE3MDMzOTkwODY.*_ga_CW55HF8NVT*MTcwNDE4NzMyNC4xNy4xLjE3MDQxODczMzIuNTIuMC4w"
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
          
        >
         <DiFirebase />
        </a>
      </li>
      <li className="socialicons">
        <a
          style={{ color: "white" }}
          href="https://console.firebase.google.com/"
          rel="noreferrer"
          
        >
         <DiFirebase />
        </a>
      </li> */}

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
