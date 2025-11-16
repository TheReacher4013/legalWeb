import React from "react";

import HeroSection from "../components/hero";
import About from "../components/About";
import Banner1 from "../components/banner1"
import  WhatWeOffer from "../components/whatWeOffer"
import TestimonialSection from "../components/TestimonialSection";
import BannerLast from "../components/banner2";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Banner1 />
            <WhatWeOffer />
            <TestimonialSection />
            <BannerLast />
        </div>
    );
};

export default Home;
