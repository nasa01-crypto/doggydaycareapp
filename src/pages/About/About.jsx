import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Central location and nature walks</h2>
            <p className='fs-17'>Doggy Daycare is located in the heart of Stockholm. Just a stone's throw away is the green park, Parken, where we offer lovely forest walks for the dogs. After a long search for the perfect premises in Stockholm's inner city, we have now opened this state-of-the-art dog daycare that meets Doggy Daycare's high standards. Here we combine a central location with proximity to nature to create a pleasant environment for the dogs.</p>
            <p className='fs-17'>Meet some of our previous dogs on the site, we look forward hearing from you!</p>
            <br/>
            <p className='fs-17'>Contact details</p>
            <p className='fs-17'>Tel: +4673 3333 333</p>
            <a href="mailto: info@doggydaycare.se" class="btn btn--contact">Email: info@doggydaycare.se </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About