import React from "react";
import "./GalleFort.css";
import galleMain from "../../assets/Galle.jpg";
import galle1 from "../../assets/Galle1.jpg";
import galle2 from "../../assets/Galle2.jpg";

const GalleFort = () => {
  return (
    <div className="galle-fort-container">
      {/* Floating Navigation Indicator */}
      <div className="scroll-indicator"></div>

      {/* Animated Header */}
      <header className="galle-header">
        <h1 className="title-gradient">Discover the Dutch Fort in Galle</h1>
        <h2 className="subtitle-motion">
          <span className="word-motion">Discover</span>
          <span className="word-motion">the secrets</span>
          <span className="word-motion">of Galle Fort</span>
        </h2>
      </header>

      {/* Parallax Image Gallery */}
      <div className="parallax-gallery">
        <div className="main-parallax" style={{ backgroundImage: `url(${galleMain})` }}>
          <div className="image-overlay"></div>
        </div>
        <div className="secondary-images">
          <div className="secondary-parallax" style={{ backgroundImage: `url(${galle1})` }}></div>
          <div className="secondary-parallax" style={{ backgroundImage: `url(${galle2})` }}></div>
        </div>
      </div>

      {/* Glass Morphism Description */}
      <div className="glass-card description-section">
        <div className="content-reveal">
          <p>
            Experience Galle Fort's wonders with a local English-speaking guide, 
            intimately acquainted with its hidden gems and captivating history. 
            Ideal for those seeking an in-depth exploration, this tour delves into 
            the heart of Galle Fort, a shining example of pristine colonial architecture 
            and one of the globe's most immaculately preserved forts.
          </p>
        </div>
      </div>

      {/* Interactive Details Section */}
      <div className="interactive-section">
        <div className="good-to-know glass-card">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Good to Know
            <span className="title-decoration"></span>
          </h2>
          <p className="glow-text">
            Lovers of architecture will really enjoy the Dutch architecture of the buildings in the fort.
            We recommend walking the ramparts at sunset for the best views!
          </p>
        </div>

        <div className="details-grid">
          {[
            { title: "TYPE", content: "Approx. 4 hours" },
            { title: "DURATION", content: "Approx. 4 hours" },
            { title: "DIFFICULTY", content: "Easy" },
            { title: "WHAT TO WEAR", content: "Light airy clothes, cap & sunglasses" },
            { title: "INCLUDES", content: "Experienced guide & transport" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="detail-card"
              style={{ '--delay': index * 0.1 + 's' }}
            >
              <div className="card-inner">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating CTA */}
      <div className="floating-cta">
        <button className="neon-button">
          Book Your Experience
          <span className="hover-effect"></span>
        </button>
      </div>
    </div>
  );
};

export default GalleFort;