import React, {useState} from "react";
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

export default function EventDropDown() {
  const itemVarients = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleNewsletter = () => {
    setNewsletterOpen((prev) => !prev);
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
      >
        Event
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
          <ul
            className="submenu_container roboto_400"
            style={{ width: "100%" }}
          >
            <li
              onClick={toggleNewsletter}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              Tech Dialogue Series
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{
                  marginLeft: "0.5rem",
                  transition: "transform 0.3s",
                  transform: newsletterOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 5.646a.5.5 0 0 1 .708 0L8 11.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </li>

            {newsletterOpen && (
              <ul className="newsletter_dropdown" style={{ listStyle: "none",  color: "#14558A", fontSize: "14px" }}>
                <Link to="/episode-I" onClick={handleClose}>
              <li>Episode I</li>
            </Link>
            <Link to="/episode-II" onClick={handleClose}>
              <li>Episode II</li>
            </Link>
              </ul>
            )}
            <Link to="/workshop" onClick={handleClose}>
            <li>Workshops</li>
            </Link>
          </ul>
        </MenuList>
      </ClickDropdown>
    </>
  );
}
