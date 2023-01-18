import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import V3 from "../../assets/vehicles/auvv3.png";

const AUV3 = ({ setView }) => {
  return (
    <>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="list-group">
            <li className="list-group-item active">AUV V3.0</li>
            <li className="list-group-item" onClick={() => setView("auv2")}>
              AUV V2.0
            </li>
            <li className="list-group-item" onClick={() => setView("auv1")}>
              AUV V1.0
            </li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="col-sm-5">
        <ScrollAnimation animateIn="fadeIn">
          <img src={V3} alt="version3" className="img-fluid" />
        </ScrollAnimation>
      </div>
      <div className="col-sm-4">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#menu1">
                What's New
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu2">
                Specs
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="menu1" className="container tab-pane active">
              <h5 className="sub-heading">Hardware Side</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  The design aspect of this vehicle have a slightly marked
                  departure from the previous two cehicles and it also houses
                  two hulls.
                </li>
                <li className="list-group-item">
                  The vehicle has 5 DOFs viz. Heave, Surge, Sway, Yaw and Roll
                  and it is controlled using 2 BlueRobotics T200 and 4
                  BlueRobotics T100 thrusters, which are arranged in a vectored
                  configuration.
                </li>
                <li className="list-group-item">
                  The vehicle weighs 11 kgs and its dimensions are 49.2 x 45.4 x
                  40 cm.
                </li>
                <li className="list-group-item">
                  The vehicle has an open frame structure which was manufactured
                  using acrylic of 5 mm thickness and it has two hulls, one 6"
                  acryllic hull, and one 4" acryllic hull.
                </li>
                <li className="list-group-item">
                  The frame was designed to serve as mounting points for
                  attaching the thrusters.
                </li>
              </ul>
              <h5 className="sub-heading pt-">Software Side</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  This vehicle contains an Oak-D-series-3 camera, a 3D camera
                  which is introduced to facilitate the obstacle and props
                  detection along with path palnnning for performing various
                  autonomy tasks.
                </li>
              </ul>
            </div>
            <div id="menu2" className="container tab-pane fade">
              <h5 className="sub-heading">Details</h5>
              <table className="table table-dark table-striped">
                <tbody>
                  <tr>
                    <th>Dimensions:</th>
                    <td>49.2 x 45.4 x 40 (cm)</td>
                  </tr>
                  <tr>
                    <th>Weight:</th>
                    <td>11 kg</td>
                  </tr>
                  <tr>
                    <th>DOFs:</th>
                    <td>5 (Heave, Surge, Sway, Roll, Yaw)</td>
                  </tr>
                  <tr>
                    <th>Sensors:</th>
                    <td>
                      3 cm resolution analog water pressure sensor, BNO555 9-DoF
                      IMU (Internal measurment Unit), OAK-D Camera
                    </td>
                  </tr>
                  <tr>
                    <th>Power source:</th>
                    <td>Lithium Polymer battery (10400 mAh)</td>
                  </tr>
                  <tr>
                    <th>Thrusters:</th>
                    <td>
                      BlueRobotics T100 Thrusters (4), BlueRobotics T200
                      Thrusters (2)
                    </td>
                  </tr>
                  <tr>
                    <th>Microprocessor & Microcontroller </th>
                    <td>NVIDIA Jetson Nano, STM32 Microcontroller</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default AUV3;
