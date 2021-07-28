import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <p className="p-3">
          Made with love {"        "}
          <i id="heart" className="fa">
            &#xf004;
          </i>
          {"         "}
          by AUV IIITDM . Copyright © 2020. All Rights Reserved.
          <a href="https://www.privacypolicies.com/live/af693fba-7751-41fb-b826-ac1036dd0e85">
            {"         "} Read our Privacy Policy
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
