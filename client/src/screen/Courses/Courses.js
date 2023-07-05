import React from "react";
import CoursesData from "./CoursesData";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@material-ui/core";
import CoursesItem from "components/CoursesItems/CoursesItem";

const Courses = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Our Courses</Typography>
          <Typography variant="subtitle1">Lorem ipsum dolor</Typography>
          <Stack direction="row">
            <TextField
              label="Search Course"
              id="searchCourse"
              variant="outlined"
              sx={{ borderRadius: "1.875rem 0rem 0rem 1.875rem" }}
            ></TextField>
            <Button
              variant="contained"
              sx={{ borderRadius: "0rem 1.875rem 1.875rem 0rem" }}
            >
              <IconButton>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
              Search
            </Button>
          </Stack>
        </header>
        <CoursesItem />
      </Container>
    </>
  );
};

export default Courses;
