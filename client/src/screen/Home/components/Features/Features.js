import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import codeIcon from "assets/svg/codeIcon.svg";
import pointerIcon from "assets/svg/pointerIcon.svg";
import arrowIcon from "assets/svg/arrowIcon.svg";
import stackIcon from "assets/svg/stackIcon.svg";

// import StorageIcon from "@material-ui/icons/Storage";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Features(props) {
  const content = {
    "col1-header": "Accessibility",
    "col1-desc": "Ever worried that you won't be able to access your data in some places? Nevermore. With PiperNet your connection has no borders.",
    "col2-header": "Secure",
    "col2-desc": 'Have you ever heard about "not putting all of your eggs in one basket"? Well, with PiperNet you can actually put all your eggs in millions of baskets.',
    ...props.content,
  };

  return (
    <section style={{ margin: "5rem 0rem" }}>
      <Box py={6}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box alignItems='center'>
              {/* <StorageIcon color='primary' className={classes.icon} /> */}
              <div style={{ width: "100%" }}>
                <img src={codeIcon} style={{ height: "1.5rem" }} alt='' />
              </div>
              <Typography variant='h6' component='h3'>
                {content["col1-header"]}
              </Typography>
            </Box>
            <Typography variant='body1' component='p'>
              {content["col1-desc"]}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box alignItems='center'>
              {/* <VerifiedUserIcon color='primary' className={classes.icon} /> */}
              <div style={{ width: "100%" }}>
                <img src={pointerIcon} style={{ height: "1.5rem" }} alt='' />
              </div>
              <Typography variant='h6' component='h3'>
                {content["col2-header"]}
              </Typography>
            </Box>
            <Typography variant='body1' component='p'>
              {content["col2-desc"]}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box alignItems='center'>
              {/* <StorageIcon color='primary' className={classes.icon} /> */}
              <div style={{ width: "100%" }}>
                <img src={arrowIcon} style={{ height: "1.5rem" }} alt='' />
              </div>
              <Typography variant='h6' component='h3'>
                Reliable
              </Typography>
            </Box>
            <Typography variant='body1' component='p'>
              {content["col1-desc"]}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box alignItems='center'>
              {/* <VerifiedUserIcon color='primary' className={classes.icon} /> */}
              <div style={{ width: "100%" }}>
                <img src={stackIcon} style={{ height: "1.5rem" }} alt='' />
              </div>
              <Typography variant='h6' component='h3'>
                Fast
              </Typography>
            </Box>
            <Typography variant='body1' component='p'>
              {content["col2-desc"]}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
