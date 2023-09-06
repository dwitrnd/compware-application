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
    gender: "",
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
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Session created successfully");
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
          gender: "",
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
    var today = new Date();
    var date = today.getFullYear() + "" + (today.getMonth() + 1) + "" + today.getDate();
    var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    var dateTime = date + "" + time;
    var randomnumber = Math.floor(Math.random() * 1000 + 1);
    var verificationId = "DTC-" + dateTime + "-" + randomnumber;
    return verificationId;
  }

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>fullName</label>
        <input type='text' name='fullName' value={formData.fullName} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>startDuration</label>
        <input type='text' name='startDuration' value={formData.startDuration} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>endDuration</label>
        <input type='text' name='endDuration' value={formData.endDuration} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>courseDuration</label>
        <input type='text' name='courseDuration' value={formData.courseDuration} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>course</label>
        <select name='course' value={formData.course} onChange={handleInputChange} style={inputStyle}>
          <option value=''>Select Course</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>

        <label style={labelStyle}>trainer</label>
        <input type='text' name='trainer' value={formData.trainer} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>trainerTitle</label>
        <input type='text' name='trainerTitle' value={formData.trainerTitle} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>verificationId</label>
        <input
          type='text'
          name='verificationId'
          value={() => {
            generateVerificationId();
          }}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>email</label>
        <input type='text' name='email' value={formData.email} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>gender</label>
        <input type='text' name='gender' value={formData.gender} onChange={handleInputChange} style={inputStyle} />

        <button type='submit' style={buttonStyle}>
          Create Certificate
        </button>
      </form>
    </div>
  );
}

export default CreateStudentCertificate;
