import React, { useState } from "react";
import "../css/testimonial.css"

const testimonials = [
    {
        text: `"Jones & Brown Legal handled my estate planning with such care and professionalism. 
    They listened to my concerns and made the process clear and straightforward. 
    I now have complete peace of mind knowing my family's future is secure."`,
        author: "David L, Business Owner",
    },
    {
        text: `"Their expertise and courtroom presence were truly impressive. They turned a stressful situation into a successful outcome."`,   
        author: "Sarah P, Entrepreneur",
    },
    {
        text: `"I was very impressed with the responsiveness and knowledge of everyone at Jones & Brown Legal. I felt like they really cared about my case, and they fought hard to get me a great result."`,
        author: "Thomas P., Individual Client",
    },
    {
        text: `"Their attention to detail and proactive communication made the entire process smooth and stress-free. I felt completely supported every step of the way."`,
        author: " Robert P., Real Estate Investor",
    },
];

const TestimonialSection = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="testimonial-section">
            <h2 className="testimonial-title">Hear From Our Clients</h2>

            <p className="testimonial-subtitle">
                We believe that our clients’ experiences speak volumes about the quality of our legal services.
                Here's what some of them have to say.
            </p>

            <div className="testimonial-box">
                <p className="testimonial-text">{testimonials[index].text}</p>
                <p className="testimonial-author">— {testimonials[index].author}</p>

                {/* Arrows & Dots */}
                <div className="testimonial-controls">
                    <button onClick={prev} className="arrow">&lt;</button>

                    <div className="dots">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                            ></span>
                        ))}
                    </div>

                    <button onClick={next} className="arrow">&gt;</button>
                </div>
            </div>

            <p className="testimonial-footer">
                Let us help you navigate your legal journey with confidence and peace of mind.
                Contact Jones & Brown Legal today.
            </p>

            <button className="consult-btn">Schedule a Consult</button>
        </section>
    );
};

export default TestimonialSection;
