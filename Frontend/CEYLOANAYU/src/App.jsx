// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Page / component imports */
import Home from "./components/Home";
import LoginPage from "./components/Loginpage/LoginPage";
import SignupPage from "./components/Signup/SignupPage";
import Experience from "./components/Experience/Experience";
import GalleFort from "./components/Galle/GalleFort";
import MangroveTour from "./components/Koggala/MangroveTour";
import WhaleWatching from "./components/mirissa/WhaleWatching";
import ContactPage from "./components/Contactus/ContactPage";
import AyurvedaWellness from "./components/AyurvedaWellness/AyurvedaWellness";
import AyurvedaBookingPage from "./components/AyurvedaBookingPage/AyurvedaBookingPage";



/* Global CSS */
import "./index.css";
import "./components/Loginpage/Login.css";
import "./components/Signup/Signup.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/galle-fort" element={<GalleFort />} />
        <Route path="/mangrove-tour" element={<MangroveTour />} />
        <Route path="/whale-watching" element={<WhaleWatching />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ayurveda-wellness" element={<AyurvedaWellness />} />
        <Route path="/ayurveda-booking" element={<AyurvedaBookingPage />} />
      </Routes>

     
    </Router>
  );
}

export default App;
