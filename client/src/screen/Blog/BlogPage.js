import React from "react";
import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import BlogRecommendedImage from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";
import Stack from "@mui/material/Stack";
import BlogImage from "../../assets/images/Blog-Image/blog-image.png";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
      <Container style={{ marginTop: "3rem", marginBottom: "5rem" }}>
        <Grid container columnSpacing={2}>
          <Grid
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <header>
              <Typography variant="h3" color="primary" marginBottom="1rem">
                Blog Page
              </Typography>
            </header>
            <Container>
              <img
                src={BlogImage}
                width="100%"
                style={{ borderRadius: "16px" }}
              />

              <Typography variant="subtitle2" gutterBottom>
                -Bidhi Raghubanshi
              </Typography>
              <p style={{ textAlign: "justify" }}>
                DWIT Software Club, a prominent student-run club of Deerwalk
                Institute of Technology, is thrilled to announce to host a
                Hackathon "DeerHack 2023". This 36-hour-long event is going to
                take place from 5th May 2023 - 7th May 2023 at Deerwalk Complex
                with the primary objective of developing a culture of innovation
                and idea-sharing within the IT industry. This hackathon aims to
                provide a unique opportunity for the participants to
                collaborate, learn and develop innovative solutions to
                real-world problems and promises to be a one-of-a-kind
                experience, providing a platform to showcase their skills and
                engage with like-minded individuals in a competitive
                environment. DWIT Software Club hopes that DeerHack will inspire
                and motivate the participants to explore new technologies,
                ideas, and their field of interest and push their limits to
                contribute to the growth and development of the IT industry in
                Nepal and beyond. DeerHack 2023 is a platform that provides an
                excellent opportunity to expand the network and interact with
                industry specialists while having access to highly skilled
                mentors which will help the participants to gain valuable
                insights and feedback on their projects. On 10th March, Friday,
                The meeting between the organizers and the volunteers were held
                where the volunteers were assigned task based on their interests
                which includes areas mentioned below: Outreach Design and Social
                Media Technicalities Logistics Event Flow Likewise, the
                participants can choose from four different tracks each with a
                unique focus. The tracks include: Data Science/Machine Learning
                Blockchain Interactive Innovation Open Innovation By offering
                these diverse tracks this hackathon aims to appeal to a wide
                range of participants and encourage them to explore new areas of
                interest and show their creative skills. Join DeerHack for an
                unforgettable experience of learning, collaboration, and
                innovation, and be part of shaping the future of technology.
                Registration can be done via their website.
              </p>
            </Container>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h5" color="primary">
                Recent Post
              </Typography>

              <Container>
                <Stack direction="column" spacing={4}>
                  <Link to="/blog-page-2">
                    <Stack
                      direction={{ sm: "row", md: "column" }}
                      spacing={2}
                      justifyContent="center"
                    >
                      <img
                        src={BlogRecommendedImage}
                        style={{ width: "70%" }}
                      />
                      <Typography variant="h6" color="primary">
                        About Deerwalk Training Center
                      </Typography>
                    </Stack>
                  </Link>
                  <Link to="/blog-page-2">
                    <Stack
                      direction={{ sm: "row", md: "column" }}
                      spacing={2}
                      justifyContent="center"
                    >
                      <img
                        src={BlogRecommendedImage}
                        style={{ width: "70%" }}
                      />
                      <Typography variant="h6" color="primary">
                        About Deerwalk Training Center
                      </Typography>
                    </Stack>
                  </Link>
                  <Link to="/blog-page-2">
                    <Stack
                      direction={{ sm: "row", md: "column" }}
                      spacing={2}
                      justifyContent="center"
                    >
                      <img
                        src={BlogRecommendedImage}
                        style={{ width: "70%" }}
                      />
                      <Typography variant="h6" color="primary">
                        About Deerwalk Training Center
                      </Typography>
                    </Stack>
                  </Link>
                </Stack>
              </Container>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogPage;
