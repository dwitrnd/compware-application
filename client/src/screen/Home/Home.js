import styled from "styled-components";
import SplideCarousel from "components/SplideCarousel/SplideCarousel";
import Container from "@material-ui/core/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";

import FeaturesSection from "./components/Features";
import ClientsSection from "./components/Clients";
import PlacementSection from "./components/PlacementPartner/PlacementPartner";
import Header from "components/Header";
import ReviewsMarqueCarousel from "components/ReviewsMarqueCarousel/ReviewsMarqueCarousel";
import ReviewsMarqueCarouselLower from "components/ReviewsMarqueCarousel/ReviewMarqueeUpper";
import CourseSearch from "./components/CourseSearch/CoruseSearch";
import { constant } from "constants/contants";
import TiharImage from "../../assets/images/tihar.jpg";

const Home = () => {
  const [course, setCourse] = useState("");

  const [isPopupVisible, setPopupVisibility] = useState(true);

  const handleClosePopup = () => {
    setPopupVisibility(false);
  };
  const handleOverlayClick = (event) => {
    if (event.target.id === "overlay") {
      setPopupVisibility(false);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    setPopupVisibility(true);
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

  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 998;
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
    background: #fff !important;
    margin: 0 5px;
    padding: 15px 18px;
    font-size: 16px;
    border-radius: 50px;
    border: 2px solid #0f5288;
    color: black;

    &:hover {
      background: #0f5288 !important;
      color: black;
      color: #fff;
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

  const popupStyle = {
    position: "fixed",
    top: "55%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.5rem",
    color: "white",
  };

  const imageStyle = {
    maxWidth: "80%",
    borderRadius: "8px",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1000,
    backdropFilter: "blur(10px)",
  };

  const Popup = ({ handleClose }) => (
    <div style={popupStyle}>
      <button style={closeButtonStyle} onClick={handleClose}>
        X
      </button>
      <img src={TiharImage} style={imageStyle} alt="Tihar Festival" />
    </div>
  );

  return (
    <>
      <div style={{ position: "relative" }}>
        {isPopupVisible && <Popup handleClose={handleClosePopup} />}
        {isPopupVisible && (
          <div
            id="overlay"
            style={overlayStyle}
            onClick={handleOverlayClick}
          ></div>
        )}
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
                  src={"https://video.deerwalktrainingcenter.com/"}
                  type="video/mp4"
                />
              </video>
            </div>

            <div id="hero-content">
              <HeroTitle style={{ marginTop: "3rem" }} className="hero-text">
                Explore Nepal's Leading
              </HeroTitle>
              <HeroTitle className="hero-text">Training Center</HeroTitle>

              <HeroSubTitle
                id="hero-subtitle"
                style={{ marginTop: "4rem", marginBottom: "4rem" }}
              >
                Welcome to Deerwalk Training Center, where we are dedicated to
                providing premiere IT and Technical skills to facilitate your
                journey towards achieving success.
              </HeroSubTitle>

              <CourseSearch />
            </div>
          </section>
        </section>

        {/* //* =========hero section ends here========= */}

        {/* // !  ========= body section starts from here ========= */}

        <section style={{ marginTop: "5rem", marginBottom: "5rem" }}>
          <Header preTitle="Quality Courses For Our" postTitle="Students" />
          <ReviewsMarqueCarousel />
          <ReviewsMarqueCarouselLower />
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
                fontWeight: "normal",
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
                      Kickstart your journey by enrolling in our learning
                      center, where you'll gain access to cutting-edge courses
                      and expert instructors, setting the foundation for your
                      future success.
                    </p>
                  </div>
                  <div className="step" data-aos="fade-up-right">
                    <h4 className="roboto_400">Graduate</h4>
                    <p className="text-justify">
                      As a graduate, you'll emerge with confidence and a
                      certified skill set, fully prepared to tackle real-world
                      challenges and make a meaningful impact in the workforce.
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
                      Our Placement Partner Program ensures you're
                      well-connected to top employers, providing exciting career
                      opportunities and paving the way for a rewarding
                      professional journey.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          {/* //todo: testimonial section */}
          <div style={{ margin: "5rem 0rem" }}>
            <Header
              subTitle="IN THE NEWS"
              preTitle="Testimonials"
              postTitle=""
            />
            <SplideCarousel />
          </div>
          {/* //todo: partners section */}
          <div style={{ margin: "5rem 0rem" }}>
            <Header subTitle="" preTitle="Clients" />
            <ClientsSection />
          </div>
        </Container>
        {/* // !  ========= body section ends from here ========= */}
      </div>
    </>
  );
};

export default Home;
