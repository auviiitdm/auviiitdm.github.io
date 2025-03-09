import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AUV1 from "./AUVV1.0";
import AUV2 from "./AUVV2.0";
import AUV3 from "./AUVV3.0.";
import "../../styles/components/vehicles.css";

const Vehicles = () => {
  const [view, setView] = useState("auv3");

  return (
    <section className="vehicles-section" id="vehicles">
      <div className="vehicles-container">
        <ScrollAnimation animateIn="fadeIn">
          <h2 className="vehicles-title">Our Vehicles</h2>
          
          <div className="vehicles-content">
            <nav className="vehicle-nav">
              <div className="vehicle-nav-list">
                <div 
                  className={`vehicle-nav-item ${view === "auv3" ? "active" : ""}`}
                  onClick={() => setView("auv3")}
                >
                  <span className="nav-icon">🚀</span>
                  AUV V3.0
                </div>
                <div 
                  className={`vehicle-nav-item ${view === "auv2" ? "active" : ""}`}
                  onClick={() => setView("auv2")}
                >
                  <span className="nav-icon">🛥️</span>
                  AUV V2.0
                </div>
                <div 
                  className={`vehicle-nav-item ${view === "auv1" ? "active" : ""}`}
                  onClick={() => setView("auv1")}
                >
                  <span className="nav-icon">🌊</span>
                  AUV V1.0
                </div>
              </div>
            </nav>

            <div className="vehicle-content">
              {view === "auv3" && <AUV3 />}
              {view === "auv2" && <AUV2 />}
              {view === "auv1" && <AUV1 />}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Vehicles;
