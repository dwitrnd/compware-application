import { Box, Button, Container, Typography } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import BlogImage from "../../assets/images/Blog-Image/blog-image.png";
import React from "react";
import { Link } from "react-router-dom";
import BlogImage2 from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";

export const BlogData = () => {
  const authorName1 = "Bidhi Raghubanshi";
  const authorName2 = "Roshan Khadka";

  return (
    <>
      <Stack direction="column" spacing={4}>
        <Stack
          direction={{ sm: "column", md: "row" }}
          sx={{ marginTop: "2rem" }}
          spacing={2}
        >
          <img src={BlogImage} height="100%" />
          <Stack direction="column" spacing={4}>
            <Typography variant="h6" color="primary">
              DeerHack: Fawning Upon Innovation
            </Typography>
            <Typography variant="subtitle2">by:{authorName1} </Typography>
            {/* Upload date remaining  */}
            <Typography variant="body1">
              DWIT Software Club, a prominent student-run club of Deerwalk
              Institute of Technology, is thrilled to announce to host a
              Hackathon "DeerHack 2023". This 36-hour-long event is going to
              take place from 5th May 2023 - 7th May 2023 at Deerwalk Complex
              with the primary objective of developing a culture of innovation
              and idea-sharing within the IT industry. This hackathon aims to
              provide a unique opportunity for the participants to collaborate.
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
        {/* Second Blog */}
        <Stack
          direction={{ sm: "column", md: "row" }}
          sx={{ marginTop: "2rem" }}
          spacing={2}
        >
          <img src={BlogImage2} width="38.5%" />
          <Stack direction="column" spacing={4}>
            <Typography variant="h6" color="primary">
              About Deerwalk Training Center
            </Typography>
            <Typography variant="subtitle2">by:{authorName2} </Typography>
            {/* Upload date remaining  */}
            <Typography variant="body1">
              We are proud to be recognized as a premier training institute in
              Nepal, offering specialized courses in Java and Python programming
              languages, as well as comprehensive data analytics-based computer
              courses. Our curriculum is meticulously designed to cater to the
              evolving demands of the industry, and we continuously update our
              course offerings to reflect the latest developments in the field
              of technology.
            </Typography>
            <Link to="/blog-page-2">
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
