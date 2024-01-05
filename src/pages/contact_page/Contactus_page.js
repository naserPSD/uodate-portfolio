import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { AiOutlineSend } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Contactus = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b5dord9", // Replace with your service ID from EmailJS
      "template_if1ihsk", // Replace with your template ID from EmailJS
      form.current,
      "x5IfcAQ5tnxD4SiHt" // Replace with your user ID from EmailJS
    )
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        alert("Message sent successfully!"); // Display a success message
      })
      .catch((error) => {
        console.error(error.text);
        alert("Failed to send message. Please try again later."); // Display an error message
      });

    // Reset the form after submission
    setFormData({
      user_name: '',
      user_email: '',
      user_subject: '',
      message: ''
    });
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={4} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">{" "}</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
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
                  <div className="contacts-form" data-aos="fade-up">
                    <form ref={form} onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="user_name" className="label-class">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="user_name"
                          name="user_name"
                          placeholder="Enter Your Name"
                          value={formData.user_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="user_email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          id="user_email"
                          name="user_email"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email"
                          value={formData.user_email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="user_subject" className="label-class">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          name="user_subject"
                          id="user_subject"
                          placeholder="Enter Subject"
                          value={formData.user_subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="message" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-input input-class"
                          name="message"
                          id="message"
                          placeholder="Enter your message"
                          value={formData.message}
                          onChange={handleChange}
                          style={{ height: '120px' }}
                          required
                        />
                      </div>
                      <button type="submit" className="submitBtn">
                        Submit <AiOutlineSend className="send-icon" />
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Contactus;