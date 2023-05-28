import React from "react";
import "./CourseCard.css";

export default function CourseCard(props) {
  return (
    <>
      {/* <div className="all-cards"></div> */}
      <div className='all-cards'>
        <img width='60vw' src={props.imgsrc} alt={props.title} className={props.modify} />
        <h4>{props.title}</h4>
        {/* {console.log(props)} */}
      </div>
    </>
  );
}
