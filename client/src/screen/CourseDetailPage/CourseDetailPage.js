import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ExpressJs from "../../assets/images/courses/expressjs.png";
import CourseEnrollDialog from "screen/Courses/components/CourseEnrollDialog/CourseEnrollDialog";
import CourseRecommendation from "./components/CourseRecommendation/CourseRecommendation";
import { constant } from "constants/contants";
import axios from "axios";
import { useParams } from "react-router-dom";
import RenderHtmlString from "components/RenderHtmlString/RenderHtmlString";

const CourseDetailPage = () => {
  const { id } = useParams();

  console.log(id);

  const [courseDetail, setCourseDetail] = useState({
    aboutCourse: "",
    courseCategory: "",
    courseIntro: "",
    courseLogo: "",
    courseName: "",
    coursePdf: "",
    imageAltText: "",
    imageName: "",
    slugTitle: "",
    duration: "",
    schedule: "",
  });

  const url = `${constant.base}/api/course/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.msg);
      setCourseDetail(res.data.msg);
    });
  }, []);

  return (
    <>
      <Container style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <section>
          <Typography
            variant='h3'
            color='primary'
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
                width: "85%",
                borderRadius: "0.75rem",
                margin: "1.25rem",
                padding: "1.75rem",
                boxShadow: "6px 6px 12px 3px rgba(99, 99, 99, 0.20)",
              }}
            >
              <Stack spacing={2} direction='row'>
                <div
                  style={{
                    width: "15rem",
                    backgroundImage: `url(${constant.base}/storage/${courseDetail.courseLogo})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <Stack spacing={2} direction='column'>
                  <Typography variant='h5' color='primary'>
                    {courseDetail.courseName}
                  </Typography>
                  {(() => {
                    if (courseDetail.duration && courseDetail.schedule) {
                      return (
                        <>
                          <>
                            <Typography variant='body1'>Duration:{courseDetail.duration && courseDetail.duration} </Typography>
                            <Typography variant='body1'>Schedule: {courseDetail.schedule && courseDetail.schedule}</Typography>)
                          </>
                        </>
                      );
                    }
                  })()}

                  <CourseEnrollDialog courseName={courseDetail.courseName} schedule={courseDetail.schedule && courseDetail.schedule} />
                </Stack>
              </Stack>
            </Box>
            <Typography variant='h6' className='course-info-header'></Typography>

            <RenderHtmlString htmlString={courseDetail.aboutCourse} />
          </Grid>
          <Grid md={4} className='grid-recommendation-item'>
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
              <Stack spacing={8} alignItems='center' justifyContent='space-around'>
                <Typography variant='h6' color='primary'>
                  Recommended for you
                </Typography>
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
