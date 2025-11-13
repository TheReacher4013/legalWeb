import React from "react";
import bg1 from "../assets/images/Banner11.jpg";
import "../css/banner1.css"; 

const Banner1 = () => {
    return (
        <section className="banner1-section">
            <div
                className="banner1"
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    // borderRadius: "10px",
                }}
            ></div>
        </section>
    );
};

export default Banner1;
