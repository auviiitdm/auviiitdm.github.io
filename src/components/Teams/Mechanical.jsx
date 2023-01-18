import ProfileModal from "./ProfileModal";
import Srikrishnan from "../../assets/auv_photos_team/2022/me/Srikrishnan.jpg";
import Raghav from "../../assets/auv_photos_team/2022/me/Raghav.jpg";
import Vishal from "../../assets/auv_photos_team/2022/me/Vishal.jpg";
import Vijay from "../../assets/auv_photos_team/2022/me/Vijay.jpg";
import Vaishnavi from "../../assets/auv_photos_team/2022/me/Vaishnavi.jpg";

const Mechanicalmodal = () => {
  const teamMembers = [
    {
      name: "Srikrishnan",
      imageSource: Srikrishnan,
    },
    {
      name: "Raghav",
      imageSource: Raghav,
    },
    {
      name: "Vishal",
      imageSource: Vishal,
    },
    {
      name: "Vaishnavi",
      imageSource: Vaishnavi,
    },
    {
      name: "Vijay Krishna RV",
      imageSource: Vijay,
    },
  ];
  return (
    <>
      <div className="modal fade" id="mechanical">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Mechanical</h4>
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

export default Mechanicalmodal;
