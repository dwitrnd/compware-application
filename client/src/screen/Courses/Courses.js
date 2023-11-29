import React from "react";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@material-ui/core";
import CoursesItem from "screen/Courses/components/CoursesItems/CoursesItem";
import Pagination from "@mui/material/Pagination";
import { constant } from "constants/contants";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0f5288",
};

const courseCategoryList = [
  {
    value: "Programming and Software Development",
    label: "Programming and Software Development",
  },
  {
    value: "Database Management",
    label: "Database Management",
  },
  { value: "Designing", label: "Designing" },
  {
    value: "Software Testing and Quality Assurance",
    label: "Software Testing and Quality Assurance",
  },
  { value: "Digital Marketing", label: "Digital Marketing" },
  {
    value: "Office Management Tools and Packages",
    label: "Office Management Tools and Packages",
  },
  {
    value: "Database Management and Warehousing",
    label: "Database Management and Warehousing",
  },
  { value: "Project Management", label: "Project Management" },
  { value: "AI and Machine Learning", label: "AI and Machine Learning" },
  {
    value: "Blockchain and Cryptocurrency",
    label: "Blockchain and Cryptocurrency",
  },
  { value: "Data Science and Analytics", label: "Data Science and Analytics" },
  {
    value: "Network Administration and Management",
    label: "Network Administration and Management",
  },
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "Personal Development", label: "Personal Development" },
  {
    value: "Cloud Computing and Management",
    label: "Cloud Computing and Management",
  },
  {
    value: "Specialized Tools and Utilities",
    label: "Specialized Tools and Utilities",
  },
  {
    value: "Cyber Security and Cryptocurrency",
    label: "Cyber Security and Cryptocurrency",
  },
];

const Courses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [courseCategory, setCourseCategory] = useState([]);
  const [allTableData, setAllTableData] = useState([]);
  const url = `${constant.base}/api/course`;

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setAllTableData(res.data.msg);
      setTableData(res.data.msg);
      setIsLoading(false);
    });
  }, []);

  const FilterCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 550px) {
      display: none;
    }
  `;

  const FilterCards = styled.div`
    font-size: 1.1rem;
    background: #0f5288 !important;
    color: white;
    margin: 0 5px;
    padding: 15px 25px;
    font-size: 16px;
    font-weight: bold;

    border-radius: 30px;

    &:hover {
      background: #e2e2e2 !important;
      color: #0f5288;
    }
  `;

  const handlePageChange = (event, page) => {
    // `page` contains the current page number
    setPageNumber(page);
  };

  // filter tableData with only datas that has  "Programming" in tableData[i].courseCategory="Programming"

  const filterCourse = (courseCategory) => {
    const filteredData = allTableData.filter((item) => {
      return item.courseCategory === courseCategory;
    });
    setTableData(filteredData);
  };

  const filterByTextSearch = (searchText = "") => {
    const filteredData = allTableData.filter((item) =>
      item.courseName.toLowerCase().includes(searchText.toLowerCase())
    );
    setTableData(filteredData);
  };

  useEffect(() => {
    const url = window.location.href;
    //make function that returns text after  "search=" from url if it exists else return null

    const searchTextFunction = (url) => {
      const index = url.indexOf("search=");
      if (index !== -1) {
        const searchText = url.substring(index + 7);
        return searchText;
      } else {
        return null;
      }
    };
    const searchByCategoryFunction = (url) => {
      const index = url.indexOf("category=");
      if (index !== -1) {
        const searchText = url.substring(index + 9);
        return searchText;
      } else {
        return null;
      }
    };

    if (searchTextFunction(url)) {
      if (allTableData.length > 0) {
        const filteredData = allTableData.filter((item) =>
          item.courseName
            .toLowerCase()
            .includes(searchTextFunction(url).toLowerCase())
        );
        setTableData(filteredData);
      }
    }
    if (searchByCategoryFunction(url)) {
      if (allTableData.length > 0) {
        const filteredData = allTableData.filter((item) =>
          item.courseCategory
            .toLowerCase()
            .includes(searchByCategoryFunction(url).toLowerCase())
        );
        setTableData(filteredData);
      }
    }
  }, [allTableData]);

  const handleChangeSelect = (selectedOptions) => {
    // use loop and print the .value for every i

    selectedOptions.map((item) => {
      filterCourse(item.value);
      filterCourse(item.value);
      // filter courses category  based  on item.value
    });
  };

  if (isLoading) {
    return (
      <div
        style={{
          paddingTop: "10rem",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ClipLoader
          cssOverride={override}
          color={"red"}
          loading={true}
          size={90}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
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
        </header>
        <Container style={{ width: "100vw" }}>
          <Stack direction="row" justifyContent="center">
            <div style={{ width: "60vw" }}>
              <TextField
                onChange={(e) => {
                  filterByTextSearch(e.target.value);
                }}
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
        </Container>
        <div className="course-category">
          <Select
            onChange={handleChangeSelect}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={courseCategoryList}
            placeholder="Select Category"
          />
        </div>
        {tableData &&
          tableData
            .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage) // Slice the data for the current page
            .map((item) => {
              return (
                <>
                  <CoursesItem
                    id={item._id}
                    name={item.courseName}
                    slugTitle={item.slugTitle}
                    schedule={"11am - 12pm"}
                    teachinghour={"120 hour"}
                    image={`${constant.base}/storage/${item.courseLogo}`}
                    abstract={item.courseIntro}
                  />
                </>
              );
            })}

        <Pagination
          onChange={handlePageChange}
          count={Math.ceil(tableData.length / itemsPerPage)}
          color="primary"
          shape="rounded"
          style={{ marginTop: "3rem" }}
        />
      </Container>
    </main>
  );
};

export default Courses;
