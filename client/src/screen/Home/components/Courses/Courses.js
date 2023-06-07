import React from "react";
import "./Courses.css";

// import ContactFrom from "../UI/ContactForm";
import CourseCard from "./CourseCard";

import Adobe from "../../../../assets/images/courses/adobe.png";
import Css from "../../../../assets/images/courses/css.png";
import Figma from "../../../../assets/images/courses/figma.png";
import Html from "../../../../assets/images/courses/html.png";
import Ui from "../../../../assets/images/courses/ui.png";
import Js from "../../../../assets/images/courses/js.png";
import Bootstrap from "../../../../assets/images/courses/bootstrap.png";
import Es6 from "../../../../assets/images/courses/es6.png";
import Gsap from "../../../../assets/images/courses/gsap.png";
import jsx from "../../../../assets/images/courses/jsx.png";
import Express from "../../../../assets/images/courses/expressjs.png";
import Mongo from "../../../../assets/images/courses/mongodb.png";
import Node from "../../../../assets/images/courses/node.png";
import Npm from "../../../../assets/images/courses/npm.png";
import ReactLogo from "../../../../assets/images/courses/react.png";

const Card_1_db = [
  {
    imgsrc: Adobe,
    title: "Adobe XD",
  },
  {
    imgsrc: Css,
    title: "CSS",
  },
  {
    modify: "figma_modify",
    imgsrc: Figma,
    title: "Figma",
  },
  {
    imgsrc: Html,
    title: "HTML",
  },
  {
    imgsrc: Ui,
    title: "UI/UX",
  },
  {
    imgsrc: Adobe,
    title: "Adobe XD",
  },
  {
    imgsrc: Css,
    title: "CSS",
  },
  {
    imgsrc: Figma,
    title: "Figma",
  },
];
const Card_2_db = [
  {
    imgsrc: Js,
    title: "JavaScript",
  },
  {
    imgsrc: Bootstrap,
    title: "Bootstrap",
  },
  {
    imgsrc: Es6,
    title: "ES6",
  },
  {
    imgsrc: Gsap,
    title: "GSAP",
  },
  {
    imgsrc: jsx,
    title: "JSX",
  },
  {
    imgsrc: Js,
    title: "JavaScript",
  },
  {
    imgsrc: Bootstrap,
    title: "Bootstrap",
  },
  {
    imgsrc: Es6,
    title: "ES6",
  },
];

const Card_3_db = [
  {
    imgsrc: Express,
    title: "Express JS",
  },
  {
    imgsrc: Mongo,
    title: "Mongo DB",
  },
  {
    imgsrc: Node,
    title: "Node JS",
  },
  {
    imgsrc: Npm,
    title: "npm",
  },
  {
    imgsrc: ReactLogo,
    title: "React Js",
  },
  {
    imgsrc: Express,
    title: "Express JS",
  },
  {
    imgsrc: Mongo,
    title: "Mongo DB",
  },
  {
    imgsrc: Node,
    title: "Node JS",
  },
];

function Courses() {
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
        <div style={{ background: "#d1d1d1", width: "50%" }}>Hello</div>
      </div>
    </div>
  );
}

export default Courses;
