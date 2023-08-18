import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Typography } from "@mui/material";
import ExpressJs from "../../../../assets/images/courses/expressjs.png";
import { useState } from "react";
import CourseEnrollDialog from "screen/Courses/components/CourseEnrollDialog/CourseEnrollDialog";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CoursesItem = ({ id, name, schedule, teachinghour, image, abstract }) => {
  const [open, setOpen] = useState(false);
  const courseName = "Javascript";
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
            <Stack direction={{ xs: "row", sm: "column" }} spacing={2}>
              <img src={image} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="primary"
                  fontWeight="bold"
                >
                  Schedule
                </Typography>
                <Typography variant="subtitle1">Morning</Typography>
                <Typography variant="subtitle1">Afternoon</Typography>
                <Typography variant="subtitle1">Evening</Typography>
              </div>
            </Stack>
          </div>
          <div>
            <Typography variant="h6" color="primary">
              {name}
            </Typography>

            <Typography textAlign="justify">{abstract}</Typography>
            <Stack
              direction="row"
              alignItems="flex-end"
              justifyContent="flex-end"
              spacing={4}
              marginTop="3rem"
            >
              <Link to={`/course-detail/${id}`}>
                <Button variant="outlined">Read More</Button>
              </Link>

              <CourseEnrollDialog courseName={name} schedule={schedule} />
            </Stack>
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default CoursesItem;
