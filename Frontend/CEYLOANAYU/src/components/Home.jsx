import React, { useState } from "react";
import "./Home.css";
import logo from "../assets/image1.jpg";
import { Link } from "react-router-dom";

// Import the AyurvedaHero component
import AyurvedaHero from "./AyurvedaHero/AyurvedaHero";
// Import the Panchakarma component
import Panchakarma from "./Panchakarma/Panchakarma";


// changed code: real icons
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaUserMd, FaLeaf, FaHospital, FaBullseye, FaSpa, FaAppleAlt } from "react-icons/fa";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConsultationClick = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const facilities = [
    {
      title: "Modern Treatment Rooms",
      description: "Equipped with traditional and modern amenities",
    },
    {
      title: "Herbal Garden",
      description: "Our own medicinal plant garden",
    },
    {
      title: "Accommodation",
      description: "Comfortable stay facilities for patients",
    },
    {
      title: "Laboratory",
      description: "Modern diagnostic facilities",
    },
    {
      title: "Pharmacy",
      description: "In-house Ayurvedic pharmacy",
    },
    {
      title: "Consultation Rooms",
      description: "Private consultation spaces",
    },
  ];

  const treatments = [
    "Abhyangam (Oil Massage)",
    "Shirodhara",
    "Pizhichil",
    "Kizhi",
    "Nasya",
    "Vasti",
    "Raktamokshana",
    "Swedana",
  ];

  // Updated 2026 Footer Component
  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img 
                  src={logo} 
                  alt="Ceylon Ayu Medical Logo" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    borderRadius: '50%'
                  }}
                />
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
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">OPD Services</a></li>
              <li><a href="#services">Panchakarma</a></li>
              <li><a href="#services">Yoga Therapy</a></li>
              <li><a href="#services">Herbal Pharmacy</a></li>
              <li><a href="#services">Special Clinics</a></li>
              <li><a href="#services">Diet & Nutrition</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Opening Hours</h4>
            <div className="opening-hours">
              <div className="hours-item">
                <span className="days">Monday - Friday</span>
                <span className="time">8:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="days">Saturday</span>
                <span className="time">8:00 AM - 1:00 PM</span>
              </div>
              <div className="hours-item emergency">
                <span className="days">Sunday</span>
                <span className="time">Emergency Only</span>
              </div>
            </div>
            <div className="footer-newsletter">
              <p>Subscribe to our newsletter</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
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
    <div className="home-root">
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="contact-info">
            <span>📍 Ceylon Ayu Medical, Hikkaduwa, Thiranagama, Sri Lanka</span>
            <span>📞 0771822396</span>
            <span>📧 info@ceylonayumedical.com</span>
          </div>
          <div className="social-icons">
            <a href="#" title="Facebook">
              📘
            </a>
            <a href="#" title="Instagram">
              📷
            </a>
            <a href="#" title="YouTube">
              ▶️
            </a>
            <a href="#" title="Twitter">
              🐦
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">
              <img 
                src={logo} 
                alt="Ceylon Ayu Medical Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  borderRadius: '50%'
                }}
              />
            </div>
            <div className="logo-text">
              <h1>Ceylon Ayu Medical</h1>
              <span>Traditional Healing, Modern Care</span>
            </div>
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>
                  Services & Facilities
                </a>
              </li>
              <li>
                <a href="#opd" onClick={() => setIsMenuOpen(false)}>
                  OPD
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={() => setIsMenuOpen(false)}>
                  Treatments
                </a>
              </li>
            </ul>
          </nav>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={handleConsultationClick}>
              Our Services
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Experience Authentic Ayurveda Healing</h1>
          <p>
            At Ceylon Ayu Medical, we blend ancient Ayurvedic wisdom with modern
            healthcare practices to provide holistic healing for mind, body, and
            soul.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Our Services
            </a>
            <a href="#treatments" className="btn btn-outline">
              View Treatments
            </a>
          </div>
        </div>
      </section>

      {/* REPLACED: Why Choose Ceylon Ayu Medical? with AyurvedaHero */}
      <AyurvedaHero />

      {/* REPLACED: Our Services & Facilities with Panchakarma */}
      <Panchakarma />

      {/* Facilities Section */}
      <section id="facilities" className="features">
        <div className="container">
          <div className="section-title">
            <h2>Our Facilities</h2>
            <p>Modern amenities for traditional healing</p>
          </div>
          <div className="features-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="feature-card">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section - FIXED VERSION */}
      <section id="treatments" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Specialized Treatments</h2>
            <p>Traditional Ayurvedic therapies for various health conditions</p>
          </div>
          <div className="treatments-list">
            <div className="treatments-grid">
              {treatments.map((treatment, index) => (
                <div key={index} className="treatment-card">
                  <h4>{treatment}</h4>
                  <a href="#" className="treatment-link">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Updated 2026 Version */}
      <Footer />
    </div>
  );
};

export default Home;