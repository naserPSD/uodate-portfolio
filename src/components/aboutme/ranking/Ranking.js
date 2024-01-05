

// import React, { useState } from 'react';
import React, { useRef, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import emailjs from "@emailjs/browser";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';
// import Zoom from 'react-reveal/Zoom';
import { AiOutlineSend } from 'react-icons/ai';

const Ranking = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleCloseWelcomePopup = () => setShowWelcomePopup(false);
  const handleCloseContactModal = () => setShowContactModal(false);
  const handleShowContactModal = () => setShowContactModal(true);
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

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

  // WelcomePopup Component
  const WelcomePopup = ({ handleClose }) => {
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     // You can collect form data and perform actions like sending it to a server
    //     // Example: console.log('Form submitted!');
    //     // You can close the modal after form submission by calling handleClose()
    //     handleClose();
    // };

    

    
    
      const handleSubmit = (e) => {
        // console.log("user_name");
        // console.log(user_name);
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
        alert("Message sent successfully!"); // Display a success message
        })
        .catch((error) => {
        console.error(error.text);
        alert("Failed to send message. Please try again later."); // Display an error message
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

      console.log(user_name);
      console.log(user_email);
      console.log(user_subject);
      console.log(message);
      console.log("message");

    return (
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to My Portfolio!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name"
                name="user_name"
                // value={formData.user_name}
                onClick={(e) => setuser_name(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" 
                name="user_email"
                onClick={(e) => setuser_email(e.target.value)}
                />
                {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                <label htmlFor="subjct">Subject</label>
                <input type="text" className="form-control" id="sunject" placeholder="Enter subject" 
                name="user_subject"
                onClick={(e) => setuser_subject(e.target.value)}
                />
                {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows={3} placeholder="Enter your message"
                name="message"
                onClick={(e) => setmessage(e.target.value)}
                />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          {/* <p>This is a welcome message for your portfolio!</p> */}
          {/* You can add any content you want to display in the welcome popup */}
        </Modal.Body>
        
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
      </Modal>
    );
  };

  // Contactus Component
  const Contactus = ({ handleClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can collect form data and perform actions like sending it to a server
        // Example: console.log('Form submitted!');
        // You can close the modal after form submission by calling handleClose()
        handleClose();
    };
    return (
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
              <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows={3} placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Modal.Body>
        
       
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
       
      </Modal>
    );
  };

  return (
    <>
      {/* Welcome Popup */}
      {showWelcomePopup && <WelcomePopup handleClose={handleCloseWelcomePopup} />}

      {/* Contact Modal */}
      {showContactModal && <Contactus handleClose={handleCloseContactModal} />}

      {/* Toggle between Welcome Popup and Contact Modal */}
    </>
  );
  // return (


  // );
};

export default Ranking;
