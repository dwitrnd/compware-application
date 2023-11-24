import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Box, Button, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CourseEnrollDialog from "screen/Courses/components/CourseEnrollDialog/CourseEnrollDialog";
import CourseRecommendation from "./components/CourseRecommendation/CourseRecommendation";
import { constant } from "constants/contants";
import axios from "axios";
import { useParams } from "react-router-dom";
import RenderHtmlString from "components/RenderHtmlString/RenderHtmlString";

const CourseDetailPage = () => {
  const { id } = useParams();

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
  const recommendationUrl = `${constant.base}/api/course`;
  const [recommendationTableData, setRecommendationTableData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setCourseDetail(res.data.msg);
    });
  }, []);

  useEffect(() => {
    axios.get(recommendationUrl).then((res) => {
      setRecommendationTableData(res.data.msg);
    });
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const getRandomRecommendations = () => {
    // Shuffle the recommendationTableData array
    const shuffledRecommendations = shuffleArray(recommendationTableData);
    // Slice the first 6 elements (random recommendations)
    return shuffledRecommendations.slice(0, 6);
  };

  const randomRecommendations = getRandomRecommendations();

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
            Course Details
          </Typography>
        </section>
        <Grid container spacing={2}>
          <Grid md={8}>
            <Box
              sx={{
                width: "85%",
                borderRadius: "0.75rem",
                margin: "1.25rem",
                padding: "1.75rem",
                boxShadow: "6px 6px 12px 3px rgba(99, 99, 99, 0.20)",
              }}
            >
              <Stack spacing={2} direction={{ sm: "column", md: "row" }}>
                <div>
                  <img
                    src={`${constant.base}/storage/${courseDetail.courseLogo}`}
                    className="course-image"
                    style={{ width: "20rem" }}
                  />
                </div>
                <Stack spacing={2} direction="column">
                  <Typography variant="h5" color="primary">
                    {courseDetail.courseName}
                  </Typography>
                  {(() => {
                    if (courseDetail.duration && courseDetail.schedule) {
                      return (
                        <>
                          <>
                            <Typography variant="body1">
                              Duration:
                              {courseDetail.duration &&
                                courseDetail.duration}{" "}
                            </Typography>
                            <Typography variant="body1">
                              Schedule:{" "}
                              {courseDetail.schedule && courseDetail.schedule}
                            </Typography>
                            )
                          </>
                        </>
                      );
                    }
                  })()}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <CourseEnrollDialog
                      courseName={courseDetail.courseName}
                      schedule={courseDetail.schedule && courseDetail.schedule}
                    />

                    <a
                      href={`${constant.base}/storage/${courseDetail.coursePdf}`}
                      download
                    >
                      <Button variant="contained" color="primary">
                        View Details
                      </Button>
                    </a>
                  </div>
                </Stack>
              </Stack>
            </Box>
            <Typography
              variant="h6"
              className="course-info-header"
            ></Typography>

            <RenderHtmlString htmlString={courseDetail.aboutCourse} />
          </Grid>
          <Grid md={4} className="grid-recommendation-item">
            <Box
              sx={{
                display: "inline-block",
                height: "100%",
                width: "100%",
                borderRadius: "0.75rem",
                margin: "1.25rem",

                boxShadow: "6px 6px 12px 3px rgba(99, 99, 99, 0.20)",
              }}
            >
              <Stack
                spacing={8}
                alignItems="center"
                justifyContent="space-around"
                marginTop="2rem"
              >
                <Typography variant="h6" color="primary">
                  Courses You Might Like
                </Typography>
                {randomRecommendations.map((recommendation) => (
                  <CourseRecommendation
                    key={recommendation._id}
                    id={recommendation._id}
                    slugTitle={recommendation.slugTitle}
                    name={recommendation.courseName}
                    image={`${constant.base}/storage/${recommendation.courseLogo}`}
                    alt={recommendation.imageName}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CourseDetailPage;
