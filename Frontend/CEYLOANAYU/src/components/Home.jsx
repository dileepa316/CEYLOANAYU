import React, { useState, useEffect } from "react";
import "./Home.css";
import homeVideo from "../assets/Home.mp4";
import logoImage from "../assets/navigation.jpg";
import { FiMenu, FiX, FiUser, FiLogIn } from "react-icons/fi";
import { FaLeaf, FaSpa, FaMoon, FaSun } from "react-icons/fa";

const CeylonAyu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`ceylon-ayu-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Floating Nature Elements */}
      <div className="floating-elements">
        <div className="floating-leaf floating-leaf-1"><FaLeaf /></div>
        <div className="floating-leaf floating-leaf-2"><FaLeaf /></div>
        <div className="floating-leaf floating-leaf-3"><FaLeaf /></div>
      </div>

      {/* Video Hero Section */}
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
                <a href="#login" className="login-btn">
                  <FiLogIn className="auth-icon" />
                  <span>Login</span>
                </a>
                <a href="#signup" className="signup-btn">
                  <FiUser className="auth-icon" />
                  <span>Sign Up</span>
                </a>
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
    </div>
  );
};

export default CeylonAyu;