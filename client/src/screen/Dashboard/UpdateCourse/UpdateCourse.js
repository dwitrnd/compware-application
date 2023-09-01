import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { constant } from "constants/contants";

const UpdateCourse = () => {
  const { id } = useParams();
  const apiUrl = `${constant.base}/api/course/${id}`; // create URL

  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [slugTitle, setSlugTitle] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseIntro, setCourseIntro] = useState("");
  const [aboutCourse, setAboutCourse] = useState("");
  const [courseLogo, setCourseLogo] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageAltText, setImageAltText] = useState("");
  const [coursePdf, setCoursePdf] = useState(null);

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      const { courseName, courseIntro, courseCategory, aboutCourse, duration, imageAltText, imageName, slugTitle } = res.data.msg;
      setCourseName(courseName);
      setCourseIntro(courseIntro);
      setCourseCategory(courseCategory);
      setAboutCourse(aboutCourse);
      setCourseDuration(duration);
      setImageAltText(imageAltText);
      setImageName(imageName);
      setSlugTitle(slugTitle);
    });
  }, []);

  const updateCourse = async (e) => {
    e.preventDefault();

    console.log("courseName =", courseName);
    console.log("courseDuration =", courseDuration);
    console.log("slugTitle =", slugTitle);
    console.log("courseCategory =", courseCategory);
    console.log("courseIntro =", courseIntro);
    console.log("aboutCourse =", aboutCourse);
    console.log("courseLogo =", courseLogo);
    console.log("imageName =", imageName);
    console.log("imageAltText =", imageAltText);
    console.log("coursePdf =", coursePdf);

    // do a post request to apiUrl

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("slugTitle", slugTitle);
    formData.append("courseCategory", courseCategory);
    formData.append("courseIntro", courseIntro);
    formData.append("courseDuration", courseDuration);
    formData.append("aboutCourse", aboutCourse);
    formData.append("courseLogo", courseLogo);
    formData.append("imageName", imageName);
    formData.append("imageAltText", imageAltText);
    formData.append("coursePdf", coursePdf);

    console.log(formData);

    try {
      const response = await axios.patch(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response =", response);
      toast.success("Course updated successfully");
      // navigate("/dashboard");
    } catch (error) {
      console.log("error =", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <form onSubmit={updateCourse}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseName'>Course Name</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='text'
            id='courseName'
            placeholder='Enter course name'
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        {/* for duration input field  */}

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseDuration'>Course Duration</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='text'
            id='courseDuration'
            placeholder='Enter course duration'
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='slugTitle'>Slug Title</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='text'
            id='slugTitle'
            placeholder='Enter slug title'
            value={slugTitle}
            onChange={(e) => setSlugTitle(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseCategory'>Course Category</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='text'
            id='courseCategory'
            placeholder='Enter course category'
            value={courseCategory}
            onChange={(e) => setCourseCategory(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseIntro'>Course Intro</label>
          <textarea
            rows='6'
            columns='10'
            style={{
              width: "100%",
              height: "20rem",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='text'
            id='courseIntro'
            placeholder='Enter course intro'
            value={courseIntro}
            onChange={(e) => setCourseIntro(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='aboutCourse'>About Course</label>
          <ReactQuill
            value={aboutCourse}
            onChange={(value) => setAboutCourse(value)}
            modules={{
              toolbar: [[{ header: "1" }, { header: "2" }, { font: [] }], [{ list: "ordered" }, { list: "bullet" }], ["bold", "italic", "underline"], [{ color: [] }, { background: [] }], [{ align: [] }], ["link", "image"], ["clean"]],
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseLogo'>Course Logo</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            required
            type='file'
            id='courseLogo'
            placeholder='Enter course logo'
            onChange={(e) => {
              console.log(e.target.files[0]);
              setCourseLogo(e.target.files[0]);
            }}
          />
        </div>

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
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
          />
        </div>

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
            value={imageAltText}
            onChange={(e) => setImageAltText(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='coursePdf'>Course Pdf</label>
          <input
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type='file'
            id='coursePdf'
            placeholder='Enter course pdf'
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
          type='submit'
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
