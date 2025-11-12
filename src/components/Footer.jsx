import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-about">
          <h2>Jones &amp; Brown Legal</h2>
          <p>Deep expertise, decisive courtroom presence</p>
        </div>

        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <a href="mailto:hello@figma.com">hello@figma.com</a>
          </p>
          <p>
            <a href="tel:+15551234567">(555) 123-4567</a>
          </p>
          <address>
            123 Candyland Lane<br />
            Suite 123<br />
            Los Angeles, CA 94117
          </address>
        </div>

        
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Bluesky</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Jones &amp; Brown Legal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
