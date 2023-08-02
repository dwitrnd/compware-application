import React from "react";
import styled from "styled-components";

import CompwareImage1 from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";
import Student1 from "../../assets/images/TestimonialPhotos/Student1.jpg";
import Student2 from "../../assets/images/TestimonialPhotos/Student2.jpg";
import Student3 from "../../assets/images/TestimonialPhotos/Student3.jpg";
import Student4 from "../../assets/images/TestimonialPhotos/Student4.jpg";
import Student5 from "../../assets/images/TestimonialPhotos/Student5.jpg";
import Student6 from "../../assets/images/TestimonialPhotos/Student6.jpg";
import Student7 from "../../assets/images/TestimonialPhotos/Student7.jpg";
import Student8 from "../../assets/images/TestimonialPhotos/Student8.jpg";
import Student9 from "../../assets/images/TestimonialPhotos/Student9.jpg";
import { Stack } from "@mui/material";

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
    <>
      <Card>
        <div className="quote-container">
          <span style={{ color: "#0f5288" }}>“</span>
        </div>

        <p className="roboto_400">
          I recently completed the UI/UX class at Deerwalk Training Center, and
          it was an exceptional experience. The instructors were highly
          knowledgeable and provided practical insights into the field. The
          hands-on projects allowed me to apply my learning effectively. It was
          a valuable learning experience that will benefit me in my future
          design work.
        </p>

        <hr />

        <img src={Student1} alt="" />
        <h4 className="roboto_400">Lison Karmacharya</h4>
      </Card>
    </>
  );
};

export default TestimonialCard;
