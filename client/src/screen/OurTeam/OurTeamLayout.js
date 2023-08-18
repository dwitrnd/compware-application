import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@material-ui/core";
import MemberDialogBox from "./MemberDialogBox";
import { constant } from "constants/contants";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/material";

const OurTeamLayout = ({ title, datas }) => {
  console.log("datas inside card mapping table", datas);

  return (
    <>
      <Grid container spacing={2} width="100%">
        {datas.map((data) => {
          if (!data.Role) {
            return (
              <div
                className="team-card"
                style={{
                  maxWidth: "15rem",
                  margin: "1.5rem",
                  marginTop: "7.65rem",
                }}
              >
                <div
                  className="team-blob"
                  style={{
                    width: "15rem",
                    height: "8rem",

                    position: "relative",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                >
                  <img
                    className="team-image"
                    src={`
                        ${constant.base}/storage/${data.Image}`}
                    style={{ position: "absolute", top: "-7.65rem" }}
                  />
                </div>
                <div className="member">
                  <Typography className="member-name">{data.Name}</Typography>
                  <Typography className="member-role">
                    {data.Post[0]}
                  </Typography>
                </div>
                <MemberDialogBox
                  image={`${constant.base}/storage/${data.Image}`}
                  name={data.Name}
                  post={data.Post[0]}
                  description={data.Description}
                />
              </div>
            );
          }
        })}
      </Grid>

      <Typography
        variant="h3"
        color="primary"
        align="center"
        style={{ marginBottom: "1.5rem" }}
      >
        Meet the Trainers
      </Typography>
      <Grid container spacing={2} width="100%">
        {datas.map((data) => {
          if (data.Role) {
            return (
              <div
                className="team-card"
                style={{
                  maxWidth: "15rem",
                  margin: "1.5rem",
                  marginTop: "7.65rem",
                }}
              >
                <div
                  className="team-blob"
                  style={{
                    width: "15rem",
                    height: "8rem",

                    position: "relative",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                >
                  <img
                    className="team-image"
                    src={`
                        ${constant.base}/storage/${data.Image}`}
                    style={{ position: "absolute", top: "-7.65rem" }}
                  />
                </div>
                <div className="member">
                  <Typography className="member-name">{data.Name}</Typography>
                  <Typography className="member-role">
                    {data.Post[0]}
                  </Typography>
                </div>
                <MemberDialogBox
                  image={`${constant.base}/storage/${data.Image}`}
                  name={data.Name}
                  post={data.Post[0]}
                  description={data.Description}
                />
              </div>
            );
          }
        })}
      </Grid>
    </>
  );
};

export default OurTeamLayout;
