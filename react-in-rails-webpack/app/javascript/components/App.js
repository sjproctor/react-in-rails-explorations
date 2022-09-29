import React from "react"
import { Routes, Route } from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import Navigation from "./components/Navigation"

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
