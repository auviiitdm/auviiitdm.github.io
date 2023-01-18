import ProfileModal from "./ProfileModal";

import Soorya from "../../assets/auv_photos_team/2022/cs/Soorya.jpg";
import Vibhav from "../../assets/auv_photos_team/2022/cs/Vibhav.jpg";
import Madhav from "../../assets/auv_photos_team/2022/cs/Madhav.jpg";
import Roshan from "../../assets/auv_photos_team/2022/cs/Roshan.jpg";
import Abhishek from "../../assets/auv_photos_team/2022/cs/Abhishek MJ.jpg";

const Computermodal = () => {
  const teamMembers = [
    {
      name: "Soorya",
      imageSource: Soorya,
      linkedInLink: "#",
    },
    {
      name: "Vibhav",
      imageSource: Vibhav,
      linkedInLink: "#",
    },
    {
      name: "Roshan",
      imageSource: Roshan,
      linkedInLink: "#",
    },
    {
      name: "Abhishek MJ",
      imageSource: Abhishek,
      linkedInLink: "#",
    },
    {
      name: "Venkata Madhav",
      imageSource: Madhav,
      linkedInLink: "https://www.linkedin.com/in/madhav2133/",
    },
  ];

  return (
    <div className="modal fade" id="computers">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Computers</h4>
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
  );
};

export default Computermodal;
