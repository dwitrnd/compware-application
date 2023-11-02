import React from "react";
import { useEffect } from "react";
import Fb from "assets/icons/fb.png";
import Insta from "assets/icons/insta.png";
import Linkedin from "assets/icons/linkedin.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
        <h4 className="roboto_300 event-timeline">Coming Soon</h4>
      </div>

      {/* speaker section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <h3>
          Building upon the success of Deerwalk Tech Dialogue Series | Episode I
          : "Making Nepal the IT Hub by 2030 - Possibilities and Challenges", we
          are excited to introduce Deerwalk Tech Dialogue Series | Episode II :
          "Deconstructing the IT Curriculum-Industry Skills Mismatch - A
          Comprehensive Review of Nepalese University Curricula and IT Needs."
          In this upcoming episode, we will continue our discussion by examining
          the key insights from episode 1 and working towards practical
          solutions for bridging the gap between education and industry demands.
        </h3>
      </section>
      {/* host section */}

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
        <p className="roboto_400">Copyright &copy; 2023 Deerwalk Compware</p>
      </footer>
    </main>
  );
};

export default EventPageEpisode2;
