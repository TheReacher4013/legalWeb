import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css"; // make sure to create this CSS file for styling
// import logo from "./logo.png"; // replace with your logo image path

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="navbar-links">
                <NavLink to="/services" className="nav-item">
                    Services
                </NavLink>
                <NavLink to="/consult" className="nav-item">
                    Schedule a Consult
                </NavLink>
            </div>
        </nav>
    );
};


export default Navbar;
