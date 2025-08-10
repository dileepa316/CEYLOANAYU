import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Home from "./components/Home.jsx";
import LoginForm from "./components/Loginpage/loginform.jsx";
import Experience from "./components/Experience/Experience.jsx";
import SurfingWeligama from "./components/Experience1/SurfingWeligama.jsx";
import GalleFort from "./components/Galle/GalleFort.jsx";
import MangroveTour from "./components/Koggala/MangroveTour.jsx";
import WhaleWatching from "./components/mirissa/WhaleWatching.jsx";
import SignupForm from "./components/Signup/SignupForm.jsx";
import ContactPage from "./components/Contactus/ContactPage.jsx";

// CSS Imports
import "./components/Loginpage/loginform.css";
import "./components/Signup/SignupForm.css";
import "./components/Koggala/MangroveTour.css";
import "./components/mirissa/WhaleWatching.css";
import "./components/Contactus/Contact.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/surfing-weligama" element={<SurfingWeligama />} />
        <Route path="/galle-fort" element={<GalleFort />} />
        <Route path="/mangrove-tour" element={<MangroveTour />} />
        <Route path="/whale-watching" element={<WhaleWatching />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;