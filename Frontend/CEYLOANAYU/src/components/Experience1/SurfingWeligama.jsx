import React from "react";
import "./SurfingWeligama.css";
import experience1 from "../../assets/Experience1.jpg";
import surf1 from "../../assets/surfying1.jpg"; 
import surf2 from "../../assets/surfying2.jpg";

const SurfingWeligama = () => {
  return (
    <div className="surfing-page">
      <header className="page-header">
        <h1>Surfing in Weligama</h1>
        <p className="tagline">Surfs Up Dude!</p>
        <p className="intro">
          Embark on an exhilarating aquatic adventure with private surf lessons in Weligama, Sri Lanka.
        </p>
      </header>

      <div className="content-section">
        <div className="description">
          <p>
            Nestled along the sun-kissed shores, this coastal town is renowned for its beginner-friendly waves,
            making it an ideal destination for those eager to ride the surf. Your day begins with expert instructors
            guiding you through the fundamentals on the golden beaches, ensuring a safe and enjoyable experience.
            You will be provided with a local instructor who will give you and your fellow travelers a quick
            practical lesson before taking you into the water to catch your first wave. Lessons are private and
            grouped only within your travel party, ensuring personalized attention. For experienced surfers, our
            team can organize advanced lessons or suggest more challenging breaks along the southern coast,
            catering to every skill level.
          </p>
        </div>

        <div className="image-gallery">
          <div className="image-container">
            <img src={experience1} alt="Surfing experience in Weligama" />
          </div>
          <div className="image-container">
            <img src={surf1} alt="Surfing in Weligama waves" />
          </div>
          <div className="image-container">
            <img src={surf2} alt="Surfing lessons in Weligama" />
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
    </div>
  );
};

export default SurfingWeligama;