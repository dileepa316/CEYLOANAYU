import React from "react";
import "./AyurvedaWellness.css";
import stayImage from "../../assets/CWI7296.avif"; // make sure this path is correct

const AyurvedaWellness = () => {
  return (
    <div className="ayurveda-wellness-container">
      {/* Wellness & Spa Treatments Section */}
      <div className="wellness-section">
        <div className="wellness-header">
          <h1 className="wellness-title">Ayurveda Wellness & Spa Treatments</h1>
          <p className="wellness-subtitle">
            Revitalize Your Mind, Body, and Soul with Ayurvedic Healing.
          </p>
          <div className="gold-divider"></div>
        </div>

        <p className="wellness-description">
          Nestled along the serene shores of Weligama, Ayurvie Weligama stands
          as a luxurious Sri Lankan Ayurveda resort, distinguished among the
          many retreats in the country for its commitment to traditional
          Ayurvedic principles and Vastu Vidya (Vedic architecture), ensuring a
          holistic wellness experience for every guest.
        </p>
      </div>

      {/* Ayurveda Concept Section */}
      <div className="concept-section">
        <div className="concept-header">
          <h1 className="concept-title">Ayurveda Concept</h1>
          <p className="concept-subtitle">
            A Journey of Wellness Rooted in Ancient Sri Lankan Ayurveda
          </p>
          <div className="leaf-divider">
            <div className="leaf-icon">🍃</div>
          </div>
        </div>

        <div className="concept-content">
          <p className="concept-description">
            Begin a transformative wellness journey at Ayurvie Weligama, where
            the essence of Ayurvedic healing meets modern luxury. Our
            treatments, primarily focused on Panchakarma—a comprehensive
            detoxifying therapy—are rooted in centuries-old Sri Lankan Ayurvedic
            traditions.
          </p>

          <p className="concept-description">
            These 3,000-year-old practices passed down through generations, are
            carefully administered by expert specialists to balance the 'doshas'
            (body imbalances) and restore harmony. Inspired by Sri Lanka's rich
            medical heritage, Ayurvie Weligama blends ancient wisdom with an
            eco-friendly ambiance, offering a truly unique retreat experience.
          </p>

          <p className="concept-description">
            The architecture of the hotel blends with traditional Vedic and
            contemporary design, ensuring comfort and tranquility. Offering
            stunning views of the Indian Ocean, Ayurvie Weligama guarantees a
            wholesome wellness experience for guests.
          </p>
        </div>
      </div>

      {/* Your Stay Section with Image */}
      <div className="stay-section">
        <div className="stay-header">
          <h1 className="stay-title">Your Stay at Ayurvie Weligama</h1>
          <div className="lotus-divider">
            <div className="lotus-icon">🌸</div>
          </div>
        </div>

        <div className="stay-image-container">
          <img
            src={stayImage}
            alt="Ayurvie Weligama resort"
            className="stay-image"
          />
        </div>

        <div className="stay-content">
          <p className="stay-description">
            At Ayurvie Weligama, we embrace each individual's uniqueness,
            offering personalized wellness treatments to restore harmony and
            balance the doshas. Our expert doctors conduct one-on-one
            consultations to identify primary and secondary doshas—Vata, Pitta,
            or Kapha—guiding tailored therapies for holistic healing.
          </p>

          <h3 className="stay-subheading">
            Your stay at Ayurvie with an all-inclusive meal plan will comprise
            of:
          </h3>

          <ul className="stay-benefits">
            <li>Daily sunrise and sunset yoga and meditation</li>
            <li>Complementary experiences unique to 'Ayurvie'</li>
            <li>
              Consultations with our Ayurvedic Doctors at the start, end and a
              minimum every 3 days (approx.) in between
            </li>
            <li>
              Daily Ayurvedic vegetarian meals prepared specially to suit your
              dosha type
            </li>
            <li>Herbal Teas and Juices to suit your dosha type</li>
            <li>Daily 2 hours (approximately) Ayurvedic treatment</li>
            <li>Free Ayurvedic medication prescribed by the doctors</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3 className="contact-heading">Write to us for a doctor consultation:</h3>
        <p className="contact-email">
          info.ayurvieweligama@themacollection.com
        </p>
        <p className="contact-whatsapp">Contact on WhatsApp: +94770041396</p>
      </div>
    </div>
  );
};

export default AyurvedaWellness;
