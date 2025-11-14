import React from "react";

import HeroSection from "../components/hero";
import About from "../components/About";
import Banner1 from "../components/banner1"
import  WhatWeOffer from "../components/whatWeOffer"
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Banner1 />
            <WhatWeOffer />
            <TestimonialSection />
        </div>
    );
};

export default Home;
