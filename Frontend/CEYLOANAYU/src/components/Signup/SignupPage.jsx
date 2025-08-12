import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaLeaf } from 'react-icons/fa';
import './Signup.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', formData);
    // Add your signup logic here
  };

  return (
    <div className="signup-container">
      {/* Decorative elements */}
      <div className="ayurveda-background"></div>
      <FaLeaf className="decor-leaf decor-leaf-1" />
      <FaLeaf className="decor-leaf decor-leaf-2" />
      
      <div className="signup-card">
        <div className="signup-header">
          <h2>Begin Your Wellness Journey</h2>
          <p>Create your Ayurvie account to access personalized Ayurvedic guidance</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="terms-agreement">
            <input
              type="checkbox"
              id="terms"
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>

          <div className="login-redirect">
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;