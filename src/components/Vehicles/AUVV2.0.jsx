import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import V2 from "../../assets/vehicles/auvv2.jpg";

const AUVV2 = () => {
  const [activeTab, setActiveTab] = useState("features");

  const specs = {
    dimensions: "53 x 73 x 35.5 (cm)",
    weight: "22 kg",
    dofs: "5 (Heave, Surge, Sway, Roll, Yaw)",
    sensors: "Pressure sensor, 9-DoF IMU (Inertial Measurment Unit), Logitech C270 camera",
    powerSource: "Lithium Polymer battery (10400 mAh)",
    thrusters: "BlueRobotics T100 Thrusters (4), BlueRobotics T200 Thrusters (2)",
    processor: "NVIDIA Jetson Nano, Raspberry Pi 3, Arduino Mega"
  };

  const features = [
    {
      title: "Advanced Thruster Configuration",
      description: "Vectored orientation of thrusters for precise translational and rotational motion."
    },
    {
      title: "Robust Construction",
      description: "Use of aluminium profile extrusions to mount thrusters, camera, gripper with ease."
    },
    {
      title: "Stability Enhancement",
      description: "Developed a roll-pitch restricting mechanism to achieve neutral buoyancy."
    },
    {
      title: "Acoustic Innovation",
      description: "Introducing an array of custom hydrophones made using piezoceramic materials which acts as a passive sonar system."
    },
    {
      title: "Advanced Simulation",
      description: "Developed complete simulation stack for vehicle to test algorithms."
    },
    {
      title: "Improved Navigation",
      description: "In-house quaternion based sensor fusion for enhanced navigation capabilities."
    },
    {
      title: "Computer Vision",
      description: "Yolov3 running in parallel with ROS for obstacle avoidance and object detection."
    }
  ];

  return (
    <div className="vehicle-display">
      <ScrollAnimation animateIn="fadeIn" className="vehicle-image-container">
        <img src={V2} alt="AUV Version 2.0" className="vehicle-image" />
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

export default AUVV2;
