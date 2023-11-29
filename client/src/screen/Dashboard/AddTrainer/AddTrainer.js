import React, { useState } from "react";
import { constant } from "constants/contants";
import { toast } from "react-toastify";

const AddTrainer = () => {
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

  const url = `${constant.base}/api/trainer`;

  const [trainerName, setTrainerName] = useState("");
  const [signature, setSignature] = useState(null);
  const [trainerTitle, setTrainerTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send file and other data
    const formData = new FormData();
    formData.append("trainerName", trainerName);
    formData.append("signature", signature);
    formData.append("trainerTitle", trainerTitle);

    // Make a POST request to the API
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)

        toast.success("Trainer added successfully");
        window.location.href = "/dashboard/list-trainer";
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Failed to add trainer");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <h1>Add Trainer</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          style={inputStyle}
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
        />
        <label style={labelStyle}>Signature</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          style={inputStyle}
          onChange={(e) => setSignature(e.target.files[0])}
        />
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          style={inputStyle}
          value={trainerTitle}
          onChange={(e) => setTrainerTitle(e.target.value)}
        />
        <button style={buttonStyle} type="submit">
          Add Trainer
        </button>
      </form>
    </div>
  );
};

export default AddTrainer;
