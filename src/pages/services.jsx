import React, { useEffect, useState } from "react";
import "../css/Services.css";

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h2 className="counter">
      {count}
      {suffix}
    </h2>
  );
};

const Services = () => {
  return (
    <div className="services-page">
      {/* 🌟 Header Section with Top Image */}
      <header className="services-header">
        <img
          src="/images/services-header.jpg"
          alt="Law firm office"
          className="header-image"
        />

        <p>
          At <strong>Jones &amp; Brown Legal</strong>, we are committed to
          exceptional service and successful outcomes.
        </p>

        <div className="stats">
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
        </div>

        <h3 className="tagline">
          Navigating Complex Legal Landscapes? We Can Help.
        </h3>
        <button className="consult-btn">Schedule a Consult</button>
      </header>

      {/* ⚖️ Services Section */}
      <section className="services-list">
        <div className="service">
          <h2>Business and Corporate Law</h2>
          <ul>
            <li>Business formation (LLCs, corporations, partnerships)</li>
            <li>Contract drafting and review</li>
            <li>Mergers and acquisitions</li>
            <li>Intellectual property protection</li>
            <li>Employment law and workplace policies</li>
            <li>Corporate governance</li>
            <li>Shareholder and partnership disputes</li>
          </ul>
        </div>

        <div className="service">
          <h2>Litigation and Dispute Resolution</h2>
          <ul>
            <li>Civil litigation</li>
            <li>Commercial litigation</li>
            <li>Arbitration and mediation</li>
            <li>Class action lawsuits</li>
            <li>Personal injury claims</li>
            <li>Product liability cases</li>
          </ul>
        </div>

        <div className="service">
          <h2>Family Law</h2>
          <ul>
            <li>Divorce and separation</li>
            <li>Child custody and support</li>
            <li>Prenuptial and postnuptial agreements</li>
            <li>Adoption and surrogacy</li>
            <li>Domestic violence protection</li>
          </ul>
        </div>

        <div className="service">
          <h2>Criminal Defense</h2>
          <ul>
            <li>DUI and traffic offenses</li>
            <li>White-collar crime defense</li>
            <li>Drug charges</li>
            <li>Assault and battery cases</li>
            <li>Expungements and record sealing</li>
          </ul>
        </div>

        <div className="service">
          <h2>Real Estate Law</h2>
          <ul>
            <li>Property transactions (buying, selling, leasing)</li>
            <li>Landlord-tenant disputes</li>
            <li>Zoning and land use</li>
            <li>Construction law</li>
            <li>Real estate development</li>
          </ul>
        </div>

        <div className="service">
          <h2>Immigration Law</h2>
          <ul>
            <li>Visa applications</li>
            <li>Green cards and citizenship</li>
            <li>Deportation defense</li>
            <li>Employment-based immigration</li>
          </ul>
        </div>
      </section>

      {/* 🖼️ Bottom Image */}
      <div className="bottom-image-container">
        <img
          src="/images/services-footer.jpg"
          alt="Team working together"
          className="bottom-image"
        />
      </div>
    </div>
  );
};

export default Services;
