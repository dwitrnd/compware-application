import { Box, Button, Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import BlogImage from "../../assets/images/about-us-image.png";
import React from "react";
import { Link } from "react-router-dom";

export const BlogData = () => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "25px 25px 25px 25px",
        }}
      >
        {/* First Row */}
        <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
        </Stack>

        {/* Second Row */}
        <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
        </Stack>
        {/* Third Row */}
        <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
                height: "530px",
                minHeight: "300px", // Set a minimum height for smaller screens
                maxHeight: "90vh",
              }}
            >
              <img src={BlogImage} width="100%" height="150px" />
              <Typography variant="h6">Blog Title</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Deerwalk Training Center: Nepal's Premier IT training Center.
                Start Learning Now
              </Typography>
              <Link to="/blog-page">
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </div>
        </Stack>
      </Stack>
    </>
  );
};
