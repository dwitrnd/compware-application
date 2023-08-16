import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateCourse = () => {
  {
    /* make states for input field for courseName, slugTitle, courseCategory, courseIntro, aboutCourse, courseLogo, imageName, imageAltText, coursePdf */
  }
  const navigate = useNavigate();

  const { id } = useParams();

  const [courseName, setCourseName] = useState("");
  const [slugTitle, setSlugTitle] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseIntro, setCourseIntro] = useState("");
  const [aboutCourse, setAboutCourse] = useState("");
  const [courseLogo, setCourseLogo] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageAltText, setImageAltText] = useState("");
  const [coursePdf, setCoursePdf] = useState("");

  const apiUrl = "http://localhost:5001/api/course/" + id;

  // first get one Course from id and then put it in above states

  useEffect(() => {
    const getCourse = async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();

      setCourseName(data.msg.courseName);
      setSlugTitle(data.msg.slugTitle);
      setCourseCategory(data.msg.courseCategory);
      setCourseIntro(data.msg.courseIntro);
      setAboutCourse(data.msg.aboutCourse);
      setCourseLogo(data.msg.courseLogo);
      setImageName(data.msg.imageName);
      setImageAltText(data.msg.imageAltText);
      setCoursePdf(data.msg.coursePdf);
    };

    getCourse();
  }, []);

  const updateCourse = async (e) => {
    e.preventDefault();

    const courseData = {
      courseName,
      slugTitle,
      courseCategory,
      courseIntro,
      aboutCourse,
      courseLogo,
      imageName,
      imageAltText,
      coursePdf,
    };

    //  patch method in form-data

    const res = await fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    const data = await res.json();
    console.log(data);
    toast.success("updated successfully");
    navigate("/dashboard/list-course");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <form action=''>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseName'>Course Name</label>
          <input style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='text' id='courseName' placeholder='Enter course name' value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='slugTitle'>Slug Title</label>
          <input style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='text' id='slugTitle' placeholder='Enter slug title' value={slugTitle} onChange={(e) => setSlugTitle(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseCategory'>Course Category</label>
          <input style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='text' id='courseCategory' placeholder='Enter course category' value={courseCategory} onChange={(e) => setCourseCategory(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseIntro'>Course Intro</label>
          <textarea rows='6' columns='10' style={{ width: "100%", height: "20rem", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='text' id='courseIntro' placeholder='Enter course intro' value={courseIntro} onChange={(e) => setCourseIntro(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='aboutCourse'>About Course</label>
          <input style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='text' id='aboutCourse' placeholder='Enter about course' value={aboutCourse} onChange={(e) => setAboutCourse(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='courseLogo'>Course Logo</label>

          {/* upload file */}
          <input style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='file' id='courseLogo' placeholder='Enter course logo' value={courseLogo} onChange={(e) => setCourseLogo(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='imageName'>Image Name</label>
          <input style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='text' id='imageName' placeholder='Enter image name' value={imageName} onChange={(e) => setImageName(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='imageAltText'>Image Alt Text</label>
          <input style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='text' id='imageAltText' placeholder='Enter image alt text' value={imageAltText} onChange={(e) => setImageAltText(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor='coursePdf'>Course Pdf</label>
          <input style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} type='file' id='coursePdf' placeholder='Enter course pdf' value={coursePdf} onChange={(e) => setCoursePdf(e.target.value)} />
        </div>

        <button
          style={{
            padding: "15px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            fontSize: "16px",
            marginTop: "20px",
          }}
          type='submit'
          onClick={updateCourse}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
