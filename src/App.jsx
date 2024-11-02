import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import ScrollToTop from './components/ScrollTop'
import About from './pages/About'
import Centers from './pages/Centers'
import CenterDetails from './pages/CenterDetails'
import Services from './pages/Services'
import Partners from './pages/Partners'
import Contacts from './pages/Contacts'

function App() {

  return (
    <>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/centers' element={<Centers />} />
        <Route path='/center-details/:center_name' element={<CenterDetails />} />
        <Route path='/services' element={<Services />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
