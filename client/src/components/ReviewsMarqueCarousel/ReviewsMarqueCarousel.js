import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import Devops from "assets/images/courses/DevOps.jpg";
import DotNet from "assets/images/courses/Dot-Net.jpg";
import DataMining from "assets/images/courses/Data-Mining-and-Machine-Learning-Using-R-Programming.jpg";
import Flutter from "assets/images/courses/Flutter-App-Development.jpg";
import MERN from "assets/images/courses/Full-Stack-Web-Development---MERN-Stack.jpg";
import Laravel from "assets/images/courses/laravel.jpg";
import Excel from "assets/images/courses/Microsoft-Excel.jpg";
import Spss from "assets/images/courses/Statistical-Analysis-using-R.jpg";
import RProgramming from "assets/images/courses/Statistical-Analysis-using-R.jpg";
import QualityAssurance from "assets/images/courses/Software-Quality-Assurance.jpg";
import Python from "assets/images/courses/Programming-in-Python.jpg";
import Java from "assets/images/courses/Programming-In-Java.jpg";
import SpringBoot from "assets/images/courses/Programming-Full-Stack-Development-in-JAVA-with-Spring-Boot-and-React.jpg";
import PowerBI from "assets/images/courses/Power-BI.jpg";

import { Link } from "react-router-dom";

const Photo = styled.img`
  width: ${(props) => props.scale * 368}px;
  height: ${(props) => props.scale * 200}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;

  margin-left: ${(props) =>
    props.offset === "true" ? props.scale * 7 : props.scale * 87}px;
  margin-right: ${(props) =>
    props.offset === "true" ? props.scale * 80 : 0}px;
`;

const photos1 = [Devops, DotNet, DataMining, Flutter, MERN, Laravel, Excel];
const photos2 = [
  Spss,
  SpringBoot,
  Java,
  Python,
  PowerBI,
  QualityAssurance,
  RProgramming,
];

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
          {times(7, Number).map((id, index) => {
            console.log(index);
            return (
              <>
                <div
                  onMouseLeave={handleMouseLeave}
                  onMouseOver={handleMouseOver}
                  style={{
                    cursor: "pointer ",
                    margin: "0rem !important",
                    width: "19rem",
                  }}
                  className="home_course_card"
                >
                  {/* Link to specific pages */}
                  <Link to="/course-detail" target="_parent">
                    <Photo
                      src={photos1[id]}
                      alt=""
                      key={`marquee-example-people-${id}`}
                    />
                    <div className="course_card_content">
                      <h6
                        style={{
                          color: "#0f5288",
                          fontSize: "1.45rem",
                          textAlign: "center",
                        }}
                      >
                        Machine Learning
                      </h6>
                      <p
                        style={{
                          color: "#000000",
                          fontSize: "0.85rem",
                          padding: "0.75rem",
                        }}
                      >
                        Skills you'll gain: Machine Learning,Probability &
                        Statistics.
                      </p>
                    </div>
                  </Link>
                </div>
                <div
                  onMouseLeave={handleMouseLeave}
                  onMouseOver={handleMouseOver}
                  style={{
                    cursor: "pointer ",
                    // margin: "0rem",
                    marginTop: "1.5rem",
                    width: "19rem",
                  }}
                  className="home_course_card"
                >
                  <Link to="/course-detail" target="_parent">
                    <Photo
                      src={photos2[id]}
                      alt=""
                      key={`marquee-example-people-${id}`}
                    />
                    <div className="course_card_content">
                      <h6
                        style={{
                          color: "#0f5288",
                          fontSize: "1.45rem",
                          textAlign: "center",
                        }}
                      >
                        Machine Learning
                      </h6>
                      <p
                        style={{
                          color: "#393939",
                          fontSize: "0.85rem",
                          padding: "0.75rem",
                        }}
                      >
                        Skills you'll gain: Machine Learning,Probability &
                        Statistics
                      </p>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default withSize()(People);
