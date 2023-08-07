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
import Client7 from "../../../../assets/images/compware-clients/Crimsoncollege.png";
import Client8 from "../../../../assets/images/compware-clients/Gibl_logo-1.png";
import Client9 from "../../../../assets/images/compware-clients/Kantipur Engineer College_logo.png";
import Client10 from "../../../../assets/images/compware-clients/Handicap International.png";
import Client11 from "../../../../assets/images/compware-clients/Khalti.png";
import Client12 from "../../../../assets/images/compware-clients/NEA.png";
import Client13 from "../../../../assets/images/compware-clients/NIC_Asia_Bank.png";
import Client14 from "../../../../assets/images/compware-clients/Nepal Red Cross Society.png";
import Client15 from "../../../../assets/images/compware-clients/worldlink.png";
import Client16 from "../../../../assets/images/compware-clients/vianet.png";
import Client17 from "../../../../assets/images/compware-clients/savethechildren.png";
import Client18 from "../../../../assets/images/compware-clients/jbbl.png";
import Client19 from "../../../../assets/images/compware-clients/hamropatro.png";
import Client20 from "../../../../assets/images/compware-clients/prabhupay_logo.png";
import Client21 from "../../../../assets/images/compware-clients/RadissonHotelKathmandu.png";
import Client22 from "../../../../assets/images/compware-clients/everest-bank_logo_main.png";
import Client23 from "../../../../assets/images/compware-clients/daraz.png";
import Client24 from "../../../../assets/images/compware-clients/citizenbank.png";
import Client25 from "../../../../assets/images/compware-clients/Siddharthabank.png";
import Client26 from "../../../../assets/images/compware-clients/Sanima-Bank-logo.png";
import Client27 from "../../../../assets/images/placement partner/deerhold.png";
import styled from "styled-components";

const ClientImage = styled.img`
  /* filter: grayscale(100%); */
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
    logo7: Client7,
    logo8: Client8,
    logo9: Client9,
    logo10: Client10,
    logo11: Client11,
    logo12: Client12,
    logo13: Client13,
    logo14: Client14,
    logo15: Client15,
    logo16: Client16,
    logo17: Client17,
    logo18: Client18,
    logo19: Client19,
    logo20: Client20,
    logo21: Client21,
    logo22: Client22,
    logo23: Client23,
    logo24: Client24,
    logo25: Client25,
    logo26: Client26,
    logo27: Client27,
    ...props.content,
  };

  return (
    <section>
      <Box pt={4} display="flex" flexWrap="wrap" justifyContent="space-between">
        <ClientImage src={content["logo1"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo2"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo3"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo4"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo5"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo6"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo7"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo8"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo9"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo10"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo11"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo12"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo13"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo14"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo15"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo16"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo17"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo18"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo19"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo20"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo22"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo23"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo24"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo27"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo25"]} alt="" className={classes.logo} />
        <ClientImage src={content["logo26"]} alt="" className={classes.logo} />
      </Box>
    </section>
  );
}
