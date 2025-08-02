import React from "react";
import "./WhaleWatching.css";
import image1 from "../../assets/mirissa1.jpg";
import image2 from "../../assets/mirissa2.jpg";
import image3 from "../../assets/mirissa3.jpg";

const WhaleWatching = () => {
  return (
    <div className="whale-watching-container">
      <header className="page-header">
        <h1>A morning on the ocean on a catamaran to see Whales</h1>
        <p className="tagline">A day out on a catamaran with whales</p>
        <p className="intro">
          Set sail from Mirissa port at 6:30 am for an extraordinary whale-watching adventure aboard a shared catamaran.
        </p>
      </header>

      <div className="content-section">
        <div className="description">
          <p>
            This maritime journey offers a chance to see the majestic blue whale, the largest mammal on Earth, along with Bryde's whales, pilot whales, sperm whales, and playful dolphins. While nature dictates sightings, the excursion is designed to maximize your chances of witnessing these awe-inspiring creatures. Enjoy a freshly prepared breakfast onboard, with opportunities to view whales from the bow and upper decks. After the whale encounter, the voyage continues to Weligama Bay, anchoring near Snake and Taprobane islands. Here, in this picturesque setting, guests can indulge in swimming, snorkeling, and paddleboarding, complemented by a delightful lunch. Remember, departures are subject to favorable conditions, ensuring a safe and memorable experience in the heart of nature's grandeur.
          </p>
        </div>

        <div className="image-gallery">
          <div className="image-container">
            <img src={image1} alt="Whale watching catamaran" />
          </div>
          <div className="image-container">
            <img src={image2} alt="Whale sighting" />
          </div>
          <div className="image-container">
            <img src={image3} alt="Catamaran deck" />
          </div>
        </div>

        <div className="interactive-section">
          <div className="good-to-know glass-card">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              Good to Know
              <span className="title-decoration"></span>
            </h2>
            <p className="glow-text">
              You need to leave at 6.00 a.m. from the Bungalow, as you need to drive to the start point.
              We recommend this trip over the standard whale watching trip for a more exclusive experience.
              The shared cruise requires a minimum of 4 passengers. If less than 4, you may have to rebook, pay a supplement or get a refund.
              If you get seasick, please check with our team before booking the excursion.
            </p>
          </div>

          <div className="details-grid">
            {[
              { title: "TYPE", content: "Marine" },
              { title: "DURATION", content: "Approx. 7 hours" },
              { title: "DIFFICULTY", content: "Easy" },
              { title: "WHAT TO WEAR", content: "Light airy clothes, cap & sunglasses" },
              { title: "INCLUDES", content: "Snack, lunch & transport" }
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

export default WhaleWatching;