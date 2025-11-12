import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/hero";
import About from "../components/About";
import Banner1 from "../components/banner1"

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Banner1 />
        </div>
    );
};

export default Home;
