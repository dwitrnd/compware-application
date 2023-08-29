import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import axios from "axios";
import { constant } from "constants/contants";

const CreateGallery = () => {
  const apiUrl = `${constant.base}/api/gallery`; // create URL

  const [Image, setImage] = useState(null);
  const [ImageName, setImageName] = useState("");
  const [ImageAltText, setImageAltText] = useState("");

  const createCourse = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Image", Image);
    formData.append("ImageName", ImageName);
    formData.append("ImageAltText", ImageAltText);

    console.log(formData);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response =", response);
      toast.success("Course created successfully");
      // navigate("/dashboard");
    } catch (error) {
      console.log("error =", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <form onSubmit={createCourse}>
        {/* //! IMAGE "File" */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseLogo'>Image File Upload</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='file'
            id='courseLogo'
            placeholder='Enter course logo'
            onChange={(e) => {
              console.log(e.target.files[0]);
              setImage(e.target.files[0]);
            }}
          />
        </div>
        {/* //! IMAGE Name */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='imageName'>Image Name</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='text'
            id='imageName'
            placeholder='Enter image name'
            value={ImageName}
            onChange={(e) => setImageName(e.target.value)}
          />
        </div>

        {/* //! IMAGE ALT TEXT */}

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='imageAltText'>Image Alt Text</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='text'
            id='imageAltText'
            placeholder='Enter image alt text'
            value={ImageAltText}
            onChange={(e) => setImageAltText(e.target.value)}
          />
        </div>

        <button
          style={{
            padding: "15px",
            color: "white",
            background: "#0f5288",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            fontSize: "16px",
            marginTop: "20px",
          }}
          type='submit'
        >
          Post Gallery
        </button>
      </form>
    </div>
  );
};

export default CreateGallery;
