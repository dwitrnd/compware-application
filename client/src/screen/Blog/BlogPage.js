import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import BlogRecommendedImage from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";
import Stack from "@mui/material/Stack";
import BlogImage from "../../assets/images/Blog-Image/blog-image.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { constant } from "constants/contants";
import axios from "axios";

const BlogPage = () => {
  const { id } = useParams();

  const [blogPage, setBlogPage] = useState({
    title: "",
    date: "",
    author: "",
    logo: "",
    article: "",
  });

  const url = `${constant.base}/api/blog/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setBlogPage(res.data.msg);
    });
  });
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
                {blogPage.title}
              </Typography>
            </header>
            <Container>
              <img
                src={blogPage.logo}
                width="100%"
                style={{ borderRadius: "16px" }}
              />

              <Typography variant="subtitle2" gutterBottom>
                -{blogPage.author}
              </Typography>
              <p style={{ textAlign: "justify" }}>{blogPage.article}</p>
            </Container>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack direction="column" spacing={2} marginTop="2rem">
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
