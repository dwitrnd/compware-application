import React from "react";
import styled from "styled-components";

import CompwareImage1 from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";

const Card = styled.div`
  background: white;
  padding: 3rem 2rem 2rem 2rem;
  color: black;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .quote-container {
    font-size: 5rem;
    line-height: 0.25rem;
    margin-bottom: 1rem;
    color: #0f5288;
    span {
      background: linear-gradient(90deg, #02a28b, #067f87 52.4%, #0a5f82);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    font-size: 1.1rem !important;
    margin-bottom: 0rem !important;
  }
  hr {
    border: none;
    margin: 1.4rem 0rem;
    height: 0.15rem;
    background: #dadadc;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 14%;
  }
  img {
    border: 2px solid #dadadc;
    margin-bottom: 1.2rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  h4 {
    color: #a1a1a1a1;
  }
`;

const TestimonialCard = () => {
  return (
    <Card>
      <div className="quote-container">
        <span>“</span>
      </div>

      <p className="roboto_400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, aut!
      </p>

      <hr />

      <img src={CompwareImage1} alt="" />
      <h4 className="roboto_400">name</h4>
    </Card>
  );
};

export default TestimonialCard;
