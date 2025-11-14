import React from "react";

import HeroSection from "../components/hero";
import About from "../components/About";
import Banner1 from "../components/banner1"
import  WhatWeOffer from "../components/whatWeOffer"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Banner1 />
            <WhatWeOffer />
        </div>
    );
};

export default Home;
