import styled from "styled-components";
import SplideCarousel from "components/SplideCarousel/SplideCarousel";
import Container from "@material-ui/core/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import sections
import react, { useState } from "react";

import FeaturesSection from "./components/Features";
import ClientsSection from "./components/Clients";
import PlacementSection from "./components/PlacementPartner/PlacementPartner";
import Header from "components/Header";
import ReviewsMarqueCarousel from "components/ReviewsMarqueCarousel/ReviewsMarqueCarousel";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // hero section component

  const FilterCardContainer = styled.div`
    display: flex;
    margin-top: 3.5rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 550px) {
      display: none;
    }
  `;

  const CourseSearchField = styled.input`
    width: 50%;
    @media (max-width: 550px) {
      width: 90%;
    }
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1.2rem;
    outline: none;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 50px;
    margin-left: 50%;
    transform: translateX(-50%);
  `;

  const FilterCards = styled.div`
    display: inline;
    font-size: 1.1rem;
    background: rgba(0, 0, 0, 0.5) !important;
    margin: 0 5px;
    padding: 15px 18px;
    font-size: 16px;
    border-radius: 50px;

    &:hover {
      background: white !important;
      color: black;
    }
  `;

  const HeroTitle = styled.h2`
    font-size: 2rem;
    max-width: 600px;
    margin: auto;
    text-align: center;
    @media (max-width: 550px) {
      font-size: 1.5rem;
    }
  `;

  const HeroSubTitle = styled.p`
    font-size: 1rem;
    max-width: 600px;
    text-align: center;
    margin: 2rem auto;
  `;

  return (
    <>
      {/* //* =========hero section starts here========= */}

      <section id="hero-section">
        <section id="hero-banner">
          <div id="video-box">
            <video
              autoPlay
              muted
              loop
              controlsList="nodownload"
              style={{ filter: "brightness(0.5)" }}
            >
              <source
                src={
                  "https://cdn-cf-east.streamable.com/video/mp4/d6ynb5.mp4?Expires=1691402880&Signature=SWJgTDtNHlY2jDXep5iWb~UBB72NdyeSKxXr1V~02Nh4hOSmMqgrXhF6M56bijQl6UUiwO1jxo-JxcGShQA85l~dx6dxpsRjIm2iMTvlIeik9dUGmQjVTusHfRtZbiNM6L8QIVZaGYKfY7UKfHx8ZPGWMKJcx6HpyHtlyLb4Q9A4Wpf3cX5Q4mA2HN7MOHTQz0eyIe5MSlVPkGOf2~gi0WvyU-BsYCwz8VSCIST9Jpq8CAdq6vQwturkVrwoN6QM7KEOoyHMJ28wXBq62iYGixwf1Z4kBFcJmPaTMg8xmKuiUlQEMDfvyyz5s1YASo1bv313oGNYVmrUeA1s86hV5g__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
                }
                type="video/mp4"
              />
            </video>
          </div>

          <div id="hero-content">
            <HeroTitle style={{ marginTop: "3rem" }} className="hero-text">
              Explore the world's leading
            </HeroTitle>
            <HeroTitle className="hero-text">training center</HeroTitle>

            <HeroSubTitle
              className="fade-in-text hero-text"
              id="hero-subtitle"
              style={{ marginTop: "4rem" }}
            >
              Millions of students and people around the world showcase their
              skills and work on compware - the home to the world’s best
              trainers and professionals.
            </HeroSubTitle>
            <div
              style={{
                margin: "auto",

                fontSize: "1.2rem",

                padding: "1rem 1rem 1rem 1rem",

                marginLeft: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Select
                options={options}
                placeholder="Search Courses...."
                className="hero-course-search"
              />
            </div>
            <FilterCardContainer>
              <FilterCards>Programming</FilterCards>
              <FilterCards>Graphic Design</FilterCards>
              <FilterCards>Diploma</FilterCards>
              <FilterCards>Short Term</FilterCards>
            </FilterCardContainer>
          </div>
        </section>
      </section>

      {/* //* =========hero section ends here========= */}

      {/* // !  ========= body section starts from here ========= */}

      <section style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Header preTitle="Quality Courses For Our" postTitle="Students" />
        <ReviewsMarqueCarousel />
      </section>

      <Container maxWidth="lg">
        {/* //todo: features section */}
        <div
          style={{ margin: "5rem 0rem" }}
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <Header
            subTitle=""
            preTitle="Why Deerwalk Training Center? "
            paragraph="
            Deerwalk Training Center cultivates expertise in IT and Management through specialized training programs.
              
          "
          />
          <FeaturesSection />
        </div>
        {/* //todo: Placement section */}
        <PlacementSection />
        {/* //todo: how it works section */}
        <section className="find-your-path">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#0f5288",
              textAlign: "center",
            }}
            data-aos="fade-down"
          >
            Find Your Path
          </h2>
          <Container style={{ display: "flex", justifyContent: "center" }}>
            <div className="path-section-container">
              <div className="left-section">
                <div
                  className="step"
                  data-aos="fade-down-right"
                  data-aos-duration="2000"
                >
                  <h4 className="roboto_400">Enroll</h4>
                  <p className="text-justify">
                    Kickstart your journey by enrolling in our learning center,
                    where you'll gain access to cutting-edge courses and expert
                    instructors, setting the foundation for your future success.
                  </p>
                </div>
                <div className="step" data-aos="fade-up-right">
                  <h4 className="roboto_400">Graduate</h4>
                  <p className="text-justify">
                    As a graduate, you'll emerge with confidence and a certified
                    skill set, fully prepared to tackle real-world challenges
                    and make a meaningful impact in the workforce.
                  </p>
                </div>
              </div>
              <div
                id="middle-path-illustrator"
                className="middle-section"
              ></div>
              <div className="right-section">
                <div className="step" data-aos="fade-up-left">
                  <h4 className="roboto_400">Learn</h4>
                  <p className="text-justify">
                    Immerse yourself in hands-on, industry-relevant learning
                    experiences, acquiring practical skills and knowledge to
                    thrive in your chosen field.
                  </p>
                </div>
                <div className="step" data-aos="fade-down-left">
                  <h4 className="roboto_400">Placement</h4>
                  <p className="text-justify">
                    Our Placement Partner Program ensures you're well-connected
                    to top employers, providing exciting career opportunities
                    and paving the way for a rewarding professional journey.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        ;{/* //todo: testimonial section */}
        <div style={{ margin: "5rem 0rem" }}>
          <Header
            subTitle="IN THE NEWS"
            preTitle="Our"
            postTitle="Testimonials"
          />
          <SplideCarousel />
        </div>
        {/* //todo: partners section */}
        <div style={{ margin: "5rem 0rem" }}>
          <Header subTitle="" preTitle="Our" postTitle="Clients" />
          <ClientsSection />
        </div>
      </Container>
      {/* // !  ========= body section ends from here ========= */}
    </>
  );
};

export default Home;
