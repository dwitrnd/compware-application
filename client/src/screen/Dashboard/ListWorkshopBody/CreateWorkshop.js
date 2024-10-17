import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";

function CreateWorkshop() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    author: "",
    logo: null,
    article: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData({ ...formData, logo: imageFile });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, article: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${constant.base}/api/workshop`;

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
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // Reset the form fields
        setFormData({
          title: "",
          date: "",
          author: "",
          article: "",
          logo: null,
        });
        alert(" successfully created");
      } else {
        console.error("Failed to create workshop");
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
      <h1>Create Team</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Title</label>
        <input
          required
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>date</label>
        <input
          required
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Article</label>
        <ReactQuill value={formData.article} onChange={handleEditorChange} />

        <label style={labelStyle}>Workshop image</label>
        <input
          required
          type="file"
          accept="image/*"
          name="logo"
          onChange={handleImageChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Create Workshop
        </button>
      </form>
    </div>
  );
}

export default CreateWorkshop;
