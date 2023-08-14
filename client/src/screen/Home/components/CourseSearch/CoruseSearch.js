import React, { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { constant } from "constants/contants";
import { useNavigate } from "react-router-dom";

const CourseSearch = () => {
  const [allCourseName, setAllCourseName] = React.useState([]);
  const [courseNameAndId, setCourseNameAndId] = React.useState([
    {
      courseName: "",
      courseId: "",
    },
  ]);
  // axios code to fetch all data get method from "/api/course"

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${constant.base}/api/course`).then((res) => {
      if (res) {
        console.log("res.data============================================================================");
        console.log(res.data);
        const allCourseList = [];
        res.data.msg.map((course) => {
          allCourseList.push(course.courseName);
          setCourseNameAndId((prev) => [
            ...prev,
            {
              courseName: course.courseName,
              courseId: course._id,
            },
          ]);

          setAllCourseName(allCourseList);
        });
      }
    });
  }, []);

  return (
    <Autocomplete
      id='autocomplete-search'
      options={allCourseName}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField {...params} label='Search' variant='outlined' />}
      sx={{
        backgroundColor: "white",
        marginLeft: "50%",
        transform: "translateX(-50%)",
        borderRadius: "50px",

        width: "50%",

        border: "none !important",

      }}
      onInputChange={(event, value) => {
        console.log(value);

        // check what id is for the course name
        courseNameAndId.map((course) => {
          if (course.courseName === value) {
            console.log(course.courseId);
            navigate(`/course-detail/${course.courseId}`);
          }
        });
      }}
    />
  );
};

export default CourseSearch;
