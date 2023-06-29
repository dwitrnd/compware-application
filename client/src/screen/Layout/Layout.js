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
import whiteCompwareLogo from "../../assets/images/compware-logo-white.png";
import RequestCertificateDialog from "../../components/RequestCerificateDialog/RequestCertificateDialog";
import { Link } from "react-router-dom";
import ClickDropdown from "components/ClickDropdown";

const drawerWidth = 240;
// const navItems = [
//   "Home",
//   "About",
//   "Courses",
//   "Contact",
//   "Gallery",
//   "Team",
//   "Request Certificate",
//   "Verify Certificate",
//   "Login",
//   "Register",
// ];

const navItems = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Courses",
    path: "courses",
  },

  {
    name: "About",
    path: "about-us",
  },
  {
    name: "Contact",
    path: "contact",
  },
  {
    name: "Our Team",
    path: "our-team",
  },

  {
    name: "Request Certificate",
    path: "request-certificate",
  },
  {
    name: "Verify Certificate",
    path: "verify-certificate",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Login",
    path: "login",
  },
  {
    name: "Register",
    path: "register",
  },
  {
    name: "Terms and Conditions",
    path: "terms-and-condition",
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
      <Typography variant="h6" sx={{ my: 2 }}>
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            background: "white",
            boxShadow: " rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Container maxWidth="lg">
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 52,
                    }}
                    alt="Compware logo"
                    src={compwareLogo}
                  />
                </div>

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => {
                    console.log(item);

                    if (item.name === "Courses") {
                      return <ClickDropdown />;
                    } else if (item.name === "Request Certificate") {
                      return <RequestCertificateDialog />;
                    } else {
                      return (
                        <Link
                          to={`/${item.path.toLowerCase()}`}
                          key={item.path}
                        >
                          <Button
                            className="blue-color roboto_500"
                            key={item.path.toLowerCase()}
                            sx={{ color: "#fff" }}
                          >
                            {item.name}
                          </Button>
                        </Link>
                      );
                    }
                  })}
                  {/* dropdown menu added explicitly  here starts*/}

                  {/* <Button className='blue-color roboto_500' sx={{ color: "#fff" }}>
                    <HoverDropdown />
                  </Button> */}
                  {/* dropdown menu added explicitly  here ends */}
                </Box>
              </Toolbar>
            </Container>
          </div>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
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
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>

      <main style={{ minHeight: "55vh" }}> {children}</main>

      <footer>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1512236921644!2d85.342503!3d27.7126168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970d2e43e4b%3A0x946fac63019d2903!2sDeerwalk%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1685200434953!5m2!1sen!2snp"
          width="100%"
          style={{ border: 0, height: "300px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Container maxWidth="lg">
          <div class="container">
            <div class="container-block">
              <section class="footer__upper">
                <div class="footer__upper--left">
                  <img src={whiteCompwareLogo} alt="it company" />
                </div>
                <div class="footer__upper--center">
                  <p class="">
                    At The Deerwalk Training Center, we are experts in guiding
                    next generation youths with next level of IT Trainings and
                    Education Quality and other top positions. Our coaches and
                    consultants are experienced, our teams are gathered via
                    tailor searches. Small Change Towards the greater good is
                    our motto .
                  </p>
                </div>
                <div class="footer__upper--right">
                  <ul>
                    <li>
                      <a href="#">
                        <u> Blog </u>
                      </a>
                    </li>
                    <li>
                      <a href="#"> Policy </a>
                    </li>
                    <li>
                      <a href="">Services</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </section>
              <hr />
              <section class="footer__lower">
                <p>&#169; {getYear()} Deerwalk Group. All Rights Reserved.</p>
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
