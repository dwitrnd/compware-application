import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import { toast } from "react-toastify";

function CreateTeam() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Post: "",
    Description: "",
    Role: "",
    Image: null,
    ImageName: "",
    ImageAltText: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData({ ...formData, Image: imageFile, ImageName: imageFile.name });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, Description: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `https://api.deerwalktrainingcenter.com/api/team`;

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
          Name: "",
          Email: "",
          Post: "",
          Description: "",
          Role: "",
          Image: null,
          ImageName: "",
          ImageAltText: "",
        });
        toast("Created successfully!");
        window.location.href = "/dashboard/list-team";
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
      <h1>Create Team</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Post</label>
        <input
          type="text"
          name="Post"
          value={formData.Post}
          onChange={handleInputChange}
          style={inputStyle}
        />

        {/* <label style={labelStyle}>Role</label>
        <input type='text' name='Role' value={formData.Role} onChange={handleInputChange} style={inputStyle} /> */}

        {/* role must be either Staff or Trainer  */}

        <label style={labelStyle}>Role</label>
        <select
          name="Role"
          value={formData.Role}
          onChange={handleInputChange}
          style={inputStyle}
        >
          <option value="">Select Role</option>
          <option value={constant.ROLE_STAFF}>Staff</option>
          <option value={constant.ROLE_TRAINER}>Trainer</option>
        </select>

        <label style={labelStyle}>Description</label>
        <ReactQuill
          value={formData.Description}
          onChange={handleEditorChange}
        />

        <label style={labelStyle}>Image</label>
        <input
          type="file"
          accept="image/*"
          name="Image"
          onChange={handleImageChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Image Alt Text</label>
        <input
          type="text"
          name="ImageAltText"
          value={formData.ImageAltText}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Create Team
        </button>
      </form>
    </div>
  );
}

export default CreateTeam;
