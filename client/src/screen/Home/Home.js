import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
import SplideCarousel from "../../components/SplideCarousel/SplideCarousel";
import Container from "@material-ui/core/Container";

const Home = () => {
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
              <source src={"https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"} type='video/mp4' />
              {/* <source src={"https://static.frontendmasters.com/assets/fm/med/home/hero.mp4"} type='video/mp4' /> */}
            </video>
          </div>

          <div id='hero-content'>
            <p>hello</p>
          </div>
        </section>
      </section>
      {/* //* =========hero section ends here========= */}

      <TestimonialSection style={{ margin: "5rem" }}>
        <h6 className='roboto_300'>IN THE NEWS</h6>
        <h2 className='roboto_400'>
          Hot off the
          <div className='gradient-text' style={{ display: "inline", marginLeft: ".5rem" }}>
            press
          </div>
        </h2>
        <p className='grey-color'>Read the latest news and announcements:</p>

        <Container>
          <SplideCarousel />
        </Container>
      </TestimonialSection>

      <ScrollToTop smooth />
    </>
  );
};

export default Home;
