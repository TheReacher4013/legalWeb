import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import "../css/whatWeOffer.css";

const lines = [
    "Business Formation",
    "Contract Drafting",
    "Mergers And Acquisitions",
    "Property Protection",
    "Employment Law",
    "Corporate Governance",
    "Shareholder Disputes",
    "+More"
];

const WhatWeOffer = () => {
    return (
        <section className='offer-section'>

          
            <motion.div
                className='offer-left'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <p className='offer-heading'>What We Offer</p>
            </motion.div>

            {/* RIGHT LIST */}
            <motion.div
                className='offer-right'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.8, delay: 2.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.h1
                    className='offer-list'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.25 } 
                        }
                    }}
                >
                    {lines.map((text, i) => (
                        <motion.span
                            key={i}
                            style={{ display: "block" }}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1.0, 
                                        ease: "easeOut"
                                    }
                                }
                            }}
                        >
                            {text}
                        </motion.span>
                    ))}
                </motion.h1>
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
