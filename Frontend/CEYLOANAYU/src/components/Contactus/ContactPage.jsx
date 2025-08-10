import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLeaf, FaSpa } from 'react-icons/fa';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hotel: '',
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
  };

  return (
    <div className="contact-page">
      {/* Background decorative elements */}
      <div className="background-pattern"></div>
      <div className="floating-leaves">
        <div className="leaf leaf-1"><FaLeaf /></div>
        <div className="leaf leaf-2"><FaLeaf /></div>
        <div className="leaf leaf-3"><FaLeaf /></div>
        <div className="leaf leaf-4"><FaLeaf /></div>
      </div>
      
      <div className="contact-hero">
        <div className="hero-content">
          <div className="spa-icon"><FaSpa /></div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-form-container">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p className="form-description">At Ayurvie Hikkaduwa, feel free to reach out to us for bookings, comments, or queries. We are here to assist you before your Ayurvedic retreat with us begins.</p>
            <div className="form-divider"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <select 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="hotel">Hotel *</label>
                <input 
                  type="text" 
                  id="hotel" 
                  name="hotel" 
                  value={formData.hotel} 
                  onChange={handleChange}
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
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>How did you find us? *</label>
              <div className="radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="foundUs" 
                    value="Social media" 
                    checked={formData.foundUs === 'Social media'} 
                    onChange={handleChange}
                    required
                  /> Social media
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="foundUs" 
                    value="Web search" 
                    checked={formData.foundUs === 'Web search'} 
                    onChange={handleChange}
                  /> Web search
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="foundUs" 
                    value="Google ads/ YouTube ads" 
                    checked={formData.foundUs === 'Google ads/ YouTube ads'} 
                    onChange={handleChange}
                  /> Google ads/ YouTube ads
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="foundUs" 
                    value="Friends/ recommendations" 
                    checked={formData.foundUs === 'Friends/ recommendations'} 
                    onChange={handleChange}
                  /> Friends/ recommendations
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="foundUs" 
                    value="Online Travel platforms" 
                    checked={formData.foundUs === 'Online Travel platforms'} 
                    onChange={handleChange}
                  /> Online Travel platforms
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="foundUs" 
                    value="I have already been to Thema" 
                    checked={formData.foundUs === 'I have already been to Thema'} 
                    onChange={handleChange}
                  /> I have already been to Thema
                </label>
              </div>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input 
                  type="checkbox" 
                  name="gdprConsent" 
                  checked={formData.gdprConsent} 
                  onChange={handleChange}
                  required
                />
                <span>GDPR Compliance *</span>
              </label>
              <p className="gdpr-text">
                By giving your confirmation you explicitly give consent for us to store and use this information to service your requests.
                If you do not consent we will not store any personal information and will only send an email with the relevant details in order to service your requests.
              </p>
              <p className="gdpr-confirm">
                I confirm I have read and given consent for the above.
              </p>
            </div>

            <div className="form-footer">
              <p className="required-fields">* Required Fields</p>
              <p className="recaptcha-notice">
                This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
              </p>
              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <div className="button-decoration"></div>
              </button>
              <p className="response-time">We'll respond to your inquiry within 24 hours</p>
            </div>
          </form>

          {/* Contact Information Below Form */}
          <div className="contact-info-below-form">
            <div className="contact-info-header">
              <h3>Our Contact Details</h3>
              <div className="contact-divider"></div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>Ayurvie Weligama, No 212, Sangananda Mawatha, Kapparatota, Weligama, Sri Lanka.</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+94 11 7 386 386</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info.ayurvieweligama@themacollection.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;