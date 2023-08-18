import React, { lazy } from "react";
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

const AnimatedComponent = lazy(() => import("aos"));

export default function Features(props) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const content = {
    "col1-header": "Hands-On Learning",
    "col1-desc":
      " Students are given numerous opportunities to apply their knowledge in real-world scenarios through practical exercises, engaging projects, and valuable internships. ",
    "col2-header": "Comprehensive Career Guidance and Support",
    "col2-desc":
      "The center understands the importance of launching a successful career. They provide comprehensive career guidance and support to their students. This includes resume-building workshops, interview preparation, and job placement assistance. ",
    "col3-header": "Industry Partnerships",
    "col3-desc":
      "Deerwalk Training Center has strong industry partnerships, which provide valuable opportunities for their students. Through these partnerships, students gain access to internships and job opportunities with leading organizations in the IT industry.",
    "col4-header": "Bridging Skills Gaps for IT and Management Success",
    "col4-desc":
      "In a rapidly evolving professional world, the gap between skills needed and skills possessed can often hinder growth and success. Our mission is to empower individuals with the tools they need to thrive in the realms of IT and Management, two fields that play pivotal roles in shaping today's business landscape.",
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
