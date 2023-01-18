import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// components
import Sauvc from "./Sauvc";
import ResearchPaperLogo from "../assets/icons/reasarch-undraw.svg";
import materovLogo from "../assets/logo/materov-logo.png";

const Achievements = () => {
  return (
    <>
      <div className="achievement" id="achievement">
        <div className="container">
          <h2 className="title" style={{ backgroundColor: "#161a22" }}>
            Achievements
          </h2>
          <hr></hr>
          <Sauvc
            year={2019}
            videoLink={
              "https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
            }
            position={17}
          />
          <Sauvc
            year={2020}
            videoLink={
              "https://www.youtube.com/embed/Wj7A49-mySk?playlist=NsHS6F2bjII&loop=1"
            }
          />
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img
                        src="data:image/png;base64,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"
                        alt="sauvc"
                        width="90px"
                      ></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a data-toggle="modal" data-target="#achieve2022">
                            Global Oceans 2021
                          </a>
                        </h6>
                        <p>
                          Development of AUV for SAUVC During COVID-19 Authors:
                          Mayank Navneet Mehta, Subash Mylraj, Vishva Nilesh
                          Bhate Conference: Global OCEANS 2021, San Diego –
                          Porto, Sept 20-23, 2021.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img
                        src={ResearchPaperLogo}
                        alt="resarch paper"
                        width="90px"
                      ></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a data-toggle="modal" data-target="#achieve2022">
                            Research paper 1
                          </a>
                        </h6>
                        <p>
                          Development of AUV for SAUVC During COVID-19 by Mayank
                          Navneet Mehta, Subash Mylraj, Vishva Nilesh Bhate.
                          <br></br>This paper describes the design,
                          implementation, and testing of control and vision
                          algorithms for an AUV in virtual and real
                          environments. Hardware design and the software stack
                          of the vec6 underwater vehicle are described in this
                          paper. The paper also presents a simulation test-bed,
                          the uwv-simulator, which is developed using ROS and
                          Gazebo. A custom arena similar to that used in the
                          Singapore AUV Challenge is constructed in the
                          simulation environment. The software stack is designed
                          to execute higher and abstract algorithms without the
                          trouble of going through the lower-level functions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-4 text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>
                  Click{" "}
                  <a
                    target="blank"
                    href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9705822"
                    style={{ cursor: "pointer" }}
                  >
                    here
                  </a>{" "}
                  to view the research paper
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img
                        src={ResearchPaperLogo}
                        alt="research paper"
                        width="90px"
                      ></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a data-toggle="modal" data-target="#achieve2022">
                            Research paper 2
                          </a>
                        </h6>
                        <p>
                          Design and Performance Analysis of Bio-Inspired
                          Remotely Operated Robot by Sukesh J R, Ruthwik Dasyam,
                          Muthu S, Vishnuvardhan Iyengar.
                          <br></br>
                          Underwater robot designs are bio-inspired by the
                          behavior and physiology of aquatic animals mostly from
                          fishes and rays to improve their maneuverability and
                          energy efficiency. The following paper discusses the
                          MPF (middle or paired fins type) bio-inspired robot,
                          made for the MATE ROV challenge because of its very
                          best swimming speed and propulsion efficiency and also
                          aims to develop a string ray-inspired robotic fish
                          which can be propelled by oscillating the flexible
                          pectoral fins. The design of the robot relies on the
                          organismic consideration that the stingray body is
                          rigid at its center and versatile towards its fins.
                          Indeed, all mechanical and electrical parts are inside
                          a rigid shell embedded at the center of the robot's
                          flexible body. Also, the paper includes an analysis of
                          hydromechanics and kinematics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>
                  Click{" "}
                  <a
                    target="blank"
                    href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9705822"
                    style={{ cursor: "pointer" }}
                  >
                    here
                  </a>{" "}
                  to view the research paper
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <Sauvc
            year={2022}
            videoLink={
              "https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
            }
          />
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={materovLogo} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a data-toggle="modal" data-target="#achieve2022">
                            Mate ROV 2022
                          </a>
                        </h6>
                        <p>
                          The MATE ROV Competition is an underwater robotics
                          (aka remotely operated vehicle or ROV) challenge that
                          engages a global community of learners each year. This
                          year, the MATE ROV Competition is highlighting the
                          United Nations Decade of Ocean Science for Sustainable
                          Development and inspiring our global community to
                          embrace environmental, social, and governance (ESG)
                          efforts to create a sustainable future on our ocean
                          planet. We made a working machine and represented our
                          country at Mate ROV 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/u3nHWZGkxV8"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};
export default Achievements;
