import { useEffect, useState } from "react";
import { Box, TextField, Typography, Button, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CertificateImage from "../../assets/images/certificateimage.jpg";
import Stack from "@mui/material/Stack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { constant } from "constants/contants";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TrainingManager from "assets/images/praveen-signature.png";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

const VerifyCertificate = () => {
  const certificateRef = useRef(null);

  const { id } = useParams();

  const [course, setCourse] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [email, setEmail] = useState("");
  const [endDuration, setEndDuration] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [startDuration, setStartDuration] = useState("");
  const [trainer, setTrainer] = useState("");
  const [trainerTitle, setTrainerTitle] = useState("");
  const [verificationIdNo, setVerificationIdNo] = useState("");
  const [trainerSignature, setTrainerSignature] = useState("");

  function convertDate(date) {
    const dateArray = date.split("/");
    const month = dateArray[0];
    const day = dateArray[1];
    const year = dateArray[2];
    const monthName = getMonthName(month);
    return `${monthName} ${day}, ${year}`;
  }

  function capitalToTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  function getMonthName(month) {
    switch (month) {
      case "01":
        return "January";
      case "1":
        return "January";
      case "02":
        return "February";
      case "2":
        return "February";
      case "03":
        return "March";
      case "3":
        return "March";
      case "04":
        return "April";
      case "4":
        return "April";
      case "05":
        return "May";
      case "5":
        return "May";
      case "06":
        return "June";
      case "6":
        return "June";
      case "07":
        return "July";
      case "7":
        return "July";
      case "08":
        return "August";
      case "8":
        return "August";
      case "09":
        return "September";
      case "9":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
    }
  }

  useEffect(async () => {
    const response = await fetch(`${constant.base}/api/student/check-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        verificationId: id,
      }),
    }).then((res) => res.json());

    const {
      course,
      courseDuration,
      email,
      endDuration,
      fullName,
      gender,
      startDuration,
      trainer,
      trainerTitle,
      verificationId,
    } = response.data[0];
    setCourse(course);
    setCourseDuration(courseDuration);
    setEmail(email);
    setEndDuration(endDuration);

    // convert MR. SASIN CHAND PRADHAN to Mr. Sasin Chand Pradhan or if the text is MS. ANU THAPALIYA then it should be Ms. Anu Thapaliya name could be anything MR. KSHItIZ SHAH or MR. KSHITIZ KUMAR SHAH just convert MR. or MS. to Mr. and Ms. and other remaining words to titile  case
    setFullName(capitalToTitleCase(fullName));

    setGender(gender);
    setStartDuration(startDuration);
    setTrainer(trainer);
    setTrainerTitle(trainerTitle);
    setVerificationIdNo(verificationId);

    const getTrainerResponse = await fetch(
      `${constant.base}/api/trainer/get-by-name`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trainerName: trainer,
        }),
      }
    ).then((res) => res.json());

    console.log("->->->->-<", getTrainerResponse);
    console.log("->->->->-<", getTrainerResponse);
    console.log("->->->->-<", getTrainerResponse);
    console.log("->->->->-<", getTrainerResponse);
    console.log("->->->->-<", getTrainerResponse);

    if (getTrainerResponse.msg.length !== 0) {
      console.log(
        `https://api.deerwalktrainingcenter.com/storage/${getTrainerResponse.msg[0].signature}`
      );
      setTrainerSignature(
        `https://api.deerwalktrainingcenter.com/storage/${getTrainerResponse.msg[0].signature}`
      );
    }
  }, []);

  const shareURL = `https://deerwalktrainingcenter.com/verify-certificate/${verificationIdNo}`;
  const handleDownloadPNG = async () => {
    const certificate = certificateRef.current;
    if (!certificate) {
      return 0;
    }
    const canvasOpption = { useCORS: true };
    const canvas = await html2canvas(certificate, canvasOpption);
    const pngDataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = pngDataUrl;
    link.download = "certificate.png";
    link.click();
  };
  const handleDownloadPDF = async () => {
    const certificate = certificateRef.current;
    if (!certificate) {
      return;
    }
    const canvasOpption = { useCORS: true };
    const canvas = await html2canvas(certificate, canvasOpption);
    const pngDataUrl = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "landscape" });
    pdf.addImage(pngDataUrl, "PNG", 15, 15, 270, 180);
    pdf.save("certificate.pdf");
  };
  const capitalizeTrainerTitle = (title) => {
    if (title === "QA Trainer") {
      return "QA Trainer";
    } else {
      return capitalToTitleCase(title);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.25rem",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <Container maxWidth="lg">
          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3" color="primary" marginBottom="2rem">
              Congratulations {fullName}!
            </Typography>
            <div
              style={{
                display: "flex",
                width: "30%",
              }}
            >
              <Typography variant="h6" color="primary">
                Share:
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "25%",
                }}
              >
                <FacebookShareButton url={shareURL}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton url={shareURL}>
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
              </div>
            </div>
          </section>
          <Grid container spacing={4}>
            {" "}
            <Grid item xs={12} md={4}>
              <Box
                className="user-box"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  borderRadius: ".25rem",
                  width: "fit-content",
                  maxWidth: "23rem",

                  marginBottom: "3rem",
                  padding: "25px 25px 25px 25px",
                  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                  "& .MuiTextField-root": { width: "30rem" },
                }}
              >
                <Stack direction="column" spacing={2}>
                  <img
                    src={
                      "https://deerwalkcompware.com/training/frontend/images/computer-training-institute.png"
                    }
                  />
                  <Typography textAlign="center">{fullName}</Typography>
                  <hr />
                  <Grid container margin="0.5rem">
                    <Grid item xs={6}>
                      <Typography className="user-information topic">
                        Course
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        className="user-information"
                        textAlign="center"
                      >
                        {course}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="user-information topic">
                        Started On
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        className="user-information"
                        textAlign="center"
                      >
                        {convertDate(startDuration)}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="user-information topic">
                        Completed On
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        className="user-information"
                        textAlign="center"
                      >
                        {convertDate(endDuration)}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="user-information topic">
                        Verification Id
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        className="user-information"
                        textAlign="center"
                      >
                        {verificationIdNo}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="user-information topic">
                        Trainer
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        className="user-information"
                        textAlign="center"
                      >
                        {trainer}
                      </Typography>
                      <Typography
                        className="user-information"
                        textAlign="center"
                      >
                        {trainerTitle}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Stack direction="column" spacing={4}>
                <div className="certificate-container">
                  <section
                    ref={certificateRef}
                    className="certificate"
                    style={{
                      position: "relative",
                    }}
                  >
                    <img
                      src={CertificateImage}
                      style={{
                        position: "relative",
                        maxWidth: "100%",
                        height: "auto",
                        marginTop: "2rem",
                        border: "5px solid #0f5288",
                      }}
                      alt="Certificate"
                    />

                    <img
                      className="training-manager-signature"
                      src={TrainingManager}
                      alt=""
                    />
                    <div
                      className="trainer-signature-overlay"
                      style={{
                        backgroundImage: `url(${trainerSignature})`,
                      }}
                    />

                    <h5 className="verification_id_overlay roboto_700">
                      {verificationIdNo}
                    </h5>

                    <span className="trainer-name-overlay roboto_700">
                      <strong>
                        <h1 className="roboto_500">{trainer}</h1>
                        <h5 className="trainer-title-overlay roboto_500">
                          {trainerTitle}
                        </h5>
                      </strong>
                    </span>

                    <strong className="fullName-overlay">
                      <h2 className="roboto_500">{fullName}</h2>
                    </strong>
                    <strong className="course-overlay">
                      <h2 className="roboto_500">{course}</h2>
                    </strong>

                    <div className="course-duration-overlay">
                      <strong>
                        <h5 className="hour roboto_700">
                          {courseDuration.split(" ")[0]}
                        </h5>
                      </strong>
                    </div>

                    <div
                      className="course-start-overlay"
                      style={{
                        position: "absolute",
                        top: "72%",
                        left: "44.5%",
                        transform: "translateX(-44.5%) translateY(-72%)",
                      }}
                    >
                      <strong>
                        <h5 className="date roboto_700">
                          {convertDate(startDuration)}
                        </h5>
                      </strong>
                    </div>
                    <div className="course-end-overlay">
                      <strong>
                        <h5 className="date roboto_700">
                          {convertDate(endDuration)}
                        </h5>
                      </strong>
                    </div>
                  </section>
                </div>

                <Button
                  onClick={handleDownloadPNG}
                  className="certificate-download-btn"
                  variant="contained"
                >
                  <span>
                    <FileDownloadIcon
                      sx={{
                        color: "white",
                        paddingTop: "0.5rem",
                        paddingRight: "0.5rem",
                      }}
                    />
                  </span>
                  Download PNG
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  className="certificate-download-btn"
                  variant="contained"
                >
                  <span>
                    <FileDownloadIcon
                      sx={{
                        color: "white",
                        paddingTop: "0.5rem",
                        paddingRight: "0.5rem",
                      }}
                    />
                  </span>
                  Download PDF
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default VerifyCertificate;
