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
            <a href="#">Read More</a>
          </div>
        </Stack>
        <CourseEnrollDialog courseName={course} />
      </Box>
    </>
  );
};

export default CoursesItem;
