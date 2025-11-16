import React from "react";
import "../css/hero11.css";
// import bgImage from "../assets/images/hero.jpg";

const HeroSection = () => {
    return (
        <section
            className="hero_section"
            
        >
            {/* Overlay for dark shade */}
            <header>
                <div className="hero_heading">
                    <h1>Jones & Brown Legal</h1>
                </div>
                <div className="hero_subheading">
                    <h3>
                        Deep expertise, decisive courtroom presence
                    </h3>
                    <p>
                        We've been serving the Los Angeles area with<br/> expert legal counsel since 1976.
                    </p>
                </div>
            </header>
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
