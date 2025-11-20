import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import "../css/Navbar.css";
import logo from "../assets/images/Logo.png";

const Navbar = ({ bgColor }) => {
    return (
        <motion.nav
            className="navbar"
            style={{ backgroundColor: bgColor }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2}}
        >
            <div className="navbar-logo">
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
            </div>

            <div className="navbar-links">
                <NavLink
                    to="/services"
                    className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                >
                    Services
                </NavLink>

                <NavLink
                    to="/consult"
                    className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                >
                    Schedule a Consult
                </NavLink>
            </div>
        </motion.nav>
    );
};

export default Navbar;
