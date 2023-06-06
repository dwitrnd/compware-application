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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                padding: "25px 25px 25px 25px",
              }}
            >
              <img src={BlogImage} width="200px" height="150px" />
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
