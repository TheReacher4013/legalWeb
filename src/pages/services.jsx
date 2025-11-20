import React from "react";
import "../css/Services.css";
import bottom from "../assets/images/bottom.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "motion/react";


const Counter = ({ end, suffix = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {inView && <CountUp start={0} end={end} duration={2} suffix={suffix} />}
    </motion.h2>
  );
};

const Services = () => {
  return (
    <div className="services-container">

      
      <motion.div
        className="services-top-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="overlay"></div>
        <motion.div
          className="top-image-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>
            At Jones & Brown Legal, we are committed to <br />
            exceptional service and successful outcomes with:
          </h1>
        </motion.div>
      </motion.div>

      
      <section className="top-stats">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Counter end={30} suffix="+" />
          <p>years of experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Counter end={98} suffix="%" />
          <p>success rate in court</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Counter end={120} suffix="+" />
          <p>attorneys at hand</p>
        </motion.div>
      </section>

      
      <section className="services-section">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Navigating Complex Legal Landscapes? <br />
          <span>We Can Help.</span>
        </motion.h2>

        <div className="service_section_content">
          
          {[
            {
              title: "Business and Corporate Law",
              items: [
                "Business formation (LLC, corporations, partnerships)",
                "Contract drafting and review",
                "Mergers and acquisitions",
                "Intellectual property protection",
                "Employment law and workplace policies",
                "Corporate governance",
                "Shareholder and partnership disputes",
              ],
            },
            {
              title: "Litigation and Dispute Resolution",
              items: [
                "Civil litigation",
                "Commercial litigation",
                "Arbitration and mediation",
                "Class action lawsuits",
                "Personal injury claims",
                "Product liability cases",
              ],
            },
            {
              title: "Family Law",
              items: [
                "Divorce and separation",
                "Child custody and support",
                "Prenuptial and postnuptial agreements",
                "Adoption and surrogacy",
                "Domestic violence protection",
              ],
            },
            {
              title: "Criminal Defense",
              items: [
                "DUI and traffic offenses",
                "White collar crime defense",
                "Drug charges",
                "Assault and battery cases",
                "Expungements and record sealing",
              ],
            },
            {
              title: "Real Estate Law",
              items: [
                "Property transactions (buying, selling, leasing)",
                "Land use and zoning",
                "Construction and land use",
                "Real estate development",
              ],
            },
            {
              title: "Immigration Law",
              items: [
                "Visa applications",
                "Green cards and citizenship",
                "Deportation defense",
                "Employment-based immigration",
              ],
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h4>{service.title}</h4>
              <ul>
                {service.items.map((item, i) => (
                  <ol key={i}>{item}</ol>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      
      <motion.div
        className="services-bottom-image"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={bottom} alt="Trusted Legal Team" />
      </motion.div>
    </div>
  );
};

export default Services;
