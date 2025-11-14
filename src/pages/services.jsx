import React, { useEffect, useState, useRef } from "react";
import "../css/Services.css";
import top from "../assets/images/top.png";       // ✅ Make sure this file exists
import bottom from "../assets/images/bottom.png"; // ✅ Make sure this file exists

// --- Counter Component ---
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Detect when element becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Smooth counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(easeOut * target);
      setCount(value);
      if (progress < 1) requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, target]);

  return (
    <h2 ref={ref}>
      {count}
      {suffix}
    </h2>
  );
};

// --- Main Services Component ---
const Services = () => {
  return (
    <div className="services-container">
      {/* 🔹 Top Image */}
      <div className="services-top-image">
        <img src={top} alt="Our Legal Expertise" />
      </div>

      {/* --- Top Stats Section --- */}
      <section className="top-stats">
        <div>
          <Counter target={30} suffix="+" />
          <p>Years of Experience</p>
        </div>
        <div>
          <Counter target={98} suffix="%" />
          <p>Success Rate in Court</p>
        </div>
        <div>
          <Counter target={120} suffix="+" />
          <p>Attorneys at Hand</p>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="services-section">
        <h2>
          Navigating Complex Legal Landscapes? <br />
          <span>We Can Help.</span>
        </h2>

        {/* Category 1 */}
        <div className="service-category">
          <h4>Business and Corporate Law</h4>
          <ul>
            <li>Business formation (LLC, corporations, partnerships)</li>
            <li>Contract drafting and review</li>
            <li>Mergers and acquisitions</li>
            <li>Intellectual property protection</li>
            <li>Employment law and workplace policies</li>
            <li>Corporate governance</li>
            <li>Shareholder and partnership disputes</li>
          </ul>
        </div>

        {/* Category 2 */}
        <div className="service-category">
          <h4>Litigation and Dispute Resolution</h4>
          <ul>
            <li>Civil litigation</li>
            <li>Commercial litigation</li>
            <li>Arbitration and mediation</li>
            <li>Class action lawsuits</li>
            <li>Personal injury claims</li>
            <li>Product liability cases</li>
          </ul>
        </div>

        {/* Category 3 */}
        <div className="service-category">
          <h4>Family Law</h4>
          <ul>
            <li>Divorce and separation</li>
            <li>Child custody and support</li>
            <li>Prenuptial and postnuptial agreements</li>
            <li>Adoption and surrogacy</li>
            <li>Domestic violence protection</li>
          </ul>
        </div>

        {/* Category 4 */}
        <div className="service-category">
          <h4>Criminal Defense</h4>
          <ul>
            <li>DUI and traffic offenses</li>
            <li>White collar crime defense</li>
            <li>Drug charges</li>
            <li>Assault and battery cases</li>
            <li>Expungements and record sealing</li>
          </ul>
        </div>

        {/* Category 5 */}
        <div className="service-category">
          <h4>Real Estate Law</h4>
          <ul>
            <li>Property transactions (buying, selling, leasing)</li>
            <li>Land use and zoning</li>
            <li>Construction and land use</li>
            <li>Real estate development</li>
          </ul>
        </div>

        {/* Category 6 */}
        <div className="service-category">
          <h4>Immigration Law</h4>
          <ul>
            <li>Visa applications</li>
            <li>Green cards and citizenship</li>
            <li>Deportation defense</li>
            <li>Employment-based immigration</li>
          </ul>
        </div>
      </section>

      {/* 🔹 Bottom Image */}
      <div className="services-bottom-image">
        <img src={bottom} alt="Trusted Legal Team" />
      </div>
    </div>
  );
};

export default Services;
