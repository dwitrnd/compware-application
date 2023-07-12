import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";
import certificateImage from "assets/images/certificateimage.jpeg";

import TrianingCourse1 from "../../assets/images/training-courses/dot-net-programming.jpg";

const Photo = styled.img`
  width: ${(props) => props.scale * 368}px;
  height: ${(props) => props.scale * 200}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;

  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1, TrianingCourse1];

const People = ({ size }) => {
  const [marqueeRunningState, setMarqueeRunningState] = useState(25);

  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  function handleMouseOver() {
    setMarqueeRunningState(0);
  }
  function handleMouseLeave() {
    setMarqueeRunningState(25);
  }

  return (
    <div>
      <div>
        <Marquee key={key} velocity={marqueeRunningState}>
          {times(7, Number).map((id) => (
            <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} style={{ cursor: "pointer ", margin: "0rem !important", width: "19rem" }} className='home_course_card'>
              <Photo src={photos[id]} alt='' key={`marquee-example-people-${id}`} scale={scale * 1.3} />
              <div className='course_card_content'>
                <span className='trainer-info' style={{ color: "#636363", fontSize: "0.75rem" }}>
                  Trainer: Dr. Shreevastav KC
                </span>
                <h6 style={{ color: "#0f5288", fontSize: "1.45rem" }}>Machine Learning</h6>
                <p style={{ color: "#000000", fontSize: "0.85rem" }}>Skills you'll gain: Machine Learning,Probability & Statistics, Machine Learning Algorithms, General Statistics, Theoritical Knowledge.</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div style={{ height: scale * 60 }} />

      <div>
        <Marquee key={key} velocity={marqueeRunningState}>
          {times(7, Number).map((id) => (
            <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} style={{ cursor: "pointer ", margin: "0rem !important", width: "19rem" }} className='home_course_card'>
              <Photo src={photos[id]} alt='' key={`marquee-example-people-${id}`} scale={scale} />
              <div className='course_card_content'>
                <span className='trainer-info' style={{ color: "#636363", fontSize: "0.75rem" }}>
                  Dr. Shreevastav KC
                </span>
                <h6 style={{ color: "#0f5288", fontSize: "1.45rem" }}>Machine Learning</h6>
                <p style={{ color: "#000000", fontSize: "0.85rem" }}>Skills you'll gain: Machine Learning,Probability & Statistics, Machine Learning Algorithms, General Statistics, Theoritical Knowledge.</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default withSize()(People);
