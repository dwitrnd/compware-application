import { Box, TextField, Typography, Button, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CertificateImage from "../../assets/images/certificateimage.jpeg";
import TestimonialImage from "../../assets/images/TestimonialPhotos/Student12.jpg";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const tableHeading = [
  { id: 1, label: "Course", information: "DTC-004 - PROGRAMMING IN PYTHON" },
  { id: 2, label: "Started On", information: "July 1, 2020" },
  { id: 3, label: "Completed On", information: "August 31, 2020" },
  { id: 4, label: "Verification Id", information: "DTC-20210421-001" },
  { id: 5, label: "Trainer", information: "SHREYANSH LODHA" },
];

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
          <Grid container spacing={2}>
            {" "}
            <Grid item>
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
                <Stack direction="column">
                  <img src={TestimonialImage} />
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ textAlign: "center" }}>
                            Heading
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableHeading.map((heading) => (
                          <TableRow key={heading.id}>
                            <TableCell component="th" scope="row">
                              {heading.label}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {heading.information}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Stack>
              </Box>
            </Grid>
            <Grid item>
              <img
                src={CertificateImage}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginLeft: "2rem",
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
