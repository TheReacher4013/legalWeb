// <<<<<<< HEAD
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";

// const Services = () => <h2 style={{ color: "white" }}>Services Page</h2>;
// const ScheduleConsult = () => <h2 style={{ color: "white" }}>Schedule a Consult Page</h2>;

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/consult" element={<ScheduleConsult />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// =======
// import React from "react";
// import Home from "./pages/home";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <Footer />
//     </>
//   );
// }

// export default App;
// >>>>>>> origin/main




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Services = () => <h2 style={{ color: "white" }}>Services Page</h2>;
const ScheduleConsult = () => <h2 style={{ color: "white" }}>Schedule a Consult Page</h2>;

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
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
