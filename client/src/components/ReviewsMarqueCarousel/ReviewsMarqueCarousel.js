import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import TrianingCourse1 from "../../assets/images/training-courses/dot-net-programming.jpg";

import Oracle from "assets/images/training-courses/oracle.jpg";
import QualityAssurance from "assets/images/training-courses/quality-assurance.jpg";
import GIS from "assets/images/training-courses/gis.jpg";
import Maya from "assets/images/training-courses/maya.jpg";
import FinancialAccounting from "assets/images/training-courses/financial-accounting.jpg";
import TheCompleteWebDevelopment from "assets/images/training-courses/the-complete-webdevelopent.jpg";
import IntroductionToShareMarket from "assets/images/training-courses/the-complete-webdevelopent.jpg";
import CCNA from "assets/images/training-courses/CCNA.jpg";
import DiplomaInPython from "assets/images/training-courses/Python.jpg";
import CProgramming from "assets/images/training-courses/c-programming.jpg";
import MicrosoftSqlServer from "assets/images/training-courses/microsoft-sql-server.jpg";
import StatisticalAnalysis from "assets/images/training-courses/statistical-analysis.jpg";
import AutoCAD from "assets/images/training-courses/autocad.jpg";
import DotProgramming from "assets/images/training-courses/dot-net-programming.jpg";
import GraphicDesigning from "assets/images/training-courses/graphic-designing.jpg";
import FullStackDevelopment from "assets/images/training-courses/fullstack.jpg";
import Photography from "assets/images/training-courses/photography.jpg";
import RegisteredProductOwner from "assets/images/training-courses/registered-product-owner.jpg";
import DigitalMarketing from "assets/images/training-courses/digital-marketing.jpg";
import Management from "assets/images/training-courses/management.jpg";
import PHP from "assets/images/training-courses/programming-in-php-mysql.jpg";
import WebDevelopmentAndMultimedia from "assets/images/training-courses/webpage-and-multimedia.jpg";
import AppliedDataAnalysis from "assets/images/training-courses/spss.jpg";
import CSITEntrance from "assets/images/training-courses/csit-entrance-preparation.jpg";
import DOTNET from "assets/images/training-courses/dot-net-programming.jpg";
import ProgrammingInJava from "assets/images/training-courses/java.jpg";
import android from "assets/images/training-courses/android.jpg";
import angular from "assets/images/training-courses/angular.jpg";
import datascience from "assets/images/training-courses/datascience.jpg";
import AdvanceOfficePackage from "assets/images/training-courses/advance-office-package.jpg";
import RegisteredScrumMaster from "assets/images/training-courses/registered-scrum-master.jpg";
import FullStackWebDevelopment from "assets/images/training-courses/fullstack-web-development.jpg";
import TechnicalWriting from "assets/images/training-courses/technical-writing.jpg";
import CyberSecurity from "assets/images/training-courses/cybersecurity.jpg";
import AWSCloudPractitioner from "assets/images/training-courses/aws.jpg";
import JavaProgram from "assets/images/training-courses/diploma-in-java-program.png";
import ReactNative from "assets/images/training-courses/react-native.jpg";
import DevOps from "assets/images/training-courses/DevOps.jpg";
import REDHat from "assets/images/training-courses/Red Hat-Certified Engineer.jpg";
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

const photos = [
  Oracle,
  QualityAssurance,
  GIS,
  Maya,
  FinancialAccounting,
  TheCompleteWebDevelopment,
  IntroductionToShareMarket,
  CCNA,
  DiplomaInPython,
  CProgramming,
  MicrosoftSqlServer,
  StatisticalAnalysis,
  AutoCAD,
  DotProgramming,
  GraphicDesigning,
  FullStackDevelopment,
  Photography,
  RegisteredProductOwner,
  DigitalMarketing,
  Management,
  PHP,
  WebDevelopmentAndMultimedia,
  AppliedDataAnalysis,
  CSITEntrance,
  DOTNET,
  ProgrammingInJava,
  android,
  angular,
  datascience,
  AdvanceOfficePackage,
  RegisteredScrumMaster,
  FullStackWebDevelopment,
  TechnicalWriting,
  CyberSecurity,
  AWSCloudPractitioner,
  JavaProgram,
  ReactNative,
  DevOps,
  REDHat,
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
                      src={photos[id]}
                      alt=""
                      key={`marquee-example-people-${id}`}
                      scale={scale * 1.3}
                    />
                    <div className="course_card_content">
                      <span
                        className="trainer-info"
                        style={{ color: "#636363", fontSize: "0.75rem" }}
                      >
                        Trainer: Dr. Shreevastav KC
                      </span>
                      <h6 style={{ color: "#0f5288", fontSize: "1.45rem" }}>
                        Machine Learning
                      </h6>
                      <p style={{ color: "#000000", fontSize: "0.85rem" }}>
                        Skills you'll gain: Machine Learning,Probability &
                        Statistics, Machine Learning Algorithms, General
                        Statistics, Theoritical Knowledge.
                      </p>
                    </div>
                  </Link>
                </div>
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
                  <Link to="/course-detail" target="_parent">
                    <Photo
                      src={photos[id]}
                      alt=""
                      key={`marquee-example-people-${id}`}
                      scale={scale * 1.3}
                    />
                    <div className="course_card_content">
                      <span
                        className="trainer-info"
                        style={{ color: "#636363", fontSize: "0.75rem" }}
                      >
                        Trainer: Dr. Shreevastav KC
                      </span>
                      <h6 style={{ color: "#0f5288", fontSize: "1.45rem" }}>
                        Machine Learning
                      </h6>
                      <p style={{ color: "#000000", fontSize: "0.85rem" }}>
                        Skills you'll gain: Machine Learning,Probability &
                        Statistics, Machine Learning Algorithms, General
                        Statistics, Theoritical Knowledge.
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
