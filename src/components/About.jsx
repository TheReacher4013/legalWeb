import React from "react";
import { NavLink } from "react-router-dom";
import "../css/about.css";

const About = () => {
    return (
        <section className="welcome-section">
            <h1 className="title">Welcome to Jones & Brown Legal</h1>
            <div className="content">
                <p className="text-block">
                    Jones & Brown Legal has been a pillar of the Los Angeles legal
                    community, providing expert legal counsel across a wide spectrum of
                    practice areas. We are more than just attorneys, we are trusted
                    advisors, dedicated advocates, and strategic partners committed to
                    achieving the best possible outcomes for our clients.
                </p>
                <p className="text-block">
                    We combine decades of experience with a deep understanding of the
                    complexities of California law. Our team of seasoned trial attorneys
                    boasts a proven track record of success in courtrooms throughout Los
                    Angeles and beyond. We pride ourselves on our comprehensive expertise,
                    covering nearly every field of law, ensuring that whatever your legal
                    challenge, we have the knowledge and experience to guide you.
                </p>
            </div>
            <NavLink to="/consult" className="consult-button">
                Schedule a Consult
            </NavLink>
        </section>
    );
};

export default About;
