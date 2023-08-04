import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@material-ui/core";
import MemberDialogBox from "./MemberDialogBox";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { constant } from "constants/contants";

const OurTeamLayout = ({ title, datas }) => {
  console.log("datas inside card mapping table", datas);
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <>
      <Typography variant='h5' color='primary'>
        Our Team
      </Typography>
      <Grid container spacing={2} width='100%'>
        {datas.map((data) => {
          if (!data.Role) {
            return (
              <div className='team-card' style={{ maxWidth: "15rem", margin: "1.5rem", marginTop: "7.65rem" }}>
                <div
                  className='team-blob'
                  style={{
                    width: "15rem",
                    height: "8rem",

                    position: "relative",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                  data-aos='zoom-in'
                >
                  <img
                    className='team-image'
                    src={`
                        ${constant.base}/storage/${data.Image}`}
                    style={{ position: "absolute", top: "-7.65rem" }}
                  />
                </div>
                <div className='member'>
                  <Typography className='member-name'>{data.Name}</Typography>
                  <Typography className='member-role'>{data.Post[0]}</Typography>
                </div>
                <MemberDialogBox image={`${constant.base}/storage/${data.Image}`} name={data.Name} post={data.Post[0]} description={data.Description} />
              </div>
            );
          }
        })}
      </Grid>

      <Typography variant='h5' color='primary'>
        Our Trainers
      </Typography>
      <Grid container spacing={2} width='100%'>
        {datas.map((data) => {
          if (data.Role) {
            return (
              <div className='team-card' style={{ maxWidth: "15rem", margin: "1.5rem", marginTop: "7.65rem" }}>
                <div
                  className='team-blob'
                  style={{
                    width: "15rem",
                    height: "8rem",

                    position: "relative",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                  data-aos='zoom-in'
                >
                  <img
                    className='team-image'
                    src={`
                        ${constant.base}/storage/${data.Image}`}
                    style={{ position: "absolute", top: "-7.65rem" }}
                  />
                </div>
                <div className='member'>
                  <Typography className='member-name'>{data.Name}</Typography>
                  <Typography className='member-role'>{data.Post[0]}</Typography>
                </div>
                <MemberDialogBox image={`${constant.base}/storage/${data.Image}`} name={data.Name} post={data.Post[0]} description={data.Description} />
              </div>
            );
          }
        })}
      </Grid>
    </>
  );
};

export default OurTeamLayout;
