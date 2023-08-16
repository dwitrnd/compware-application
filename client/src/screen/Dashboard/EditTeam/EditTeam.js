import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

function EditTeam() {
  const { id } = useParams();

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

  useEffect(() => {
    // Fetch team data based on the ID and populate the form
    const fetchTeamData = async () => {
      try {
        const apiUrl = `http://localhost:5001/api/team/${id}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
          const teamData = await response.json();
          setFormData(teamData);
        } else {
          console.error("Failed to fetch team data");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, [id]);

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
    const apiUrl = `http://localhost:5001/api/team/${id}`;

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Team updated successfully");
        alert("Team updated successfully");
      } else {
        console.error("Failed to update team");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  // ... (rest of the code remains the same)

  return (
    <div>
      <h1>Update Team</h1>
      <form onSubmit={handleSubmit}>
        {/* ... (form inputs and components) ... */}

        <label style={labelStyle}>Name</label>
        <input type='text' name='Name' value={formData.Name} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>Email</label>
        <input type='email' name='Email' value={formData.Email} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>Post</label>
        <input type='text' name='Post' value={formData.Post} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>Role</label>
        <input type='text' name='Role' value={formData.Role} onChange={handleInputChange} style={inputStyle} />

        <label style={labelStyle}>Description</label>
        <ReactQuill value={formData.Description} onChange={handleEditorChange} />

        <label style={labelStyle}>Image</label>
        <input type='file' accept='image/*' name='Image' onChange={handleImageChange} style={inputStyle} />

        <label style={labelStyle}>Image Alt Text</label>
        <input type='text' name='ImageAltText' value={formData.ImageAltText} onChange={handleInputChange} style={inputStyle} />

        <button type='submit' style={buttonStyle}>
          Update Team
        </button>
      </form>
    </div>
  );
}

export default EditTeam;
