import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLeaf } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    foundUs: '',
    gdprConsent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="contact-section">
      {/* Decorative floating leaves */}
      <div className="contact-floating-elements">
        <FaLeaf className="contact-floating-leaf contact-floating-leaf-1" />
        <FaLeaf className="contact-floating-leaf contact-floating-leaf-2" />
        <FaLeaf className="contact-floating-leaf contact-floating-leaf-3" />
      </div>
      
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-divider"></div>
          <p className="contact-subtitle">
            At Ayurvie Hikkaduwa, feel free to reach out to us for bookings, comments, or queries. 
            We are here to assist you before your Ayurvedic retreat with us begins.
          </p>
        </div>

        {/* Form Section */}
        <div className="contact-form-section">
          <div className="form-intro">
            <h3>Get in Touch</h3>
            <p>
              Our team is ready to answer your questions and help you plan your perfect 
              Ayurvedic retreat experience.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <select 
                  id="title" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <input 
                  type="text" 
                  id="country" 
                  name="country" 
                  value={formData.country} 
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label>How did you find us? *</label>
              <div className="radio-group">
                {['Social media', 'Web search', 'Google ads/ YouTube ads', 'Friends/ recommendations', 'Online Travel platforms'].map(option => (
                  <label key={option}>
                    <input 
                      type="radio" 
                      name="foundUs" 
                      value={option} 
                      checked={formData.foundUs === option} 
                      onChange={handleChange}
                      required={option === 'Social media'}
                    /> {option}
                  </label>
                ))}
              </div>
            </div>

            {/* GDPR Compliance Section */}
            <div className="gdpr-compliance-section">
              <h4 className="gdpr-title">GDPR COMPLIANCE *</h4>
              <p className="gdpr-text">
                By giving your confirmation you explicitly give consent for us to store and use this information to service your requests.
              </p>
              <p className="gdpr-text">
                If you do not consent we will not store any personal information and will only send an email with the relevant details in order to service your requests.
              </p>
              <div className="gdpr-checkbox-container">
                <input 
                  type="checkbox" 
                  id="gdprConsent" 
                  name="gdprConsent" 
                  checked={formData.gdprConsent} 
                  onChange={handleChange}
                  required
                  className="gdpr-checkbox"
                />
                <label htmlFor="gdprConsent" className="gdpr-label">
                  I confirm I have read and given consent for the above.
                </label>
              </div>
            </div>

            {/* Updated reCAPTCHA Notice with Links */}
            <div className="recaptcha-notice">
              This site is protected by reCAPTCHA and the 
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="recaptcha-link"
              >
                Google Privacy Policy
              </a> and 
              <a 
                href="https://policies.google.com/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="recaptcha-link"
              >
                Terms of Service
              </a> apply.
            </div>

            <button type="submit" className="submit-btn">
              SUBMIT <FiArrowRight />
            </button>
            <p className="response-time">We'll respond to your inquiry within 24 hours</p>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info-section">
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4>Our Location</h4>
                <p>
                  Ayurvie Weligama,<br />
                  NO 212, Sangananda Mawatha,<br />
                  Kapparatota, Weligama,<br />
                  Sri Lanka
                </p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+94 117 386 386</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@ceylonayu.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;