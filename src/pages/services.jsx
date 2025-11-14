import React, { useEffect, useState, useRef } from "react";
import "../css/Services.css";
import top from "../assets/images/top.png";       // Make sure this file exists
import bottom from "../assets/images/bottom.png"; // Make sure this file exists

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
            <ol>Business formation (LLC, corporations, partnerships)</ol>
            <ol>Contract drafting and review</ol>
            <ol>Mergers and acquisitions</ol>
            <ol>Intellectual property protection</ol>
            <ol>Employment law and workplace policies</ol>
            <ol>Corporate governance</ol>
            <ol>Shareholder and partnership disputes</ol>
          </ul>
        </div>

        {/* Category 2 */}
        <div className="service-category">
          <h4>Litigation and Dispute Resolution</h4>
          <ul>
            <ol>Civil litigation</ol>
            <ol>Commercial litigation</ol>
            <ol>Arbitration and mediation</ol>
            <ol>Class action lawsuits</ol>
            <ol>Personal injury claims</ol>
            <ol>Product liability cases</ol>
          </ul>
        </div>

        {/* Category 3 */}
        <div className="service-category">
          <h4>Family Law</h4>
          <ul>
            <ol>Divorce and separation</ol>
            <ol>Child custody and support</ol>
            <ol>Prenuptial and postnuptial agreements</ol>
            <ol>Adoption and surrogacy</ol>
            <ol>Domestic violence protection</ol>
          </ul>
        </div>

        {/* Category 4 */}
        <div className="service-category">
          <h4>Criminal Defense</h4>
          <ul>
            <ol>DUI and traffic offenses</ol>
            <ol>White collar crime defense</ol>
            <ol>Drug charges</ol>
            <ol>Assault and battery cases</ol>
            <ol>Expungements and record sealing</ol>
          </ul>
        </div>

        {/* Category 5 */}
        <div className="service-category">
          <h4>Real Estate Law</h4>
          <ul>
            <ol>Property transactions (buying, selling, leasing)</ol>
            <ol>Land use and zoning</ol>
            <ol>Construction and land use</ol>
            <ol>Real estate development</ol>
          </ul>
        </div>

        {/* Category 6 */}
        <div className="service-category">
          <h4>Immigration Law</h4>
          <ul>
            <ol>Visa applications</ol>
            <ol>Green cards and citizenship</ol>
            <ol>Deportation defense</ol>
            <ol>Employment-based immigration</ol>
          </ul>
        </div>
      </section>

    <div className="services-bottom-image">
  <img src={bottom} alt="Trusted Legal Team" />
</div>

    </div>
  );
};

export default Services;
