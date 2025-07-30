import React, { useState } from "react";
import "./loginform.css";
import loginImage from "../../assets/login.jpg"; // <-- Corrected path

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
  };

  return (
    <div className="login-container">
      {/* Background Image */}
      <img src={loginImage} alt="Login Background" className="login-background" />

      {/* Glassmorphism Form */}
      <div className="login-glassmorphism">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to continue</p>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login-button">
            <span>Login</span>
            <div className="button-hover-effect"></div>
          </button>

          <p className="login-footer">
            Don't have an account? <a className="signup-link" href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

