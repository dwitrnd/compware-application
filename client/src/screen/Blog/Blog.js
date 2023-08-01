import { Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
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
          <Typography variant="h3" color="primary">
            Blog Posts
          </Typography>
        </section>
        <BlogData />
        <Stack
          spacing={2}
          direction="row"
          alignItems="flex-end"
          justifyContent="center"
          marginTop={3}
          marginBottom={3}
        >
          <Pagination count={10} color="primary" />
        </Stack>
      </Container>
    </>
  );
};

export default Blog;
