import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import mandala from '../../assets/mandala.png';
import logo from '../../assets/image1.jpg';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src={logo} alt="Ceylon Ayu Medical Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
              </div>
              <div className="footer-logo-text">
                <h3>Ceylon Ayu Medical</h3>
                <p className="tagline">Traditional Ayurveda healing with modern medical care.</p>
              </div>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Ceylon Ayu Medical, Hikkaduwa, Thiranagama, Sri Lanka</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+94 77 182 2396</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>info@ceylonayumedical.com</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">OPD Services</a></li>
              <li><a href="#services">Panchakarma</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ceylon Ayu Medical. All rights reserved.</p>
          <div className="footer-social">
            <span className="follow-label">Follow us:</span>
            <a className="social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a className="social-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a className="social-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a className="social-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <>
      {/* Header - same structure as Home */}
      <header className="main-header">
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <div className="logo-icon">
              <img src={logo} alt="Ceylon Ayu Medical Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
            </div>
            <div className="logo-text">
              <h1>Ceylon Ayu Medical</h1>
              <span>Traditional Healing, Modern Care</span>
            </div>
          </Link>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
              Our Services
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <div className={`overlay ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}></div>

      <div className="about-us-container">
        {/* Main Title */}
        <h1 className="about-title">CEYLON AYU MEDICAL</h1>

        {/* About Us Heading - No line below */}
        <h2 className="about-heading">About Us</h2>

        {/* Flower positioned after About Us heading */}
        <div className="flower-decoration">
          <div className="flower-container">
            <div className="flower-icon">
              <img src={mandala} alt="Ayurvedic Flower" />
            </div>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="about-content">
          <p>
            Established almost three decades ago, CEYLON AYU MEDICAL is a pioneer 
            in the field of Hela wedakama Ayurveda. Founded by a dedicated team of 
            practitioners, our leading medical center is committed to preserving a 
            3000-year-old practice, offering holistic care for a range of 
            physiological and psychological needs.
          </p>
          <p>
            In addition to consultations with a panel of experts specialising in 
            Hela Ayurveda, our medical center is also equipped with state-of-the-art 
            facilities and modern services. We combine ancient wisdom with 
            contemporary healthcare standards to provide comprehensive treatment 
            and wellness programs that address the root causes of ailments rather 
            than just treating symptoms.
          </p>
          <p>
            Beyond our main center, the CEYLON AYU MEDICAL legacy continues. We 
            manage several wellness resorts and treatment centres, both domestic 
            and international. Each property and our medical center are 
            interconnected, sharing a range of ISO-certified products, specialist 
            insight, and years of heritage. This integrated approach ensures that 
            our patients and guests receive consistent, high-quality Ayurvedic care 
            across all our establishments.
          </p>
          <p>
            Our commitment extends beyond treatment to education and preservation. 
            We actively work to pass on the knowledge of Hela wedakama Ayurveda to 
            future generations, ensuring that this ancient healing tradition 
            continues to thrive while adapting to modern needs and scientific 
            understanding.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;