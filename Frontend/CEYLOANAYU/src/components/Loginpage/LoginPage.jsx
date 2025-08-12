import React, { useState } from 'react';
import { FaLeaf, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
    // Add your login logic here
  };

  return (
    <div className="login-container">
      {/* Decorative elements */}
      <div className="ayurveda-pattern"></div>
      <div className="floating-leaves">
        <FaLeaf className="leaf leaf-1" />
        <FaLeaf className="leaf leaf-2" />
        <FaLeaf className="leaf leaf-3" />
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your Ayurveda wellness account</p>
          <div className="divider">
            <span></span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          <div className="signup-link">
            New to Ayurvie? <a href="/signup">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;