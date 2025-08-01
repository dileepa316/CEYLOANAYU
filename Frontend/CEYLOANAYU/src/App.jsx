import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import LoginForm from "./components/Loginpage/loginform.jsx";
import Experience from "./components/Experiences/Experience.jsx";
import Experience1 from "./components/Experience1/Experience.jsx";
 // Make sure folder/file names match

import "./components/Loginpage/loginform.css";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/experience" element={<Experience />} />
       <Route path="/SurfingWeligama" element={<Experience1 />} />
 {/* ✅ Correct route */}
      </Routes>
    </Router>
  );
}

export default App;
