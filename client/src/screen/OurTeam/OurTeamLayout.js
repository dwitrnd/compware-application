import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@material-ui/core";
import MemberDialogBox from "./MemberDialogBox";
import Profile from "../../assets/images/profile2.png";

const OurTeamLayout = ({ title, datas }) => {
  return (
    <>
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
      <Grid container spacing={2} width="100%" justifyContent="center">
        {datas.map((data) => {
          return (
            <div style={{ margin: "1.5rem", marginTop: "7.65rem" }}>
              <div
                style={{
                  width: "15rem",
                  height: "8rem",
                  backgroundColor: "#5A94BD",
                  position: "relative",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              >
                <img
                  src={Profile}
                  style={{ position: "absolute", top: "-7.65rem" }}
                />
              </div>
              <div className="member">
                <Typography className="member-name">{data.name}</Typography>
                <Typography className="member-role">{data.role}</Typography>
              </div>
              <MemberDialogBox />
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default OurTeamLayout;
