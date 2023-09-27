import React, { useState } from "react";
import axios from "axios";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

  const url = "http://localhost:5001/api/courseCategory";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ categories: categoryName }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (response.ok) {
      setCategoryName("");
      setMessage("Category created successfully");
      console.log("Course Category Added", json);
    }
    if (!response.ok) {
      setMessage("Failed to create category");
    }
  };

  return (
    <div>
      <h1>Create Course Category</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="categoryName" style={labelStyle}>
          Category Name
        </label>
        <input
          required
          type="text"
          id="categoryName"
          name="categoryName"
          style={inputStyle}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <button type="submit" style={buttonStyle}>
          Create Category
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default CreateCategory;
