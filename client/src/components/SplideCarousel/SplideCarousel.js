import { useEffect } from "react";

import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import AOS from "aos";
import "aos/dist/aos.css";

const SplideCarousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 10000,
    });
  }, []);
  useEffect(() => {
    // initialize  splide with loop
    new Splide(".splide", {
      // type: "loop",
      // autoplay: true,
      arrows: false,
      pagination: true,
      perPage: 4,
      gap: "1rem",
      // speed: 10000,
      // rewindSpeed: 10000,
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
        1400: {
          perPage: 3,
        },
      },
    }).mount({ AutoScroll });
  }, []);
  return (
    <>
      <section class="splide" aria-label="Basic Structure Example">
        <div
          class="splide__track"
          data-aos="zoom-out-up"
          data-aos-duration="2000"
        >
          <ul class="splide__list">
            <li
              class="splide__slide"
              style={{ background: "#E8E9EB", color: "white" }}
            >
              <TestimonialCard />
            </li>

            <li
              class="splide__slide"
              style={{ background: "#E8E9EB", color: "white" }}
            >
              <TestimonialCard />
            </li>
            <li
              class="splide__slide"
              style={{ background: "#E8E9EB", color: "white" }}
            >
              <TestimonialCard />
            </li>
            <li
              class="splide__slide"
              style={{ background: "#E8E9EB", color: "white" }}
            >
              <TestimonialCard />
            </li>
            <li
              class="splide__slide"
              style={{ background: "#E8E9EB", color: "white" }}
            >
              <TestimonialCard />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SplideCarousel;
