import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Services from "./pages/services";
import Navbar from "./components/Navbar";
import ScheduleConsult from "./pages/ScheduleConsult";



function App() {
  return (
    <Router>
                <Navbar />
              
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
