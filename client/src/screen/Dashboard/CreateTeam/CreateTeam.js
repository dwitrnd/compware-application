import React, { useState } from "react";

function CreateTeam() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Post: "",
    Description: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = "http://localhost:5001/api/team";

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
        console.log("Team created successfully");
        // Reset the form fields
        setFormData({
          Name: "",
          Email: "",
          Post: "",
          Description: "",
          Image: null,
          ImageName: "",
          ImageAltText: "",
        });
      } else {
        console.error("Failed to create team");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div>
      <h1>Create Team</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' name='Name' value={formData.Name} onChange={handleInputChange} />

        <label>Email</label>
        <input type='email' name='Email' value={formData.Email} onChange={handleInputChange} />

        <label>Post</label>
        <input type='text' name='Post' value={formData.Post} onChange={handleInputChange} />

        <label>Description</label>
        <textarea name='Description' value={formData.Description} onChange={handleInputChange} />

        <label>Image</label>
        <input type='file' accept='image/*' name='Image' onChange={handleImageChange} />

        <label>Image Alt Text</label>
        <input type='text' name='ImageAltText' value={formData.ImageAltText} onChange={handleInputChange} />

        <button type='submit'>Create Team</button>
      </form>
    </div>
  );
}

export default CreateTeam;
