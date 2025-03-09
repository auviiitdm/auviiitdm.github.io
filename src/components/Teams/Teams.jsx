import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Icons
import Computers from "../../assets/icons/code.png";
import Electronics from "../../assets/icons/Electronics.png";
import Mechanical from "../../assets/icons/mechanical.png";
import BriiliantMind from "../../assets/icons/idea.png";
import Pastyear from "../../assets/icons/people.png";

// Team Modals
import ComputerModal from "./Computers";
import ElectronicsModal from "./Electronics";
import MechanicalModal from "./Mechanical";
import BrilliantMindModal from "./BrilliantMinds";
import PastYear1920Modal from "./PastYear1920";
import PastYear1819Modal from "./PastYear1819";
import PastYear2122 from "./PastYear2122";
import Coremodal from "./Core";

// Current Team Photos
import Soorya from "../../assets/auv_photos_team/2022/cs/Soorya.jpg";
import Vibhav from "../../assets/auv_photos_team/2022/cs/Vibhav.jpg";
import Madhav from "../../assets/auv_photos_team/2022/cs/Madhav.jpg";
import Roshan from "../../assets/auv_photos_team/2022/cs/Roshan.jpg";
import Abhishek from "../../assets/auv_photos_team/2022/cs/Abhishek MJ.jpg";
import Nithin from "../../assets/auv_photos_team/2022/ec/Nithin.jpg";
import Mrudula from "../../assets/auv_photos_team/2022/ec/Mrudula.jpg";
import Rahul from "../../assets/auv_photos_team/2022/ec/ec21b1057.jpg";
import Srikrishnan from "../../assets/auv_photos_team/2022/me/Srikrishnan.jpg";
import RaghavME from "../../assets/auv_photos_team/2022/me/Raghav.jpg";
import Vishal from "../../assets/auv_photos_team/2022/me/Vishal.jpg";
import Vijay from "../../assets/auv_photos_team/2022/me/Vijay.jpg";
import Vaishnavi from "../../assets/auv_photos_team/2022/me/Vaishnavi.jpg";
import Jhansi from "../../assets/auv_photos_team/2022/non-tech/jhansi.jpg";
import Yash from "../../assets/auv_photos_team/2022/non-tech/Yash.jpg";
import Ruthraj from "../../assets/auv_photos_team/2022/non-tech/Ruthraj.jpg";
import GLRAMAKRISHNA from "../../assets/auv_photos_team/2022/non-tech/GLRAMAKRISHNA.jpeg";

// 2021-22 Team Photos
import Vyshnav from "../../assets/auv_photos_team/latest/computers/Vyshnav.jpeg";
import MohamedAkliK from "../../assets/auv_photos_team/latest/computers/MohamedAkilK.jpg";
import VenkataMadhav from "../../assets/auv_photos_team/2022/cs/Madhav.jpg";
import RahulOld from "../../assets/auv_photos_team/latest/electronics/Rahul.jpg";
import MohamedIsmail from "../../assets/auv_photos_team/latest/electronics/MohamedIsmail.jpg";
import Manuraj from "../../assets/auv_photos_team/latest/electronics/Manuraj.jpg";
import MuthuShravan from "../../assets/auv_photos_team/latest/mechanical/MuthuShravan.jpg";
import SukeshJR from "../../assets/auv_photos_team/latest/mechanical/SukeshJR.jpg";
import VishnuVardhanIyengar from "../../assets/auv_photos_team/latest/mechanical/VishnuVardhanIyengar.jpg";

// 2019-20 Team Photos
import Sandesh from "../../assets/auv_photos_team/2019-2020/sandesh.jpg";
import Chit from "../../assets/auv_photos_team/2019-2020/chit.jpg";
import Ram from "../../assets/auv_photos_team/2019-2020/ram.jpg";
import Ravi from "../../assets/auv_photos_team/2019-2020/ravi.jpg";
import RoshanOld from "../../assets/auv_photos_team/2019-2020/roshan.jpg";
import Sharath from "../../assets/auv_photos_team/2019-2020/sharath.jpeg";
import Vaishali from "../../assets/auv_photos_team/2019-2020/vaishali.jpg";
import Charan from "../../assets/auv_photos_team/2019-2020/charan.jpg";
import Mayank from "../../assets/auv_photos_team/2019-2020/mayank.jpg";
import DawareOld from "../../assets/auv_photos_team/2019-2020/daware.jpg";
import VishvaOld from "../../assets/auv_photos_team/2019-2020/vishva.jpg";
import Arjun from "../../assets/auv_photos_team/2019-2020/arjun.jpg";
import GovindOld from "../../assets/auv_photos_team/2019-2020/govind.png";
import PrathameshOld from "../../assets/auv_photos_team/2019-2020/prathamesh.jpg";
import Subhash from "../../assets/auv_photos_team/2019-2020/subash-min.jpg";
import Anu from "../../assets/auv_photos_team/2019-2020/anupriya.jpeg";
import Shramona from "../../assets/auv_photos_team/2019-2020/shramona.jpg";

