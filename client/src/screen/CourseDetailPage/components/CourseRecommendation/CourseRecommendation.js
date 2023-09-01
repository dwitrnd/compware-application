import { Stack } from "@mui/material";
import React from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { constant } from "constants/contants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CourseRecommendation = ({ id, name, image }) => {
  const url = `${constant.base}/api/course`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.msg);
    });
  }, []);

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
        <a href={`/course-detail/${id}`}>
          <img src={image} style={{ width: "70%" }} />
          <Stack spacing={2} direction="column">
            <Typography variant="body1" color="primary">
              {name}
            </Typography>
          </Stack>
        </a>
      </Stack>
    </>
  );
};

export default CourseRecommendation;
