import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const courseOptions = [
  "ANDROID PROGRAMMING",
  "INTRODUCTION TO MICROSOFT SQL SERVER",
  "INTRODUCTION TO THE CRASH COURSE FOR SEE STUDENTS",
  "AWS CLOUD PRACTITIONER",
  "PROGRAMMING IN PYTHON",
  "REACT NATIVE",
  "CISCO CERTIFIED NETWORK ASSOCIATE (CCNA)",
  "COMPLETE WEB DEVELOPER COURSE",
  "CYBER SECURITY",
  "DATA SCIENCE AND MACHINE LEARNING IN PYTHON",
];

const CourseSearch = () => {
  return (
    <Autocomplete
      id="autocomplete-search"
      options={courseOptions}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
      sx={{
        backgroundColor: "white",
        width: "50%",
        marginLeft: "25%",
        borderRadius: "50px",
      }}
    />
  );
};

export default CourseSearch;
