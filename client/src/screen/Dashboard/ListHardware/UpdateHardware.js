import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import { useParams } from "react-router-dom";

function UpdateHardware() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    photo: null,
    specification: "",
  });

  useEffect(() => {
    const fetchHardwareData = async () => {
      try {
        const apiUrl = `${constant.base}/api/hardware/${id}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
          const hardwareData = await response.json();

          setFormData({
            name: hardwareData.msg.name,
            model: hardwareData.msg.model,
            specification: hardwareData.msg.specification,
          });
        } else {
          console.error("Failed to fetch hardware data");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchHardwareData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, specification: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${constant.base}/api/hardware/${id}`;

    const formDataToSend = new FormData();
    for (const key in formData) {
      // for post , it must be in array
      if (key === "Post") {
        formDataToSend.append(key, [formData[key]]);
        continue;
      }

      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        body: formDataToSend,
      });

      if (response.ok) {
        // Reset the form fields
        setFormData({
          name: "",
          model: "",
          specification: "",
        });
        alert(" successfully created");
      } else {
        console.error("Failed to create hardware");
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
      <h1>Update hardware</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Name</label>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Model</label>
        <input
          required
          type="text"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Specification</label>
        <ReactQuill value={formData.specification} onChange={handleEditorChange} />

        {/* <label style={labelStyle}>Hardware image</label>
        <input required type='file' accept='image/*' name='image' onChange={handleImageChange} style={inputStyle} /> */}

        <button type="submit" style={buttonStyle}>
          Update Hardware
        </button>
      </form>
    </div>
  );
}

export default UpdateHardware;
