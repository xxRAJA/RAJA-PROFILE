import React, { useEffect, useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Catagories from './components/Catagories'
import Slider from './components/Slider'
import Footer from './components/Footer'
import About from './components/About'
import Home from './components/Home';
import Suppliments from './components/Suppliments'
import Accessories from './components/Accessories'
import Profile from './components/Profile';
const App = () => {

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/suppliments" element={<Suppliments/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
