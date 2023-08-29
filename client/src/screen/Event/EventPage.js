import React from "react";
import PanelListCardImage from "assets/images/ellipse-placeholder.png";
import { useEffect } from "react";
import HamroPatro from "assets/icons/hamropatro.png";
import Khalti from "assets/icons/khalti.png";
import WordLink from "assets/icons/wordlink.png";
import Bhoj from "assets/icons/bhoj.png";
import Deerhold from "assets/icons/deerhold.png";
import Leapfrog from "assets/icons/leapfrog.png";
import Bajra from "assets/icons/bajra.png";
import Nabil from "assets/icons/nabil.png";
import Fb from "assets/icons/fb.png";
import Insta from "assets/icons/insta.png";
import Linkedin from "assets/icons/linkedin.png";
import TestPdf from "assets/pdf/Passion_Letter_1.pdf";

const EventPage = () => {
  useEffect(() => {
    const accordion = document.querySelectorAll(".accordion h3");
    let mainParent;
    let height;
    let answer;
    accordion.forEach((item) => {
      item.addEventListener("click", () => {
        height = item.parentElement.nextElementSibling.firstElementChild.offsetHeight;
        answer = item.parentElement.nextElementSibling;
        mainParent = item.parentElement.parentElement;
        if (mainParent.classList.contains("active")) {
          mainParent.classList.remove("active");
          answer.style.height = `0px`;
        } else {
          mainParent.classList.add("active");
          answer.style.height = `${height}px`;
        }
      });
    });
  }, []);

  return (
    <main id='event-page'>
      <div className='hero-section'>
        <h1 className='roboto_500'>Deerwalk Tech Dialogue Series. Episode I</h1>
        <h1 className='roboto_500'>
          <span>"Making Nepal the IT Hub by 2030</span> - Possibilities and Challenges"
        </h1>
      </div>
      <div className='event-section'>
        <div>
          <h1>
            <span className='roboto_500'>Event Details:</span>
          </h1>
          <h4 className='roboto_300'>
            12th October, 2023 <br />
            12 P.M to 4 P.M
            <br />
            Hotel Marriott
          </h4>
        </div>
      </div>

      <section className='about-event-section'>
        <div className='container'>
          <h1 className='roboto_700'>About Event:</h1>
          <p className='roboto_400'>
            Deerwalk Compware is organizing a panel discussion in collaboration with industry leaders, centering around the captivating topic, "deerwalk Tech Dialogue Series. Episode I", where we will delve into the strategies, innovations, and obstacles that shape Nepal's journey towards IT
            prominence.
          </p>

          <a href='../../assets/pdf/Passion_Letter_1.pdf' download>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className='roboto_500 event-schedule-btn'
            >
              Event Schedule
              <i
                style={{
                  marginLeft: "10px",
                  fontSize: "1.2rem",
                }}
                class='bx bx-down-arrow-circle'
              ></i>
            </button>
          </a>
        </div>
      </section>
      {/* panelist section */}
      <section id='panel-list-section'>
        <div className='container'>
          <h2 className='heading roboto_700'>Panelist:</h2>
          <div className='panel-discussion-container'>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
          </div>
        </div>
      </section>
      {/* speaker section */}
      <section id='speaker-section'>
        <div className='container'>
          <h2 className='heading roboto_700'>Speakers:</h2>
          <div className='panel-discussion-container'>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
          </div>
        </div>
      </section>

      {/* host section */}
      <section id='panel-list-section'>
        <div className='container'>
          <h2
            className='heading roboto_700'
            style={{
              textAlign: "center",
            }}
          >
            Host & Moderator
          </h2>
          <div className='panel-discussion-container'>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
            <div className='panel-list-card'>
              <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> <img src={PanelListCardImage} alt='' /> <h6 className='roboto_400 panel-list-name'>Er. Kshitiz Singh</h6>
              <h6 className='roboto_400 panel-list-designation'> Hod, Nepal reasearch </h6>
            </div>
          </div>
        </div>
      </section>

      {/* accordion section */}
      <section className='accordion-section'>
        <h3 className='faq-header roboto_700'>Frequently Asked Questions:</h3>
        <div className='accordion-wrapper roboto_500'>
          <div className='accordion-division'>
            <div className='accordion-container'>
              <div className='accordion'>
                <div className='question'>
                  <h3 className='roboto_700'>What is the event focusing on?</h3>
                </div>
                <div className='answer roboto_400'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus voluptatibus quasi, perspiciatis similique beatae sint, assumenda vel magni corrupti asperiores esse eligendi possimus nesciunt veniam provident mollitia eveniet deserunt.</p>
                </div>
              </div>

              <div className='accordion'>
                <div className='question'>
                  <h3 className='roboto_700'>Who can join this discussion?</h3>
                </div>
                <div className='answer roboto_400'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus voluptatibus quasi, perspiciatis similique beatae sint, assumenda vel magni corrupti asperiores esse eligendi possimus nesciunt veniam provident mollitia eveniet deserunt. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolor necessitatibus voluptatibus quasi, perspiciatis similique beatae sint, assumenda vel magni corrupti asperiores esse eligendi possimus nesciunt veniam provident mollitia eveniet deserunt.
                  </p>
                </div>
              </div>

              <div className='accordion'>
                <div className='question'>
                  <h3 className='roboto_700'>Who will be attending?</h3>
                </div>
                <div className='answer roboto_400'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus voluptatibus quasi, perspiciatis similique beatae sint, assumenda vel magni corrupti asperiores esse eligendi possimus nesciunt veniam provident mollitia eveniet deserunt.</p>
                </div>
              </div>
              <div className='accordion'>
                <div className='question'>
                  <h3 className='roboto_700'>What do we hope to achieve from this event?</h3>
                </div>
                <div className='answer roboto_400'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus voluptatibus quasi, perspiciatis similique beatae sint, assumenda vel magni corrupti asperiores esse eligendi possimus nesciunt veniam provident mollitia eveniet deserunt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sponsor-section'>
        <h2 className='sponsor-heading roboto_700'>Sponsors:</h2>
        <div className='sponsor-container'>
          <h4 className='roboto_700'>Title Sponsor:</h4>
          <div className='sponsor-logo-container'>
            <img src={HamroPatro} alt='' />
          </div>
          <h4 className='roboto_700'>Powered By:</h4>
          <div className='sponsor-logo-container'>
            <img src={Khalti} alt='' />
            <img src={WordLink} alt='' />
            <img src={Bhoj} alt='' />
          </div>
          <h4 className='roboto_700'>Sponsored By:</h4>
          <div className='sponsor-logo-container'>
            <img src={Deerhold} alt='' />
            <img src={Leapfrog} alt='' />
            <img src={Bajra} alt='' />
            <img src={Nabil} alt='' />
          </div>
        </div>
      </section>

      <footer className='panelist-footer'>
        <div className='icon-container'>
          <a href='https://www.facebook.com/deerwalktrainingcenter/' target='_blank'>
            <img src={Fb} alt='' />
          </a>
          <a href='https://www.instagram.com/deerwalk.training.center/?hl=en'>
            <img src={Insta} alt='' />
          </a>

          <a href='https://np.linkedin.com/company/deerwalk-compware-ltd'>
            <img src={Linkedin} alt='' />
          </a>
        </div>
        <p className='roboto_400'>Copyright &copy; 2023 Deerwalk Compware</p>
      </footer>
    </main>
  );
};

export default EventPage;
