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
    <div>
      <form action=''>
        {/* make input field for courseName, slugTitle, courseCategory, courseIntro, aboutCourse, courseLogo, imageName, imageAltText, coursePdf */}

        <div className='form-group'>
          <label htmlFor='courseName'>Course Name</label>
          <input type='text' className='form-control' id='courseName' placeholder='Enter course name' value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='slugTitle'>Slug Title</label>
          <input type='text' className='form-control' id='slugTitle' placeholder='Enter slug title' value={slugTitle} onChange={(e) => setSlugTitle(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='courseCategory'>Course Category</label>
          <input type='text' className='form-control' id='courseCategory' placeholder='Enter course category' value={courseCategory} onChange={(e) => setCourseCategory(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='courseIntro'>Course Intro</label>

          {/* use textarea instead */}

          <textarea
            row={"6"}
            column={"10"}
            style={{
              width: "100%",
              height: "20rem",
            }}
            type='text'
            className='form-control'
            id='courseIntro'
            placeholder='Enter course intro'
            value={courseIntro}
            onChange={(e) => setCourseIntro(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='aboutCourse'>About Course</label>
          <input type='text' className='form-control' id='aboutCourse' placeholder='Enter about course' value={aboutCourse} onChange={(e) => setAboutCourse(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='courseLogo'>Course Logo</label>
          <input type='text' className='form-control' id='courseLogo' placeholder='Enter course logo' value={courseLogo} onChange={(e) => setCourseLogo(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='imageName'>Image Name</label>
          <input type='text' className='form-control' id='imageName' placeholder='Enter image name' value={imageName} onChange={(e) => setImageName(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='imageAltText'>Image Alt Text</label>
          <input type='text' className='form-control' id='imageAltText' placeholder='Enter image alt text' value={imageAltText} onChange={(e) => setImageAltText(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='coursePdf'>Course Pdf</label>
          <input type='text' className='form-control' id='coursePdf' placeholder='Enter course pdf' value={coursePdf} onChange={(e) => setCoursePdf(e.target.value)} />
        </div>

        <button
          style={{
            padding: "2rem",
            background: "blue",
            color: "white",
            margin: "1rem",
            width: "100%",
          }}
          type='submit'
          onClick={updateCourse}
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
