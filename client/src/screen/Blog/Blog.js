import { Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import BlogImage from "../../assets/images/about-us-image.png";
import React from "react";
import { BlogData } from "./BlogData";

const Blog = () => {
  return (
    <>
      <Container>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "40px",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="primary" className="gradient-text">
            Blog Posts
          </Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </section>
        <BlogData />
        <Stack
          spacing={2}
          direction="row"
          alignItems="flex-end"
          justifyContent="center"
          marginBottom={5}
        >
          <Pagination count={10} color="primary" />
        </Stack>
      </Container>
    </>
  );
};

export default Blog;
