import React from "react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import BlogRecommendedImage from "../../../assets/images/compware-gallery/compware-gallery-img1.jpg";

const RecentPost = ({ id, title, image }) => {
  return (
    <>
      <Container>
        <Stack direction="column" spacing={4}>
          <Link to={`/blog-page/${id}`}>
            <Stack
              direction={{ sm: "row", md: "column" }}
              spacing={2}
              justifyContent="center"
            >
              <img src={image} style={{ width: "70%" }} />
              <Typography variant="h6" color="primary">
                {title}
              </Typography>
            </Stack>
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default RecentPost;
