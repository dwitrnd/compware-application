import React from "react";
// import AboutUsImg from "../../../../assets/images/about-us-image.png";
import AboutUsImg from "../../../../assets/images/about-us-image.JPG";

const AboutUs = () => {
  return (
    <div>
      <section className='about'>
        <div className='main'>
          <div>
            <img src={AboutUsImg} alt='' />
          </div>
          <div className='all-text'>
            <h4>About Us</h4>
            <h1>A House Of Creative & Intelligent</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem necessitatibus provident quisquam consequatur animi cupiditate architecto atque, eum dolorem!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
