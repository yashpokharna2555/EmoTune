import React from 'react'
import Home from './pages/home'
import Tunes from './pages/tunes'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tunes" element={<Tunes />} />
      </Routes>
    </Router>
  )
}

export default App
