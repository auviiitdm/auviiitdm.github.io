import { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThreeDots } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GMAPS from "../assets/img/map.png";
import "../styles/components/Contact.css";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState();

  const url = `https://auv-society-iiitdmk.herokuapp.com/sendemail`;
  const errorNotify = () =>
    toast.dark("Oops !! error sending the form response .. try again later");
  const succesNotify = () =>
    toast.dark("We received your response. We will contact you soon :) ");
  const incompleteFormNotify = () =>
    toast.dark("Oops !! you cannot submit incomplete Form");
  const sendForm = (event) => {
    event.preventDefault();
    setLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;
    console.log(name, email, subject, message);
    if (name && email && subject && message) {
      const response = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      axios
        .post(url, response, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          setLoading(false);
          succesNotify();
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          errorNotify();
        });
    } else {
      setLoading(false);
      incompleteFormNotify();
    }
  };

  return (
    <>
      {loading && (
        <div className="loading">
          <h4>We are processing your response</h4>
          <ThreeDots color="#0dc1f7" height={100} width={100} />
        </div>
      )}
      {!loading && (
        <form className="form mb-3">
          <div className="headliner">Get in Touch !!</div>
          <input type="text" placeholder="Name" ref={nameRef} />
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="text" placeholder="Subject" ref={subjectRef} />
          <input type="text" placeholder="Message" ref={messageRef} />
          <button
            type="button"
            onClick={(event) => {
              sendForm(event);
            }}
            className="mb-4"
          >
            Send
          </button>
        </form>
      )}
    </>
  );
};
const Contacts = () => {
  return (
    <>
      <div className="contact" id="contact">
        <ScrollAnimation animateIn="slideInUp">
          <div className="container">
            <h2 className="title" style={{ backgroundColor: "#161a22" }}>
              Contact
            </h2>
            <hr></hr>
            <div className="row">
              <div className="col-sm-6">
                <img src={GMAPS} alt={"AUVIIITDM location"}></img>
                <div className="links pt-1">
                  <p>
                    <b style={{ color: "#0dc1f7" }}>Mail to :</b>
                    {"      "}
                    <a href="mailto:auv.society@iiitdm.ac.in">
                      {"      "} auv.society@iiitdm.ac.in
                    </a>
                  </p>
                </div>
                <div className="links">
                  <p>
                    <b style={{ color: "#0dc1f7" }}>Contact us :</b>
                    {"      "}
                    <br />
                    <span>
                      <b>Ezhil:</b> +91 63819 66163
                    </span>
                    <br />
                    <span>
                      <b>Mukilan:</b> +91 94448 86709
                    </span>
                    <br />
                  </p>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">
                    <a
                      href="https://www.instagram.com/auv.iiitdm/?hl=en"
                      target="blank"
                    >
                      <i style={{ paddingLeft: "0px" }} className="fa">
                        &#xf16d;
                      </i>
                    </a>
                  </button>
                  <button type="button" className="btn btn-primary">
                    <a
                      href="https://www.youtube.com/channel/UCFBFlcfjEGOUsuFfPC-62bg"
                      target="blank"
                    >
                      <i className="fa">&#xf16a;</i>
                    </a>
                  </button>
                  <button type="button" className="btn btn-primary">
                    <a
                      href="https://www.facebook.com/auv.iiitdm/"
                      target="blank"
                    >
                      <i className="fa">&#xf09a;</i>
                    </a>
                  </button>
                  <button type="button" className="btn btn-primary">
                    <a
                      href="https://www.linkedin.com/company/auv-iiitdm-kancheepuram/?originalSubdomain=in"
                      target="blank"
                    >
                      <i className="fa">&#xf0e1;</i>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <ToastContainer
                  transition={Slide}
                  style={{ marginTop: "7rem" }}
                />
                <Form />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Contacts;
