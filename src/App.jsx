import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom";
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Career from './components/Career';
import ContactUs from './components/ContactUs';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App