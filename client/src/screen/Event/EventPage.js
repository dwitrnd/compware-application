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
import Akankshya from "assets/images/panel-discussion/Akankshya Upadhyay 1.png";
import Parag from "assets/images/panel-discussion/Parag Shrestha 1.png";
import AnilDutta from "assets/images/panel-discussion/Anil Dutta 1.png";
import Mona from "assets/images/panel-discussion/Mona Nyachhyon 1.png";
import Avina from "assets/images/panel-discussion/AvinaNakarmi 1.png";
import Chiranjibi from "assets/images/panel-discussion/Chiranjibi Adhikari.jpg";
import Rajib from "assets/images/panel-discussion/rajib.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SifalSchool from "assets/icons/Sifal School.png";
import Logispark from "assets/icons/Logispark.png";
import HamroPatra from "assets/icons/hamropatro.png";
import DWIT from "assets/icons/DWIT.png";
import CND from "assets/icons/CNA.png";
import CedarGate from "assets/icons/Cedar Gate.png";
import Atkans from "assets/icons/Atkans.png";
import Infrasoft from "assets/icons/Infrasoft.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EventPage = () => {
  const [panelistImage, setPanelistImage] = React.useState("");
  const [panelistName, setPanelistName] = React.useState("");
  const [panelistDescription, setPanelistDescription] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <>
        <div>
          <Modal
            style={{
              border: "none",
              outline: "none",
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <img className='panel-discussion-modal-img' src={panelistImage} alt='' />
              <h3 className='roboto_500 panel-discussion-modal-name'>
                <center> {panelistName}</center>
              </h3>
              <Typography id='modal-modal-description ' className='roboto_400 justify-text panel-modal-desc' sx={{ mt: 2 }}>
                {panelistDescription}
              </Typography>
            </Box>
          </Modal>
        </div>
      </>

      <div className='hero-section'>
        <h1 className='roboto_500'>Deerwalk Tech Dialogue Series | Episode I</h1>
        <h1 className='roboto_500'>
          <span>"Making Nepal the IT Hub by 2030</span> - Possibilities and Challenges"
        </h1>
        <h1 className='event-header'>
          <span className='roboto_500 event-title'>
            <u>Event Details</u>
          </span>
        </h1>
        <br />
        <h4 className='roboto_300 event-timeline'>
          8th October, 2023 <br />
          2:00 P.M to 4:00 P.M
          <br />
          Hotel Himalaya
        </h4>
      </div>

      {/* <section className='about-event-section'>
        <div className='container'>
          <h1 className='roboto_700'>About Event:</h1>
          <p className='roboto_400'>
            Deerwalk Compware is organizing a panel discussion in collaboration with industry leaders, centering around the captivating topic, "Deerwalk Tech Dialogue Series. Episode I", where we will delve into the strategies, innovations, and obstacles that shape Nepal's journey towards IT
            prominence. With Deerwalk Tech Dialogue Series. Episode I, Panel Discussion - Making Nepal the IT Hub by 2030 - Possibilities and Challenges,  we're bringing together the smartest people, the creative thinkers, and the most influential figures, all accepted through a meticulous process
            of evaluation and selection. This exclusive gathering is a testament to our commitment to fostering meaningful conversations that matter. As we dig into Nepal's tech progress, our panelists will break down the plans that lead to success, highlighting the new ideas that push us forward,
            and face the challenges that we can only beat by working together.
          </p>

          <a href='./EventPage.js' download>
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
      </section> */}
      {/* panelist section */}
      <section id='panel-list-section'>
        <div className='container'>
          <h2 className='heading roboto_700'>Panelist:</h2>
          <div className='panel-discussion-container'>
            <div
              className='panel-list-card clickable'
              onClick={() => {
                handleOpen();
                setPanelistImage(Rajib);
                setPanelistName("Dr. Rajib Subba");
                setPanelistDescription(
                  "Dr. Rajib Subba is a pracademic in the ICT field, holding a PhD in Communication and Information Sciences from the University of Hawaii. He bridges academia and industry, applying ICT to solve complex organizational challenges, especially in crisis management. Dr. Subba's rich career spans roles in national and international organizations, including the United Nations Mission in Kosovo. He's also an educator, teaching organizational leadership and MIS. He has received numerous awards for his contributions, and he is actively involved in professional and community service organizations."
                );
              }}
            >
              <img src={Rajib} alt='' /> <h6 className='roboto_400 panel-list-name'>Dr. Rajib Subba</h6>
              {/* <h6 className='roboto_400 panel-list-designation'> Dr. Rajib Subba </h6> */}
            </div>
            <div
              className='panel-list-card clickable'
              onClick={() => {
                handleOpen();
                setPanelistImage(Parag);
                setPanelistName("Parag Shrestha");
                setPanelistDescription(
                  "Parag Shrestha is the Managing Director of South Asia at Fusemachines, dedicated to empowering businesses with AI solutions. His role involves overseeing AI strategies, solutions, research, and expanding Fusemachines' presence in South Asia. With over two decades of experience, Parag has worked with top tech firms like Salesforce, IBM, and 360Insights in North America, spanning diverse industries including finance, healthcare, and government. He's a strategic thinker, renowned for solving critical challenges for major clients like Coca-Cola and Delta Airlines."
                );
              }}
            >
              <img src={Parag} alt='' /> <h6 className='roboto_400 panel-list-name'>Parag Shrestha</h6>
              {/* <h6 className='roboto_400 panel-list-designation'> Parag Shrestha </h6> */}
            </div>
            <div
              className='panel-list-card clickable'
              onClick={() => {
                handleOpen();
                setPanelistImage(AnilDutta);
                setPanelistName("Anil Dutta");
                setPanelistDescription(
                  "Anil Dutta is a distinguished professional currently holding the esteemed position of Joint Secretary at the Ministry of Communication and Information Technology. With a career spanning over two decades, he brings a wealth of experience and expertise to his pivotal role. Anil began his professional journey as a computer engineer at the Election Commission in April 1998, to which he has dedicated 25 years to date. In January 2020, he assumed the position of Joint Secretary at the Ministry of Communication and Information Technology, showcasing his dedication to public service and his invaluable contributions to the fields of technology and government administration."
                );
              }}
            >
              <img src={AnilDutta} alt='' /> <h6 className='roboto_400 panel-list-name'>Anil Dutta</h6>
              {/* <h6 className='roboto_400 panel-list-designation'> Anil Dutta </h6> */}
            </div>
            <div
              className='panel-list-card clickable'
              onClick={() => {
                handleOpen();
                setPanelistImage(Mona);
                setPanelistName("Mona Nyachhyon");
                setPanelistDescription(`
                  Mona Nyachhyon, the founder of Monal Tech, boasts over a decade of international experience as a cybersecurity professional in the IT sector. Throughout her career, she has demonstrated exceptional leadership in IT companies, offering technical and managerial expertise. Mona's
                achievements include receiving the Women in IT award in Nepal and nominations for prestigious IT awards in the USA and Asia due to her leadership in a software company. She holds a range of certifications, including CEH, CAL, Scrum@Scale, and ATM, as well as holds both an MBA and
                MPA, in addition to being a merit holder in BE. The primary objective of this panel discussion is convening key industry leaders, experts, and stakeholders to explore Nepal's potential to become a thriving IT hub by the year 2030. Together, we aim to address the opportunities and
                challenges that lie ahead and discuss effective strategies for leveraging ideas and technologies. Your participation in this event as a sponsor would be incredibly valuable. Additionally, we extend a cordial invitation to your company to sponsor the event - a gesture that would be
                genuinely appreciated and mutually advantageous. By choosing to sponsor this event, you not only demonstrate your commitment to Corporate Social Responsibility (CSR) but also stand to gain substantial exposure and direct marketing returns. Moreover, you will have ample opportunities
                to engage with tech leaders from premier business organizations in Nepal, particularly within the information and technology sector. We firmly believe that your presence and involvement in this event will inspire and motivate the tech minds of Nepal to embrace the transformative
                power of technology and innovation for a brighter future.`);
              }}
            >
              <img src={Mona} alt='' /> <h6 className='roboto_400 panel-list-name'>Mona Nyachhyon</h6>
              {/* <h6 className='roboto_400 panel-list-designation'> Mona Nyachhyon </h6> */}
            </div>
            <div
              className='panel-list-card clickable'
              onClick={() => {
                handleOpen();
                setPanelistImage(Chiranjibi);
                setPanelistName("Chiranjibi Adhikari");
                setPanelistDescription(`
                Chiranjibi Adhikari, a renowned cybersecurity expert from Nepal, is the CEO of One Cover Pvt. Ltd., a cybersecurity consulting firm. With extensive knowledge in cybersecurity, information security, and digital forensics, he's a prolific writer and researcher, having authored books and research papers in these fields. Chiranjibi is an advocate for cybersecurity awareness and education, delivering lectures and workshops. He also serves as the General Secretary at CAN Federation and holds several other key roles in the tech industry.
`);
              }}
            >
              <img src={Chiranjibi} alt='' /> <h6 className='roboto_400 panel-list-name'>Chiranjibi Adhikari</h6>
              {/* <h6 className='roboto_400 panel-list-designation'> Mona Nyachhyon </h6> */}
            </div>
          </div>
        </div>
      </section>
      {/* speaker section */}

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
              {/* <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> */}
              <img src={Avina} alt='' /> <h6 className='roboto_400 panel-list-name'>Avina Nakarmi</h6>
              <h6 className='roboto_400 panel-list-designation'> Host </h6>
            </div>
            <div className='panel-list-card'>
              {/* <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> */}
              <img src={Akankshya} alt='' /> <h6 className='roboto_400 panel-list-name'>Akankshya Upadhyay</h6>
              <h6 className='roboto_400 panel-list-designation'> Moderator </h6>
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
                  <p>The event is focusing on the objective of making Nepal a thriving IT hub by the year 2030. The primary focus is likely on discussing strategies, policies, investments, and collaborations required to expand the country’s IT sector.</p>
                </div>
              </div>

              <div className='accordion'>
                <div className='question'>
                  <h3 className='roboto_700'>Who can join this discussion?</h3>
                </div>
                <div className='answer roboto_400'>
                  <p>Upon submission of the form, invitations will be sent via email to those who qualify. Those who receive an invitation will have the honour of participating in the discussion.</p>
                </div>
              </div>

              <div className='accordion'>
                <div className='question'>
                  <h3 className='roboto_700'>Who will be attending?</h3>
                </div>
                <div className='answer roboto_400'>
                  <p>Representatives from educational institutions, industry leaders in the IT sector, investors, and professionals from various fields will be present in the event.</p>
                </div>
              </div>
              <div className='accordion'>
                <div className='question'>
                  <h3 className='roboto_700'>Why is this event being organized?</h3>
                </div>
                <div className='answer roboto_400'>
                  <p>The event is being organized in order to foster the development of Nepal’s IT sector and bring together industry leaders for strategic planning.</p>
                </div>
              </div>
              <div className='accordion'>
                <div className='question'>
                  <h3 className='roboto_700'>What do we hope to achieve from this event?</h3>
                </div>
                <div className='answer roboto_400'>
                  <p>Our goal is to gather valuable insights and implementable strategies that will help Nepal become a vibrant IT hub by 2030.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sponsor-section'>
        <h2 className='sponsor-heading roboto_700'>Sponsors:</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img className='sponsor-logos sponsor-logos--medium' src={SifalSchool} alt='' />
          <img className='sponsor-logos' src={Logispark} alt='' />
          <img className='sponsor-logos' src={HamroPatra} alt='' />
          <img className='sponsor-logos sponsor-logos--medium' src={DWIT} alt='' />
          <img className='sponsor-logos' src={Deerhold} alt='' />
          <img className='sponsor-logos' src={CND} alt='' />
          <img className='sponsor-logos sponsor-logos--medium' src={CedarGate} alt='' />
          <img className='sponsor-logos' src={Atkans} alt='' />
          <img className='sponsor-logos' src={Infrasoft} alt='' />
        </div>

        <div className='sponsor-container'>
          {/* <h4 className='roboto_700'>Title Sponsor:</h4>

          <div className='sponsor-logo-container'>
            <img src={HamroPatro} alt='' />
          </div> */}
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
