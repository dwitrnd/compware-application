import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import styledcomponent from "styled-components";
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
    padding: 0.75rem;
    list-style: none;
    color: #737373;
    font-size: 0.95rem;
    li{
      width: 100% ;
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

export default function AboutUsDropDown() {
  const itemVarients = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

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
        className="roboto_500"
        // endIcon={<KeyboardArrowDownIcon />}
      >
        About
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
        <MenuList onClick={handleClose}>
          <ul
            className="submenu_container roboto_400"
            style={{ width: "100%" }}
          >
            <Link to="/our-team">
              <li style={{ width: "100%" }}>Our Team</li>
            </Link>
            <Link to="/blog">
              <li>Blogs</li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
          </ul>
        </MenuList>
        {/* <MenuList onClick={handleClose}>
          <Link to="/our-team">Our Team</Link>
        </MenuList>
        <MenuList>
          <Link to="/blog">Blog</Link>
        </MenuList>
        <MenuList>
          <Link to="/event">Event</Link>
        </MenuList>
        <MenuList>
          <Link to="/gallery">Gallery</Link>
        </MenuList> */}
      </ClickDropdown>
    </>
  );
}
