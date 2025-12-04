import React from 'react';
import { motion } from 'motion/react';
import "../css/banner2.css";
import libraryImg from "../assets/images/banner2.png";

const BannerLast = () => {
    return (
        <section className="library_hero">
            <motion.div
                className="library_hero_inner"
                style={{
                    backgroundImage: `url(${libraryImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                }}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            ></motion.div>
        </section>
    );
};

export default BannerLast;
