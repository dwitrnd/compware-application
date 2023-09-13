import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { constant } from "constants/contants";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditTestimonial() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageAltText, setImageAltText] = useState("");

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const apiUrl = `${constant.base}/api/testimonial/${id}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
          const testimonialData = await response.json();

          console.log(testimonialData);

          const { affiliation, description, image, imageAltText, imageName, name } = testimonialData.msg;

          setName(name);
          setAffiliation(affiliation);
          setDescription(description);
          setImageName(imageName);
          setImageAltText(imageAltText);
        } else {
          console.error("Failed to fetch testimonial data");
        }
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
      }
    };

    fetchTestimonialData();
  }, []);

  const handleEditorChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${constant.base}/api/testimonial/${id}`;

    const formDataToSend = new FormData();

    formDataToSend.append("name", name);
    formDataToSend.append("affiliation", affiliation);
    formDataToSend.append("description", description);
    formDataToSend.append("image", image);
    formDataToSend.append("imageName", imageName);
    formDataToSend.append("imageAltText", imageAltText);

    try {
      const response = await fetch(
        apiUrl,
        {
          method: "PATCH",
          body: formDataToSend,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      if (response.ok) {
        setName("");
        setAffiliation("");
        setDescription("");
        setImage("");
        setImageName("");
        setImageAltText("");

        toast.success(" successfully updated testimonial!");
        window.location.href = "/dashboard/list-testimonial";
      } else {
        console.error("Failed to update testimonial");
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
      <h1>Update Testimonial</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>name</label>
        <input required type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>affiliation</label>
        <input required type='text' name='affiliation' value={affiliation} onChange={(e) => setAffiliation(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>imageName</label>
        <input required type='text' name='imageName' value={imageName} onChange={(e) => setImageName(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>imageAltText</label>
        <input required type='text' name='imageAltText' value={imageAltText} onChange={(e) => setImageAltText(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>description</label>
        <ReactQuill value={description} onChange={handleEditorChange} />

        <label style={labelStyle}>blog image</label>
        <input
          type='file'
          accept='image/*'
          name='logo'
          onChange={(e) => {
            const imageFile = e.target.files[0];
            setImage(imageFile);
          }}
          style={inputStyle}
        />

        <button type='submit' style={buttonStyle}>
          Update Testimonial
        </button>
      </form>
    </div>
  );
}

export default EditTestimonial;
