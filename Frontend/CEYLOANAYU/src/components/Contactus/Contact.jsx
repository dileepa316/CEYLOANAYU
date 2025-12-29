import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import '../Home.css'; // reuse header/footer styles
import mandala from "../../assets/mandala.png";
import logo from "../../assets/image1.jpg";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    gdprConsent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been submitted.');
    setFormData({
      title: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      service: '',
      message: '',
      gdprConsent: false
    });
  };

  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img 
                  src={logo} 
                  alt="Ceylon Ayu Medical Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              <div className="footer-logo-text">
                <h3>CEYLON AYU MEDICLE</h3>
                <p className="tagline">Traditional Ayurveda healing with modern medical care.</p>
              </div>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Ceylon Ayu Medical, Hikkaduwa, Thiranagama, Sri Lanka</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+94 77 182 2396</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>info@ceylonayumedical.com</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#about">About Us</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">OPD Services</a></li>
              <li><a href="#services">Panchakarma</a></li>
              <li><a href="#services">Yoga Therapy</a></li>
              <li><a href="#services">Herbal Pharmacy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ceylon Ayu Medical. All rights reserved.</p>
          <div className="footer-social">
            <span className="follow-label">Follow us:</span>
            <a className="social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a className="social-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a className="social-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a className="social-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <>
      {/* Main Header (same as home) */}
      <header className="main-header">
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <div className="logo-icon">
              <img src={logo} alt="Ceylon Ayu Medical Logo" />
            </div>
            <div className="logo-text">
              <h1>CEYLON AYU MEDICLE</h1>
              <span>Traditional Healing, Modern Care</span>
            </div>
          </Link>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services & Facilities</a></li>
              <li><a href="#opd" onClick={() => setIsMenuOpen(false)}>OPD</a></li>
              <li><a href="#treatments" onClick={() => setIsMenuOpen(false)}>Treatments</a></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
              Our Services
            </button>
          </div>
        </div>
      </header>

      {/* TOP HERO / INTRO */}
      <section className="contact-top-hero" aria-labelledby="contact-hero-title">
        <div className="contact-top-inner">
          <div className="contact-top-label">CONTACT US</div>
          <h1 id="contact-hero-title">Get In Touch</h1>

          <div className="contact-mandala-divider">
            <span className="mandala-line"></span>
            <span className="mandala-center">
              <img src={mandala} alt="Mandala Ornament" />
            </span>
            <span className="mandala-line"></span>
          </div>

          <p className="contact-top-lead">
            Get In Touch — Have any questions? Feel free to contact the Siddhalepa Hospital for a range of inquiries, from making appointments with one of our experienced consultants to exploring our in-house specialist clinics and resident facilities.
          </p>
        </div>
      </section>

      <div className="contact-wrapper">
        {/* LEFT SIDEBAR - Contact Details Box */}
        <div className="contact-info">
          <div>
            <h4>Address</h4>
            <p>
              Ceylon Ayu Medical, Hikkaduwa, Thiranagama, Sri Lanka.
            </p>
          </div>

          <div className="divider" />

          <div>
            <h4>Phone Number</h4>
            <p>+94 77 182 2396</p>
          </div>

          <div className="divider" />

          <div>
            <h4>Email</h4>
            <p>info@ceylonayumedical.com</p>
          </div>

          <div className="divider" />

          <div>
            <h4>Fax</h4>
            <p>+94 11 273 5465</p>
          </div>

          <div className="divider" />

          <div>
            <h4>Social Media</h4>
            <div className="social-icons">
              <span>f</span>
              <span>◎</span>
              <span>▶</span>
            </div>
          </div>

          <div className="contact-details-box" aria-hidden="false">
            <p>
              Ceylon Ayu Medical, Hikkaduwa - +94 77 182 2396 - Fax: +94 11 273 5465 - Facebook/Instagram/YouTube - info@ceylonayumedical.com
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h2>Please Include the Following Details</h2>

          <form onSubmit={handleSubmit}>
            {/* Title, First Name, Last Name */}
            <div className="form-row">
              <div>
                <label htmlFor="title" className="required">Title</label>
                <select 
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
                </select>
              </div>

              <div>
                <label htmlFor="firstName" className="required">First Name</label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="required">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Phone and Email */}
            <div className="form-row">
              <div>
                <label htmlFor="phone" className="required">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+94 11 273 8622"
                />
              </div>

              <div>
                <label htmlFor="email" className="required">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hospital@siddhalepa.com"
                />
              </div>
            </div>

            {/* Services */}
            <div className="form-row single">
              <div>
                <label htmlFor="service" className="required">Services</label>
                <select 
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select a service</option>
                  <option value="Ayurvedic Consultation">Ayurvedic Consultation</option>
                  <option value="Panchakarma Therapy">Panchakarma Therapy</option>
                  <option value="In-patient Treatment">In-patient Treatment</option>
                  <option value="Wellness Programs">Wellness Programs</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="form-row single">
              <div>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your requirements or questions..."
                />
              </div>
            </div>

            {/* GDPR Compliance */}
            <div className="gdpr">
              <strong>GDPR Compliance</strong>
              <p>
                By giving your confirmation you explicitly give consent for us to store
                and use this information to service your requests.
              </p>
              <label className="checkbox">
                <input 
                  type="checkbox" 
                  name="gdprConsent"
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  required
                />
                <span>I confirm I have read and given consent for the above.</span>
              </label>
              <small>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms
                of Service apply.
              </small>
              <small className="required-note">* Required Fields</small>
            </div>

            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Footer (same style as home) */}
      <Footer />
    </>
  );
};

export default Contact;
