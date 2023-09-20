import { Box, Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import BlogImage from "../../assets/images/Blog-Image/blog-image.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import BlogImage2 from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";
import RenderHtmlString from "components/RenderHtmlString/RenderHtmlString";

export const BlogData = ({ id, title, date, author, logo, article }) => {
  return (
    <>
      <Stack direction="column" spacing={4}>
        <Paper
          elevation={3}
          sx={{
            marginTop: "2rem",
            marginLeft: "2rem",
            padding: "1rem",
            marginRight: "2rem",
          }}
        >
          <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
            <div className="blog-image">
              <img
                src={logo}
                style={{
                  width: "100%",
                  height: "50vh",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="blog-information">
              <Typography variant="h6" style={{ fontSize: "25px" }}>
                {title}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {" "}
                <Typography
                  variant="subtitle1"
                  style={{ marginRight: "0.5rem" }}
                >
                  By:- {author}
                </Typography>{" "}
                <span style={{ marginRight: "0.5rem" }}>•</span>
                <Typography variant="subtitle1">Date:- {date}</Typography>{" "}
              </div>

              <Typography variant="body1" className="blog-content">
                <RenderHtmlString htmlString={article} />
              </Typography>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to={`/blog-page/${id}`}>
                  <Button
                    variant="contained"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};
