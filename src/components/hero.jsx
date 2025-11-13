import React from "react";
import "../css/hero11.css";
import bgImage from "../assets/images/hero.jpg";

const HeroSection = () => {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay for dark shade */}
            <div className="hero-overlay">

                {/* Main content container */}
                <div className="hero-content">

                    {/* Heading */}
                    <div className="hero-heading">
                        <h1>Jones & Brown Legal</h1>
                    </div>

                    {/* Tagline */}
                    <div className="hero-tagline">
                        <p className="tagline">Deep expertise, decisive courtroom presence</p>
                    </div>

                    {/* Subtext */}
                    <div className="hero-subtext">
                        <p className="subtext">
                            We've been serving the Los Angeles area with <br/>expert legal counsel
                            since 1976.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;





// import React from "react";
// import "../css/hero11.css";
// import bgImage from "../assets/images/hero.jpg";

// const HeroSection = () => {
//     return (
//         <section
//             className="hero-section"
//             style={{ backgroundImage: `url(${bgImage})` }}
//         >
//             <div className="hero-overlay">
//                 <div className="hero-content">
//                     {/* Heading */}
//                     <div className="hero-heading">
//                         <h1>Jones & Brown Legal</h1>
//                     </div>

//                     {/* Bottom text area */}
//                     <div className="hero-bottom">
//                         <div className="hero-left">
//                             <p className="tagline">
//                                 Deep expertise,decisive courtroom presence
//                             </p>
//                         </div>
//                         <div className="hero-right">
//                             <p className="subtext">
//                                 We've been serving the Los Angeles area with <br/>xpert legal
//                                 counsel since 1976.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
