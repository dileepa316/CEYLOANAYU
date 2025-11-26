// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Home from "./components/Home.jsx";
import LoginPage from "./components/Loginpage/LoginPage.jsx";
import Experience from "./components/Experience/Experience.jsx";
import SurfingWeligama from "./components/Experience1/SurfingWeligama.jsx";
import GalleFort from "./components/Galle/GalleFort.jsx";
import MangroveTour from "./components/Koggala/MangroveTour.jsx";
import WhaleWatching from "./components/mirissa/WhaleWatching.jsx";
import SignupPage from "./components/Signup/SignupPage.jsx";
import ContactPage from "./components/Contactus/ContactPage.jsx";
import AyurvedaWellness from "./components/AyurvedaWellness/AyurvedaWellness.jsx";
import AyurvedaBookingPage from "./components/AyurvedaBookingPage/AyurvedaBookingPage.jsx";
import "./components/AyurvedaBookingPage/AyurvedaBookingPage.css";

// CSS Imports
import "./components/Loginpage/Login.css";
import "./components/Signup/Signup.css";
import "./components/Koggala/MangroveTour.css";
import "./components/mirissa/WhaleWatching.css";
import "./components/Contactus/Contact.css";
import "./components/AyurvedaWellness/AyurvedaWellness.css";
import "./components/AyurvedaBookingPage/AyurvedaBookingPage.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/surfing-weligama" element={<SurfingWeligama />} />
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