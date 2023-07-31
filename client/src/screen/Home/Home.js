import styled from "styled-components";
import SplideCarousel from "components/SplideCarousel/SplideCarousel";
import Container from "@material-ui/core/Container";

// import sections

import AboutUsSection from "./components/AboutUs";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/Features";
import ClientsSection from "./components/Clients";
import PlacementSection from "./components/PlacementPartner/PlacementPartner";
import Header from "components/Header";
import ReviewsMarqueCarousel from "components/ReviewsMarqueCarousel/ReviewsMarqueCarousel";

const Home = () => {
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
            <video autoPlay muted loop controlsList="nodownload">
              <source
                src={
                  "https://cdn-cf-east.streamable.com/video/mp4/xzmccy.mp4?Expires=1691054520&Signature=Jy1o0mK55npvDKaDrj1DmpbnozzIdG2HPtEaDI5oQ0ixCaOv73BH-pkE7nY7N0NfMDSHB3bl1OSp1yC8V75inEqNbAe1lgCA96OYSkSfaMj-1J116UTrzVKYb-R0dy2Q63ic8bUHTiLUg3EPw68CR-eY9P8UHAAYyNfLjbhBqTm0DzuIfBR2ja6VzUyLqMt3Vi~0QVtrasehybvYcMhSLp9324-PaWXDZ04aPg93lpATcuuFZ0Lhu6rWf5GNfe1fcfH3SZ0WkSL0BTwD-gUSbxeswzFZCSCFDd4KA8XzPgVjbpKaMNl0CLNEU93mauvn6~9xMNqcVT4zgtmGRsmKxg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
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
              style={{ marginTop: "8rem" }}
            >
              Millions of students and people around the world showcase their
              skills and work on compware - the home to the world’s best
              trainers and professionals.
            </HeroSubTitle>

            <CourseSearchField
              placeholder="Search courses..."
              type="text"
              style={{ marginTop: "0.5rem" }}
            />
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

        <div style={{ margin: "5rem 0rem" }}>
          <Header
            subTitle=""
            preTitle="Why Choose "
            postTitle="Us?"
            paragraph="
              We have the best trainers and professionals and we have the best courses for you.
              
          "
          />
          <FeaturesSection />
        </div>

        {/* //todo: course section */}
        <PlacementSection />

        {/* //todo: how it works section */}
        <HowItWorksSection />
        {/* //todo: aboutus section */}
        <AboutUsSection />

        {/* //todo: testimonial section */}
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
