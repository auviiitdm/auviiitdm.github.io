import React from "react";
import Faces from "../assets/icons/face.svg";
import Github from "../assets/icons/github.svg";
import Medal from "../assets/icons/medal.svg";
import Trophy from "../assets/icons/trophy.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Documentation from "../assets/AUV_v1.0_report.pdf";

const About = () => {
  return (
    <div className="about mt-5" id="about">
      <ScrollAnimation animateIn="fadeInDown">
        <div className="container">
          <h2 className="title">About Us</h2>
          <hr></hr>
          <div className="row">
            <div className="col-sm-8">
              <h6 className="sub-heading">Who we are?</h6>
              <p>
                We are a team of 9 interdisciplinary undergraduate engineers
                working to build an autonomous water vehicle for various
                underwater robotics competetions. The team works in robotic
                domains of mechanical, electronics and software. We want to bind
                together our thereotical knowledge and put it into an under
                water vehicle that can go and explore the vast seas.
              </p>
              <div style={{ display: "flex", justifyContent: "left" }}>
                <a href={Documentation} target="blank" className="mr-2">
                  <u style={{ color: "#0dc1f7" }}>Documentation</u>
                </a>
                <a
                  href="https://www.ketto.org/fundraiser/fund-the-auv-society-for-team-orca"
                  target="blank"
                >
                  <u style={{ color: "#0dc1f7" }}>Sponsor Us</u>
                </a>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <iframe
                title="video"
                src="https://www.youtube.com/embed/NsHS6F2bjII?playlist=NsHS6F2bjII&loop=1"
              ></iframe>
            </div>
          </div>
          <div className="card-deck mt-5 pb-3 text-center">
            <div className="card">
              <img className="icon" src={Trophy} alt="" />
              <p>3 Vehicles</p>
            </div>
            <div className="card">
              <img className="icon" src={Faces} alt="" />
              <p>30 Happy Members</p>
            </div>
            <div className="card">
              <img className="icon" src={Github} alt="" />
              <p>9000+ lines of code</p>
            </div>
            <div className="card">
              <img className="icon" src={Medal} alt="" />
              <p>17th place in SAUVC</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};
export default About;
