import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import { useParams } from "react-router-dom";

function UpdateBlog() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    author: "",
    logo: null,
    article: "",
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const apiUrl = `${constant.base}/api/blog/${id}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
          const blogData = await response.json();

          setFormData({
            title: blogData.msg.title,
            date: blogData.msg.date,
            author: blogData.msg.author,
            article: blogData.msg.article,
          });
        } else {
          console.error("Failed to fetch blog data");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchBlogData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, article: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${constant.base}/api/blog/${id}`;

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
          title: "",
          date: "",
          author: "",
          article: "",
        });
        alert(" successfully created");
      } else {
        console.error("Failed to create blog");
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
      <h1>Update Blog</h1>
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
          type="text"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>author</label>
        <input
          required
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>article</label>
        <ReactQuill value={formData.article} onChange={handleEditorChange} />

        {/* <label style={labelStyle}>blog image</label> */}
        {/* <input required type='file' accept='image/*' name='logo' onChange={handleImageChange} style={inputStyle} /> */}

        <button type="submit" style={buttonStyle}>
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default UpdateBlog;
