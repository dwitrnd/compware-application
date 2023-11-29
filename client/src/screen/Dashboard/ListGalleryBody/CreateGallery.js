import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import axios from "axios";
import { constant } from "constants/contants";

const CreateGallery = () => {
  const apiUrl = `${constant.base}/api/gallery`; // create URL

  const [galleryCategoryName, setGalleryCategoryName] = useState(null);
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {

    const files = e.target.files;
    setImages(Array.from(files));
  };

  const handleUpload = () => {
    const formData = new FormData();

  }

  const createGallery = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("galleryCategoryName", galleryCategoryName); // Rename ImageName to galleryCategoryName
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response =", response);
      toast.success("Gallery created successfully");
    } catch (error) {
      console.log("error =", error);
      console.log(images);
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <form onSubmit={createGallery}>
        {/* //! IMAGE "File" */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='images'>Image File Upload</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='file'
            id='images'
            name='images'
            placeholder='Enter Image'
            onChange={handleFileChange} multiple
          />
        </div>
        {/* //! IMAGE Name */}

        {/* //! IMAGE ALT TEXT */}

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='galleryCategoryName'>Gallery Category Name</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='text'
            id='galleryCategoryName'
            placeholder='Enter Category Name'
            value={galleryCategoryName}
            onChange={(e) => setGalleryCategoryName(e.target.value)}
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
          onClick={handleUpload}
        >
          Post Gallery
        </button>
      </form>
    </div>
  );
};

export default CreateGallery;
