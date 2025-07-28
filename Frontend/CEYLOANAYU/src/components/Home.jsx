import React from "react";
import "./Home.css";
import homeVideo from "../assets/Home.mp4";
import logoImage from "../assets/navigation.jpg"; // ✅ Import logo image

const CeylonAyu = () => {
  return (
    <div className="ceylon-ayu-container">
      {/* 🔹 Fullscreen Video Section */}
      <div className="video-hero">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔹 Transparent Nav Bar on top of video */}
        <header className="header">
          <nav className="navbar">
            {/* ✅ Logo Image */}
            <div className="logo">
              <img src={logoImage} alt="CeylonAyu Logo" />
            </div>

            <ul className="nav-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#wellness">Ayurveda Wellness</a></li>
              <li><a href="#book" className="book-now">Book Now</a></li>
              <li><a href="#accommodation">Accommodation</a></li>
              <li><a href="#offers">Special Offers</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </nav>
        </header>

        {/* 🔹 Centered Title on top of video */}
        <div className="video-content">
          <h1 className="video-title">CEYLOAN AYU</h1>
        </div>
      </div>
    </div>
  );
};

export default CeylonAyu;
