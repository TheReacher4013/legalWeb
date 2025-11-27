import React from "react";
import bg1 from "../assets/images/Banner11.jpg";
import { motion } from "motion/react";
import "../css/banner1.css";

const Banner1 = () => {
    return (
        <section className="banner1-section">
            <motion.div
                className="banner1"
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                initial={{ opacity: 0, x: -120, rotate: -4 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}  // 👈 slow, smooth
                viewport={{ once: false, amount: 0.4 }}  // 👈 scroll reveal trigger
            ></motion.div>
        </section>
    );
};

export default Banner1;
