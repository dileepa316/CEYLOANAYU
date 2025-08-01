import React, { useState, useEffect } from "react";
import "./Home.css";
import homeVideo from "../assets/Home.mp4";
import logoImage from "../assets/navigation.jpg";
import { FiMenu, FiX, FiUser, FiLogIn, FiArrowRight } from "react-icons/fi";
import { FaLeaf, FaSpa, FaMoon, FaSun, FaYoutube, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CeylonAyu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`ceylon-ayu-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Video Hero Section (top) */}
      <div className="video-hero">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 2025 Luxury Navigation Bar */}
        <header className={`header ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
          <nav className="navbar">
            {/* Animated Logo */}
            <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logoImage} alt="CeylonAyu Logo" className="logo-image" />
              <span className="logo-text">CEYLON AYU</span>
            </div>

            {/* Main Navigation */}
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <li><a href="#experience" className="nav-link"><FaSpa className="nav-icon" /> Experience</a></li>
              <li><a href="#accommodation" className="nav-link">Accommodation</a></li>
              <li><a href="#wellness" className="nav-link">Ayurveda Wellness</a></li>
              <li><a href="#sustainability" className="nav-link">Sustainability</a></li>
              <li><a href="#offers" className="nav-link">Special Offers</a></li>
              <li><a href="#contact" className="nav-link">Contact Us</a></li>
              
              {/* Auth Buttons */}
              <li className="auth-buttons">
                <button
                  className="login-btn"
                  onClick={() => navigate("/Login")}
                >
                  <FiLogIn className="auth-icon" />
                  <span>Login</span>
                </button>
                <button
                  className="signup-btn"
                  onClick={() => navigate("/Signup")}
                >
                  <FiUser className="auth-icon" />
                  <span>Sign Up</span>
                </button>
              </li>
              
              <li>
                <a href="#book" className="book-now">
                  <span className="book-now-text">Book Now</span>
                  <span className="book-now-hover"></span>
                </a>
              </li>
              <li>
                <button 
                  className="theme-toggle" 
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </nav>
        </header>

        {/* Hero Content with Subtle Animation */}
        <div className="video-content">
          <div className="title-wrapper">
            <h1 className="video-title">
              <span className="title-line">CEYLON AYU</span>
              <span className="title-subline">Ayurvedic Paradise</span>
            </h1>
            <div className="scroll-indicator">
              <div className="scroll-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section (middle) */}
      <section className="description-section">
        <div className="description-container">
          <div className="description-content">
            <h2 className="description-title">
              Ceylon Ayu – Ayurveda Wellness Retreat in Sri Lanka
            </h2>
            <p className="description-text">
              At Ceylon Ayu, we understand that life rarely stands still. That's why we've created a sanctuary where even the busiest souls can pause, heal, and restore. Nestled in the lush serenity of Sri Lanka, our retreat offers authentic Ayurvedic treatments, personalized Panchakarma programs, daily yoga, and dosha-aligned meals — all designed to bring you back to balance, even if just for a while.
            </p>
            <div className="description-features">
              <div className="feature">
                <div className="feature-icon"><FaSpa /></div>
                <h3>Authentic Ayurveda</h3>
                <p>Traditional treatments by certified practitioners</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><FaLeaf /></div>
                <h3>Holistic Wellness</h3>
                <p>Yoga, meditation, and nature immersion</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🍃</div>
                <h3>Sustainable Luxury</h3>
                <p>Eco-conscious practices meet modern comfort</p>
              </div>
            </div>
            <button className="discover-btn">
              Discover Our Retreat <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Footer (bottom) */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logoImage} alt="CeylonAyu Logo" className="footer-logo-image" />
            <span className="footer-logo-text">CEYLON AYU</span>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Explore</h4>
              <a href="#experience">Experience</a>
              <a href="#accommodation">Accommodation</a>
              <a href="#wellness">Wellness</a>
              <a href="#sustainability">Sustainability</a>
            </div>
            <div className="footer-column">
              <h4>Information</h4>
              <a href="#offers">Special Offers</a>
              <a href="#contact">Contact Us</a>
              <a href="#faq">FAQ</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
              <a href="#tripadvisor" aria-label="TripAdvisor"><FaTripadvisor /></a>
            </div>
            <p className="copyright">
              © {new Date().getFullYear()} Ceylon Ayu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CeylonAyu;