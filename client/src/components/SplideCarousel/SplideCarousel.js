import { useEffect, useState } from "react";
import { constant } from "constants/contants";

import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import AOS from "aos";
import "aos/dist/aos.css";

import axios from "axios";

const SplideCarousel = () => {
  const [tableData, setTableData] = useState(null);
  const url = `${constant.base}/api/testimonial`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.msg);
      /* The line `// setTableData(res.data.msg);` is commented out, which means it is not currently
        being executed. However, if it were to be uncommented, it would set the value of the
        `tableData` state variable to `res.data.msg`. This means that the data received from the API
        response would be stored in the `tableData` state variable, which can then be used to render
        the table rows in the component. */
      setTableData(res.data.msg);
    });

    AOS.init({
      duration: 10000,
    });
  }, []);
  useEffect(() => {
    // initialize  splide with loop
    new Splide(".splide", {
      type: "loop",
      autoplay: true,
      arrows: false,
      pagination: true,
      perPage: 2,
      gap: "1rem",
      speed: 10000,
      rewindSpeed: 10000,
      breakpoints: {
        600: {
          perPage: 2,
        },
        800: {
          perPage: 2,
        },
        1000: {
          perPage: 2,
        },
        1400: {
          perPage: 2,
        },
      },
    }).mount({ AutoScroll });
  });

  return (
    <>
      <section class="splide" aria-label="Basic Structure Example">
        <div class="splide__track" data-aos="flip-up" data-aos-duration="2000">
          <ul class="splide__list">
            {tableData &&
              tableData.map((item) => {
                return (
                  <li
                    class="splide__slide"
                    style={{ background: "#E8E9EB", color: "white" }}
                  >
                    <TestimonialCard
                      name={item.name}
                      description={item.description}
                      photoUrl={`${constant.base}/storage/${item.image}`}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SplideCarousel;
