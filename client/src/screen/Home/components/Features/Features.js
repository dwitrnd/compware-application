import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import codeIcon from "assets/svg/codeIcon.svg";
import pointerIcon from "assets/svg/pointerIcon.svg";
import arrowIcon from "assets/svg/arrowIcon.svg";
import stackIcon from "assets/svg/stackIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import StorageIcon from "@material-ui/icons/Storage";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Features(props) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const content = {
    "col1-header": "Quality Training",
    "col1-desc":
      " We provide quality training to our students. We have a team of highly qualified and experienced trainers.",
    "col2-header": "Mentors",
    "col2-desc":
      "We have a team of mentors who are always ready to help our students. They are available 24/7 to help our students.",
    "col3-header": "Placement Assistance",
    "col3-desc":
      "We provide placement assistance to our students. We have a team of placement officers who help our students to get placed in top companies.",
    "col4-header": "Live Projects",
    "col4-desc":
      "We provide live projects to our students. We have a team of highly qualified and experienced trainers.",
  };

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} data-aos="fade-right">
          <Box alignItems="center">
            {/* <StorageIcon color='primary' className={classes.icon} /> */}
            <div style={{ width: "100%" }}>
              <img src={codeIcon} style={{ height: "1.5rem" }} alt="" />
            </div>
            <Typography variant="h6" component="h3">
              {content["col1-header"]}
            </Typography>
          </Box>
          <Typography variant="body1" component="p">
            {content["col1-desc"]}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-left">
          <Box alignItems="center">
            {/* <VerifiedUserIcon color='primary' className={classes.icon} /> */}
            <div style={{ width: "100%" }}>
              <img src={pointerIcon} style={{ height: "1.5rem" }} alt="" />
            </div>
            <Typography variant="h6" component="h3">
              {content["col2-header"]}
            </Typography>
          </Box>
          <Typography variant="body1" component="p">
            {content["col2-desc"]}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} data-aos="fade-right">
          <Box alignItems="center">
            {/* <StorageIcon color='primary' className={classes.icon} /> */}
            <div style={{ width: "100%" }}>
              <img src={arrowIcon} style={{ height: "1.5rem" }} alt="" />
            </div>
            <Typography variant="h6" component="h3">
              {content["col3-header"]}
            </Typography>
          </Box>
          <Typography variant="body1" component="p">
            {content["col3-desc"]}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-left">
          <Box alignItems="center">
            {/* <VerifiedUserIcon color='primary' className={classes.icon} /> */}
            <div style={{ width: "100%" }}>
              <img src={stackIcon} style={{ height: "1.5rem" }} alt="" />
            </div>
            <Typography variant="h6" component="h3">
              {content["col4-header"]}
            </Typography>
          </Box>
          <Typography variant="body1" component="p">
            {content["col4-desc"]}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
