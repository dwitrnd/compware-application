import { Box, TextField, Typography, Button, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CertificateImage from "../../assets/images/certificateimage.jpeg";

const RequestCertificate = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.25rem",
        }}
      >
        <Container maxWidth="lg">
          <section style={{ display: "flex" }}>
            {" "}
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                borderRadius: ".25rem",
                width: "fit-content",
                maxWidth: "35rem",
                marginTop: "3rem",
                marginBottom: "3rem",
                padding: "25px 25px 25px 25px",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                "& .MuiTextField-root": { width: "30rem" },
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                color="primary"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                Request Certificate
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ display: "flex", justifyContent: "center" }}
              >
                Fill the form
              </Typography>
              <TextField
                required
                label="Name"
                type="name"
                placeholder="Enter your name"
                variant="standard"
              />
              <TextField
                required
                label="Email"
                type="email"
                placeholder="Enter your email"
                variant="standard"
              />
              <TextField
                required
                label="Compware ID"
                type="name"
                placeholder="Enter your ID"
                variant="standard"
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#0F5288", color: "white" }}
              >
                REQUEST CERTIFICATE
              </Button>
            </Box>
            <img
              src={CertificateImage}
              style={{
                width: "100%",
                height: "auto",
                marginLeft: "2rem",
              }}
              alt="Certificate"
            />
          </section>
        </Container>
      </div>
    </>
  );
};

export default RequestCertificate;
