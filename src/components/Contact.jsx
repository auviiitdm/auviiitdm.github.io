import { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import GMAPS from "../assets/img/map.png";
import "../styles/components/Contact.css";

const Form = () => {
  const emailRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  const url = `https://auv-society-iiitdmk.herokuapp.com/sendemail`;
  
  const notify = (type, message) => {
    toast.dark(message, {
      position: "bottom-right",
      autoClose: 4000,
    });
  };

  const sendForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!email || !message) {
      notify("error", "Please fill in all fields");
      return;
    }

    setLoading(true);

    const response = {
      email: email,
      message: message,
    };

    axios
      .post(url, response, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setLoading(false);
        notify("success", "Message sent successfully! We'll get back to you soon.");
        emailRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch(() => {
        setLoading(false);
        notify("error", "Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="contact-form-container">
      {loading ? (
        <div className="loading-overlay">
          <ThreeDots color="#0dc1f7" height={50} width={50} />
        </div>
      ) : null}
      <form className="contact-form" onSubmit={sendForm}>
        <div className="form-header">
          <h3>Get in Touch</h3>
          <p>Have a question or want to collaborate? Drop us a message!</p>
        </div>
        <div className="form-group">
          <input
            type="email"
            ref={emailRef}
            placeholder="Your email address"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            ref={messageRef}
            placeholder="Your message"
            className="form-input"
            rows="4"
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="contact" id="contact">
      <ScrollAnimation animateIn="slideInUp">
        <div className="container">
          <h2 className="title">Contact</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="map-container">
                <img src={GMAPS} alt="AUV IIITDM location" className="map-image" />
              </div>
              <div className="contact-details">
                <a href="mailto:auv.society@iiitdm.ac.in" className="email-link">
                  <i className="fa fa-envelope"></i>
                  auv.society@iiitdm.ac.in
                </a>
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/auv_iiitdm/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCFBFlcfjEGOUsuFfPC-62bg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/auv.iiitdm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/auv-iiitdm-kancheepuram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <ToastContainer position="bottom-right" transition={Slide} />
              <Form />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Contacts;
