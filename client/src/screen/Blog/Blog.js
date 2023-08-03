import { Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import React from "react";
import { BlogData } from "./BlogData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";

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
          <Pagination
            count={5}
            color="primary"
            shape="rounded"
            style={{ marginTop: "3rem" }}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Blog;
