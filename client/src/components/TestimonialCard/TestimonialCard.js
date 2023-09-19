import React from "react";
import styled from "styled-components";

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
  }

  p {
    margin: 0 auto;
    text-align: center;
    max-width: 300px;
    font-size: 1.1rem !important;
    margin-bottom: 0rem !important;
    /* if text overflow then break word */
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
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

const TestimonialCard = ({ name, description, photoUrl }) => {
  return (
    <>
      <Card>
        <div className="quote-container">
          <span style={{ color: "#0f5288" }}>“</span>
        </div>

        <p
          style={{
            overflowWrap: "break-word",
            wordWrap: "break-word",
            hyphens: "auto",
          }}
          className="roboto_400"
        >
          {description}
        </p>

        <hr />

        <img src={photoUrl} alt="" />
        <h4 className="roboto_400" style={{ color: "black" }}>
          {name}
        </h4>
      </Card>
    </>
  );
};

export default TestimonialCard;
