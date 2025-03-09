import { useEffect, useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../styles/components/about.css';

// Import icons as React components for better performance
const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-stats');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '3', label: 'Vehicles Built', icon: '🚀' },
    { number: '30+', label: 'Team Members', icon: '👥' },
    { number: '9000+', label: 'Lines of Code', icon: '💻' },
    { number: 'Top 20', label: 'SAUVC Ranking', icon: '🏆' },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <h2 className="section-title">About Us</h2>
          <div className="about-grid">
            <div className="about-content">
              <ScrollAnimation animateIn="fadeInUp" delay={200}>
                <h3 className="content-title">Who we are?</h3>
                <p className="content-text">
                  We are a team of interdisciplinary undergraduate engineers passionate about underwater robotics. 
                  Our mission is to push the boundaries of autonomous underwater vehicles through innovation and teamwork.
                </p>
                <p className="content-text">
                  Working across mechanical, electronics, and software domains, we transform theoretical knowledge 
                  into cutting-edge underwater vehicles capable of exploring the vast depths of our oceans.
                </p>
                <div className="cta-group">
                  <a href="https://www.ketto.org/fundraiser/fund-the-auv-society-for-team-orca" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="cta-link primary">
                    Sponsor Us
                  </a>
                </div>
              </ScrollAnimation>
            </div>
            
            <div className="about-media">
              <ScrollAnimation animateIn="fadeInUp" delay={400}>
                <div className="video-wrapper">
                  <iframe
                    title="AUV Team Video"
                    src="https://www.youtube.com/embed/NsHS6F2bjII?playlist=NsHS6F2bjII&loop=1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        <div className="stats-grid" ref={statsRef}>
          {stats.map((stat, index) => (
            <ScrollAnimation 
              key={index} 
              animateIn="fadeInUp" 
              delay={200 + index * 100}
              className="stat-card"
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
