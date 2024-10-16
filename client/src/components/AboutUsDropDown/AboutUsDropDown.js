import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { constant } from "constants/contants";
import Menu from "@mui/material/Menu";
import styledcomponent from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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
    ul.submenu{
    list-style: none;
    color: #737373;
    font-size: 0.95rem;
    li{
      width: 100% ;
      border-radius: 5px;
      
      padding-left: 1.8rem;
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

function formatDate(dateString) {
  const [year, month] = dateString.split("-");
  const date = new Date(year, month - 1); // JS months are 0-indexed
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
}

export default function AboutUsDropDown() {
  const [tableData, setTableData] = useState(null);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const url = `${constant.base}/api/newsletter`;

  useEffect(() => {
    axios.get(url).then((res) => {
      const data = res.data.msg;
      const transformedData = [];
      
      data.forEach((dataItem) => {
        transformedData.push({
          ...dataItem,
          formattedName: formatDate(dataItem.name),
        });
      });
  
      const sortedData = transformedData.sort((a, b) => b.name.localeCompare(a.name)); // Sort in descending order
      setTableData(sortedData);
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

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
        <MenuList>
          <ul
            className="submenu_container roboto_400"
            style={{ width: "100%" }}
          >
            <Link to="/our-team" onClick={handleClose}>
              <li style={{ width: "100%" }}>Our Team</li>
            </Link>
            <Link to="/blog" onClick={handleClose}>
              <li>Blogs</li>
            </Link>
            <Link to="/gallery" onClick={handleClose}>
              <li>Gallery</li>
            </Link>
            <li
              onClick={toggleNewsletter}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              Newsletter
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
              <ul className="newsletter_dropdown" style={{ listStyle: "none" }}>
                {tableData && tableData.length > 0 ? (
                  tableData.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {formatDate(data.name)}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>No newsletters available</li>
                )}
              </ul>
            )}
          </ul>
        </MenuList>
      </ClickDropdown>
    </>
  );
}
