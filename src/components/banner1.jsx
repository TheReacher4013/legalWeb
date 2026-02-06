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
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            ></motion.div>
        </section>
    );
};

export default Banner1;
