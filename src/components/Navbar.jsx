import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';
import Logo from '../assets/new_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#achievements', text: 'Achievements' },
    { href: '#vehicles', text: 'Vehicles' },
    { href: '#sponsors', text: 'Sponsors' },
    { href: '/teamhub', text: 'Team Hub', isRoute: true },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          <img src={Logo} alt="AUV IIITDM Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">AUV IIITDM</span>
        </a>

        <button 
          className="navbar-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="navbar-links">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
