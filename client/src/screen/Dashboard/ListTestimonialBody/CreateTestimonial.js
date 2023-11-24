import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import { toast } from "react-toastify";

function CreateTeam() {
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    description: "",
    image: "",
    imageName: "",
    imageAltText: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData({ ...formData, image: imageFile, imageName: imageFile.name });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    for (const key in formData) {
      if (formData[key] === "") {
        toast("Please fill all fields!");
        return;
      }
    }

    const apiUrl = `${constant.base}/api/testimonial`;

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
        setFormData({
          name: "",
          affiliation: "",
          description: "",
          image: "",
          imageName: "",
          imageAltText: "",
        });
        toast("Created Successfully!");
        window.location.href = "/dashboard/list-testimonial";
      } else {
        console.error("Failed to create testimonial!");
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
      <h1>Create Testimonial</h1>
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
        <label style={labelStyle}>Affiliation</label>
        <input
          required
          type="text"
          name="affiliation"
          value={formData.affiliation}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Description</label>
        <ReactQuill
          value={formData.description}
          onChange={handleEditorChange}
          required
        />

        <label style={labelStyle}>Image</label>
        <input
          required
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Image Alt Text</label>
        <input
          required
          type="text"
          name="imageAltText"
          value={formData.imageAltText}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Create Testimonial
        </button>
      </form>
    </div>
  );
}

export default CreateTeam;
