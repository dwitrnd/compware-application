import React from "react";
import "./Partner.css";

// import ContactFrom from "../UI/ContactForm";
import CourseCard from "./PartnerCard";
import Agile from "assets/images/placement partner/agile-It-solution.png";
import Alternative from "assets/images/placement partner/Alternative-technology.png";
import Arhant from "assets/images/placement partner/arhant-solution.png";
import Cnc from "assets/images/placement partner/cnc-tech.png";
import Crasoft from "assets/images/placement partner/crasoft-solution.png";
import Cyberlink from "assets/images/placement partner/cyberlink.png";
import Deerhold from "assets/images/placement partner/deerhold.png";
import Delta from "assets/images/placement partner/DeltaTech.png";
import Diyalo from "assets/images/placement partner/Diyalo.png";
import Envision from "assets/images/placement partner/Envision.png";
import Esignature from "assets/images/placement partner/esignature.png";
import F1soft from "assets/images/placement partner/f1shoft.png";
import Inficare from "assets/images/placement partner/inficare.png";
import ItechNepal from "assets/images/placement partner/itechNepal.png";
import Leapfrog from "assets/images/placement partner/leapfrog.png";
import LogicaBean from "assets/images/placement partner/logica-bean.png";
import Softebenz from "assets/images/placement partner/softebnz.png";
import Stn from "assets/images/placement partner/STN.png";
import Versik from "assets/images/placement partner/verisk.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card_1_db = [
  {
    imgsrc: Agile,
    title: "Agile IT solutions",
  },
  {
    imgsrc: Alternative,
    title: "Alternative Technology",
  },
  {
    modify: "figma_modify",
    imgsrc: Arhant,
    title: "Archant Solutions",
  },
  {
    imgsrc: Cnc,
    title: "Cnc Tech",
  },
  {
    imgsrc: Crasoft,
    title: "Crasoft Solutions",
  },
  {
    imgsrc: Cyberlink,
    title: "Cyberlink",
  },
  {
    imgsrc: Deerhold,
    title: "Deerhold",
  },
];
const Card_2_db = [
  {
    imgsrc: Diyalo,
    title: "Diyalo",
  },
  {
    imgsrc: Envision,
    title: "Envision",
  },
  {
    imgsrc: Esignature,
    title: "Esignature",
  },
  {
    imgsrc: F1soft,
    title: "F1soft",
  },
  {
    imgsrc: Inficare,
    title: "Inficare",
  },
  {
    imgsrc: ItechNepal,
    title: "Itech Nepal",
  },
];

const Card_3_db = [
  {
    imgsrc: Softebenz,
    title: "Softbenz",
  },
  {
    imgsrc: Stn,
    title: "STN",
  },
  {
    imgsrc: Versik,
    title: "Versik",
  },
  {
    imgsrc: LogicaBean,
    title: "Logica Bean",
  },
  {
    imgsrc: Delta,
    title: "Delta Tech",
  },
  {
    imgsrc: Leapfrog,
    title: "Leapfrog",
  },
];

function Courses() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='courses' id='contact'>
      <div className='course-main'>
        <div className='left-course'>
          <div className='row-one row' id='row'>
            {Card_1_db.map((val, index) => {
              return <CourseCard key={index} imgsrc={val.imgsrc} title={val.title} modify={val.modify} />;
            })}
          </div>
          <div className='row-two row'>
            {Card_2_db.map((val, index) => {
              return <CourseCard key={index} imgsrc={val.imgsrc} title={val.title} modify={val.modify} />;
            })}
          </div>
          <div className='row-three row'>
            {Card_3_db.map((val, index) => {
              return <CourseCard key={index} imgsrc={val.imgsrc} title={val.title} modify={val.modify} />;
            })}
          </div>
        </div>
        <div className='placement-right-section'>
          <div className='all-text' data-aos='zoom-in-left'>
            <h2 style={{ fontSize: "2.5rem", color: "#0f5288" }}>
              Placement <br /> Partners
            </h2>
            <p>Several esteemed companies have partnered with us and experienced remarkable success with our graduates. They have not only found exceptional talent through our Placement Partner Program but also witnessed increased productivity and innovation within their teams.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
