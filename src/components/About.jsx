import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/about.css";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1.2,
            delayChildren: 1.1,
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, 
        
        transition: { 
            duration: 1.8,

        } },
};

const About = () => {
    return (
        <motion.section
            className="welcome-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
        >
            <motion.h1 className="title" variants={itemVariants}>
                Welcome to Jones & Brown Legal
            </motion.h1>

            <motion.div className="content">
                <motion.p className="text-block" variants={itemVariants}>
                    Jones & Brown Legal has been a pillar of the Los Angeles legal
                    community, providing expert legal counsel across a wide spectrum of
                    practice areas. We are more than just attorneys, we are trusted
                    advisors, dedicated advocates, and strategic partners committed to
                    achieving the best possible outcomes for our clients.
                </motion.p>

                <motion.p className="text-block" variants={itemVariants}>
                    We combine decades of experience with a deep understanding of the
                    complexities of California law. Our team of seasoned trial attorneys
                    boasts a proven track record of success in courtrooms throughout Los
                    Angeles and beyond. We pride ourselves on our comprehensive expertise,
                    covering nearly every field of law, ensuring that whatever your legal
                    challenge, we have the knowledge and experience to guide you.
                </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} whileTap={{ scale: 0.95 }}>
                <NavLink to="/consult" className="consult-button">
                    Schedule a Consult
                </NavLink>
            </motion.div>
        </motion.section>
    );
};

export default About;
