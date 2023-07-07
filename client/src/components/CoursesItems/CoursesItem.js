import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Stack, Typography } from "@mui/material";
import ExpressJs from "../../assets/images/courses/expressjs.png";
import { useState } from "react";
import CourseEnrollDialog from "components/CourseEnrollDialog/CourseEnrollDialog";

const CoursesItem = () => {
  const [open, setOpen] = useState(false);
  const course = "Javascript";
  let courseSchedule = "11AM - 2PM";
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
        <Grid container spacing={2}>
          <div xs={12} md={2}>
            <Stack direction="column">
              <img
                src={ExpressJs}
                style={{ height: "10rem", width: "10rem" }}
              />
              <Typography variant="h6" color="primary">
                {course}
              </Typography>
              <Typography variant="subtitle1">Duration:</Typography>
              <Typography variant="subtitle1">Schedule:</Typography>
            </Stack>
          </div>
          <Grid xs={12} md={10}>
            <Typography variant="body1" margin="0.75rem">
              Bachelor's Degree from Ratna Rajyalaxmi Campus (Tribhuvan
              University) in the faculty of humanities and social science, IT
              Apprenticeship program from CTEVT (Deerwalk Institute of
              Technology) and Level-3 Award in Education and Training (RQF) from
              Highfield, Eager for MENA (Middle East and North Africa); Supreme
              Committee for Delivery and Legacy, (FIFA World Cup Qatar 2022™) as
              HSSE Trainer and Facilitator, and Sifal Secondary School as an
              Admin Analyst. He is also working as a Sales and Marketing Manager
              at Logispark
            </Typography>
          </Grid>
        </Grid>
        <CourseEnrollDialog courseName={course} />
      </Box>
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
        <Stack direction="row" spacing={2}>
          <div>
            <Stack direction="column">
              <img
                src={ExpressJs}
                style={{ height: "10rem", width: "10rem" }}
              />
              <Typography variant="h6" color="primary">
                {course}
              </Typography>
              <Typography variant="subtitle1">Duration:</Typography>
              <Typography variant="subtitle1">Schedule:</Typography>
            </Stack>
          </div>
          <div>
            <Typography>
              Bachelor's Degree from Ratna Rajyalaxmi Campus (Tribhuvan
              University) in the faculty of humanities and social science, IT
              Apprenticeship program from CTEVT (Deerwalk Institute of
              Technology) and Level-3 Award in Education and Training (RQF) from
              Highfield, Eager for MENA (Middle East and North Africa); Supreme
              Committee for Delivery and Legacy, (FIFA World Cup Qatar 2022™) as
              HSSE Trainer and Facilitator, and Sifal Secondary School as an
              Admin Analyst. He is also working as a Sales and Marketing Manager
              at Logispark
            </Typography>
          </div>
        </Stack>
        <CourseEnrollDialog courseName={course} />
      </Box>
    </>
  );
};

export default CoursesItem;
