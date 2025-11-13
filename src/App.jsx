import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Services from "./pages/Services"


const ScheduleConsult = () => (
  <h2 style={{ color: "white", textAlign: "center" }}>
    Schedule a Consult Page
  </h2>
);

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consult" element={<ScheduleConsult />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
