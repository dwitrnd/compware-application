import { Typography } from "@material-ui/core";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ExpressJs from "../../assets/images/courses/expressjs.png";
import CourseEnrollDialog from "screen/Courses/components/CourseEnrollDialog/CourseEnrollDialog";
import CourseRecommendation from "./components/CourseRecommendation/CourseRecommendation";

const CourseDetailPage = () => {
  const courseName = "Programming in JS";
  const courseDuration = "120 Hours";
  const courseSchedule = "11AM-1PM, 5PM-7PM ";
  return (
    <>
      <Container style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <section>
          <Typography
            variant="h3"
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Course Detail
          </Typography>
        </section>
        <Grid container spacing={2}>
          <Grid md={8}>
            <Box
              sx={{
                display: "inline-block",
                height: "15.875rem",
                width: "85%",
                borderRadius: "0.75rem",
                margin: "1.25rem",
                padding: "1.75rem",
                boxShadow: "6px 6px 12px 3px rgba(99, 99, 99, 0.20)",
              }}
            >
              <Stack spacing={2} direction="row">
                <img
                  src={ExpressJs}
                  style={{ height: "8rem", width: "8rem" }}
                />
                <Stack spacing={2} direction="column">
                  <Typography variant="h5" color="primary">
                    {courseName}
                  </Typography>
                  <Typography variant="body1">
                    Duration:{courseDuration}{" "}
                  </Typography>
                  <Typography variant="body1">
                    Schedule: {courseSchedule}
                  </Typography>
                  <CourseEnrollDialog
                    courseName={courseName}
                    schedule={courseSchedule}
                  />
                </Stack>
              </Stack>
            </Box>
            <Typography variant="h6" className="course-info-header">
              Course Synopsis
            </Typography>
            <Typography variant="body1">
              The Java course for beginners is designed for people who wish to
              learn how to produce meaning ful Java code, how to interpret JAVA
              code written by others, and how to convert a literary description
              of a problem (requirement) to an application / library in Java.
              This is a fundamental level course is also suitable for people
              with no prior programming experience who intend to work as a
              professional Java engineer in the future.
            </Typography>
            <Typography variant="h6" className="course-info-header">
              Required Textbooks
            </Typography>
            <ol>
              <li>
                David J. Eck, “Introduction to Programming using Java”, Hobart
                and William Smith Colleges.
              </li>
              <li>
                Patrick Naughton & Herbert Schildt, “Java 2: The Complete
                Reference”, Osborne Publishing.
              </li>
            </ol>
            <Typography variant="h6" className="course-info-header">
              Completion Criteria
            </Typography>
            <Typography variant="body1">
              After fulfilling all of the following criteria, the student will
              be deemed to have finished the Module:
            </Typography>
            <ol>
              <li>Has attended 90% of all classes held.</li>
              <li>Has received an average grade of 80% on all assignments.</li>
              <li>Has received an average of 60% in assessments.</li>
              <li>
                The tutor believes the student has grasped all of the concepts.
              </li>
            </ol>
            <Typography variant="h6">Prerequisites</Typography>
            <ul>
              <li>
                Fundamental understanding of programming, bits/bytes,
                procedures, classes, and computer architecture. It's absolutely
                acceptable if you only have a theoretical understanding of
                programming, but you should be certain about what programming is
                and what you intend to gain from this session.
              </li>
              <li>
                If you are only interested in theory and have no
                interest/patience in spending at least 10 hours every week
                throughout the duration of the course, then this course might
                not be for you.
              </li>
              <li>
                If you have absolutely no idea about programming or do not see
                yourself doing programming in the next six-odd months, then this
                class may not be for you.
              </li>
            </ul>
          </Grid>
          <Grid md={4} className="grid-recommendation-item">
            <Box
              sx={{
                display: "inline-block",
                height: "100%",
                width: "85%",
                borderRadius: "0.75rem",
                margin: "1.25rem",
                padding: "1.75rem",
                boxShadow: "6px 6px 12px 3px rgba(99, 99, 99, 0.20)",
              }}
            >
              <Stack
                spacing={8}
                alignItems="center"
                justifyContent="space-around"
              >
                <Typography variant="h6" color="primary">
                  Recommended for you
                </Typography>
                <CourseRecommendation />
                <CourseRecommendation />
                <CourseRecommendation />
                <CourseRecommendation />
                <CourseRecommendation />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CourseDetailPage;
