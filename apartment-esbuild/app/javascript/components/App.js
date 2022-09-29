import React from "react"
import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
