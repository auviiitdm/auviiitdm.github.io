import React from "react";
import SAUVC from "../assets/logo/sauvclogo.png";
import ScrollAnimation from "react-animate-on-scroll";

/*
 A reusable component which renders sauvc qualification
 props: 
        year: the year in which AUV team is qualified
        videoLink: youtube video link for the same
        position: position in which AUV team is qualified
*/

const Sauvc = ({ year, videoLink, position }) => {
  let positionSuffix = "th";
  if (position === 2) {
    positionSuffix = "nd";
  } else if (position === 3) {
    positionSuffix = "rd";
  }
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="row mt-5">
        <div className="col-sm-8">
          <div className="card">
            <div className="row">
              <div className="col-sm-2">
                <img src={SAUVC} alt="sauvc" width="90px"></img>
              </div>
              <div className="col-sm-10">
                <div className="card-body">
                  <h6 className="sub-heading">
                    {position ? (
                      <>
                        {position}
                        {positionSuffix} place in SAUVC {year}
                      </>
                    ) : (
                      <>Qualified in SAUVC {year}</>
                    )}
                  </h6>
                  <p>
                    The SAUVC competition challenges participant teams to build
                    an AUV which can perform given tasks. The tasks involve four
                    widely faced challenges underwater such as AUV navigation,
                    visual identification, acoustic localization and robotic
                    manipulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <iframe title="video" src={`${videoLink}`}></iframe>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Sauvc;
