import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";


const Services = () => <h2 style={{ color: "white" }}>Services Page</h2>;
const ScheduleConsult = () => <h2 style={{ color: "white" }}>Schedule a Consult Page</h2>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consult" element={<ScheduleConsult />} />
      </Routes>
    </Router>
  );
}

export default App;
