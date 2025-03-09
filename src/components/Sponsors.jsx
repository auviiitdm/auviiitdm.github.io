import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import BlueRobotics from "../assets/logo/BlueRobotics__white-min.png";
import SimScale from "../assets/logo/SimScale_logo_Rev_White.png";
import DRDO from "../assets/logo/DRDO_RIC_Logo-min.png";
import IIITDM from "../assets/logo/ilogo.png";
import "../styles/components/sponsors.css";

const Sponsors = () => {
  const sponsorCategories = [
    {
      title: "Sponsored by",
      name: "IIITDM Kancheepuram",
      logo: IIITDM,
      url: "https://www.iiitdm.ac.in/",
      shortName: "IIITDMK"
    },
    {
      title: "Special Thanks",
      name: "Blue Robotics",
      logo: BlueRobotics,
      url: "https://bluerobotics.com/"
    },
    {
      title: "Mentored by",
      name: "Defence Research and Development Organisation",
      logo: DRDO,
      url: "https://www.drdo.gov.in/home",
      shortName: "DRDO"
    },
    {
      title: "Past Sponsors",
      name: "SimScale",
      logo: SimScale,
      url: "https://www.simscale.com/"
    }
  ];

  return (
    <section className="sponsors-section" id="sponsors">
      <div className="sponsors-container">
        <ScrollAnimation animateIn="fadeIn">
          <h2 className="sponsors-title">Our Sponsors</h2>
          
          <div className="sponsors-grid">
            {sponsorCategories.map((sponsor, index) => (
              <ScrollAnimation 
                key={index}
                animateIn="fadeInUp"
                delay={index * 100}
                className="sponsor-category"
              >
                <h3 className="category-title">{sponsor.title}</h3>
                <a 
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-link"
                >
                  <div className="sponsor-card">
                    <img 
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="sponsor-logo"
                    />
                    <h4 className="sponsor-name">
                      {sponsor.shortName || sponsor.name}
                    </h4>
                  </div>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Sponsors;
