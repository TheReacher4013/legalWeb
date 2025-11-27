import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import "../css/testimonial.css";

const testimonials = [
    {
        text: `"Jones & Brown Legal handled my estate
        planning with such care and professionalism. 
        They listened to my concerns and made the process clear and straightforward. 
I now have complete peace of mind knowing my family's future is secure."`,
        author: "David L, Business Owner",
    },
    {
        text: `"Their expertise and courtroom presence were truly impressive. They turned a stressful situation into a successful outcome."`,
        author: "Sarah P, Entrepreneur",
    },
    {
        text: `"I was very impressed with the responsiveness and knowledge of everyone at Jones & Brown Legal. I felt like they really cared about my case, and they fought hard to get me a great result."`,
        author: "Thomas P., Individual Client",
    },
    {
        text: `"Their attention to detail and proactive communication made the entire process smooth and stress-free. I felt completely supported every step of the way."`,
        author: "Robert P., Real Estate Investor",
    },
];

const TestimonialSection = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="testimonial-section">
            <motion.h2
                className="testimonial-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Hear From Our Clients
            </motion.h2>

            <motion.p
                className="testimonial-subtitle"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                We believe that our clients’ experiences speak volumes about the quality of our legal services.
                Here's what some of them have to say.
            </motion.p>

            <div className="testimonial-box">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="testimonial-text">{testimonials[index].text}</p>
                        <p className="testimonial-author">— {testimonials[index].author}</p>
                    </motion.div>
                </AnimatePresence>

                <div className="testimonial-controls">
                    <motion.button
                        onClick={prev}
                        className="arrow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        &lt;
                    </motion.button>

                    <div className="dots">
                        {testimonials.map((_, i) => (
                            <motion.span
                                key={i}
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                                whileHover={{ scale: 1.3 }}
                            ></motion.span>
                        ))}
                    </div>

                    <motion.button
                        onClick={next}
                        className="arrow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        &gt;
                    </motion.button>
                </div>
            </div>

            <motion.p
                className="testimonial-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Let us help you navigate your legal journey with confidence and peace of mind.
                Contact Jones & Brown Legal today.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <NavLink to="/consult" className="consult-button1">
                    Schedule a Consult
                </NavLink>
            </motion.div>
        </section>
    );
};

export default TestimonialSection;
