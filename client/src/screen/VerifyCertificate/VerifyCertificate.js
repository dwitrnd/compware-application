import { Box, TextField, Typography, Button, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CertificateImage from "../../assets/images/certificateimage.jpeg";
import TestimonialImage from "../../assets/images/TestimonialPhotos/Student12.jpg";
import Stack from "@mui/material/Stack";

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
        <Container maxWidth="lg">
          <section>
            <Typography variant="h3" color="primary" marginBottom="2rem">
              Congratulations %USERNAME%
            </Typography>
          </section>
          <Grid container>
            {" "}
            <Grid item xs={12} md={6}>
              <Box
                component="form"
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
                <Stack direction="column" spacing={2}>
                  <img src={TestimonialImage} />
                  <Typography textAlign="center">%USERNAME%</Typography>
                  <hr />
                  <Grid container spacing={6}>
                    <Grid item xs={6}>
                      <Typography>Course</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography textAlign="center">DTC-004</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Started On</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography textAlign="center">July 1, 2020</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Completed On</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography textAlign="center">
                        August 31, 2020
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Verification Id</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography textAlign="center">
                        DTC-20210421-001
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Trainer</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography textAlign="center">
                        SHREYANSH LODHA
                      </Typography>
                      <Typography textAlign="center">PYTHON TRAINER</Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={CertificateImage}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "2rem",
                }}
                alt="Certificate"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default VerifyCertificate;
