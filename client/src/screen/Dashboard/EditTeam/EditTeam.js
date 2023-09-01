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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("Staff"); // Default value
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageAltText, setImageAltText] = useState("");

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const apiUrl = `http://localhost:5001/api/team/${id}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
          const teamData = await response.json();
          const { Description, Image, Email, ImageAltText, ImageName, Name, Post, Role } = teamData.msg;
          setName(Name);
          setEmail(Email);
          setPost(Post);
          setRole(Role);
          setImage(Image);
          setImageName(ImageName);
          setImageAltText(ImageAltText);
          setDescription(Description);

          console.log("Team data fetched successfully", teamData.msg);
        } else {
          console.error("Failed to fetch team data");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, [id]);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setImage(imageFile);
    setImageName(imageFile.name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = `http://localhost:5001/api/team/${id}`;

    const formDataToSend = new FormData();
    formDataToSend.append("Name", name);
    formDataToSend.append("Email", email);
    formDataToSend.append("Post", post);
    formDataToSend.append("Description", description);
    formDataToSend.append("Role", role);
    // formDataToSend.append("Image", image);
    formDataToSend.append("ImageName", imageName);
    formDataToSend.append("ImageAltText", imageAltText);

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

  return (
    <div>
      <h1>Update Team</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Name</label>
        <input type='text' name='Name' value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
        <label style={labelStyle}>Email</label>
        <input type='email' name='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <label style={labelStyle}>Post</label>
        <input type='text' name='Post' value={post} onChange={(e) => setPost(e.target.value)} style={inputStyle} />
        <label style={labelStyle}>Role</label>
        <select name='Role' value={role} onChange={(e) => setRole(e.target.value)} style={inputStyle}>
          <option value='Staff'>Staff</option>
          <option value='Trainer'>Trainer</option>
        </select>

        <label style={labelStyle}>Image Alt Text</label>
        <input type='text' name='ImageAltText' value={imageAltText} onChange={(e) => setImageAltText(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>Description</label>
        <ReactQuill value={description} onChange={setDescription} />
        {/* <label style={labelStyle}>Image</label> */}
        {/* <input type='file' accept='image/*' name='Image' onChange={handleImageChange} style={inputStyle} /> */}
        <button type='submit' style={buttonStyle}>
          Update Team
        </button>
      </form>
    </div>
  );
}

export default EditTeam;
