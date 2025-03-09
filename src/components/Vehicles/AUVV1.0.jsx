import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import V1 from "../../assets/vehicles/auvv1.png";

const AUVV1 = () => {
  const [activeTab, setActiveTab] = useState("features");

  const specs = {
    dimensions: "80 x 55 x 40 (cm)",
    weight: "20 kg",
    dofs: "4 (Heave, Surge, Pitch, Yaw)",
    sensors: "Pressure sensor, 9-DoF IMU (Inertial Measurment Unit), Logitech C270 camera",
    powerSource: "Lithium Polymer battery (10400 mAh)",
    thrusters: "BlueRobotics T100 Thrusters (4)",
    processor: "Raspberry Pi 3, Arduino Mega"
  };

  const features = [
    {
      title: "First Generation Design",
      description: "Our inaugural AUV design featuring a robust and practical architecture for underwater operations."
    },
    {
      title: "Four DOF Control",
      description: "Capable of Heave, Surge, Pitch, and Yaw movements, providing essential maneuverability underwater."
    },
    {
      title: "Efficient Propulsion",
      description: "Equipped with four BlueRobotics T100 Thrusters for reliable and efficient underwater propulsion."
    },
    {
      title: "Sensor Integration",
      description: "Features essential sensors including pressure sensor, IMU, and camera for basic navigation and vision capabilities."
    },
    {
      title: "Dual Processing System",
      description: "Utilizes Raspberry Pi 3 for high-level processing and Arduino Mega for low-level control systems."
    }
  ];

  return (
    <div className="vehicle-display">
      <ScrollAnimation animateIn="fadeIn" className="vehicle-image-container">
        <img src={V1} alt="AUV Version 1.0" className="vehicle-image" />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" className="vehicle-details">
        <div className="vehicle-tabs">
          <div 
            className={`vehicle-tab ${activeTab === "features" ? "active" : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </div>
          <div 
            className={`vehicle-tab ${activeTab === "specs" ? "active" : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </div>
        </div>

        <div className="vehicle-tab-content">
          {activeTab === "features" && (
            <div className="vehicle-features">
              {features.map((feature, index) => (
                <ScrollAnimation 
                  key={index}
                  animateIn="fadeInUp"
                  delay={index * 100}
                  className="feature-item"
                >
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </ScrollAnimation>
              ))}
            </div>
          )}

          {activeTab === "specs" && (
            <table className="specs-table">
              <tbody>
                <tr>
                  <th>Dimensions</th>
                  <td>{specs.dimensions}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{specs.weight}</td>
                </tr>
                <tr>
                  <th>DOFs</th>
                  <td>{specs.dofs}</td>
                </tr>
                <tr>
                  <th>Sensors</th>
                  <td>{specs.sensors}</td>
                </tr>
                <tr>
                  <th>Power Source</th>
                  <td>{specs.powerSource}</td>
                </tr>
                <tr>
                  <th>Thrusters</th>
                  <td>{specs.thrusters}</td>
                </tr>
                <tr>
                  <th>Processor</th>
                  <td>{specs.processor}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default AUVV1;
