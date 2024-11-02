import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
