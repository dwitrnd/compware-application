// import Navbar from "../../components/Navbar/Navbar";
import * as React from "react";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import compwareLogo from "../../assets/images/compware-logo.png";
import whiteLogo from "../../assets/images/Deerwalk-Logos_white.png";
import RequestCertificateDialog from "../../components/RequestCerificateDialog/RequestCertificateDialog";
import { Link } from "react-router-dom";
import ClickDropdown from "components/CoursesClickDropdown";
import AboutUsDropDown from "components/AboutUsDropDown/AboutUsDropDown";
import CertificateDropDown from "components/CertificateDropDown/CertificateDropDown";
import EnrollDialog from "components/EnrollDialog/EnrollDialog";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";
import FacebookLogo from "../../assets/svg/facebook.svg";
import InstagramLogo from "../../assets/svg/instagram.svg";
import LinkedInLogo from "../../assets/svg/linkedin.svg";
import YoutubeLogo from "../../assets/svg/youtube.svg";
import ThreadsLogo from "../../assets/svg/threads.png";
import TwitterLogo from "../../assets/svg/Twitter.png";
const drawerWidth = 240;

const navItems = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
  },
  {
    name: "Courses",
    path: "courses",
  },
  {
    name: "Contact",
    path: "contact-us",
  },

  {
    name: "Certificate",
  },
  {
    name: "Enroll",
  },
];

// const courseItem = ["+2", "Diploma", "All"];

function DrawerAppBar(props) {
  const { window, children } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [courseToggle, setCourseToggle] = React.useState(false);

  // const handleCourseToggle = () => {
  //   setCourseToggle((prevState) => !prevState);
  // };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // function to get current year
  const getYear = () => {
    return new Date().getFullYear();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component='nav'
          sx={{
            background: "white",
            boxShadow: " rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Container maxWidth='lg'>
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
                  <MenuIcon />
                </IconButton>

                <Link to='/home'>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component='img'
                      sx={{
                        height: 52,
                      }}
                      alt='Compware logo'
                      src={compwareLogo}
                    />
                  </div>
                </Link>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => {
                    console.log(item);

                    if (item.name === "Courses") {
                      return <ClickDropdown />;
                    } else if (item.name === "Request Certificate") {
                      return <RequestCertificateDialog />;
                    } else if (item.name === "About") {
                      return <AboutUsDropDown />;
                    } else if (item.name === "Certificate") {
                      return <CertificateDropDown />;
                    } else if (item.name === "Enroll") {
                      return <EnrollDialog />;
                    } else {
                      return (
                        <Link to={`/${item.path.toLowerCase()}`} key={item.path}>
                          <Button className='blue-color roboto_500' key={item.path.toLowerCase()} sx={{ color: "#fff" }}>
                            {item.name}
                          </Button>
                        </Link>
                      );
                    }
                  })}
                  <IconButton aria-label='login'>
                    <Link to={"/login"}>
                      <LoginIcon color='primary' />
                    </Link>
                  </IconButton>
                </Box>
              </Toolbar>
            </Container>
          </div>
        </AppBar>
        <Box component='nav'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component='main' sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>

      <main style={{ minHeight: "55vh" }}> {children}</main>

      <footer>
        <iframe
          className='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.174201572078!2d85.34109798977576!3d27.711907227008187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970d2e61067%3A0x1aa4921202ab29f8!2sDeerwalk%20Training%20Center!5e0!3m2!1sen!2snp!4v1690281126574!5m2!1sen!2snp'
          width='100%'
          style={{ border: 0, height: "300px" }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
<<<<<<< HEAD
        <Container maxWidth='lg'>
          <div class='container'>
            <div class='container-block'>
              <section class='footer__upper'>
                <div class='footer__upper--left'>
                  <img src={whiteCompwareLogo} alt='it company' />
=======
        <Container maxWidth="lg">
          <div class="container">
            <div class="container-block">
              <section class="footer__upper">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div class="footer__upper--left">
                    <img src={whiteLogo} alt="it company" />
                  </div>
                  <Stack
                    direction="column"
                    spacing={4}
                    sx={{ marginTop: "1rem" }}
                  >
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
                  </Stack>
>>>>>>> 21ace2f (Style: Alignment of our trainer)
                </div>
                <div class='footer__upper--center'>
                  <p class='' style={{ fontSize: "20px" }}>
                    Transform your skills, elevate your career, and embrace success with Deerwalk Training Center, we take pride in being recognized as a premier institution, excelling in IT Training and Software Courses.
                  </p>
                  <Stack marginTop='7rem' direction='row' spacing={4} justifyContent='center' sx={{ paddingRight: "6rem" }}>
                    <a href='https://www.linkedin.com/company/deerwalktrainingcenter/' target='_blank'>
                      {" "}
                      <img src={LinkedInLogo} />{" "}
                    </a>
                    <a href='https://www.facebook.com/deerwalktrainingcenter' target='_blank'>
                      <img src={FacebookLogo} />{" "}
                    </a>
                    <a href='https://www.instagram.com/deerwalk.training.center/' target='_blank'>
                      <img src={InstagramLogo} />
                    </a>
                    <a href='https://www.youtube.com/@deerwalktrainingcenter' target='_blank'>
                      <img src={YoutubeLogo} />
                    </a>
                    <a href='https://www.threads.net/@deerwalk.training.center' target='_blank'>
                      <img src={ThreadsLogo} width='31.3462px' height='28.8787px' />
                    </a>
                    <a href='https://twitter.com/DeerwalkCenter' target='_blank'>
                      <img src={TwitterLogo} width='31.3462px' height='28.8787px' />
                    </a>
                  </Stack>
                </div>
                <div class='footer__upper--right'>
                  <ul>
                    <li>
                      <a href='/blog'>Blog</a>
                    </li>
                    <li>
                      <a href='/terms-and-condition'> Policy </a>
                    </li>
                    <li>
                      <a href='/our-team'>Team</a>
                    </li>
                    <li>
                      <a href='/contact-us'>Contact</a>
                    </li>
                  </ul>
                </div>
              </section>
              <hr />
              <section class='footer__lower'>
                <p style={{ fontSize: "18px" }}>&#169; {getYear()} Deerwalk Group. All Rights Reserved.</p>
              </section>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
