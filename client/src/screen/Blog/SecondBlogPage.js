import React from "react";
import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import BlogImage from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";
import Stack from "@mui/material/Stack";
import BlogRecommendedImage from "../../assets/images/Blog-Image/blog-image.png";
import { Link } from "react-router-dom";

const SecondBlogPage = () => {
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
                -Roshan Khadka
              </Typography>
              <p style={{ textAlign: "justify" }}>
                We are proud to be recognized as a premier training institute in
                Nepal, offering specialized courses in Java and Python
                programming languages, as well as comprehensive data
                analytics-based computer courses. Our curriculum is meticulously
                designed to cater to the evolving demands of the industry, and
                we continuously update our course offerings to reflect the
                latest developments in the field of technology. At our
                institute, we strive to provide a conducive learning environment
                that fosters a passion for technology and encourages innovation.
                Our team of seasoned professionals are highly experienced in
                their respective fields and possess a wealth of knowledge and
                expertise that they are eager to share with our students. We
                strongly believe that continuous learning and professional
                development are key to personal and organizational growth. Our
                mission is to empower individuals to unlock their full potential
                and to equip them with the skills and knowledge necessary to
                succeed in their careers. We are dedicated to helping our
                students develop the tools and mindset they need to tackle
                real-world challenges and make meaningful contributions to their
                respective industries.
              </p>
            </Container>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack direction="column" spacing={2} marginTop="2rem">
              <Typography variant="h5" color="primary" alignItems="center">
                Recent Post
              </Typography>

              <Container>
                <Stack direction="column" spacing={4}>
                  <Link to="/blog-page">
                    <Stack
                      direction={{ sm: "row", md: "column" }}
                      spacing={2}
                      justifyContent="center"
                    >
                      <img
                        src={BlogRecommendedImage}
                        style={{ width: "100%" }}
                      />
                      <Typography variant="h6" color="primary">
                        DeerHack: Fawning Over Innovation
                      </Typography>
                    </Stack>
                  </Link>
                  <Link to="/blog-page">
                    <Stack
                      direction={{ sm: "row", md: "column" }}
                      spacing={2}
                      justifyContent="center"
                    >
                      <img
                        src={BlogRecommendedImage}
                        style={{ width: "100%" }}
                      />
                      <Typography variant="h6" color="primary">
                        DeerHack: Fawning Over Innovation
                      </Typography>
                    </Stack>
                  </Link>
                  <Link to="/blog-page">
                    <Stack
                      direction={{ sm: "row", md: "column" }}
                      spacing={2}
                      justifyContent="center"
                    >
                      <img
                        src={BlogRecommendedImage}
                        style={{ width: "100%" }}
                      />
                      <Typography variant="h6" color="primary">
                        DeerHack: Fawning Over Innovation
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

export default SecondBlogPage;
