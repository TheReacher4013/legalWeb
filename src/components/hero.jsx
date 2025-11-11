import React from "react";
import "../css/hero11.css";
import bgImage from "../assets/images/hero.jpg"
const HeroSection = () => {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Jones & Brown Legal</h1>
                    <p className="tagline">Deep expertise, decisive courtroom presence</p>
                    <p className="subtext">
                        We've been serving the Los Angeles area with expert legal counsel
                        since 1976.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

