import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { constant } from "constants/contants";

const CreateCourse = () => {
  const apiUrl = `${constant.base}/api/course`; // create URL
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [slugTitle, setSlugTitle] = useState("");
  const [courseIntro, setCourseIntro] = useState("");
  const [aboutCourse, setAboutCourse] = useState("");
  const [courseLogo, setCourseLogo] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageAltText, setImageAltText] = useState("");
  const [coursePdf, setCoursePdf] = useState(null);

  const categoryUrl = "http://localhost:5001/api/courseCategory";

  useEffect(() => {
    axios
      .get(categoryUrl)
      .then((res) => {
        setCategories(res.data.msg);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const createCourse = async (e) => {
    e.preventDefault();

    // do a post request to apiUrl

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("slugTitle", slugTitle);
    formData.append("courseCategory", selectedCategories);
    formData.append("courseIntro", courseIntro);
    formData.append("courseDuration", courseDuration);
    formData.append("aboutCourse", aboutCourse);
    formData.append("courseLogo", courseLogo);
    formData.append("imageName", imageName);
    formData.append("imageAltText", imageAltText);
    formData.append("coursePdf", coursePdf);

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
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="courseName">Course Name</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="text"
            id="courseName"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        {/* for duration input field  */}

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="courseDuration">Course Duration</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="text"
            id="courseDuration"
            placeholder="Enter course duration"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="slugTitle">Slug Title</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="text"
            id="slugTitle"
            placeholder="Enter slug title"
            value={slugTitle}
            onChange={(e) => setSlugTitle(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="courseCategory">Course Category</label>
          <select
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            id="courseCategory"
            multiple // Allow multiple selections
            size={4} // Set the number of visible options
            value={selectedCategories} // Use an array to store selected values
            onChange={(e) => {
              const selectedOptions = Array.from(e.target.options)
                .filter((option) => option.selected)
                .map((option) => option.value);
              setSelectedCategories(selectedOptions);
            }}
          >
            {categories.map((data, index) => (
              <option key={index} value={data.categories}>
                {data.categories}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="courseIntro">Course Intro</label>
          <textarea
            rows="6"
            columns="10"
            style={{
              width: "100%",
              height: "20rem",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="text"
            id="courseIntro"
            placeholder="Enter course intro"
            value={courseIntro}
            onChange={(e) => setCourseIntro(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="aboutCourse">About Course</label>
          <ReactQuill
            value={aboutCourse}
            onChange={(value) => setAboutCourse(value)}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["bold", "italic", "underline"],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                ["link", "image"],
                ["clean"],
              ],
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="courseLogo">Course Logo</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="file"
            id="courseLogo"
            placeholder="Enter course logo"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setCourseLogo(e.target.files[0]);
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
            value={imageName}
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
            value={imageAltText}
            onChange={(e) => setImageAltText(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="coursePdf">Course Pdf</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="file"
            id="coursePdf"
            placeholder="Enter course pdf"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setCoursePdf(e.target.files[0]);
            }}
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
          type="submit"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
