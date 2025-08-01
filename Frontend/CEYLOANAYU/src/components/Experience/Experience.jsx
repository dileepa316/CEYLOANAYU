import React from "react";
import { motion } from "framer-motion";
import './Experience.css';

const experiences = [
  {
    title: "Surfing in Weligama",
    image: "/assets/Weligama.jpeg",
    description: "Ride the perfect waves with our expert instructors in one of Sri Lanka's best surf spots",
    cta: "FIND OUT MORE"
  },
  {
    title: "Mangrove & Cinnamon Exploration",
    image: "/assets/MAdu.jpg",
    description: "Discover the tranquil river ecosystems and ancient cinnamon plantations",
    cta: "FIND OUT MORE"
  },
  {
    title: "Dutch Fort in Galle",
    image: "/assets/Galle.jpg",
    description: "Walk through 400 years of history with our knowledgeable local guides",
    cta: "FIND OUT MORE"
  },
  {
    title: "Hikkaduwa Beach Escape",
    image: "/assets/Hikkaduwa.jpg",
    description: "Relax on pristine sands and snorkel in crystal clear waters",
    cta: "FIND OUT MORE"
  },
  {
    title: "Whale Watching in Mirissa",
    image: "/assets/Mirissa.jpg",
    description: "Witness majestic blue whales on our eco-friendly boat tours",
    cta: "FIND OUT MORE"
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Experience = () => {
  return (
    <div className="experience-container">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="experience-header"
      >
        <h2 className="section-title">Curated Experiences</h2>
        <p className="section-subtitle">Immerse yourself in authentic Sri Lankan adventures</p>
        <div className="divider"></div>
      </motion.div>

      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="card-image-container">
              <img 
                src={experience.image} 
                alt={experience.title} 
                className="card-image"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/placeholder.jpg"; // fallback image
                  console.error(`Image not found: ${experience.image}`);
                }}
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="card-content">
              <h3 className="card-title">{experience.title}</h3>
              <p className="card-description">{experience.description}</p>
              
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {experience.cta}
                <svg className="arrow-icon" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;