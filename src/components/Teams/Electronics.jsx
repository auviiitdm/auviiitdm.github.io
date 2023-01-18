import React from "react";
import ProfileModal from "./ProfileModal";

// images

import Nithin from "../../assets/auv_photos_team/2022/ec/Nithin.jpg";
import Mrudula from "../../assets/auv_photos_team/2022/ec/Mrudula.jpg";
import Rahul from "../../assets/auv_photos_team/2022/ec/ec21b1057.jpg";

const Electronicsmodal = () => {
  const teamMembers = [
    {
      name: "Nithin",
      imageSource: Nithin,
    },
    {
      name: "Mrudula",
      imageSource: Mrudula,
    },
    {
      name: "KS Rahul",
      imageSource: Rahul,
    },
  ];
  return (
    <>
      <div className="modal fade" id="electronics">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Electronics</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                {teamMembers.map((member) => {
                  return (
                    <ProfileModal
                      key={member.name}
                      name={member.name}
                      imageSource={member.imageSource}
                      linkedInLink={member.linkedInLink}
                    />
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Electronicsmodal;
