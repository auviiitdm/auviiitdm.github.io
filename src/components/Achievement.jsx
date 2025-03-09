import { useEffect, useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../styles/components/achievement.css';
import ResearchPaperLogo from "../assets/icons/reasarch-undraw.svg";
import materovLogo from "../assets/logo/materov-logo.png";

const Achievement = () => {
  const achievements = [
    {
      type: 'competition',
      title: 'SAUVC 2019',
      description: '17th Place in Singapore AUV Challenge',
      details: 'Participated in the Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2019 and secured 17th position among international teams.',
      videoUrl: 'https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1',
      icon: '🌊',
      year: 2019
    },
    {
      type: 'competition',
      title: 'SAUVC 2020',
      description: 'Singapore AUV Challenge Participation',
      details: 'Successfully participated in SAUVC 2020, demonstrating our improved autonomous underwater vehicle capabilities.',
      videoUrl: 'https://www.youtube.com/embed/Wj7A49-mySk?playlist=NsHS6F2bjII&loop=1',
      icon: '🌊',
      year: 2020
    },
    {
      type: 'competition',
      title: 'SAUVC 2022',
      description: 'Singapore AUV Challenge Latest Participation',
      details: 'Represented our institution in SAUVC 2022 with advanced autonomous features and improved design.',
      videoUrl: 'https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1',
      icon: '🌊',
      year: 2022
    },
    {
      type: 'conference',
      title: 'Global Oceans 2021',
      description: 'Development of AUV for SAUVC During COVID-19',
      authors: 'Mayank Navneet Mehta, Subash Mylraj, Vishva Nilesh Bhate',
      conference: 'Global OCEANS 2021, San Diego – Porto, Sept 20-23, 2021',
      videoUrl: 'https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1',
      icon: '🎓'
    },
    {
      type: 'research',
      title: 'Research Paper Publication',
      description: 'Development of AUV for SAUVC During COVID-19',
      authors: 'Mayank Navneet Mehta, Subash Mylraj, Vishva Nilesh Bhate',
      details: 'This paper describes the design, implementation, and testing of control and vision algorithms for an AUV in virtual and real environments. Hardware design and the software stack of the vec6 underwater vehicle are described in this paper.',
      link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9705822',
      icon: '📚'
    },
    {
      type: 'research',
      title: 'Bio-Inspired Design Research',
      description: 'Design and Performance Analysis of Bio-Inspired Remotely Operated Robot',
      authors: 'Sukesh J R, Ruthwik Dasyam, Muthu S, Vishnuvardhan Iyengar',
      details: 'Underwater robot designs are bio-inspired by the behavior and physiology of aquatic animals to improve their maneuverability and energy efficiency. This paper discusses the MPF bio-inspired robot made for the MATE ROV challenge.',
      link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9705822',
      icon: '🤖'
    },
    {
      type: 'research',
      title: 'Research Paper Publication',
      description: 'Analysis of Underwater Coral Reef Health Using Neural Networks',
      authors: 'Venkata Madhav, T. Vyshnav, K. and Soorya, R.',
      details: 'This study showcases the potential of deep neural networks by implementing the YOLOv8 CNN model for automated coral health assessment. The model classifies coral into three categories: healthy, partially bleached, and completely bleached, achieving an accuracy of 78% in validation data.',
      conference: 'Presented at IEEE OCEANS 2024 Conference, Singapore',
      link: 'https://doi.org/10.1109/OCEANS51537.2024.10682334',
      icon: '🔬'
    },
    {
      type: 'competition',
      title: 'MATE ROV 2022',
      description: 'Global Competition Participation',
      details: 'Represented our country at MATE ROV 2022, focusing on the United Nations Decade of Ocean Science for Sustainable Development. Created a working machine that embraces environmental, social, and governance efforts.',
      videoUrl: 'https://www.youtube.com/embed/u3nHWZGkxV8',
      icon: '🏆',
      logo: materovLogo
    }
  ];

  // Group achievements by type for better organization
  const groupedAchievements = {
    competition: achievements.filter(a => a.type === 'competition'),
    research: achievements.filter(a => a.type === 'research' || a.type === 'conference')
  };

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <h2 className="section-title">Achievements</h2>
          
          <div className="achievements-categories">
            <div className="category">
              <h3 className="category-title">Competitions</h3>
              <div className="achievements-grid">
                {groupedAchievements.competition.map((achievement, index) => (
                  <ScrollAnimation 
                    key={index}
                    animateIn="fadeInUp" 
                    delay={200 * index}
                    className="achievement-card"
                  >
                    <div className="achievement-header">
                      {achievement.logo ? (
                        <img src={achievement.logo} alt={achievement.title} className="achievement-logo" />
                      ) : (
                        <div className="achievement-icon">{achievement.icon}</div>
                      )}
                      {achievement.year && (
                        <div className="achievement-year">{achievement.year}</div>
                      )}
                    </div>
                    <div className="achievement-content">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <p className="achievement-description">{achievement.description}</p>
                      {achievement.details && (
                        <p className="achievement-details">{achievement.details}</p>
                      )}
                      {achievement.videoUrl && (
                        <div className="video-wrapper">
                <iframe
                            title={achievement.title}
                            src={achievement.videoUrl}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                ></iframe>
              </div>
                      )}
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            <div className="category">
              <h3 className="category-title">Research & Publications</h3>
              <div className="achievements-grid">
                {groupedAchievements.research.map((achievement, index) => (
                  <ScrollAnimation 
                    key={index}
                    animateIn="fadeInUp" 
                    delay={200 * index}
                    className="achievement-card"
                  >
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-content">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <p className="achievement-description">{achievement.description}</p>
                      {achievement.authors && (
                        <p className="achievement-authors">By {achievement.authors}</p>
                      )}
                      {achievement.conference && (
                        <p className="achievement-conference">{achievement.conference}</p>
                      )}
                      {achievement.details && (
                        <p className="achievement-details">{achievement.details}</p>
                      )}
                      <div className="achievement-media">
                        {achievement.videoUrl && (
                          <div className="video-wrapper">
                            <iframe
                              title={achievement.title}
                              src={achievement.videoUrl}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
              </div>
                        )}
                        {achievement.link && (
                          <a 
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="achievement-link"
                          >
                            View Research Paper
                          </a>
                        )}
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              </div>
            </div>
          </ScrollAnimation>
      </div>
    </section>
  );
};

export default Achievement;
