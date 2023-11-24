import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import axios from "axios";
import { constant } from "constants/contants";

const CreatePlacementPartner = () => {
  const apiUrl = `${constant.base}/api/placement`; // create URL

  const [Image, setImage] = useState(null);
  const [ImageName, setImageName] = useState("");
  const [ImageAltText, setImageAltText] = useState("");

  const createClient = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Image", Image);
    formData.append("ImageName", ImageName);
    formData.append("ImageAltText", ImageAltText);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Placement created successfully");
      // navigate("/dashboard");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <form onSubmit={createClient}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="placement-img">Image File Upload</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="file"
            id="client-img"
            placeholder="Enter course logo"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
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
            placeholder="Enter image name"
            value={ImageName}
            onChange={(e) => setImageName(e.target.value)}
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
            placeholder="Enter image alt text"
            value={ImageAltText}
            onChange={(e) => setImageAltText(e.target.value)}
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
          Create Placement
        </button>
      </form>
    </div>
  );
};

export default CreatePlacementPartner;
