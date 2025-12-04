import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Services from "./pages/services";
import Navbar from "./components/Navbar";
import ScheduleConsult from "./pages/ScheduleAndConsult";

function ScrollToTopInsideApp() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    
    <Router>
      <ScrollToTopInsideApp /> 

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
