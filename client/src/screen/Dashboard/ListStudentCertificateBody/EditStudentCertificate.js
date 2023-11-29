import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditStudentCertificate() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);

  const [fullName, setFullName] = useState("");
  const [startDuration, setStartDuration] = useState("");
  const [endDuration, setEndDuration] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [course, setCourse] = useState("");
  const [trainer, setTrainer] = useState("");
  const [trainerTitle, setTrainerTitle] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [email, setEmail] = useState("");

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

  useEffect(() => {
    axios.get(`${constant.base}/api/student/${id}`).then((res) => {
      const student = res.data.msg;
      setFullName(student.fullName);
      // convert to date format the end Date is in format of9/30/2023
      const endDate = new Date(student.endDuration);
      const endDateFormat = endDate.toISOString().split("T")[0];
      setEndDuration(endDateFormat);
      // convert to date format the start Date is in format of9/30/2023
      const startDate = new Date(student.startDuration);
      const startDateFormat = startDate.toISOString().split("T")[0];
      setStartDuration(startDateFormat);

      setCourseDuration(student.courseDuration);
      setCourse(student.course);
      setTrainer(student.trainer);
      setTrainerTitle(student.trainerTitle);
      setVerificationId(student.verificationId);
      setEmail(student.email);
    });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${constant.base}/api/student/${id}`;

    const data = {
      fullName: fullName,
      startDuration: startDuration,
      endDuration: endDuration,
      courseDuration: courseDuration,
      course: course,
      trainer: trainer,
      trainerTitle: trainerTitle,
      verificationId: verificationId,
      email: email,
    };

    const formDataToSend = new FormData();
    for (const key in data) {
      // Use 'data' instead of 'formData' here
      // If key is start date or end date then convert value into mm/dd/yyyy format
      if (key === "startDuration" || key === "endDuration") {
        const date = new Date(data[key]); // Use 'data' here
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        const dateString = month + "/" + day + "/" + year;

        formDataToSend.append(key, dateString);
      } else {
        formDataToSend.append(key, data[key]); // Use 'data' here
      }
    }

    axios.patch(apiUrl, formDataToSend).then((res) => {
      // Use 'formDataToSend' here

      toast.success("Updated successfully !");

      window.location.href = "/dashboard/list-students";
    });
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
    var date =
      today.getFullYear() + "" + (today.getMonth() + 1) + "" + today.getDate();
    var time =
      today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    var dateTime = date + "" + time;
    var randomnumber = Math.floor(Math.random() * 1000 + 1);
    var verificationId = "DTC-" + dateTime + "-" + randomnumber;
    return verificationId;
  }

  return (
    <div>
      <h1>Edit Certificate</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Full name</label>
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          style={inputStyle}
        />

        <label style={labelStyle}>Start duration</label>
        <input
          type="date"
          name="startDuration"
          value={startDuration}
          onChange={(e) => {
            setStartDuration(e.target.value);
          }}
          style={inputStyle}
        />

        <label style={labelStyle}>End duration</label>
        <input
          type="date"
          name="endDuration"
          value={endDuration}
          onChange={(e) => {
            setEndDuration(e.target.value);
          }}
          style={inputStyle}
        />

        <label style={labelStyle}>Course duration</label>
        <input
          type="text"
          name="courseDuration"
          value={courseDuration}
          onChange={(e) => {
            setCourseDuration(e.target.value);
          }}
          style={inputStyle}
        />

        <label style={labelStyle}>Course</label>
        <select
          name="course"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
          }}
          style={inputStyle}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>

        <label style={labelStyle}>Trainer</label>
        <input
          type="text"
          name="trainer"
          value={trainer}
          onChange={(e) => {
            setTrainer(e.target.value);
          }}
          style={inputStyle}
        />

        <label style={labelStyle}>Trainer title</label>
        <input
          type="text"
          name="trainerTitle"
          value={trainerTitle}
          onChange={(e) => {
            setTrainerTitle(e.target.value);
          }}
          style={inputStyle}
        />

        <label style={labelStyle}>
          Verification Id : {generateVerificationId()}
        </label>
        <input
          type="text"
          name="verificationId"
          value={verificationId}
          onChange={(e) => {
            setVerificationId(e.target.value);
          }}
          style={inputStyle}
        />

        <label style={labelStyle}>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Edit Certificate
        </button>
      </form>
    </div>
  );
}

export default EditStudentCertificate;
