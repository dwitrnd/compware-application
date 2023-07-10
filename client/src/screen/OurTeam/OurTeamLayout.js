import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@material-ui/core";
import MemberDialogBox from "./MemberDialogBox";

const OurTeamLayout = ({ title, datas }) => {
  return (
    <>
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
      <Grid container spacing={2} width="100%">
        <Grid xs={12} sm={6} md={3}>
          {datas.map((data) => {
            return (
              <>
                <img src={data.image} />
                <div className="member">
                  <Typography className="member-name">{data.name}</Typography>
                  <Typography className="member-role">{data.role}</Typography>
                </div>
                <MemberDialogBox />
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default OurTeamLayout;
