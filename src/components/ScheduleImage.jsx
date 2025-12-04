import React from "react";
import { motion } from "motion/react";
import "../css/ScheduleImage.css";
import End1 from "../assets/images/Ennd.jpg";

const ImageSection = () => {
    return (
        <motion.section
            className="help-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.img
                className="help-image"
                src={End1}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />

            <motion.div
                className="help-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Let us help you
            </motion.div>
        </motion.section>
    );
};

export default ImageSection;
