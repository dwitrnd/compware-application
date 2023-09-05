import React from "react";

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
  return (
    <div>
      <h1>Add Trainer</h1>
      <form>
        <label style={labelStyle}>Name</label>
        <input type="text" style={inputStyle} />
        <label style={labelStyle}>Signature</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          style={inputStyle}
        />
        <label style={labelStyle}>Title</label>
        <input type="text" style={inputStyle} />
        <button style={buttonStyle}>Add Trainer</button>
      </form>
    </div>
  );
};

export default AddTrainer;
