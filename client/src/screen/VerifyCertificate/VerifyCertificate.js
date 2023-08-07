import { Box, TextField, Typography, Button, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CertificateImage from "../../assets/images/certificateimage.jpg";
import TestimonialImage from "../../assets/images/TestimonialPhotos/Student12.jpg";
import Stack from "@mui/material/Stack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const VerifyCertificate = () => {
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
        <Container maxWidth='lg'>
          <section>
            <Typography variant='h3' color='primary' marginBottom='2rem'>
              Congratulations Tushar!
            </Typography>
          </section>
          <Grid container spacing={4}>
            {" "}
            <Grid item xs={12} md={4}>
              <Box
                className='user-box'
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  borderRadius: ".25rem",
                  width: "fit-content",
                  maxWidth: "23rem",
                  marginTop: "2rem",
                  marginBottom: "3rem",
                  padding: "25px 25px 25px 25px",
                  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                  "& .MuiTextField-root": { width: "30rem" },
                }}
              >
                <Stack direction='column' spacing={2}>
                  <img src={TestimonialImage} />
                  <Typography textAlign='center'>Tushar Luitel</Typography>
                  <hr />
                  <Grid container margin='0.5rem'>
                    <Grid item xs={6}>
                      <Typography className='user-information topic'>Course</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information' textAlign='center'>
                        DTC-004
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information topic'>Started On</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information' textAlign='center'>
                        July 1, 2020
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information topic'>Completed On</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information' textAlign='center'>
                        August 31, 2020
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information topic'>Verification Id</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information' textAlign='center'>
                        DTC-20210421-001
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information topic'>Trainer</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className='user-information' textAlign='center'>
                        SHREYANSH LODHA
                      </Typography>
                      <Typography className='user-information' textAlign='center'>
                        PYTHON TRAINER
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Stack direction='column' spacing={4}>
                <section
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    src={CertificateImage}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      marginTop: "2rem",
                      border: "5px solid #0f5288",
                    }}
                    alt='Certificate'
                  />
                  <div style={{ position: "absolute", top: "38%", left: "50%", transform: "translateX(-50%) translateY(-38%)" }}>
                    <strong>
                      <h2>Tushar Luitel</h2>
                    </strong>
                  </div>
                  <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translateX(-50%) translateY(-55%)" }}>
                    <strong>
                      <h2>Fullstack Mern Course</h2>
                    </strong>
                  </div>
                  <div style={{ position: "absolute", top: "65%", left: "36%", transform: "translateX(-36%) translateY(-65%)" }}>
                    <strong>
                      <h5>120</h5>
                    </strong>
                  </div>

                  <div style={{ position: "absolute", top: "65%", left: "36%", transform: "translateX(-36%) translateY(-65%)" }}>
                    <strong>
                      <h5>120</h5>
                    </strong>
                  </div>
                  <div style={{ position: "absolute", top: "72%", left: "44.5%", transform: "translateX(-44.5%) translateY(-72%)" }}>
                    <strong>
                      <h5>July 1, 2020</h5>
                    </strong>
                  </div>
                </section>
                <Button variant='contained'>
                  <span>
                    <FileDownloadIcon
                      sx={{
                        color: "white",
                        paddingTop: "0.5rem",
                        paddingRight: "0.5rem",
                      }}
                    />
                  </span>{" "}
                  Download Certificate
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
