import React from "react";
import "../css/Services.css";
import bottom from "../assets/images/bottom.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, suffix = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <h2 ref={ref}>
      {inView && <CountUp start={0} end={end} duration={2} suffix={suffix} />}
    </h2>
  );
};

const Services = () => {
  return (
    <div className="services-container">
      
      <div className="services-top-image">
        <div className="overlay"></div>
        <div className="top-image-text">
          <h1>At Jones & Brown Legal, we are committed to <br /> 
              exceptional service and successful outcomes with:</h1>
          
        </div>
      </div>

      <section className="top-stats">
        <div>
          <Counter end={30} suffix="+" />
          <p>years of experience</p>
        </div>
        <div>
          <Counter end={98} suffix="%" />
          <p>success rate in court</p>
        </div>
        <div>
          <Counter end={120} suffix="+" />
          <p>attorneys at hand</p>
        </div>
      </section>

      
      <section className="services-section">
        <h2>
          Navigating Complex Legal Landscapes? <br />
          <span>We Can Help.</span>
        </h2>

        <div className="service_section_content">
          
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

          <div className="service-category">
            <h4>Real Estate Law</h4>
            <ul>
              <ol>Property transactions (buying, selling, leasing)</ol>
              <ol>Land use and zoning</ol>
              <ol>Construction and land use</ol>
              <ol>Real estate development</ol>
            </ul>
          </div>

          <div className="service-category">
            <h4>Immigration Law</h4>
            <ul>
              <ol>Visa applications</ol>
              <ol>Green cards and citizenship</ol>
              <ol>Deportation defense</ol>
              <ol>Employment-based immigration</ol>
            </ul>
          </div>

        </div>
      </section>
     
      <div className="services-bottom-image">
        <img src={bottom} alt="Trusted Legal Team" />
      </div>
    </div>
  );
};

export default Services;
