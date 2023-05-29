import React from "react";
// import AboutUsImg from "../../../../assets/images/about-us-image.png";
import AboutUsImg from "../../../../assets/images/about-us-image.jpg";

const AboutUs = () => {
  return (
    <div>
      <section className='about'>
        <div className='main'>
          <img src={AboutUsImg} alt='' />
          <div className='all-text'>
            <h4>About Us</h4>
            <h1>A House Of Creative & Intelligent</h1>
            <p>In social science, agency is defined as the capacity of individuals to act independently and to make their own free choices. By contrast, structure are those factors of influence (such as social class, religion, gender, ethnicity, ability, customs, etc.) that determine or limit</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
