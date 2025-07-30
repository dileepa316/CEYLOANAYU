import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Loginpage/loginform.jsx";
import "./components/Loginpage/loginform.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
     
      </Routes>
    </Router>
  )
}

export default App
