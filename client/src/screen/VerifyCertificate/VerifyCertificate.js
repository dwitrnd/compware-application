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

  function convertDate(date) {
    const dateArray = date.split("/");
    const month = dateArray[0];
    const day = dateArray[1];
    const year = dateArray[2];
    const monthName = getMonthName(month);
    return `${monthName} ${day}, ${year}`;
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

  const fetchStudentData = async () => {
    const response = await fetch(`${constant.base}/api/student/check-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        verificationId: id,
      }),
    }).then((res) => res.json());
    return response;
  };

  useEffect(async () => {
    console.log("----    fetchStudentData()");
    console.log(fetchStudentData());

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
    setFullName(fullName);
    setGender(gender);
    setStartDuration(startDuration);
    setTrainer(trainer);
    setTrainerTitle(trainerTitle);
    setVerificationIdNo(verificationId);
  }, []);

  const handleDownloadPNG = async () => {
    const certificate = certificateRef.current;
    if (!certificate) {
      return 0;
    }
    const canvas = await html2canvas(certificate);
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

    const canvas = await html2canvas(certificate);
    const pngDataUrl = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(pngDataUrl, "PNG", 15, 15, 180, 120);
    pdf.save("certificate.pdf");
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
          <section>
            <Typography variant="h3" color="primary" marginBottom="2rem">
              Congratulations {fullName}!
            </Typography>
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
                <section
                  ref={certificateRef}
                  className="certificate"
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    className="secttion-"
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
                    style={{
                      height: "2rem",
                    }}
                    className="training-manager-signature"
                    src={TrainingManager}
                    alt=""
                  />

                  <strong className="fullName-overlay">
                    <h2>{fullName}</h2>
                  </strong>
                  <strong className="course-overlay">
                    <h2>{course}</h2>
                  </strong>

                  <div
                    style={{
                      position: "absolute",
                      top: "65%",
                      left: "36%",
                      transform: "translateX(-36%) translateY(-65%)",
                    }}
                  >
                    <strong>
                      <h5 className="hour">{courseDuration.split(" ")[0]}</h5>
                    </strong>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "72.5%",
                      left: "44.5%",
                      transform: "translateX(-44.5%) translateY(-72%)",
                    }}
                  >
                    <strong>
                      <h5 className="date">{convertDate(startDuration)}</h5>
                    </strong>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "72.5%",
                      left: "62.5%",
                      transform: "translateX(-44.5%) translateY(-72%)",
                    }}
                  >
                    <strong>
                      <h5 className="date">{convertDate(endDuration)}</h5>
                    </strong>
                  </div>
                </section>
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
