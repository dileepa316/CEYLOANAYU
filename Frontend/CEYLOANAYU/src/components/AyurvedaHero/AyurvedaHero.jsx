import React from "react";
import "./AyurvedaHero.css";
import { FaUserMd, FaRegClock, FaCapsules } from "react-icons/fa"; // Updated icons
import mandala from "../../assets/mandala.png";

const AyurvedaHero = () => {
  return (
    <section className="ayu-hero">
      <div className="ayu-container">

        {/* LEFT CONTENT */}
        <div className="ayu-left">
          <span className="ayu-subtitle">
            SIDDHALEPA AYURVEDA HOSPITAL
          </span>

          <h1 className="ayu-title">
            Your Trusted Hela Ayurveda <br />
            <span className="ayu-destination">Destination</span>
          </h1>

          {/* ORNAMENT */}
          <div className="ayu-divider-ornament">
            <span className="line short"></span>
            <span className="ayu-mandala">
              <img src={mandala} alt="Mandala Ornament" />
            </span>
            <span className="line short"></span>
          </div>

          <p className="ayu-highlight">
            Expert Ayurveda consultations & treatments, every day of the week.
          </p>

          <p className="ayu-text">
            Discover the healing powers of an ancient practice. Our leading
            Hela Ayurveda hospital in Sri Lanka offers daily professional
            consultations for both local and international patients.
          </p>

          <p className="ayu-text">
            Closely following the principles of Helawedakama Ayurveda,
            treatments are delivered by a team of expert specialists,
            renowned for personalised care.
          </p>

          <p className="ayu-text">
            From garden to clinic, we ensure authenticity, safety, and
            internationally certified medicine standards.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="ayu-right">
          <div className="ayu-badge">
            Over 200 years of heritage
          </div>

          <div className="ayu-feature">
            <FaUserMd className="ayu-icon" />
            <div>
              <h4>Expert Medical Professionals</h4>
              <p>Consult a panel of Hela Ayurveda specialists.</p>
            </div>
          </div>

          <div className="ayu-feature">
            <FaRegClock className="ayu-icon" /> {/* Updated Icon */}
            <div>
              <h4>Daily Consultations</h4>
              <p>07:00 AM – 08:00 PM</p>
            </div>
          </div>

          <div className="ayu-feature">
            <FaCapsules className="ayu-icon" /> {/* Updated Icon */}
            <div>
              <h4>Trusted Ayurveda Medicines</h4>
              <p>Organically produced herbal medicines.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaHero;
