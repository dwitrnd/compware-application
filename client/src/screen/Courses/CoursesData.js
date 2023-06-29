import React from "react";
import AdobeLogo from "../../assets/images/courses/adobe.png";
import BootstrapLogo from "../../assets/images/courses/bootstrap.png";
import CssLogo from "../../assets/images/courses/css.png";
import FigmaLogo from "../../assets/images/courses/figma.png";
import NodeLogo from "../../assets/images/courses/node.png";
import ReactLogo from "../../assets/images/courses/react.png";
import { Grid } from "@mui/material";

const CoursesData = () => {
  const coursesImages = [
    <img src={AdobeLogo} height="100" />,
    <img src={CssLogo} />,
    <img src={FigmaLogo} />,
    <img src={NodeLogo} />,
    <img src={ReactLogo} />,
  ];
  return (
    <>
      {coursesImages.map((courseImage) => {
        return (
          <Grid container>
            <Grid item>{courseImage}</Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default CoursesData;
