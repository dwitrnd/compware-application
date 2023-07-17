import { Typography } from "@material-ui/core";
import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const CourseDetailPage = () => {
  return (
    <>
      <Container style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <section>
          <Typography
            variant="h3"
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Course Detail
          </Typography>
        </section>
        <Grid container spacing={2}></Grid>
      </Container>
    </>
  );
};

export default CourseDetailPage;
