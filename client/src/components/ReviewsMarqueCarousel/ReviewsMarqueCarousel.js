import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";
import { constant } from "constants/contants";
import axios from "axios";

import Devops from "assets/images/courses/DevOps.jpg";
import DotNet from "assets/images/courses/Dot-Net.jpg";
import DataMining from "assets/images/courses/Data-Mining-and-Machine-Learning-Using-R-Programming.jpg";
import Flutter from "assets/images/courses/Flutter-App-Development.jpg";
import MERN from "assets/images/courses/Full-Stack-Web-Development---MERN-Stack.jpg";
import Laravel from "assets/images/courses/laravel.jpg";
import Excel from "assets/images/courses/Microsoft-Excel.jpg";
import Spss from "assets/images/courses/Statistical-Package-for-the-Social-Sciences-(SPSS).jpg";
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
  const [marqueeRunningState, setMarqueeRunningState] = useState(15);

  const [key, setKey] = useState(nanoid());

  const [tableData, setTableData] = useState([
    {
      courseName: "",
      courseCategory: "",
    },
  ]);

  const url = `${constant.base}/api/course`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.msg);
      setTableData(res.data.msg);
    });
  }, []);

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
    setMarqueeRunningState(15);
  }

  return (
    <div>
      <div>
        <Marquee key={key} velocity={marqueeRunningState}>
          {tableData.map((item, index) => {
            console.log(index);

            {
              /*  return below for half length of tableData  */
            }

            if (index > 30) {
              return (
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
                  <Link to={`/course-detail/${item._id}`} target="_parent">
                    <Photo
                      src={`${constant.base}/storage/${item.courseLogo}`}
                      alt=""
                      key={`marquee-example-people-${index}`}
                    />
                    <div className="course_card_content">
                      <h6
                        style={{
                          color: "#0f5288",
                          fontSize: "1.45rem",
                          textAlign: "center",
                        }}
                      >
                        {item.courseName && item.courseName}
                      </h6>
                      <p
                        style={{
                          color: "#000000",
                          fontSize: "0.85rem",
                          padding: "0.75rem",
                        }}
                      >
                        Category: {item.courseCategory && item.courseCategory}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default withSize()(People);
