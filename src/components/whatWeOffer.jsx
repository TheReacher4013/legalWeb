import React from 'react'
import { NavLink } from "react-router-dom";
import "../css/whatWeOffer.css"

const whatWeOffer = () => {
  return (
   <section className='offer-section'>
    <div className='offer-left'>
        <p className='offer-heading'>What We Offer</p>
        </div>
        <div className='offer-right'>
            <h1 className='offer-list'>
                Business Formation<br/>
                Contact Drafying<br/>
                Mergers And Acquistions<br/>
                Property Protection<br/>
                Employment Law<br/>
                Corporate Governance<br/>
                Shareholder Disputes<br/>
                <span className='more'>+More</span>
            </h1>
            <NavLink to="/services" className="seri-button">Services</NavLink>
       </div>
   </section>
  );
};

export default whatWeOffer