import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import { toast } from "react-toastify";

function EditSession() {
  const [formData, setFormData] = useState({
    course: "",
    startDate: "",
    courseDuration: "",
    start: "",
    end: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${constant.base}/api/session`;

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
          course: "",
          startDate: "",
          courseDuration: "",
          start: "",
          end: "",
        });

        toast("session created successfully!");
        window.location.href = "/dashboard/list-sessions";
      } else {
        console.error("Failed to create team");
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

  return (
    <div>
      <h1>Edit Session</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>course</label>
        <input type='text' name='course' value={formData.course} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>startDate</label>
        <input type='text' name='startDate' value={formData.startDate} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>courseDuration</label>
        <input type='text' name='courseDuration' value={formData.courseDuration} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>start</label>
        <input type='text' name='start' value={formData.start} onChange={handleInputChange} style={inputStyle} />
        <label style={labelStyle}>end</label>
        <input type='text' name='end' value={formData.end} onChange={handleInputChange} style={inputStyle} />

        <button type='submit' style={buttonStyle}>
          Create Session
        </button>
      </form>
    </div>
  );
}

export default EditSession;
