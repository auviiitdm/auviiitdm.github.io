import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Teams from "./Teams/Teams";
import Gallery from "./Posts/Gallery";
import Contact from "./Contact";
import ScrollAnimation from "react-animate-on-scroll";
import Logo from "../assets/new_logo.png";
import "../styles/components/teamhub.css";

const VideoSection = () => {
  const videos = [
    { id: "u3nHWZGkxV8", title: "AUV IIITDM - Competition Highlights" },
    { id: "E-_hCViDmAk", title: "Testing and Development" },
    { id: "Tm2tWqYYt-c", title: "Team Showcase" },
    { id: "zgak4T-eD4E", title: "Technical Overview" },
    { id: "Bi_8wSK4RbY", title: "Competition Performance" },
    { id: "IF_YSmuBBcE", title: "Behind the Scenes" }
  ];

  return (
    <div className="videos-container">
      <h3 className="section-subtitle">Latest Videos</h3>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <ScrollAnimation
            key={video.id}
            animateIn="fadeInUp"
            delay={index * 100}
          >
            <div className="video-card">
              <div className="video-wrapper">
                <iframe
                  title={video.title}
                  src={`https://www.youtube.com/embed/${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="video-title">{video.title}</h3>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

const TeamHub = () => {
  const [section, setSection] = useState("teams");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSection(sectionId);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="teamhub">
      <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <Link to="/" className="back-button">
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>

          <div className="nav-brand">
            <img src={Logo} alt="AUV IIITDM Logo" />
            <span>AUV IIITDM</span>
          </div>
          
          <div className="nav-links">
            <button 
              className={`nav-link ${section === "teams" ? "active" : ""}`}
              onClick={() => scrollToSection("teams")}
            >
              Team Members
            </button>
            <button 
              className={`nav-link ${section === "posts" ? "active" : ""}`}
              onClick={() => scrollToSection("posts")}
            >
              Posts
            </button>
            <button 
              className={`nav-link ${section === "gallery" ? "active" : ""}`}
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </button>
            <button 
              className={`nav-link ${section === "contact" ? "active" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <section id="teams" className="hub-section">
            <h2 className="section-title">Our Team</h2>
            <Teams />
          </section>

          <section id="posts" className="hub-section">
            <h2 className="section-title">Latest Posts</h2>
            <VideoSection />
          </section>

          <section id="gallery" className="hub-section">
            <h2 className="section-title">Gallery</h2>
            <Gallery />
          </section>

          <section id="contact" className="hub-section">
            <h2 className="section-title">Contact Us</h2>
            <Contact />
          </section>
        </ScrollAnimation>
      </div>

      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
        Back to top
      </button>
    </div>
  );
};

export default TeamHub; 