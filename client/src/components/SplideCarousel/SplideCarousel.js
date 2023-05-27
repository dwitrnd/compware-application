import { useEffect } from "react";

import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const SplideCarousel = () => {
  useEffect(() => {
    // initialize  splide with loop
    new Splide(".splide", {
      type: "loop",
      autoplay: true,
      arrows: false,
      pagination: false,
      perPage: 4,
      gap: "1rem",
      speed: 10000,
      rewindSpeed: 10000,
      breakpoints: {
        600: {
          perPage: 1,
        },
        800: {
          perPage: 2,
        },
        1000: {
          perPage: 3,
        },
      },
    }).mount({ AutoScroll });
  }, []);
  return (
    <>
      <section class='splide' aria-label='Basic Structure Example'>
        <div class='splide__track'>
          <ul class='splide__list'>
            <li class='splide__slide' style={{ background: "#E8E9EB", color: "white" }}>
              <h3>Slide 01</h3>
              <h3>Slide 01</h3>
              <h3>Slide 01</h3>
              <h3>Slide 01</h3>
            </li>

            <li class='splide__slide' style={{ background: "#E8E9EB", color: "white" }}>
              <h3>Slide 02</h3>
              <h3>Slide 02</h3>
              <h3>Slide 02</h3>
              <h3>Slide 02</h3>
            </li>
            <li class='splide__slide' style={{ background: "#E8E9EB", color: "white" }}>
              <h3>Slide 03</h3>
              <h3>Slide 03</h3>
              <h3>Slide 03</h3>
              <h3>Slide 03</h3>
            </li>
            <li class='splide__slide' style={{ background: "#E8E9EB", color: "white" }}>
              <h3>Slide 04</h3>
              <h3>Slide 04</h3>
              <h3>Slide 04</h3>
              <h3>Slide 04</h3>
            </li>
            <li class='splide__slide' style={{ background: "#E8E9EB", color: "white" }}>
              <h3>Slide 05</h3>
              <h3>Slide 05</h3>
              <h3>Slide 05</h3>
              <h3>Slide 05</h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SplideCarousel;
