import React, { useState, useEffect } from "react";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CoursesItem from "./components/CoursesItems/CoursesItem";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { constant } from "constants/contants";

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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allTableData, setAllTableData] = useState([]);
  const url = `${constant.base}/api/course`;

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      console.log(res.data.msg);
      setAllTableData(res.data.msg);
      setTableData(res.data.msg);
      setIsLoading(false);
    });
  }, [url]);

  const handlePageChange = (event, page) => {
    // `page` contains the current page number
    console.log("Current page:", page);
    setPageNumber(page);
  };

  const filterCourses = () => {
    if (!allTableData) {
      return;
    }
    let filteredData = allTableData;

    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedCategories.some(
          (category) =>
            item.courseCategory && item.courseCategory.includes(category.value)
        )
      );
    }

    if (searchText.trim() !== "") {
      filteredData = filteredData.filter(
        (item) =>
          item.courseName &&
          item.courseName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setTableData(filteredData);
  };

  useEffect(() => {
    filterCourses();
  }, [selectedCategories, searchText]);

  const filterCoursesByCategory = async () => {
    try {
      const selectedCategoryValues = selectedCategories.map(
        (category) => category.value
      );

      const response = await axios.get(
        "http://localhost:5001/api/course/filter",
        {
          params: {
            courseCategory: selectedCategoryValues,
          },
        }
      );

      setTableData(response.data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    filterCoursesByCategory();
  }, [selectedCategories]);

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
                  setSearchText(e.target.value);
                }}
                label="Search Course"
                id="searchCourse"
                variant="outlined"
                fullWidth
                style={{ width: "100%" }}
              />
            </div>
            <Button
              variant="contained"
              sx={{ borderRadius: "0rem 1.875rem 1.875rem 0rem" }}
              onClick={filterCourses}
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
            onChange={setSelectedCategories}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={courseCategoryList}
            placeholder="Select Category"
            value={selectedCategories}
          />
        </div>
        {tableData &&
          tableData
            .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage) // Slice the data for the current page
            .map((item) => {
              return (
                <CoursesItem
                  key={item._id}
                  id={item._id}
                  name={item.courseName}
                  schedule={"11am - 12pm"}
                  teachinghour={"120 hour"}
                  image={`${constant.base}/storage/${item.courseLogo}`}
                  abstract={item.courseIntro}
                />
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
