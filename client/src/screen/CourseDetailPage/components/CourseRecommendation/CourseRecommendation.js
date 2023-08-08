import { Stack } from "@mui/material";
import React from "react";
import ExpressJs from "../../../../assets/images/courses/expressjs.png";
import { Typography } from "@material-ui/core";
const CourseRecommendation = ({ name, hour, image }) => {
  return (
    <>
      <Stack
        spacing={2}
        direction={{ sm: "column", md: "row" }}
        sx={{ marginTop: "1.5rem" }}
      >
        {/* <div
          style={{
            // background image
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "5rem",
            width: "5rem",
          }}
        ></div> */}

        <Stack spacing={2} direction="column">
          <Typography variant="body1" color="primary">
            {name}
          </Typography>
          <Typography variant="subtitle2">Duration: {hour} hours</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default CourseRecommendation;
