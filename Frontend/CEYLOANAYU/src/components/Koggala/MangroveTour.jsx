import React from "react";
import "./MangroveTour.css";
import image1 from "../../assets/download (2).jpg";
import image2 from "../../assets/download (3).jpg";
import image3 from "../../assets/Hope.jpg";

const MangroveTour = () => {
  return (
    <div className="tour-page">
      <header className="page-header">
        <h1>Mangrove, Cinnamon & Village Exploration in Kogalla</h1>
        <p className="tagline">Experience Sri Lanka's Rich Heritage and Flavorful Delights</p>
        <p className="intro">
          Discover cinnamon, mangroves and other cultivations around Koggala Lake. Start by boat and finish by Tuk Tuk whizzing through the village.
        </p>
      </header>

      <div className="content-section">
        <div className="description">
          <p>
            Head off to the beautiful Koggala lake, immortalized by the famous Sri Lankan writer Martin Wickramasinghe by vehicle. Once there, take a scenic boat ride to discover the pristine mangrove ecosystem of the lake and its abundant birdlife. Make your way to the jetty to discover the village of Koggala by a Tuk Tuk, ride through the lush green village and its paddy & cinnamon cultivation. Stop at a cinnamon plantation and discover the process behind its harvesting. Did you know Sri Lanka produces more than 75% of the world's Cinnamon? Finish the experience with a refreshing Cinnamon Tea and Kithul Hakuru (A palmyra-based jaggery). Continue onto a sustainable local farm that grows fresh veggies and fruits like papaya, passion fruit, mango, chili, tomato, and drumsticks – these local ingredients will likely be used for your lunch prepared at a local village mud house where you will get a brief demonstration on how these curries are cooked using traditional methods passed down through generations.
          </p>
        </div>

        <div className="image-gallery">
          <div className="image-container">
            <img src={image1} alt="Mangrove exploration in Koggala" />
          </div>
          <div className="image-container">
            <img src={image2} alt="Cinnamon plantation in Koggala" />
          </div>
          <div className="image-container">
            <img src={image3} alt="Village tour in Koggala" />
          </div>
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
            This experience provides you with a great insight into the rich diversity of cultivations and the environment in the South of Sri Lanka. The cinnamon cultivation will show you how Sri Lanka is still the world's largest exporter of Cinnamon.
          </p>
        </div>

        <div className="details-grid">
          {[
            { title: "TYPE", content: "Wildlife, Cultural & Culinary" },
            { title: "DURATION", content: "Approx. 3 hours" },
            { title: "DIFFICULTY", content: "Easy" },
            { title: "WHAT TO WEAR", content: "Light airy neutral colored clothes, cap & sunglasses." },
            { title: "INCLUDES", content: "Boat trip, local guide, cookery demonstration & lunch." }
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
  );
};

export default MangroveTour;