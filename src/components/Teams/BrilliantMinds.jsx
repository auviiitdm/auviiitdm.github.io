import ProfileModal from "./ProfileModal";
// images
import Jhansi from "../../assets/auv_photos_team/2022/non-tech/jhansi.jpg";
import Yash from "../../assets/auv_photos_team/2022/non-tech/Yash.jpg";
import Ruthraj from "../../assets/auv_photos_team/2022/non-tech/Ruthraj.jpg";
import GLRAMAKRISHNA from "../../assets/auv_photos_team/2022/non-tech/GLRAMAKRISHNA.jpeg";
const BrilliantMindmodal = () => {
  const teamMembers = [
    {
      name: "Jhansi",
      imageSource: Jhansi,
    },
    {
      name: "Yash",
      imageSource: Yash,
    },
    {
      name: "Ruthraj",
      imageSource: Ruthraj,
    },
    {
      name: "G L Ram krishna",
      imageSource: GLRAMAKRISHNA,
    },
  ];

  return (
    <div className="modal fade" id="brilliant">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Brilliant Minds</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="img-flex">
              {" "}
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

export default BrilliantMindmodal;
