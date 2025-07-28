import React from "react";
import "./Home.css";
import homeVideo from "../assets/Home.mp4";

const CeylonAyu = () => {
  return (
    <div className="ceylon-ayu-container">
      {/* 🔹 Fullscreen Video */}
      <div className="video-hero">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔹 Text Overlay on top of video */}
        <div className="video-content">
          <h1 className="video-title">CEYLOAN AYU</h1>
        </div>
      </div>

      {/* 🔹 Optional nav or content below video */}
      <header className="header">
        <nav className="navbar">
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
    </div>
  );
};

export default CeylonAyu;
