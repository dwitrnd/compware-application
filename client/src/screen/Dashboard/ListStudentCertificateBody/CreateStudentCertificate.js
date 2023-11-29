import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import axios from "axios";
import { useEffect } from "react";

function CreateStudentCertificate() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const apiUrl = `${constant.base}/api/course`;

    axios.get(apiUrl).then((res) => {
      const coursesList = res.data.msg;
      // loop every item in coursesList and add courseName to the courseNameList state using setCourses
      const courseNameList = [];
      coursesList.forEach((course) => {
        courseNameList.push(course.courseName);
      });
      setCourses(courseNameList);
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    startDuration: "",
    endDuration: "",
    courseDuration: "",
    course: "",
    trainer: "",
    trainerTitle: "",
    verificationId: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${constant.base}/api/student`;

    const formDataToSend = new FormData();
    for (const key in formData) {
      // if key is start date or end date then convert value into mm/dd/yyyy eg: january 1st 2023 will be 1/1/2023

      if (key === "startDuration" || key === "endDuration") {
        const date = new Date(formData[key]);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        const dateString = month + "/" + day + "/" + year;

        formDataToSend.append(key, dateString);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // Reset the form fields
        setFormData({
          fullName: "",
          startDuration: "",
          endDuration: "",
          courseDuration: "",
          course: "",
          trainer: "",
          trainerTitle: "",
          verificationId: "",
          email: "",
        });
        alert(" successfully created");
      } else {
        console.error("Failed to create student");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  // function that generates the certificate verificationId in format of current date and time i.e DTC-YYYYMMDD-3digitrandomnumber

  function generateVerificationId() {
    // generate in format DTC-YYYYMMDD(8digit)-random3digitnumber

    // DTC - 20181004 - 001;

    // get current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // convert current date to string
    const currentYearString = currentYear.toString();
    let currentMonthString = currentMonth.toString();
    let currentDayString = currentDay.toString();

    // if month or date is single digit then make it double digit by adding 0 in front of it
    if (currentMonthString.length === 1) {
      currentMonthString = "0" + currentMonthString;
    }

    if (currentDayString.length === 1) {
      currentDayString = "0" + currentDayString;
    }

    // convert current date to 8 digit string
    const currentDateString =
      currentYearString + currentMonthString + currentDayString;

    // generate random 3 digit number
    const randomNumber = Math.floor(Math.random() * 1000);

    // convert random number to 3 digit string
    const randomNumberString = randomNumber.toString();

    // combine all strings
    const verificationId =
      "DTC-" + currentDateString + "-" + randomNumberString;

    return verificationId;
  }

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>fullName</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>startDuration</label>
        <input
          type="date"
          name="startDuration"
          value={formData.startDuration}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>endDuration</label>
        <input
          type="date"
          name="endDuration"
          value={formData.endDuration}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>courseDuration</label>
        <input
          type="text"
          name="courseDuration"
          value={formData.courseDuration}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          style={inputStyle}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>

        <label style={labelStyle}>trainer</label>
        <input
          type="text"
          name="trainer"
          value={formData.trainer}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>trainerTitle</label>
        <input
          type="text"
          name="trainerTitle"
          value={formData.trainerTitle}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>
          verificationId : {generateVerificationId()}
        </label>
        <input
          type="text"
          name="verificationId"
          value={formData.verificationId}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Create Certificate
        </button>
      </form>
    </div>
  );
}

export default CreateStudentCertificate;
