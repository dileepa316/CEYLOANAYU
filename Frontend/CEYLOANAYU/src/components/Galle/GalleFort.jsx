import React from "react";
import "./GalleFort.css";
import galleMain from "../../assets/Galle.jpg";
import galle1 from "../../assets/Galle1.jpg";
import galle2 from "../../assets/Galle2.jpg";

const GalleFort = () => {
  return (
    <div className="galle-fort-container">
      {/* Animated Header */}
      <header className="page-header">
        <h1>Discover the Dutch Fort in Galle</h1>
        <p className="tagline">A Historical Gem in Sri Lanka</p>
        <p className="intro">
          Step back in time as you explore this UNESCO World Heritage Site with its 
          colonial architecture and fascinating history.
        </p>
      </header>

      <div className="content-section">
        {/* Description */}
        <div className="description">
          <p>
            Experience Galle Fort's wonders with a local English-speaking guide, 
            intimately acquainted with its hidden gems and captivating history. 
            Ideal for those seeking an in-depth exploration, this tour delves into 
            the heart of Galle Fort, a shining example of pristine colonial architecture 
            and one of the globe's most immaculately preserved forts.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="image-container">
            <img src={galleMain} alt="Main view of Galle Fort" />
          </div>
          <div className="image-container">
            <img src={galle1} alt="Street view in Galle Fort" />
          </div>
          <div className="image-container">
            <img src={galle2} alt="Historic buildings in Galle Fort" />
          </div>
        </div>

        {/* Good to Know Section */}
        <div className="description">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Good to Know
            <span className="title-decoration"></span>
          </h2>
          <p className="glow-text">
            Lovers of architecture will really enjoy the Dutch architecture of the buildings in the fort.
            We recommend walking the ramparts at sunset for the best views!
          </p>

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
      </div>
    </div>
  );
};

export default GalleFort;