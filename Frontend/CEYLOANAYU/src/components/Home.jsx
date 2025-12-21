import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleBookingChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully! We will contact you soon.");
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  const handleConsultationClick = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "OPD Services",
      description: "Outpatient Department services with experienced Ayurveda physicians",
      icon: "🏥",
    },
    {
      title: "Special Clinics",
      description: "Specialized treatment clinics for various health conditions",
      icon: "🎯",
    },
    {
      title: "Panchakarma Therapy",
      description: "Complete detoxification and rejuvenation treatments",
      icon: "🛁",
    },
    {
      title: "Herbal Pharmacy",
      description: "100% natural herbal medicines and preparations",
      icon: "🌿",
    },
    {
      title: "Yoga & Meditation",
      description: "Therapeutic yoga sessions and meditation classes",
      icon: "🧘",
    },
    {
      title: "Diet & Nutrition",
      description: "Personalized Ayurvedic diet plans and counseling",
      icon: "🥗",
    },
  ];

  const facilities = [
    {
      title: "Modern Treatment Rooms",
      description: "Equipped with traditional and modern amenities",
    },
    {
      title: "Herbal Garden",
      description: "Our own medicinal plant garden",
    },
    {
      title: "Accommodation",
      description: "Comfortable stay facilities for patients",
    },
    {
      title: "Laboratory",
      description: "Modern diagnostic facilities",
    },
    {
      title: "Pharmacy",
      description: "In-house Ayurvedic pharmacy",
    },
    {
      title: "Consultation Rooms",
      description: "Private consultation spaces",
    },
  ];

  const treatments = [
    "Abhyangam (Oil Massage)",
    "Shirodhara",
    "Pizhichil",
    "Kizhi",
    "Nasya",
    "Vasti",
    "Raktamokshana",
    "Swedana",
  ];

  // Footer Component - Integrated directly
  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ceylon Ayu Medical</h3>
            <p>Traditional Ayurveda healing with modern medical care.</p>
            <div className="footer-contact">
              <p>📍 Ceylon Ayu Medical, Hikkaduwa, Thiranagama, Sri Lanka</p>
              <p>📞 0771822396</p>
              <p>📧 info@ceylonayumedical.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#booking">Book Appointment</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">OPD Services</a></li>
              <li><a href="#">Panchakarma</a></li>
              <li><a href="#">Yoga Therapy</a></li>
              <li><a href="#">Herbal Pharmacy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Opening Hours</h4>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 8:00 AM - 1:00 PM</p>
            <p>Sunday: Emergency Only</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ceylon Ayu Medical. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">▶️</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="home-root">
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="contact-info">
            <span>📍 Ceylon Ayu Medical, Hikkaduwa, Thiranagama, Sri Lanka</span>
            <span>📞 0771822396</span>
            <span>📧 info@ceylonayumedical.com</span>
          </div>
          <div className="social-icons">
            <a href="#" title="Facebook">
              📘
            </a>
            <a href="#" title="Instagram">
              📷
            </a>
            <a href="#" title="YouTube">
              ▶️
            </a>
            <a href="#" title="Twitter">
              🐦
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">CAM</div>
            <div className="logo-text">
              <h1>Ceylon Ayu Medical</h1>
              <span>Traditional Healing, Modern Care</span>
            </div>
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>
                  Services & Facilities
                </a>
              </li>
              <li>
                <a href="#opd" onClick={() => setIsMenuOpen(false)}>
                  OPD
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={() => setIsMenuOpen(false)}>
                  Treatments
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={handleConsultationClick}>
              Online Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Experience Authentic Ayurveda Healing</h1>
          <p>
            At Ceylon Ayu Medical, we blend ancient Ayurvedic wisdom with modern
            healthcare practices to provide holistic healing for mind, body, and
            soul.
          </p>
          <div className="hero-buttons">
            <a href="#booking" className="btn btn-primary">
              Book Appointment
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Ceylon Ayu Medical?</h2>
            <p>
              Experience the perfect blend of traditional Ayurveda and modern
              healthcare facilities
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h3>Expert Physicians</h3>
              <p>Qualified Ayurveda doctors with decades of experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>100% Natural</h3>
              <p>Pure herbal medicines from our own garden</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>Modern Facilities</h3>
              <p>State-of-the-art treatment facilities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Care</h3>
              <p>Customized treatment plans for each individual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services & Facilities</h2>
            <p>Comprehensive Ayurvedic healthcare services for complete wellness</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <span>{service.icon}</span>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#" className="btn btn-outline">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="features">
        <div className="container">
          <div className="section-title">
            <h2>Our Facilities</h2>
            <p>Modern amenities for traditional healing</p>
          </div>
          <div className="features-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="feature-card">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Specialized Treatments</h2>
            <p>Traditional Ayurvedic therapies for various health conditions</p>
          </div>
          <div className="treatments-list">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "var(--white)",
                    padding: "1rem",
                    borderRadius: "4px",
                    boxShadow: "var(--shadow-sm)",
                    borderLeft: "4px solid var(--primary-green)",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--primary-dark)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {treatment}
                  </h4>
                  <a
                    href="#"
                    style={{
                      color: "var(--primary-green)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      <section id="booking" className="booking">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "var(--white)" }}>Online Consultation & Booking</h2>
            <p style={{ color: "rgba(255,255,255,0.9)" }}>
              Book your appointment or online consultation with our experts
            </p>
          </div>

          <form className="booking-form" onSubmit={handleBookingSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={bookingForm.name}
                onChange={handleBookingChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={bookingForm.email}
                onChange={handleBookingChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={bookingForm.phone}
                onChange={handleBookingChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Select Service</label>
              <select
                id="service"
                name="service"
                value={bookingForm.service}
                onChange={handleBookingChange}
                required
              >
                <option value="">Choose a service</option>
                <option value="consultation">Online Consultation</option>
                <option value="opd">OPD Visit</option>
                <option value="panchakarma">Panchakarma Therapy</option>
                <option value="yoga">Yoga Therapy</option>
                <option value="other">Other Treatment</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={bookingForm.date}
                onChange={handleBookingChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={bookingForm.message}
                onChange={handleBookingChange}
                rows="4"
                placeholder="Describe your health condition or any special requirements"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Book Appointment Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer - Now using the integrated Footer component */}
      <Footer />
    </div>
  );
};

export default Home;