import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import { useParams } from "react-router-dom";

function UpdateNewsletter() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    
  });

  useEffect(() => {
    const fetchNewsletterData = async () => {
      try {
        const apiUrl = `${constant.base}/api/newsletter/${id}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
          const newsletterData = await response.json();

          setFormData({
            name: newsletterData.msg.name,
            link: newsletterData.msg.link,
          });
        } else {
          console.error("Failed to fetch newsletter data");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchNewsletterData();
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

    const apiUrl = `${constant.base}/api/newsletter/${id}`;

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
          link: "",
        });
        alert(" successfully created");
      } else {
        console.error("Failed to create newsletter");
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
      <h1>Update newsletter</h1>
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

        {/* <label style={labelStyle}>newsletter image</label>
        <input required type='file' accept='image/*' name='image' onChange={handleImageChange} style={inputStyle} /> */}

        <button type="submit" style={buttonStyle}>
          Update newsletter
        </button>
      </form>
    </div>
  );
}

export default UpdateNewsletter;
