import React, { useState, useEffect } from "react";
import Fb from "assets/icons/fb.png";
import Insta from "assets/icons/insta.png";
import Linkedin from "assets/icons/linkedin.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Akankshya from "assets/images/panel-discussion/Akankshya Upadhyay 1.png";
import Parag from "assets/images/panel-discussion/Santosh.jpeg";
import AnilDutta from "assets/images/panel-discussion/Sweta.jpeg";
import Mona from "assets/images/panel-discussion/Subash.jpeg";
import Avina from "assets/images/panel-discussion/Shyam.jpeg";
import Chiranjibi from "assets/images/panel-discussion/Chiranjibi Adhikari.jpg";
import Shristi from "assets/images/panel-discussion/Shristi.jpeg";
import Prakash from "assets/images/panel-discussion/Kumar.jpeg";
import Himalaya from "assets/images/panel-discussion/Himalaya.jpg";
import BhojRaj from "assets/images/panel-discussion/BhojRaj.png";
import Rohit from "assets/images/panel-discussion/Rohit.png";
import Kushum from "assets/images/panel-discussion/Kushum.png";

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

const EventPageEpisode2 = () => {
  const [panelistImage, setPanelistImage] = useState("");
  const [panelistName, setPanelistName] = useState("");
  const [panelistDescription, setPanelistDescription] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const accordion = document.querySelectorAll(".accordion h3");
    let mainParent;
    let height;
    let answer;
    accordion.forEach((item) => {
      item.addEventListener("click", () => {
        height =
          item.parentElement.nextElementSibling.firstElementChild.offsetHeight;
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
    <main id="event-page">
      <>
        <div>
          <Modal
            style={{
              border: "none",
              outline: "none",
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img
                className="panel-discussion-modal-img"
                src={panelistImage}
                alt=""
              />
              <h3 className="roboto_500 panel-discussion-modal-name">
                <center> {panelistName}</center>
              </h3>
              <Typography
                id="modal-modal-description "
                className="roboto_400 justify-text panel-modal-desc"
                sx={{ mt: 2 }}
              >
                {panelistDescription}
              </Typography>
            </Box>
          </Modal>
        </div>
      </>

      <div className="hero-section">
        <h1 className="roboto_500">
          Deerwalk Tech Dialogue Series | Episode II
        </h1>
        <h1 className="roboto_500">Roundtable Talk</h1>
        <h1 className="roboto_500">
          <span>
            "Deconstructing the IT Curriculum-Industry Skills Mismatch
          </span>{" "}
          - A Comprehensive Review of Nepalese University Curricula and IT
          Needs"
        </h1>
        <h1 className="event-header">
          <span className="roboto_500 event-title">
            <u>Event Details</u>
          </span>
        </h1>
        <br />
        <h4 className="roboto_300 event-timeline">
          After the successful completion of Panel Discussion Ep.2, we're
          gearing up for Panel Discussion Ep.3. Stay tuned!
        </h4>
      </div>

      {/* speaker section */}
      {/* <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <h3>
        The Deerwalk Tech Dialogue Series EP - II, held on December 29, 2023, convened experts to discuss transforming Nepal into an IT hub by 2030. Delving into academia and industry intersections, concerns over the current curriculum's relevance and the urgent need for an overhaul were highlighted. Academic figures included Rohit Raj Pandey, Dr. Bhoj Raj Ghimire, Himalaya Kakshyapati, Shyam Sundar Khatiwada, and Kumar Lamichhane, while industry experts featured Shristi Kayastha, Santosh Koirala, Sweta Karn, Subash Devkota, and Chiranjibi Adhikari. Key discussions focused on bridging academia-industry gaps, addressing challenges like curriculum rigidity, soft skills deficiency, and the need for continuous updates. Emphasizing collaboration and practical skill development, the session aimed at retaining talent in Nepal's evolving IT sector, addressing issues from brain drain to the impact of salary boundaries on students' role preferences.
        </h3>
      </section> */}
      {/* host section */}
      <section id="panel-list-section">
        <div className="container">
          <h2 className="heading roboto_700">Panelist</h2>
          <div className="panel-discussion-container">
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Shristi);
                setPanelistName("Shristi Kayastha");
                setPanelistDescription(
                  "Shristi Kayastha, the People and Culture Manager at Aqore Software, brings extensive expertise in HR and organizational development to our panel. With a career spanning national and international roles, including with the United Nations Mission in Kosovo, Shristi excels in addressing complex organizational challenges. She bridges academia and industry, imparting knowledge in organizational leadership and MIS, while actively engaging in professional and community service initiatives."
                );
              }}
            >
              <img src={Shristi} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Shristi Kayastha</h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Parag);
                setPanelistName("Santosh Koirala");
                setPanelistDescription(
                  "Santosh Koirala, Vice President at NAS IT, joins us as a distinguished panelist for Episode II of the Deerwalk Tech Dialogue Series. With his extensive experience and leadership in the field, Santosh brings invaluable insights into the realm of technology and business. As Vice President at NAS IT, he plays a pivotal role in shaping the company's strategic direction and driving innovation in the ever-evolving tech landscape."
                );
              }}
            >
              <img src={Parag} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Santosh Koirala</h6>
              {/* <h6 className='roboto_400 panel-list-designation'> Parag Shrestha </h6> */}
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(AnilDutta);
                setPanelistName("Sweta Karn");
                setPanelistDescription(
                  "Sweta Karn, the VP of Data at Cedar Gate Services Pvt Ltd, joins our esteemed panel for Episode II of the Deerwalk Tech Dialogue Series. With her profound expertise and leadership in data management, Sweta offers invaluable insights into leveraging data for strategic decision-making and business growth. In her role, she spearheads initiatives to optimize data-driven processes and drive innovation within the organization."
                );
              }}
            >
              <img src={AnilDutta} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Sweta Karn</h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Mona);
                setPanelistName("Subash Devkota");
                setPanelistDescription(`
                Subash Devkota, the Director at Deerhold Nepal Pvt. Ltd, enriches our panel for Episode II of the Deerwalk Tech Dialogue Series. With his extensive experience and strategic vision, Subash brings invaluable insights into business leadership and innovation. As Director at Deerhold Nepal Pvt. Ltd, he plays a pivotal role in steering the company's growth and fostering a culture of excellence.`);
              }}
            >
              <img src={Mona} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Subash Devkota</h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Chiranjibi);
                setPanelistName("Chiranjibi Adhikari");
                setPanelistDescription(`
                Chiranjibi Adhikari, a renowned cybersecurity expert from Nepal, is the CEO of One Cover Pvt. Ltd., a cybersecurity consulting firm. With extensive knowledge in cybersecurity, information security, and digital forensics, he's a prolific writer and researcher, having authored books and research papers in these fields. Chiranjibi is an advocate for cybersecurity awareness and education, delivering lectures and workshops. He also serves as the General Secretary at CAN Federation and holds several other key roles in the tech industry.
`);
              }}
            >
              <img src={Chiranjibi} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">
                Chiranjibi Adhikari
              </h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Prakash);
                setPanelistName("Kumar Lamichhane");
                setPanelistDescription(`
Kumar Lamichhane, esteemed Faculty member at DWIT College, lends his expertise to our panel for Episode II of the Deerwalk Tech Dialogue Series. With a wealth of knowledge in academia and technology, Kumar offers invaluable insights into the intersection of education and industry trends. As a Faculty member at DWIT College, he is dedicated to nurturing the next generation of tech professionals and fostering innovation within the classroom.
`);
              }}
            >
              <img src={Prakash} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Kumar Lamichhane</h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Avina);
                setPanelistName("Shyam Sundar Khatiwada");
                setPanelistDescription(`
                Shyam Sundar Khatiwada, a distinguished Faculty member at DWIT College, enriches our panel for Episode II of the Deerwalk Tech Dialogue Series. With his profound expertise in academia and technology, Shyam offers invaluable insights into the evolving landscape of education and industry convergence. As a dedicated Faculty member at DWIT College, he plays a pivotal role in shaping the curriculum and preparing students for the dynamic challenges of the tech industry. 
`);
              }}
            >
              <img src={Avina} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Shyam Sundar Khatiwada</h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Himalaya);
                setPanelistName("	Himalaya Kakshyapati");
                setPanelistDescription(`
                Himalaya Kakshyapati, a respected Faculty member at Pulchowk Engineering College, brings his expertise to our panel for Episode II of the Deerwalk Tech Dialogue Series. With a deep understanding of engineering and technology, Himalaya offers valuable insights into the intersection of academia and industry. As a dedicated educator at Pulchowk Engineering College, he plays a pivotal role in shaping the next generation of engineering professionals and driving innovation in the field. 
`);
              }}
            >
              <img src={Himalaya} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Himalaya Kakshyapati</h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(BhojRaj);
                setPanelistName("Dr. Bhoj Raj Ghimire");
                setPanelistDescription(`
                Dr. Bhoj Raj Ghimire, the Head of the School of Technology and Program Coordinator for M.Phil. ICT at Open University, brings his wealth of expertise to our panel as a distinguished Speaker for Episode II of the Deerwalk Tech Dialogue Series. With a profound understanding of technology and education, Dr. Ghimire offers invaluable insights into the intersection of academia and industry. In his roles, he plays a crucial part in shaping the educational landscape and preparing students for the challenges of the tech-driven world.
`);
              }}
            >
              <img src={BhojRaj} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Dr. Bhoj Raj Ghimire</h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Rohit);
                setPanelistName("Rohit Raj Pandey");
                setPanelistDescription(`
                Rohit Raj Pandey, the Head of the School of Computing at British College, graces our panel as a distinguished Speaker for Episode II of the Deerwalk Tech Dialogue Series. With a wealth of experience in computing and education, Rohit brings invaluable insights into the convergence of academia and industry. As a leader at British College, he plays a pivotal role in shaping the curriculum and guiding students toward success in the dynamic field of computing. 
`);
              }}
            >
              <img src={Rohit} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Rohit Raj Pandey</h6>
            </div>
          </div>
        </div>
      </section>
      {/* speaker section */}

      {/* host section */}
      <section id="panel-list-section">
        <div className="container">
          <h2
            className="heading roboto_700"
            style={{
              textAlign: "center",
            }}
          >
            Guest & Moderator
          </h2>
          <div className="panel-discussion-container">
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Kushum);
                setPanelistName("Dr. Kushum Shakya");
                setPanelistDescription(`
                Prof. Dr. Kushum Shakya, the esteemed Dean of BCA at Tribhuvan University, graces our panel as a distinguished Guest for Episode II of the Deerwalk Tech Dialogue Series. With extensive experience and expertise in academia, Dr. Shakya offers invaluable insights into the realm of computer applications and education. As the Dean of BCA, she plays a pivotal role in shaping the academic landscape and guiding students towards excellence in the field. 
`);
              }}
            >
              <img src={Kushum} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Dr. Kushum Shakya</h6>
              <h6 className="roboto_400 panel-list-designation"> Guest </h6>
            </div>
            <div
              className="panel-list-card clickable"
              onClick={() => {
                handleOpen();
                setPanelistImage(Akankshya);
                setPanelistName("Akankshya Upadhyay");
                setPanelistDescription(`
                Akankshya Upadhyay is a dedicated project manager at Deerhold Ltd. She has a strong background in computer science and information technology. With over three years of experience at Deerhold, she has excelled in her role, showcasing her organizational and leadership skills. Beyond her professional work, she is involved in various educational initiatives, including presenting business news on Nepal Television and teaching students critical thinking skills. Her diverse experiences, including work as a news anchor and English instructor, reflect her commitment to both technology and education. Additionally, she holds a diploma in US healthcare data analytics, further enhancing her expertise.
`);
              }}
            >
              {/* <div className='cover roboto_400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt itaque u </div> */}
              <img src={Akankshya} alt="" />{" "}
              <h6 className="roboto_400 panel-list-name">Akankshya Upadhyay</h6>
              <h6 className="roboto_400 panel-list-designation"> Moderator </h6>
            </div>
          </div>
        </div>
      </section>
      <footer className="panelist-footer">
        <div className="icon-container">
          <a
            href="https://www.facebook.com/deerwalktrainingcenter/"
            target="_blank"
          >
            <img src={Fb} alt="" />
          </a>
          <a href="https://www.instagram.com/deerwalk.training.center/?hl=en">
            <img src={Insta} alt="" />
          </a>

          <a href="https://np.linkedin.com/company/deerwalk-compware-ltd">
            <img src={Linkedin} alt="" />
          </a>
        </div>
        <p className="roboto_400">Copyright &copy; 2024 Deerwalk Compware</p>
      </footer>
    </main>
  );
};

export default EventPageEpisode2;
