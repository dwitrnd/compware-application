import styled from "styled-components";
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

  return (
    <>
      {/* //* =========hero section starts here========= */}
      <section id='hero-section'>
        <section id='hero-banner'>
          <div id='video-box'>
            <video autoPlay muted loop controlsList='nodownload'>
              <source
                src={
                  "https://cdn-cf-east.streamable.com/video/mp4-mobile/xzmccy.mp4?Expires=1690793880&Signature=IVdl6LbqrH2~uvkX-PocjD9Z2I8teZ2ehcmCrMZWamHX492jL-Oj35YF0UtiYv2MoiPpoC7z2n6cGfp93kV89Ol~vBdCvNySSNtoje-t-UyTl5iDK20QEckLUCoAbtdcgsYzwKp~YEMF4WgYtel9V2JmYPsPElxova4mYKW8IdFIy9FuJW3cE9XFNRigBQOpEOorwvf~cTZW8l7Uve-Te-G3IFlmQl6px823KUA1Xt4mpQelubenRvF4QCqpeMNsVTnHEgDsnp8ld6dvvRydXfBA-MRaFO5b-QB-5UdVh9toBXJggjIxJb-sirS6vR9C5XerxUSuxV-2faLMNTlwiA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
                }
                type='video/mp4'
              />
            </video>
          </div>

          <div id='hero-content'>
            <FilterCardContainer>
              <FilterCards>Programming</FilterCards>
              <FilterCards>Graphic Design</FilterCards>
              <FilterCards>Diploma</FilterCards>
              <FilterCards>Short Term</FilterCards>
            </FilterCardContainer>

            <HeroTitle style={{ marginTop: "3rem" }} className='fade-in-text'>
              Explore the world's leading
            </HeroTitle>
            <HeroTitle className='fade-in-text'>training center</HeroTitle>

            <HeroSubTitle className='fade-in-text'>Millions of students and people around the world showcase their skills and work on compware - the home to the world’s best trainers and professionals.</HeroSubTitle>

            <CourseSearchField placeholder='Search courses...' type='text' />
          </div>
        </section>
      </section>
      {/* //* =========hero section ends here========= */}

      {/* // !  ========= body section starts from here ========= */}

      <section style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Header preTitle='Quality Courses For Our' postTitle='Students' />
        <ReviewsMarqueCarousel />
      </section>

      <Container maxWidth='lg'>
        {/* //todo: features section */}

        <div style={{ margin: "5rem 0rem" }}>
          <Header
            subTitle=''
            preTitle='Why Choose '
            postTitle='Us?'
            paragraph='
              We have the best trainers and professionals and we have the best courses for you.
              
          '
          />
          <FeaturesSection />
        </div>

        {/* //todo: course section */}
        <CourseSection />

        {/* //todo: how it works section */}
        <HowItWorksSection />
        {/* //todo: aboutus section */}
        <AboutUsSection />

        {/* //todo: testimonial section */}
        <div style={{ margin: "5rem 0rem" }}>
          <Header subTitle='IN THE NEWS' preTitle='Our' postTitle='Testimonials' paragraph='Testimonials of our trainees.' />
          <SplideCarousel />
        </div>

        {/* //todo: partners section */}
        <div style={{ margin: "5rem 0rem" }}>
          <Header
            subTitle=''
            preTitle='Our'
            postTitle='Clients'
            paragraph='
              Clients who have trusted us and have been with us for a long time.
          '
          />
          <ClientsSection />
        </div>
      </Container>
      {/* // !  ========= body section ends from here ========= */}
    </>
  );
};

export default Home;
