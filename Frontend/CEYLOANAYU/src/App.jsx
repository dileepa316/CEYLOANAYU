import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import LoginForm from "./components/Loginpage/loginform.jsx";
import Experience from "./components/Experience/Experience.jsx";
import SurfingWeligama from "./components/Experience1/SurfingWeligama.jsx";
import GalleFort from "./components/Galle/GalleFort.jsx"; // New import
import SignupForm from "./components/Signup/SignupForm.jsx";

import "./components/Loginpage/loginform.css";
import "./components/Signup/SignupForm.css";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/surfing-weligama" element={<SurfingWeligama />} />
        <Route path="/galle-fort" element={<GalleFort />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;