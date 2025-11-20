import React from "react";
import { motion } from "motion/react";
import "../css/Footer.css";
import logo from "../assets/images/group1.png";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-header">
        <img src={logo} alt="Jones & Brown Legal Logo" className="footer-logo" />
        <h2 className="footer-title">Jones & Brown Legal</h2>
      </div>

      <p className="footer-tagline">
        Deep expertise, decisive courtroom presence
      </p>

      <div className="footer-middle">
        <div className="footer-column">
          <p><a href="mailto:hello@figma.com">hello@figma.com</a></p>
          <p><a href="tel:+15551234567">(555) 123-4567</a></p>
        </div>

        <div className="footer-column">
          <p>123 Candyland Lane</p>
          <p>Suite 123</p>
          <p>Los Angeles, CA 94117</p>
        </div>

        <div className="footer-column">
          <p><a href="#">Instagram</a></p>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">LinkedIn</a></p>
          <p><a href="#">Bluesky</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Jones & Brown Legal<br />
          © 2025 All Rights Reserved
        </p>
      </div>
    </motion.footer>
  );
}
