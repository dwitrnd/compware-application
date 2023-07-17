import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Typography } from "@mui/material";
import ExpressJs from "../../assets/images/courses/expressjs.png";
import { useState } from "react";
import CourseEnrollDialog from "components/CourseEnrollDialog/CourseEnrollDialog";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const CoursesItem = () => {
  const [open, setOpen] = useState(false);
  const course = "Javascript";
  const courseSchedule = "11AM - 2PM";
  const teachingHour = "120 Hours";
  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          height: "100%",
          borderRadius: "0.75rem",
          margin: "1.25rem",
          padding: "1.75rem",
          boxShadow: "6px 6px 12px 3px rgba(99, 99, 99, 0.20)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, md: 4 }}
        >
          <div>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              <img src={ExpressJs} style={{ height: "8rem", width: "8rem" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h6" color="primary">
                  {course}
                </Typography>
                <Typography variant="subtitle1">Duration</Typography>
                <Typography variant="subtitle1">{teachingHour}</Typography>
                <Typography variant="subtitle1">Schedule</Typography>
                <Typography variant="subtitle1">{courseSchedule}</Typography>
              </div>
            </Stack>
          </div>
          <div>
            <Typography textAlign="justify">
              A full-stack Javascript developer is a web programmer who uses
              Javascript, a popular computer programming language. These
              professionals write code in all three layers of a web-based
              application: the front-end, the back-end, and the database layer.
              The MERN stack refers to a collection of JavaScript-based web
              application development technologies. Mongo DB, Express JS, React
              JS/ Redux, and Node JS are all referred to as MERN (Mongo DB,
              Express JS, React JS/ Redux, and Node JS). MongoDB is a database
              system, NodeJS is a back-end runtime environment, ExpressJS is a
              back-end web framework, and React is a front-end framework, among
              these technologies. This course covers all of these topics in
              detail.
            </Typography>
            <Stack
              direction="row"
              alignItems="flex-end"
              justifyContent="flex-end"
              spacing={4}
              marginTop="3rem"
            >
              <Link to="/course-detail">
                <Button variant="outlined">Read More</Button>
              </Link>
              <CourseEnrollDialog courseName={course} />
            </Stack>
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default CoursesItem;
