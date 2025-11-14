import React from "react";
import end from "../assets/images/end.png"; 
import "../css/ScheduleConsult.css";


export default function ScheduleConsult() {
  return (
    <div className="schedule">

      
      <div className="hero">
        <img src={end} alt="End" className="hero-img" />
        <div className="hero-text">Let us help you</div>
      </div>

      {/* ---------- CONTENT SECTION ---------- */}
      <div className="content">
        <h3 className="section-heading">Ready to Take the Next Step?</h3>
        <p className="section-subheading">Let’s Discuss</p>

        
        <div className="step-row">
          <div className="step-number">1.</div>
          <div className="step-content">
            <h4>Free Consultation</h4>
            <p>
              Schedule a complimentary consultation to discuss your goals
              and challenges. We’ll help you evaluate your situation,
              understand your options, and outline potential strategies.
            </p>
          </div>
        </div>

        {/* ---- STEP 2 ---- */}
        <div className="step-row">
          <div className="step-number">2.</div>
          <div className="step-content">
            <h4>Personalized Case Evaluation</h4>
            <p>
              If you choose to move forward, we conduct a detailed review
              of your case and provide tailored insights to help you make
              informed decisions. Our team ensures every aspect is carefully
              analyzed to deliver optimal results.
            </p>
          </div>
        </div>

        {/* ---- STEP 3 ---- */}
        <div className="step-row">
          <div className="step-number">3.</div>
          <div className="step-content">
            <h4>Formal Engagement & Representation</h4>
            <p>
              Once you decide to proceed, we finalize the paperwork and begin
              representing your case with precision and thoughtful strategy.
              We walk with you through every step of the process.
            </p>
          </div>
        </div>

        
        <div className="discover">
          Discover how we can help
          <button className="consult-btn">Schedule a Consult</button>
        </div>
      </div>
    </div>
  );
}
