import React from "react";
import "../styles/components/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landingpage" id="home">
        <div className="overlay">
          <h2>Team AUV</h2>
          <br />
          <h2>IIITDM Kancheepuram</h2>
          <a href="#about">
            <button type="button">Explore</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
