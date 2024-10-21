import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";

function CreateNewsletter() {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData({ ...formData, photo: imageFile });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, specification: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${constant.base}/api/newsletter`;

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
          name: "",
          link:""
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
      <h1>Create Newsletter</h1>
      <form onSubmit={handleSubmit}>

        <label style={labelStyle}>Name</label>
        <input
          required
          type="month"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={inputStyle}
        />

<label style={labelStyle}>Link</label>
        <input
          required
          type="text"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Create Newsletter
        </button>
      </form>
    </div>
  );
}

export default CreateNewsletter;
