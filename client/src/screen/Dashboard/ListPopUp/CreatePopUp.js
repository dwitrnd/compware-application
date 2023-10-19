import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";
import { constant } from "constants/contants";

const CreatePopup = () => {
  const apiUrl = `${constant.base}/api/popup`;

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageAltText, setImageAltText] = useState("");

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Image", image);
    formData.append("ImageName", imageName);
    formData.append("ImageAltText", imageAltText);

    try {
      await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Popup created successfully");
    } catch (error) {
      console.error("Error creating popup:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="popup-img">Image File Upload</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="file"
            id="popup-img"
            onChange={handleFileChange}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="imageName">Image Name</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="text"
            id="imageName"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="imageAltText">Image Alt Text</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="text"
            id="imageAltText"
            value={imageAltText}
            onChange={(e) => setImageAltText(e.target.value)}
            required
          />
        </div>
        <button
          style={{
            padding: "15px",
            color: "white",
            background: "#0f5288",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            fontSize: "16px",
            marginTop: "20px",
          }}
          type="submit"
        >
          Create Popup
        </button>
      </form>
    </div>
  );
};

export default CreatePopup;
