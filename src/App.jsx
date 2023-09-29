/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MainPage from './Components/MainPage/MainPage'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />                  
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services></Services>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App