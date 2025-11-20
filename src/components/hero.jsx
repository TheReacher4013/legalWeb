import React from "react";
import { motion } from "motion/react";
import "../css/hero11.css";

const HeroSection = () => {
    return (
        <section className="hero_section">
            <header>
                <motion.div
                    className="hero_heading"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Jones & Brown Legal</h1>
                </motion.div>

                <motion.div
                    className="hero_subheading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h3>Deep expertise, decisive courtroom presence</h3>
                    <p>
                        We've been serving the Los Angeles area with<br />
                        expert legal counsel since 1976.
                    </p>
                </motion.div>
            </header>
        </section>
    );
};

export default HeroSection;
