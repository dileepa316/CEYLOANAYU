import React from 'react';
import './AboutUs.css';
import mandala from '../../assets/mandala.png'; // adjust path as needed

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <div className="about-header">
        <h1>Siddhalepa Ayurveda Hospital</h1>
        <p>A Legacy of Healing and Tradition</p>

        {/* Mandala Divider below header (Get in Touch point) */}
        <div className="st-hero-divider">
          <span className="st-line"></span>
          <span className="st-mandala">
            <img src={mandala} alt="Mandala Ornament" />
          </span>
          <span className="st-line"></span>
        </div>
      </div>

      {/* Main Content - Text Only */}
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Established almost three decades ago, the Siddhalepa Ayurveda Hospital 
          is a pioneer in the field of Hela wedakama Ayurveda. Founded by the 
          Hettigoda family, our leading hospital is dedicated to preserving a 
          3000-year-old practice, offering holistic care for a range of 
          physiological and psychological needs.
        </p>
        <p>
          In addition to consultations with a panel of experts specialising in 
          Hela Ayurveda, our hospital is also equipped with state-of-the-art 
          facilities and modern services. We combine ancient wisdom with 
          contemporary healthcare standards to provide comprehensive treatment 
          and wellness programs that address the root causes of ailments rather 
          than just treating symptoms.
        </p>
        <p>
          Beyond the hospital, the Siddhalepa legacy continues. Our brand 
          currently manages several resorts and centres, both domestic and 
          international. Each property and the hospital are interconnected, 
          sharing a range of ISO-certified products, specialist insight, and 
          200 years of heritage. This integrated approach ensures that our 
          patients and guests receive consistent, high-quality Ayurvedic care 
          across all our establishments.
        </p>
        <p>
          Our commitment extends beyond treatment to education and preservation. 
          We actively work to pass on the knowledge of Hela wedakama Ayurveda to 
          future generations, ensuring that this ancient healing tradition 
          continues to thrive while adapting to modern needs and scientific 
          understanding.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
