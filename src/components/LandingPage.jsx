import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/landing-page.css';

const LandingPage = () => {
  const particlesRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        contentRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        contentRef.current.style.opacity = 1 - (scrolled * 0.002);
      }
    };

    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random size
      const size = Math.random() * 15 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random animation duration
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      
      particlesRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 15000);
    };

    // Create initial particles
    const particleInterval = setInterval(createParticle, 200);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(particleInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="landing-page" id="home">
      <div className="particles" ref={particlesRef}></div>
      <div className="content" ref={contentRef}>
        <h1 className="title">AUV IIITDM Kancheepuram</h1>
        <p className="subtitle">Aiming Higher, Diving Deeper</p>
        <div className="cta-buttons">
          <Link to="/teamhub" className="cta-button primary">Team Hub</Link>
          <a href="#contact" className="cta-button secondary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
