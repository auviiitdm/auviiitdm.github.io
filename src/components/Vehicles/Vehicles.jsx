import React, { useState } from "react";
import AUV1 from "./AUVV1.0";
import AUV2 from "./AUVV2.0";
import AUV3 from "./AUVV3.0.";

const Vehicles = () => {
  const [view, setView] = useState("auv3");

  return (
    <>
      <div className="vehicles" id="vehicles">
        <div className="container">
          <h2 className="title">Vehicles</h2>
          <hr></hr>
          <div className="row">
            {view === "auv3" && <AUV3 setView={setView} />}
            {view === "auv2" && <AUV2 setView={setView} />}
            {view === "auv1" && <AUV1 setView={setView} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
