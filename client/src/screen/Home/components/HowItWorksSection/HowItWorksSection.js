import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  stepper: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: 0,
      flexDirection: "column",
      alignItems: "start",
    },
  },
  step: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  container: {
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
    },
  },
  media: {
    height: "300px",
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const incrementStep = () => {
    if (activeStep === 2) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const content = {
    header: "PiperNet Setup",
    step1: "Enroll a course",
    step2: "Get Trained",
    step3: "Get Certified",
    subheader: "Choose a course and get started",
    description: "We provide the best training in the town. We have the best trainers and the best environment for learning.  Firstly you need to enroll a course and get started.",
    image: "https://deerwalkcompware.com/training/frontend/images/computer-training-institute-in-kathmandu.jpg",
    ...props.content,
  };

  return (
    <section className='how-it-work'>
      <Box pt={8} pb={10}>
        <Box textAlign='center' mb={5}>
          <Typography variant='h4' component='h2' gutterBottom={true}>
            {content["header"]}
          </Typography>
        </Box>
        <Box bgcolor='background.paper' className={classes.container}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            <Step key={content["step1"]} className={classes.step}>
              <StepLabel>{content["step1"]}</StepLabel>
            </Step>
            <Step key={content["step2"]} className={classes.step}>
              <StepLabel>{content["step2"]}</StepLabel>
            </Step>
            <Step key={content["step3"]}>
              <StepLabel>{content["step3"]}</StepLabel>
            </Step>
          </Stepper>
          <Box p={4}>
            {(() => {
              if (activeStep === 0) {
                return (
                  <>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Box display='flex' height='100%'>
                          <Box my='auto'>
                            <Typography variant='h4' component='h2' gutterBottom={true}>
                              {content["subheader"]}
                            </Typography>
                            <Typography variant='body1' color='textSecondary' paragraph={true}>
                              {content["description"]}
                            </Typography>
                            <Button onClick={incrementStep} variant='contained' color='primary' className={classes.primaryAction}>
                              Next
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Card>
                          <CardActionArea href='#'>
                            <CardMedia className={classes.media} image={content["image"]} />
                          </CardActionArea>
                        </Card>
                      </Grid>
                    </Grid>
                  </>
                );
              }
            })()}
            {(() => {
              if (activeStep === 1) {
                return (
                  <>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Box display='flex' height='100%'>
                          <Box my='auto'>
                            <Typography variant='h4' component='h2' gutterBottom={true}>
                              Get Trained
                            </Typography>
                            <Typography variant='body1' color='textSecondary' paragraph={true}>
                              During training, you will be trained by the best trainers in the town. You will be able to learn the skills required for the job. Training includes both theory and practical classes. You will be able to learn the skills required for the job.
                            </Typography>
                            <Button onClick={incrementStep} variant='contained' color='primary' className={classes.primaryAction}>
                              Next
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Card>
                          <CardActionArea href='#'>
                            <CardMedia className={classes.media} image={content["image"]} />
                          </CardActionArea>
                        </Card>
                      </Grid>
                    </Grid>
                  </>
                );
              }
            })()}
            {(() => {
              if (activeStep === 2) {
                return (
                  <>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Box display='flex' height='100%'>
                          <Box my='auto'>
                            <Typography variant='h4' component='h2' gutterBottom={true}>
                              Get Certified
                            </Typography>
                            <Typography variant='body1' color='textSecondary' paragraph={true}>
                              Finally, you will get certified. You will be able to get a job in the field of your interest.
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Card>
                          <CardActionArea href='#'>
                            <CardMedia className={classes.media} image={content["image"]} />
                          </CardActionArea>
                        </Card>
                      </Grid>
                    </Grid>
                  </>
                );
              }
            })()}
          </Box>
        </Box>
      </Box>
    </section>
  );
}
