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
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

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
              CEYLON AYU
            </h2>
            <p className="description-text">
              A Transformative Ayurvedic & Wellness Retreat by the Shores of Weligama - Ayurveda Hotel in Sri Lanka.
              A luxurious Sri Lanka Ayurveda resort flanked by quiet shores, Ayurvie Weligama is a place for healing and transformation. 
              Fusing traditional and natural aids for a restorative holiday, our team of highly qualified doctors and therapists will carefully 
              curate your wellness program as per your medical history and individual needs based on Panchakarma; the cornerstone of 
              Ayurvedic therapy to restore the three Doshas to their natural equilibrium and truly enhance your sense of well-being. 
              A retreat at our hotel includes Ayurvedic treatment, daily yoga, and organic vegetarian meals specific to your dosha type.
            </p>
          </div>
        </div>
      </section>

      {/* New Footer Design */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-mission">
            <p>We are committed to setting up distinctive themes, to bring the most wonderful stories filled with authentic Sri Lankan experiences to life.</p>
            
            <div className="newsletter-section">
              <h3>JOIN OUR SPECIAL OFFERS NEWSLETTER!</h3>
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Newsletter Subscription" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="submit-btn">SUBMIT</button>
              </form>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <h4>THEMA COLLECTION</h4>
              <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#facilities">FACILITIES</a></li>
                <li><a href="#vouchers">VOUCHERS & GIFT CARDS</a></li>
                <li><a href="#concept">CONCEPT</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>AYURVEDA WELLNESS</h4>
              <ul>
                <li><a href="#blog">BLOG</a></li>
                <li><a href="#accommodation">ACCOMMODATION</a></li>
                <li><a href="#dining">DINING</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>CONTACT US</h4>
              <p>Address: Ayurvie Weligama,<br />
              NO 212, Sangananda Mawatha,<br />
              Kapparatota, Weligama, Sri Lanka.</p>
              <p>Phone: +94 117 386 386</p>
            </div>
          </div>

          <div className="footer-bottom">
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