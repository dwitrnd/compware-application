import { Box, Button, Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import BlogImage from "../../assets/images/Blog-Image/blog-image.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogImage2 from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";

export const BlogData = ({ id, title, date, author, logo, article }) => {
  const [truncated, setTruncated] = useState(true);
  const maxLines = 3; // Maximum number of lines to display

  const toggleTruncate = () => {
    setTruncated(!truncated);
  };
  return (
    <>
      <Stack direction="column" spacing={4}>
        <Stack
          direction={{ sm: "column", md: "row" }}
          sx={{ marginTop: "2rem" }}
          spacing={2}
        >
          <img src={logo} height="100%" width="38.5%" className="blog-image" />
          <Stack direction="column" spacing={4}>
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
            <span>
              {" "}
              <Typography variant="subtitle2">by:- {author}</Typography>{" "}
              <Typography variant="subtitle 2">Date: {date}</Typography>{" "}
            </span>

            <Typography variant="body1" className="blog-content">
              {article}
            </Typography>
            <Link to={`/blog-page/${id}`}>
              <Button
                variant="outlined"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                Read More
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
