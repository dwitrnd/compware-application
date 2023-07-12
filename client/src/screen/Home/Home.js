import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
import SplideCarousel from "components/SplideCarousel/SplideCarousel";
import Container from "@material-ui/core/Container";

// import sections

import AboutUsSection from "./components/AboutUs";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/Features";
import ClientsSection from "./components/Clients";
import CourseSection from "./components/Courses/Courses";
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

  const TestimonialSection = styled.section`
    h6,
    h2,
    p {
      text-align: center;
    }

    h6 {
      font-size: 1rem;
      /*provide gradient color */

      background: linear-gradient(90deg, #02a28b, #067f87 52.4%, #0a5f82);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      margin: 0.2rem 0rem;
      font-size: 2.5rem;
    }
    p {
      margin-bottom: 3rem;
      font-size: 1.1rem;
    }
  `;

  return (
    <>
      {/* //* =========hero section starts here========= */}
      <section id='hero-section'>
        <section id='hero-banner'>
          <div id='video-box'>
            <video autoPlay muted loop>
              <source src={"https://static.frontendmasters.com/assets/fm/med/home/hero.mp4"} type='video/mp4' />
              {/* <source src={"https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"} type='video/mp4' /> */}
            </video>
          </div>

          <div id='hero-content'>
            <FilterCardContainer>
              <FilterCards>Discover</FilterCards>
              <FilterCards>Discover</FilterCards>
              <FilterCards>Discover</FilterCards>
              <FilterCards>Discover</FilterCards>
              <FilterCards>Discover</FilterCards>
            </FilterCardContainer>

            <HeroTitle style={{ marginTop: "3rem" }}>Explore the world's leading</HeroTitle>
            <HeroTitle>training center</HeroTitle>

            <HeroSubTitle>Millions of students and people around the world showcase their skills and work on compware - the home to the world’s best trainers and professionals.</HeroSubTitle>

            <CourseSearchField placeholder='Search...' type='text' />
          </div>
        </section>
      </section>
      {/* //* =========hero section ends here========= */}

      {/* // !  ========= body section starts from here ========= */}

      <section style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <ReviewsMarqueCarousel />
      </section>

      <Container maxWidth='lg'>
        {/* //todo: partners section */}
        <ClientsSection />
        {/* //todo: features section */}
        <FeaturesSection />

        {/* //todo: course section */}
        <CourseSection />

        {/* //todo: how it works section */}
        <HowItWorksSection />
        {/* //todo: aboutus section */}
        <AboutUsSection />

        {/* //todo: testimonial section */}
        <TestimonialSection style={{ margin: "5rem 0rem" }}>
          <Header subTitle='IN THE NEWS' preTitle='Hot off the ' postTitle='press' paragraph='Read the latest news and announcements:' />
          <SplideCarousel />
        </TestimonialSection>
      </Container>
      {/* // !  ========= body section ends from here ========= */}

      <ScrollToTop smooth />
    </>
  );
};

export default Home;
