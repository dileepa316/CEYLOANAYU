import React from 'react';
import './AyurvedaWellness.css';

const AyurvedaWellness = () => {
  return (
    <div className="ayurveda-wellness-container">
      {/* Original Content */}
      <h1 className="ayurveda-title">Ayurveda Wellness & Spa Treatments</h1>
      <p className="ayurveda-subtitle">Revitalize Your Mind, Body, and Soul with Ayurvedic Healing.</p>
      <div className="divider-line"></div>
      <p className="ayurveda-description">
        Nestled along the serene shores of Weligama, Ayurvie Weligama stands as a luxurious Sri Lankan Ayurveda resort, distinguished among the many retreats in the country for its commitment to traditional Ayurvedic principles and Vastu Vidya (Vedic architecture), ensuring a holistic wellness experience for every guest.
      </p>
      
      {/* Additional Content */}
      <h1 className="ayurveda-title">Ayurveda Concept</h1>
      <p className="ayurveda-subtitle">A Journey of Wellness Rooted in Ancient Sri Lankan Ayurveda</p>
      
      <div className="divider-line"></div>
      
      <div className="flower-icon">🌸</div>
      
      <p className="ayurveda-description">
        Begin a transformative wellness journey at Ayurvie Weligama, where the essence of Ayurvedic healing meets modern luxury. Our treatments, primarily focused on Panchakarma—a comprehensive detoxifying therapy—are rooted in centuries-old Sri Lankan Ayurvedic traditions.
      </p>
      
      <p className="ayurveda-description">
        These 3,000-year-old practices passed down through generations, are carefully administered by expert specialists to balance the 'doshas' (body imbalances) and restore harmony. Inspired by Sri Lanka's rich medical heritage, Ayurvie Weligama blends ancient wisdom with an eco-friendly ambiance, offering a truly unique retreat experience.
      </p>
      
      <p className="ayurveda-description">
        The architecture of the hotel blends with traditional Vedic and contemporary design, ensuring comfort and tranquility. Offering stunning views of the Indian Ocean, Ayurvie Weligama guarantees a wholesome wellness experience for guests.
      </p>
      
      <div className="contact-section">
        <h3 className="contact-heading">Write to us for a doctor consultation:</h3>
        <p className="contact-email">info.ayurvieweligama@themacollection.com</p>
        <p className="contact-whatsapp">Contact on WhatsApp: +94770041396</p>
      </div>
    </div>
  );
};

export default AyurvedaWellness;