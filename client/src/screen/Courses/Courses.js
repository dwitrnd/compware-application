import React from "react";
import {
  Button,
  FormControl,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@material-ui/core";
import CoursesItem from "screen/Courses/components/CoursesItems/CoursesItem";
import Pagination from "@mui/material/Pagination";

import styled from "styled-components";

const Courses = () => {
  const FilterCardContainer = styled.div`
    display: flex;
    margin-top: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 550px) {
      display: none;
    }
  `;

  const FilterCards = styled.div`
    display: inline;
    font-size: 1.1rem;
    background: #0f5288 !important;
    color: white;
    margin: 0 5px;
    padding: 15px 18px;
    font-size: 16px;
    font-weight: bold;

    border-radius: 50px;

    &:hover {
      background: #e2e2e2 !important;
      color: #0f5288;
    }
  `;

  return (
    <main id="courses-page">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "md",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" color="primary">
            Our Courses
          </Typography>
          <Container style={{ width: "60vw", margin: "0.5rem" }}>
            <Stack direction="row" justifyContent="center">
              <div style={{ width: "100%" }}>
                <TextField
                  label="Search Course"
                  id="searchCourse"
                  variant="outlined"
                  fullWidth
                  style={{ width: "100%" }}
                ></TextField>
              </div>
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
            <FilterCardContainer>
              <FilterCards style={{ margin: "15px" }}>Programming</FilterCards>
              <FilterCards style={{ margin: "15px" }}>
                Graphic Design
              </FilterCards>
              <FilterCards style={{ margin: "15px" }}>Diploma</FilterCards>
              <FilterCards style={{ margin: "15px" }}>Short Term</FilterCards>
            </FilterCardContainer>
          </Container>
        </header>
        <CoursesItem />
        <CoursesItem />

        <Pagination
          count={5}
          color="primary"
          shape="rounded"
          style={{ marginTop: "3rem" }}
        />
      </Container>
    </main>
  );
};

export default Courses;
