import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import "../css/ScheduleConsult.css"

const ReadyToUse = () => {
    return (
        <motion.section
            className="ready-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.section
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="ready-title">
                    Ready to Take the Next Step?<br />Let's Discuss
                </h2>
            </motion.section>
            <section>
                {[
                    {
                        number: "1.",
                        title: "Free consultation",
                        desc: "Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies."
                    },
                    {
                        number: "2.",
                        title: "Personalized Case Evaluation",
                        desc: "If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome."
                    },
                    {
                        number: "3.",
                        title: "Formal Engagement & Representation",
                        desc: "Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process."
                    }
                ].map((step, i) => (
                    <motion.section
                        className="ready-step-item"
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 1.5 }}
                    >
                        <div className="ready-step-number">{step.number}</div>

                        <div className="ready-step-content">
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    </motion.section>
                ))}
            </section>
                 <motion.section
                className="ready-last-text"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1.2 }}
            >
                <p>Discover how we can help</p>
            </motion.section>
            <motion.section
                className="ready-btn-wrapper"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <NavLink to="/schedule" className="ready-btn">
                        Schedule a Consult
                    </NavLink>
                </motion.div>
            </motion.section>
        </motion.section>
    );
};

export default ReadyToUse;
