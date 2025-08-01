import React, { useState } from "react";
import './App.css';
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Loginpage/loginform.jsx";
import "./components/Loginpage/loginform.css";
import SignupForm from "./components/Signup/SignupForm.jsx"; // <-- Make sure this path is correct
import "./components/Signup/SignupForm.css"; // <-- Optional, if you have signup CSS

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
