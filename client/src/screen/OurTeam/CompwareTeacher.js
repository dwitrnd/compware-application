import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Ranjan from "../../assets/images/OurTeam/ranjan-dai.jpg";
import { Typography } from "@material-ui/core";
import MemberDialogBox from "./MemberDialogBox";

const CompwareTeacher = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4}>
          <img src={Ranjan} />
          <div className="member">
            <Typography variant="body1" color="primary">
              Ranjan K.C
            </Typography>
            <Typography variant="body2">
              Marketing and Promotions Officer
            </Typography>
          </div>
          <MemberDialogBox />
        </Grid>
        <Grid xs={12} sm={6} md={4} alignItems="center">
          <img src={Ranjan} />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img src={Ranjan} />
        </Grid>
      </Grid>
    </>
  );
};

export default CompwareTeacher;
