import React from "react";
import { Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@material-ui/core";
import CoursesItem from "screen/Courses/components/CoursesItems/CoursesItem";
import Pagination from "@mui/material/Pagination";
import { constant } from "constants/contants";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0f5288",
};

const Courses = () => {
  const siteurl = useParams();
  console.log(siteurl);

  const [currentUrl, setCurrentUrl] = useState(null);
  const [searchTextField, setSearchTextField] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [tableData, setTableData] = useState([]);

  const [allTableData, setAllTableData] = useState([]);
  const url = `${constant.base}/api/course`;

  const filterCourse = (courseCategory) => {
    const filteredData = allTableData.filter((item) => {
      return item.courseCategory === courseCategory;
    });
    setTableData(filteredData);
  };

  const filterByTextSearch = (searchText = "") => {
    const filteredData = allTableData.filter((item) => item.courseName.toLowerCase().includes(searchText.toLowerCase()));
    setTableData(filteredData);
  };

  function getStringAfterSearchParam(url) {
    const searchParam = "search=";
    const index = url.indexOf(searchParam);

    if (index === -1) {
      return null; // Return null if "search=" is not found in the URL
    }

    const searchText = url.slice(index + searchParam.length);
    return searchText;
  }

  const responseCourses = [];
  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      console.log(res.data.msg);
      setAllTableData(res.data.msg);
      setTableData(res.data.msg);
      setIsLoading(false);
      setTimeout(() => {});
    });
  }, []);

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

  const handlePageChange = (event, page) => {
    // `page` contains the current page number
    console.log("Current page:", page);
    setPageNumber(page);
  };

  // filter tableData with only datas that has  "Programming" in tableData[i].courseCategory="Programming"

  if (isLoading) {
    return (
      <div
        style={{
          paddingTop: "10rem",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ClipLoader cssOverride={override} color={"red"} loading={true} size={90} aria-label='Loading Spinner' data-testid='loader' />
      </div>
    );
  }

  return (
    <main id='courses-page'>
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
          <header
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant='h3' color='primary'>
              Our Courses
            </Typography>
            <Container style={{ width: "60vw", margin: "0.5rem" }}>
              <Stack direction='row' justifyContent='center'>
                <div style={{ width: "100%" }}>
                  <TextField
                    value={searchTextField}
                    onChange={(e) => {
                      filterByTextSearch(e.target.value);
                      setSearchTextField(e.target.value);
                    }}
                    label='Search Course'
                    id='searchCourse'
                    variant='outlined'
                    fullWidth
                    style={{ width: "100%" }}
                  ></TextField>
                </div>
                <Button variant='contained' sx={{ borderRadius: "0rem 1.875rem 1.875rem 0rem" }}>
                  <IconButton>
                    <SearchIcon sx={{ color: "white" }} />
                  </IconButton>
                  Search
                </Button>
              </Stack>
              <FilterCardContainer>
                <FilterCards
                  style={{ margin: "15px" }}
                  onClick={() => {
                    filterCourse("Programming");
                  }}
                >
                  Programming
                </FilterCards>
                <FilterCards
                  style={{ margin: "15px" }}
                  onClick={() => {
                    filterCourse("Designing");
                  }}
                >
                  Graphic Design
                </FilterCards>
                <FilterCards
                  style={{ margin: "15px" }}
                  onClick={() => {
                    filterCourse("Diploma");
                  }}
                >
                  Diploma
                </FilterCards>
                <FilterCards
                  style={{ margin: "15px" }}
                  onClick={() => {
                    filterCourse("Short Term");
                  }}
                >
                  Short Term
                </FilterCards>
              </FilterCardContainer>
            </Container>
          </header>

          {tableData &&
            tableData
              .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage) // Slice the data for the current page
              .map((item) => {
                return (
                  <>
                    <CoursesItem id={item._id} name={item.courseName} schedule={"11am - 12pm"} teachinghour={"120 hour"} image={`${constant.base}/storage/${item.courseLogo}`} abstract={item.courseIntro} />
                  </>
                );
              })}

          <Pagination onChange={handlePageChange} count={Math.ceil(tableData.length / itemsPerPage)} color='primary' shape='rounded' style={{ marginTop: "3rem" }} />
        </header>
      </Container>
    </main>
  );
};

export default Courses;
