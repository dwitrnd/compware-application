import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditCourseCategory = () => {
  const { id } = useParams();

  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const url = `http://localhost:5001/api/courseCategory/${id}`;
        const response = await fetch(url);
        if (response.ok) {
          const categoryData = await response.json();
          setCategoryName(categoryData.categoryName); // Update the state with the fetched category name
        } else {
          console.error("Failed to fetch category data");
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, [id]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:5001/api/courseCategory/${id}`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categories: categoryName }), // Send the updated categoryName in the request body
      });

      if (response.ok) {
        setMessage("Category updated successfully");
        // Redirect to a different page after successful update
      } else {
        setMessage("Failed to update category");
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <div>
      <h1>Update Course Category</h1>
      <form onSubmit={handleUpdate}>
        <label htmlFor="categoryName" style={labelStyle}>
          Category Name
        </label>
        <input
          required
          type="text"
          id="categoryName"
          name="categoryName"
          style={inputStyle}
          value={categoryName || ""}
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <button type="submit" style={buttonStyle}>
          Update Category
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EditCourseCategory;
