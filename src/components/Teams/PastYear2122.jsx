import Vyshnav from "../../assets/auv_photos_team/latest/computers/Vyshnav.jpeg";
import MohamedAkliK from "../../assets/auv_photos_team/latest/computers/MohamedAkilK.jpg";
import VenkataMadhav from "../../assets/auv_photos_team/latest/computers/VenkataMadhav.jpg";
import Rahul from "../../assets/auv_photos_team/latest/electronics/Rahul.jpg";
import MohamedIsmail from "../../assets/auv_photos_team/latest/electronics/MohamedIsmail.jpg";
import Manuraj from "../../assets/auv_photos_team/latest/electronics/Manuraj.jpg";
import MuthuShravan from "../../assets/auv_photos_team/latest/mechanical/MuthuShravan.jpg";
import SukeshJR from "../../assets/auv_photos_team/latest/mechanical/SukeshJR.jpg";
import VishnuVardhanIyengar from "../../assets/auv_photos_team/latest/mechanical/VishnuVardhanIyengar.jpg";

//components
import ProfileModal from "./ProfileModal";
const teamMembers = [
  {
    name: "Vyshnav K",
    imageSource: Vyshnav,
    linkedInLink: "https://www.linkedin.com/in/vyshnavk/",
  },
  {
    name: "Mohamed Akil K",
    imageSource: MohamedAkliK,
    linkedInLink: "https://www.linkedin.com/in/mohamed-akil/",
  },
  {
    name: "Venkata Madhav",
    imageSource: VenkataMadhav,
    linkedInLink: "https://www.linkedin.com/in/madhav2133/",
  },
  { name: "Rahulkannan S", imageSource: Rahul, linkedInLink: "#" },
  {
    name: "Manuraj Vanamala",
    imageSource: Manuraj,
    linkedInLink: "https://www.linkedin.com/in/manurajvanamala/",
  },
  {
    name: "Ismail Mohamed",
    imageSource: MohamedIsmail,
    linkedInLink: "https://www.linkedin.com/in/mohamed-ismail-j-0ab340213/",
  },
  {
    name: "Sukesh JR",
    imageSource: SukeshJR,
    linkedInLink: "https://www.linkedin.com/in/sukeshjr/",
  },
  {
    name: "Vishnuvardhan Iyengar",
    imageSource: VishnuVardhanIyengar,
    linkedInLink:
      "https://www.linkedin.com/in/vishnuvardhan-iyengar-4a5152221/",
  },
  {
    name: "S Muthu Shravan",
    imageSource: MuthuShravan,
    linkedInLink: "https://www.linkedin.com/in/muthu-shravan-s-440a72135/",
  },
];

const PastYear2122 = () => {
  return (
    <>
      <div className="modal fade" id="past2122team">
        <div className="modal-dialog pastteam modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">2021-2022</h4>
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
      </div>
    </>
  );
};

export default PastYear2122;
