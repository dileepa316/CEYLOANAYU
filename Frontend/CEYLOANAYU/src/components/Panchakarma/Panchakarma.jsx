import React from "react";
import "./Panchakarma.css";

import panchakarma from "../../assets/panchakarma Treatment.jpeg";
import massage from "../../assets/wellness massage.jpeg";
import yoga from "../../assets/yoga.jpeg";
import meditation from "../../assets/meditation.jpeg";
import mandala from "../../assets/mandala.png";

const treatments = [
  {
    title: "Ayurveda Panchakarma Treatments",
    image: panchakarma,
    description:
      "Traditional Panchakarma therapies designed to detoxify, rejuvenate, and restore balance."
  },
  {
    title: "Herbal Wellness Massage",
    image: massage,
    description:
      "Therapeutic herbal oil massages promoting deep relaxation and healing."
  },
  {
    title: "Yoga Therapy",
    image: yoga,
    description:
      "Guided yoga sessions to enhance flexibility, balance, and mental clarity."
  },
  {
    title: "Meditation",
    image: meditation,
    description:
      "Mindfulness and meditation practices for inner peace and stress relief."
  }
];

export default function Panchakarma() {
  return (
    <section className="pancha-section">
      {/* ADDED HEADING SECTION */}
      <div className="pancha-heading">
        <h1 className="pancha-main-title">Treatments</h1>
        <p className="pancha-subtitle">
          Discover our specialized Ayurvedic treatments for holistic healing and wellness
        </p>
        
        <div className="pancha-title-divider">
          <span className="pancha-divider-line"></span>
          <span className="pancha-mandala">
            <img src={mandala} alt="Mandala Ornament" />
          </span>
          <span className="pancha-divider-line"></span>
        </div>
      </div>

      <div className="pancha-grid">
        {treatments.map((item, index) => (
          <div className="pancha-card" key={index}>
            <img src={item.image} alt={item.title} />

            {/* TITLE + MANDALA WITH TWO LINES */}
            <div className="pancha-title-on-image">
              <span className="pancha-title-text">{item.title}</span>

              <div className="ayu-divider-ornament">
                <span className="ayu-line"></span>

                <span className="ayu-mandala">
                  <img src={mandala} alt="Mandala Ornament" />
                </span>

                <span className="ayu-line"></span>
              </div>
            </div>

            {/* HOVER OVERLAY */}
            <div className="pancha-overlay">
              <span className="pancha-sub">SPECIAL CLINIC</span>

              <h3>{item.title}</h3>

              <div className="pancha-divider">
                <span className="divider-hyphen">-</span>
                <div className="pancha-flower"></div>
                <span className="divider-hyphen">-</span>
              </div>

              <p>{item.description}</p>
              <button>EXPLORE MORE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}