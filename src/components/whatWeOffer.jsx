import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import "../css/whatWeOffer.css";

const WhatWeOffer = () => {
    return (
        <section className='offer-section'>

            {/* Left side heading */}
            <motion.div
                className='offer-left'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className='offer-heading'>What We Offer</p>
            </motion.div>

            {/* Right side list */}
            <motion.div
                className='offer-right'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h1 className='offer-list'>
                    Business Formation<br />
                    Contract Drafting<br />
                    Mergers And Acquisitions<br />
                    Property Protection<br />
                    Employment Law<br />
                    Corporate Governance<br />
                    Shareholder Disputes<br />
                    <span className='more'>+More</span>
                </h1>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <NavLink to="/services" className="seri-button">
                        Services
                    </NavLink>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default WhatWeOffer;
