import React from "react";
import "./SpecialTreatments.css";
import mandala from "../../assets/mandala.png"; // Keep your local mandala

// Direct web URLs for treatment images (replace with your actual URLs)
const IMAGE_URLS = {
  weightLoss: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  detox: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400&h=300&fit=crop",
  rejuvenation: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
  psychotherapy: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
  hormonal: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
  hair: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=400&h=300&fit=crop",
  facial: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
  maniPedi: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop"
};

const specialTreatments = [
  {
    title: "Weight Loss Programs",
    description: "Personalized Ayurvedic solutions for healthy weight management through diet, herbs, and lifestyle modifications.",
    image: IMAGE_URLS.weightLoss,
    icon: "⚖️"
  },
  {
    title: "Detox & Immune Boosting",
    description: "Cleansing therapies to detoxify the body and strengthen the immune system using natural herbs.",
    image: IMAGE_URLS.detox,
    icon: "🌿"
  },
  {
    title: "Ayurveda Rejuvenation & Anti-Aging",
    description: "Revitalizing therapies for youthfulness, vitality, and slowing the aging process naturally.",
    image: IMAGE_URLS.rejuvenation,
    icon: "✨"
  },
];

const mindBodyTherapies = [
  {
    title: "Psychotherapy",
    description: "Holistic mental wellness approaches integrating meditation, yoga, and Ayurvedic counseling.",
    image: IMAGE_URLS.psychotherapy,
    icon: "🧠"
  },
  {
    title: "Hormonal Imbalance",
    description: "Ayurvedic solutions to restore hormonal balance through specialized herbs and therapies.",
    image: IMAGE_URLS.hormonal,
    icon: "⚖️"
  },
  {
    title: "Stress Management",
    description: "Comprehensive programs to reduce stress and promote mental clarity.",
    image: IMAGE_URLS.detox, // Reusing detox image or find a stress-specific one
    icon: "☮️"
  },
];

const beautyCulture = [
  {
    title: "Herbal Hair Care",
    description: "Natural Ayurvedic treatments using herbal oils and packs for healthy hair.",
    image: IMAGE_URLS.hair,
    icon: "💆"
  },
  {
    title: "Herbal Facials",
    description: "Rejuvenating herbal skincare treatments for radiant, glowing skin.",
    image: IMAGE_URLS.facial,
    icon: "🌸"
  },
  {
    title: "Herbal Mani & Pedi",
    description: "Ayurvedic manicures and pedicures using herbal pastes and oils.",
    image: IMAGE_URLS.maniPedi,
    icon: "💅"
  },
];

export default function SpecialTreatments() {
  return (
    <section className="st-page">
      {/* HERO */}
      <div className="st-hero">
        <h1 className="st-hero-title">Special Treatments</h1>
        <p className="st-hero-subtitle">Experience the Healing Power of Ayurveda</p>

        <div className="st-hero-divider">
          <span className="st-line"></span>
          <span className="st-mandala">
            <img src={mandala} alt="Mandala Ornament" />
          </span>
          <span className="st-line"></span>
        </div>
        
        <p className="st-hero-description">
          Discover our specialized Ayurvedic treatments combining ancient wisdom with modern understanding.
        </p>
      </div>

      {/* TOP CARDS */}
      <div className="st-grid">
        {specialTreatments.map((item, idx) => (
          <div className="st-card" key={idx}>
            <img src={item.image} alt={item.title} className="st-card-image" />
            <div className="st-card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="st-learn-more">Learn More →</button>
          </div>
        ))}
      </div>

      {/* MIND & BODY THERAPIES */}
      <h2 className="st-section-title">Mind & Body Therapies</h2>
      <div className="st-circle-grid">
        {mindBodyTherapies.map((item, idx) => (
          <div className="st-circle-card" key={idx}>
            <img src={item.image} alt={item.title} className="st-circle-image" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* AYURVEDA BEAUTY CULTURE */}
      <h2 className="st-section-title">Ayurveda Beauty Culture</h2>
      <div className="st-grid">
        {beautyCulture.map((item, idx) => (
          <div className="st-card" key={idx}>
            <img src={item.image} alt={item.title} className="st-card-image" />
            <div className="st-card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="st-learn-more">Learn More →</button>
          </div>
        ))}
      </div>

      <div className="st-cta">
        <button className="st-cta-button">Book a Consultation</button>
      </div>
    </section>
  );
}