const TeamSection = ({ year, teams }) => {
  return (
    <div className="year-section">
      <h3 className="year-title">{year}</h3>
      <div className="teams-wrapper">
        {teams.map((team) => (
          <div key={team.name} className="team-section">
            <h4 className="team-heading">{team.name}</h4>
            <div className="members-grid">
              {team.members.map((member) => (
                <div key={member.name} className="member-item">
                  <img src={member.imageSource} alt={member.name} className="member-photo" />
                  <div className="member-info">
                    <p className="member-name">{member.name}</p>
                    {member.linkedInLink && member.linkedInLink !== "#" && (
                      <a href={member.linkedInLink} target="_blank" rel="noopener noreferrer">
                        <i className="fa">&#xf0e1;</i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="teams-container">
      <ScrollAnimation animateIn="fadeIn">
        {/* Current Year */}
        <TeamSection 
          year="2023-24"
          teams={[
            {
              name: "Computers",
              members: [
                {
                  name: "Soorya",
                  imageSource: Soorya,
                  linkedInLink: "#"
                },
                {
                  name: "Vibhav",
                  imageSource: Vibhav,
                  linkedInLink: "#"
                },
                {
                  name: "Roshan",
                  imageSource: Roshan,
                  linkedInLink: "#"
                },
                {
                  name: "Abhishek MJ",
                  imageSource: Abhishek,
                  linkedInLink: "#"
                },
                {
                  name: "Venkata Madhav",
                  imageSource: Madhav,
                  linkedInLink: "https://www.linkedin.com/in/madhav2133/"
                }
              ]
            },
            {
              name: "Electronics",
              members: [
                {
                  name: "Nithin",
                  imageSource: Nithin
                },
                {
                  name: "Mrudula",
                  imageSource: Mrudula
                },
                {
                  name: "KS Rahul",
                  imageSource: Rahul
                }
              ]
            },
            {
              name: "Mechanical",
              members: [
                {
                  name: "Srikrishnan",
                  imageSource: Srikrishnan
                },
                {
                  name: "Raghav",
                  imageSource: RaghavME
                },
                {
                  name: "Vishal",
                  imageSource: Vishal
                },
                {
                  name: "Vaishnavi",
                  imageSource: Vaishnavi
                },
                {
                  name: "Vijay Krishna RV",
                  imageSource: Vijay
                }
              ]
            },
            {
              name: "Brilliant Minds",
              members: [
                {
                  name: "Jhansi",
                  imageSource: Jhansi
                },
                {
                  name: "Yash",
                  imageSource: Yash
                },
                {
                  name: "Ruthraj",
                  imageSource: Ruthraj
                },
                {
                  name: "G L Ram krishna",
                  imageSource: GLRAMAKRISHNA
                }
              ]
            }
          ]}
        />

        {/* Past Years */}
        <TeamSection 
          year="2021-22"
          teams={[
            {
              name: "Computers",
              members: [
                {
                  name: "Vyshnav K",
                  imageSource: Vyshnav,
                  linkedInLink: "https://www.linkedin.com/in/vyshnavk/"
                },
                {
                  name: "Mohamed Akil K",
                  imageSource: MohamedAkliK,
                  linkedInLink: "https://www.linkedin.com/in/mohamed-akil/"
                },
                {
                  name: "Venkata Madhav",
                  imageSource: VenkataMadhav,
                  linkedInLink: "https://www.linkedin.com/in/madhav2133/"
                }
              ]
            },
            {
              name: "Electronics",
              members: [
                {
                  name: "Rahulkannan S",
                  imageSource: RahulOld,
                  linkedInLink: "#"
                },
                {
                  name: "Manuraj Vanamala",
                  imageSource: Manuraj,
                  linkedInLink: "https://www.linkedin.com/in/manurajvanamala/"
                },
                {
                  name: "Ismail Mohamed",
                  imageSource: MohamedIsmail,
                  linkedInLink: "https://www.linkedin.com/in/mohamed-ismail-j-0ab340213/"
                }
              ]
            },
            {
              name: "Mechanical",
              members: [
                {
                  name: "Sukesh JR",
                  imageSource: SukeshJR,
                  linkedInLink: "https://www.linkedin.com/in/sukeshjr/"
                },
                {
                  name: "Vishnuvardhan Iyengar",
                  imageSource: VishnuVardhanIyengar,
                  linkedInLink: "https://www.linkedin.com/in/vishnuvardhan-iyengar-4a5152221/"
                },
                {
                  name: "S Muthu Shravan",
                  imageSource: MuthuShravan,
                  linkedInLink: "https://www.linkedin.com/in/muthu-shravan-s-440a72135/"
                }
              ]
            }
          ]}
        />

        {/* 2019-20 */}
        <TeamSection
          year="2019-20"
          teams={[
            {
              name: "Team Members",
              members: [
                {
                  name: "Sandesh Bharadwaj (Team Lead)",
                  imageSource: Sandesh,
                  linkedInLink: "https://www.linkedin.com/in/sandeshbharadwaj97"
                },
                {
                  name: "Chitrartha Dixit",
                  imageSource: Chit,
                  linkedInLink: "https://www.linkedin.com/in/chitrartha-dixit-342436166"
                },
                {
                  name: "Ram Bahal Tiwari",
                  imageSource: Ram,
                  linkedInLink: "https://www.linkedin.com/in/ram-bahal-tiwari-342a3a169"
                },
                {
                  name: "Ravi K",
                  imageSource: Ravi,
                  linkedInLink: "https://www.linkedin.com/in/ravikumar2503"
                },
                {
                  name: "Roshan",
                  imageSource: RoshanOld,
                  linkedInLink: "https://www.linkedin.com/in/roshan-patel-07b578138"
                },
                {
                  name: "Sharath Chandar",
                  imageSource: Sharath,
                  linkedInLink: "https://www.linkedin.com/in/sharath-chandar-bb145b148"
                },
                {
                  name: "Vaishali",
                  imageSource: Vaishali,
                  linkedInLink: "https://www.linkedin.com/in/vaishali-ravishankar-0b6505149"
                },
                {
                  name: "Charan",
                  imageSource: Charan,
                  linkedInLink: "https://www.linkedin.com/in/charan-preetam-08021017a"
                },
                {
                  name: "Mayank N. Mehta",
                  imageSource: Mayank,
                  linkedInLink: "https://www.linkedin.com/in/mayank-n-mehta-468a47187"
                },
                {
                  name: "Prathamesh Daware",
                  imageSource: DawareOld,
                  linkedInLink: "https://www.linkedin.com/in/prathamesh-daware-0b3483185"
                },
                {
                  name: "Vishva Bhate",
                  imageSource: VishvaOld,
                  linkedInLink: "https://www.linkedin.com/in/vishva-bhate-a72847175"
                },
                {
                  name: "Arjun Ramesh",
                  imageSource: Arjun,
                  linkedInLink: "https://www.linkedin.com/in/arjun-ramesh-183517170"
                },
                {
                  name: "Govind K.P.",
                  imageSource: GovindOld,
                  linkedInLink: "https://www.linkedin.com/in/govind-kp"
                },
                {
                  name: "Prathamesh Degwekar",
                  imageSource: PrathameshOld,
                  linkedInLink: "https://www.linkedin.com/in/prathamesh-degwekar-0575b2b9"
                },
                {
                  name: "Subash Mylraj",
                  imageSource: Subhash,
                  linkedInLink: "https://www.linkedin.com/in/subash-m-1bba75130"
                },
                {
                  name: "Anupriya Gopal",
                  imageSource: Anu,
                  linkedInLink: "https://www.linkedin.com/in/anupriya-gopal-724111170"
                },
                {
                  name: "Shramona Roy",
                  imageSource: Shramona,
                  linkedInLink: "https://www.linkedin.com/in/shramona-roy-81939b170"
                }
              ]
            }
          ]}
        />

        {/* 2018-19 */}
        <TeamSection
          year="2018-19"
          teams={[
            {
              name: "Team Members",
              members: [
                {
                  name: "Sandesh Bharadwaj",
                  imageSource: Sandesh,
                  linkedInLink: "https://www.linkedin.com/in/sandeshbharadwaj97"
                },
                {
                  name: "Chitrartha Dixit",
                  imageSource: Chit,
                  linkedInLink: "https://www.linkedin.com/in/chitrartha-dixit-342436166"
                },
                {
                  name: "Ram Bahal Tiwari",
                  imageSource: Ram,
                  linkedInLink: "https://www.linkedin.com/in/ram-bahal-tiwari-342a3a169"
                },
                {
                  name: "Roshan",
                  imageSource: RoshanOld,
                  linkedInLink: "https://www.linkedin.com/in/roshan-patel-07b578138"
                },
                {
                  name: "Prathamesh Daware",
                  imageSource: DawareOld,
                  linkedInLink: "https://www.linkedin.com/in/prathamesh-daware-0b3483185"
                },
                {
                  name: "Vishva Bhate",
                  imageSource: VishvaOld,
                  linkedInLink: "https://www.linkedin.com/in/vishva-bhate-a72847175"
                },
                {
                  name: "Govind K.P.",
                  imageSource: GovindOld,
                  linkedInLink: "https://www.linkedin.com/in/govind-kp"
                },
                {
                  name: "Prathamesh Degwekar",
                  imageSource: PrathameshOld,
                  linkedInLink: "https://www.linkedin.com/in/prathamesh-degwekar-0575b2b9"
                }
              ]
            }
          ]}
        />
      </ScrollAnimation>

      {/* Modals */}
      <Coremodal />
      <ComputerModal />
      <ElectronicsModal />
      <MechanicalModal />
      <BrilliantMindModal />
      <PastYear2122 />
      <PastYear1920Modal />
      <PastYear1819Modal />
    </div>
  );
};

export default Teams;
