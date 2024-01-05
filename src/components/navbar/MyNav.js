import React, { useState,useRef, useEffect } from "react";
import { Navbar, Nav, Container, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgBulb, CgGitFork, CgSize } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiOutlineSend } from 'react-icons/ai';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaBlog, FaMobile, FaMobileAlt } from "react-icons/fa";
import "../../style.css";
import { CgFileDocument } from "react-icons/cg";
import { DiGithub } from "react-icons/di";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
// import React, { useRef, useState } from "react";
import { Modal } from 'react-bootstrap';
import emailjs from "@emailjs/browser";
// import Contactus from "../contactus/Contactus";
// import Contactus_Page from "../../contactus_page/Contactus_Page";
import { MobileStepper } from "@mui/material";
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Store } from 'react-notifications-component';

export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  
  const handleCloseWelcomePopup = () => setShowWelcomePopup(false);
  // const [showContactModal, setShowContactModal] = useState(false);
  // const handleCloseContactModal = () => setShowContactModal(false);
  // const handleShowContactModal = () => setShowContactModal(true);
  const [user_name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [user_subject, setuser_subject] = useState("");
  const [message, setmessage] = useState("");
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    message: ''
  });

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  
   // WelcomePopup Component
  const WelcomePopup = ({ handleClose }) => {
    const handleSubmit = (e) => {
      setFormData({
          user_name: user_name,
          user_email: user_email,
          user_subject: user_subject,
          message: message
        });
      e.preventDefault();
        console.log(form.current);
        console.log(form.current);
      emailjs.sendForm(
        "service_b5dord9", // Replace with your service ID from EmailJS
        "template_if1ihsk", // Replace with your template ID from EmailJS
        form.current,
        "x5IfcAQ5tnxD4SiHt" // Replace with your user ID from EmailJS
      )
      .then((result) => {
      console.log(result.text);
      console.log("message sent");
      Store.addNotification({
        title: "E-mail Notification",
        message: "Email sent successfully!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
        
      });
      // alert("Message sent successfully!"); // Display a success message
      })
      .catch((error) => {
      console.error(error.text);
      // alert("Failed to send message. Please try again later."); // Display an error message
      });

      handleClose();
      // Reset the form after submission
      // setFormData({
      //   user_name: '',
      //   user_email: '',
      //   user_subject: '',
      //   message: ''
      // });
    };
//submit
    return (
      <Modal show={true} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor: '#D3B683', color: 'black', fontSize: '2px' }}>
        <Modal.Title>Please! Contact with your valuable E-mail! 😄</Modal.Title>
      </Modal.Header>

        <Modal.Body style={{ backgroundColor: '#fbd9ad', color: 'black' }}>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name"
                name="user_name"
                // value={formData.user_name}
                onClick={setuser_name(formData.user_name)}
                required
                style={{ backgroundColor: 'black', color: 'white' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" 
                name="user_email"
                onClick={setuser_email(formData.user_email)}
                required
                style={{ backgroundColor: 'black', color: 'white' }}
              />
            {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="subjct">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Enter your subject" 
                name="user_subject"
                onClick={setuser_subject(formData.user_subject)}
                required
                style={{ backgroundColor: 'black', color: 'white' }}
              />
            {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message"  rows={5} placeholder="Enter your message" 
              name="message"
              onClick={setmessage(formData.message)}
              required
              style={{ backgroundColor: 'black', color: 'white' }}
              />
            </div>
            <button
          type="submit"
          style={{
            backgroundColor: "#410200",
            color: "white",
            fontSize: '17px',
            borderRadius: '5px'
          }}
        >
          {formData.user_name && formData.user_email && formData.user_subject && formData.message
            ? "Please fill all fields"
            : "Submit"}
          <AiOutlineSend className="send-icon" />
        </button>
      </form>
    </Modal.Body>
    <Button
      variant="secondary"
      onClick={handleClose}
      style={{
        borderRadius: '1px'
      }}
    >
      Close
    </Button>
  
      </Modal>
    );
  };

  return (
    <>
      {showWelcomePopup && <WelcomePopup handleClose={handleCloseWelcomePopup} />}
    <ReactNotifications />
    
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex flex-row justify-content-between">
            <img src="./profile.png" className="img-fluid logo" alt="brand" />
            <h5
              id="navhead"
              style={{
                marginLeft: "21px",
                paddingTop: "6px",
                color: "#e89933",
              }}
            >
              MD NASER BIN HOSSAIN
            </h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
            
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
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
        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          
          <Nav className="ml-auto" defaultActiveKey="#home">
            
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projectspage"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificatepage"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Certifications
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact_page"
                onClick={() => updateExpanded(false)}
              >
                <FaMobileAlt style={{ marginBottom: "7px" }} /> ContactMe
              </Nav.Link>
            </Nav.Item>
              
            {/* <Nav.Item> */}
            
            {/* <Nav.Link
              
                href="https://github.com/naserPSD"
                target="_blank"
                // rel="noreferrer"
                className="iconcolour homesocialicons"
                onClick={() => updateExpanded(false)}
                >
                  <AiFillGithub />
                <ImBlog style={{ marginBottom: "2px" }} />
              
           
              </Nav.Link> */}
              <Nav.Item>
                <Nav.Link
                  href="https://github.com/naserPSD"
                  target="_blank"
                  onClick={() => updateExpanded(false)}
                >
                <AiFillGithub /> GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                  href="https://www.linkedin.com/in/md-naser-bin-hossain-9712b7285/"
                  target="_blank"
                  onClick={() => updateExpanded(false)}
                >
                <FaLinkedinIn /> LinkIn
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link
                  href="chrome://extensions/?id=hoklmmgfnpapgjgcpechhaamimifchmp"
                  target="_blank"
                  onClick={() => updateExpanded(false)}
                >
                <CgBulb/> Popup
              </Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/ranking"
                onClick={() => updateExpanded(false)}
              >
                <CgBulb />Popup
              </Nav.Link>
            </Nav.Item> */}
              {/* <Nav.Link
                as={Link}
                href="https://github.com/naserPSD"
                // target="_blank"
                onClick={() => updateExpanded(false)}
              >
                <AiFillGithub />
              </Nav.Link> */}
            {/* </Nav.Item> */}
            {/* <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/naserPSD"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/md-naser-bin-hossain-9712b7285/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <CgMail />
                    </a>
                  </li>
                  
                </ul>
              </div> */}

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/naserPSD"
                target="_blank"
                className="fork-btn-inner"
              >
                <DiGithub style={{ fontSize: "1.2em" }} />{""}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
