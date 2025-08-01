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

      {/* Added content from image exactly as shown */}
      <div className="good-to-know-section">
        <h2>Good to Know</h2>
        <p>
          The rush of surfing your first wave will be a core memory that you will take back with you!
        </p>
        <p>
          The experience provides valuable employment for the local community.
        </p>
        
        <div className="divider"></div>
        
        <div className="details-section">
          <h3>TYPE</h3>
          <p>Sports</p>
          
          <h3>DURATION</h3>
          <p>Approx. 1 hour.</p>
          
          <h3>DIFFICULTY</h3>
          <p>For beginners</p>
          
          <h3>WHAT TO WEAR</h3>
          <p>Bring your own rash guard if available, we recommend reef safe sunscreen.</p>
          
          <h3>INCLUDES</h3>
          <p>Instructor, rash guard, board & transport to location.</p>
        </div>
      </div>
    </div>
  );
};

export default SurfingWeligama;