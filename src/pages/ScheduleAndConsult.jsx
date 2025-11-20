import React from "react";
import ReadyToUse from "../components/ScheduleConsult";
import ImageSection from "../components/ScheduleImage";
import Navbar from "../components/Navbar";

const ScheduleAndConsult = () => {
    return (
        <div>
            <Navbar bgColor="#1F0808" />
            <ImageSection />
            <ReadyToUse />
        </div>
    );
};

export default ScheduleAndConsult;
