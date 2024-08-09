import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import axios from "axios";
import styled from "styled-components";
import { constant } from "constants/contants";

const ClientImage = styled.img`
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
  const [clients, setClients] = useState([]);
  const url = `${constant.base}/api/client`;
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        setClients(response.data.msg);
        // console.log(setClients);
      } catch (error) {
        console.error("Error fetching clients", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section>
      <Box pt={4} display="flex" flexWrap="wrap" justifyContent="center">
        {clients.map((client, index) => (
          <ClientImage
            key={index}
            src={`${constant.base}/storage/${client.Image}`}
            alt={client.ImageName}
            className={classes.logo}
          />
        ))}
      </Box>
    </section>
  );
}
