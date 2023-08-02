import { Stack } from "@mui/material";
import React from "react";
import ExpressJs from "../../../../assets/images/courses/expressjs.png";
import { Typography } from "@material-ui/core";
const CourseRecommendation = () => {
  const courseName = "Programming in JS";
  const courseDuration = "120 Hours";
  return (
    <>
      <Stack
        spacing={2}
        direction={{ sm: "column", md: "row" }}
        sx={{ marginTop: "1.5rem" }}
      >
        <img src={ExpressJs} style={{ height: "5.5rem", width: "5.5rem" }} />
        <Stack spacing={2} direction="column">
          <Typography variant="body1" color="primary">
            {courseName}
          </Typography>
          <Typography variant="subtitle2">
            Duration: {courseDuration}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default CourseRecommendation;
