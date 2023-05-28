import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Client1 from "../../../../assets/images/compware-clients/c-programming.jpg";
import Client2 from "../../../../assets/images/compware-clients/it-training-nepal.jpg";
import Client3 from "../../../../assets/images/compware-clients/java-programming.png";
import Client4 from "../../../../assets/images/compware-clients/online-programming-courses.png";
import Client5 from "../../../../assets/images/compware-clients/python-programming.png";
import Client6 from "../../../../assets/images/compware-clients/python-tutorial.png";

import styled from "styled-components";

const ClientImage = styled.img`
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;
  &:hover {
    filter: grayscale(0%);
  }
`;

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 48,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
}));

export default function Testimonials(props) {
  const classes = useStyles();

  const content = {
    logo1: Client1,
    logo2: Client2,
    logo3: Client3,
    logo4: Client4,
    logo5: Client5,
    logo6: Client6,
    ...props.content,
  };

  return (
    <section>
      <Box pt={4} display='flex' flexWrap='wrap' justifyContent='space-between'>
        <ClientImage src={content["logo1"]} alt='' className={classes.logo} />
        <ClientImage src={content["logo2"]} alt='' className={classes.logo} />
        <ClientImage src={content["logo3"]} alt='' className={classes.logo} />
        <ClientImage src={content["logo4"]} alt='' className={classes.logo} />
        <ClientImage src={content["logo5"]} alt='' className={classes.logo} />
        <ClientImage src={content["logo6"]} alt='' className={classes.logo} />
      </Box>
    </section>
  );
}
