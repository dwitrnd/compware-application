import { Box, Button, Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import BlogImage from "../../assets/images/about-us-image.png";
import React from "react";
import { Link } from "react-router-dom";

export const BlogData = () => {
  const authorName = "Author Name";

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ marginTop: "2rem" }}
        spacing={2}
      >
        <img src={BlogImage} width="50%" />
        <Stack direction="column" spacing={4}>
          <Typography variant="h6" color="primary">
            DeerHack: Fawning Upon Innovation
          </Typography>
          <Typography variant="subtitle2">by:{authorName} </Typography>
          {/* Upload date remaining  */}
          <Typography variant="body1">
            DWIT Software Club, a prominent student-run club of Deerwalk
            Institute of Technology, is thrilled to announce to host a Hackathon
            "DeerHack 2023". This 36-hour-long event is going to take place from
            5th May 2023 - 7th May 2023 at Deerwalk Complex with the primary
            objective of developing a culture of innovation and idea-sharing
            within the IT industry. This hackathon aims to provide a unique
            opportunity for the participants to collaborate, learn and develop
            innovative solutions to real-world problems and promises to be a
            one-of-a-kind experience.
          </Typography>
          <Link to="/blog-page">
            <Button
              variant="outlined"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              Read More
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};
