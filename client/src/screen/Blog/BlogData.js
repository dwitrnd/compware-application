import { Box, Button, Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import BlogImage from "../../assets/images/about-us-image.png";
import React from "react";

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
                borderRadius: "20px",
                // height: "530px",
                // minHeight: "300px", // Set a minimum height for smaller screens
                // maxHeight: "90vh",
              }}
            >
              <Container
                style={{
                  backgroundColor: "red",
                  height: "15rem",
                  borderRadius: "20px",
                  backgroundImage:
                    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Container>
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
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
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
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
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
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
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
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
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
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
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
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
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
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
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
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
              <Typography variant="h6">Topic1</Typography>
              <Typography
                variant="body1"
                style={{ maxHeight: "5rem", overflow: "hidden" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non magna diam.
              </Typography>
              <Button variant="contained">Read More</Button>
            </Box>
          </div>
        </Stack>
      </Stack>
    </>
  );
};
