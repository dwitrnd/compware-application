import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import styledcomponent from "styled-components";
import androidIcon from "assets/icons/android.png";
import programmingIcon from "../../assets/icons/desktop.png";
import graphicDesignIcon from "../../assets/icons/graphic-design.png";
import diplomaIcon from "../../assets/icons/diploma.png";
import { Link } from "react-router-dom";

const MenuList = styledcomponent.ul`
  display:flex;
  list-style:none;
  justify-content:space-between;
  b{
    color: #0f5288;
  }
  li.menu_block{
    width:100vw;
    margin:0.2rem;
  }
  ul.submenu_container{
    padding-left: 1.5rem;
    list-style: none;
    color: #737373;
    font-size: 0.95rem;
    li{
      border-radius: 5px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      margin-bottom: 0.2rem;
      cursor:pointer;
        &:hover{
          background: #f8f7f9;
        }
    }
  }
`;

const ClickDropdown = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
      >
        Courses
      </Button>
      <ClickDropdown
        style={{ marginLeft: "-0.35rem" }}
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList>
          <li className="menu_block">
            <header style={{ display: "flex", alignItems: "center" }}>
              <img src={programmingIcon} height="25" alt="menu icon" />
              <b class="roboto_400">Programming</b>
            </header>
            <ul className="submenu_container roboto_400">
              <li>JavaScript</li>
              <li>Node Js</li>
              <li>Django</li>
              <li>React</li>
              <li>Angular</li>
            </ul>
          </li>
          <li className="menu_block">
            <header style={{ display: "flex", alignItems: "center" }}>
              <img src={graphicDesignIcon} height="25" alt="menu icon" />
              <b class="roboto_400">Graphics Design</b>
            </header>
            <ul className="submenu_container roboto_400">
              <li>Maya for Animation</li>
              <li>Photography</li>
              <li>UI/UX</li>
              <li>Graphic Designing</li>
              <li>Web Page and Multimedia</li>
            </ul>
          </li>
          <li className="menu_block">
            <header style={{ display: "flex", alignItems: "center" }}>
              <img src={diplomaIcon} height="25" alt="menu icon" />
              <b class="roboto_400">Diploma</b>
            </header>
            <ul className="submenu_container roboto_400">
              <li>Python</li>
              <li>Java</li>
              <li>DevOps</li>
              <li>Digital Marketing</li>
              <li>DOT Net</li>
            </ul>
          </li>
          <li className="menu_block">
            <header style={{ display: "flex", alignItems: "center" }}>
              <img src={androidIcon} height="25" alt="menu icon" />
              <b class="roboto_400">Short Term</b>
            </header>
            <ul className="submenu_container roboto_400">
              <li>Laravel</li>
              <li>SPSS</li>
              <li>Flutter App Development</li>
              <li>MERN Stack</li>
              <li>Power BI</li>
            </ul>
          </li>
        </MenuList>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/courses">
            <Button variant="outlined" onClick={handleClose}>
              See All Courses
            </Button>
          </Link>
        </div>
      </ClickDropdown>
    </>
  );
}
