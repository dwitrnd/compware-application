import { Typography } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookLogo from "../../assets/svg/facebook.svg";
import InstagramLogo from "../../assets/svg/instagram.svg";
import LinkedInLogo from "../../assets/svg/linkedin.svg";
import YoutubeLogo from "../../assets/svg/youtube.svg";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CommentIcon from "@mui/icons-material/Comment";
import Snackbar from "@mui/material/Snackbar";

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginTop="3rem"
        marginBottom="5rem"
      >
        <Typography variant="h3" color="primary">
          Contact Us
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: { xs: "100%", md: "30.625rem" },
                height: "37rem",
                padding: "2rem",
                paddingLeft: "4rem",
                background: "#0F5288",
                borderRadius: "1.25rem 0rem 0rem 1.25rem",
              }}
            >
              <Stack direction="column" justifyContent="center" spacing={6}>
                <Typography variant="h4" style={{ color: "#FFF" }}>
                  Contact Info
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#FFF" }}>
                  Contact or visit us
                </Typography>
                <Stack direction="row">
                  <LocationOnOutlinedIcon
                    sx={{ color: "white", marginRight: "2rem" }}
                  />
                  <Stack direction="column">
                    <Typography variant="body1" style={{ color: "#FFF" }}>
                      Sifal, Kathmandu, Nepal
                    </Typography>
                    <Typography variant="body1" style={{ color: "#FFF" }}>
                      Near Aaradhana Petrol Pump
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row">
                  <LocalPhoneOutlinedIcon
                    sx={{ color: "white", marginRight: "2rem" }}
                  />
                  <Typography
                    variant="body1"
                    color="white"
                    style={{ color: "#FFF" }}
                  >
                    01-5913021, 01-4567153
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <EmailOutlinedIcon
                    sx={{ color: "white", marginRight: "2rem" }}
                  />
                  <Typography variant="body1" style={{ color: "#FFF" }}>
                    training@deerwalkcompware.com
                  </Typography>
                </Stack>
                <Typography variant="body1" style={{ color: "#FFF" }}>
                  Find Us At
                </Typography>
                <Stack direction="row" spacing={2} marginBottom="4.87rem">
                  <a href="https://www.linkedin.com/company/deerwalktrainingcenter/">
                    {" "}
                    <img src={LinkedInLogo} />{" "}
                  </a>
                  <a href="https://www.facebook.com/deerwalktrainingcenter">
                    <img src={FacebookLogo} />{" "}
                  </a>
                  <a href="https://www.instagram.com/deerwalk.training.center/">
                    <img src={InstagramLogo} />
                  </a>
                  <a href="https://www.youtube.com/@deerwalktrainingcenter">
                    <img src={YoutubeLogo} />
                  </a>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: { xs: "100%", md: "30.625rem" },
                height: "37rem",
                padding: "2rem",
                paddingLeft: "4rem",
                borderRadius: "0rem 1.25rem 1.25rem 0rem",
                background: "#FAFAFA",
                boxShadow:
                  "7px 7px 14px 0px rgba(16, 16, 16, 0.20), -7px -7px 14px 0px rgba(255, 255, 255, 0.20)",
              }}
            >
              <Typography variant="h4" style={{ color: "#0F5288" }}>
                Get In Touch
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet
              </Typography>
              <form
                noValidate
                style={{
                  display: "grid",
                  gap: "3rem",
                  marginTop: "2rem",
                }}
              >
                <Stack direction="row">
                  <PersonIcon
                    sx={{ marginTop: "1rem", marginRight: "1.94rem" }}
                  />
                  <TextField
                    id="user-name"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Stack>
                <Stack direction="row">
                  <PhoneIphoneIcon
                    sx={{ marginTop: "1rem", marginRight: "1.94rem" }}
                  />
                  <TextField
                    id="mobile-number"
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    fullWidth
                  ></TextField>
                </Stack>
                <Stack direction="row">
                  <EmailIcon
                    sx={{ marginTop: "1rem", marginRight: "1.94rem" }}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Stack>
                <Stack direction="row">
                  <CommentIcon
                    sx={{ marginTop: "1rem", marginRight: "1.94rem" }}
                  />
                  <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Stack>
              </form>
              <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                  marginLeft: "auto",
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                Send
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message="Response Sent Successfully"
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Contact;
