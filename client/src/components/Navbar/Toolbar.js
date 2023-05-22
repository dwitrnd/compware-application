import { getTokenByValue } from "../../services/LocalStorageService";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "../../styles/navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import LetteredAvatar from "react-lettered-avatar";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../services/LocalStorageService";
import { useGetLoggedUserQuery } from "../../redux/api/auth/userAuthApi";
import { useDispatch } from "react-redux";
import { setUserInfo, unsetUserInfo } from "../../redux/features/userSlice";
import { unsetUserToken } from "../../redux/features/authSlice";

const Toolbar = () => {
  const arrayWithColors = [
    "#2ecc71",
    "#3498db",
    "#8e44ad",
    "#e67e22",
    "#e74c3c",
    "#1abc9c",
    "#2c3e50",
    "#f23e90",
    "#8AA8A1",
    "#EE7B30",
  ];
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  const token = getTokenByValue();
  const { isLoading, isError, isSuccess, data } = useGetLoggedUserQuery({
    token,
  });

  const [userData, setUserData] = useState(null);

  //?use effect for when data,isSuccess of RTK is true
  useEffect(() => {
    if (data && isSuccess) {
      //? set user data to local state
      // setUserData({
      //   email: data.data.user.email,
      //   name: data.data.user.name,
      // });
      //? set user data to global react-toolkit state
      dispatch(
        setUserInfo({
          email: data.data.user.email,
          name: data.data.user.name,
        })
      );
    }
  }, [data, isSuccess]);

  //? use effect for when global data is loaded
  useEffect(() => {
    if (userInfo.email !== null && userInfo.name !== null) {
      setUserData({
        email: userInfo.email,
        name: userInfo.name,
      });
    }
  }, [userInfo]);
  console.log(data);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    dispatch(
      unsetUserToken({
        token: null,
      })
    );
    dispatch(
      unsetUserInfo({
        email: null,
        name: null,
      })
    );
    removeToken();
    navigate("/login");
  };

  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand className="">
              {/* <img src={NavBrand} /> */}Logo
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <NavDropdown
                title="Courses"
                id="courses-dropdown"
                className="ms-2"
              >
                <NavDropdown.Item>
                  <Link to="/courses/plus2" className="dropdown-item">
                    +2 Courses
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/courses/diploma" className="dropdown-item">
                    Diploma Courses
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/courses/all" className="dropdown-item">
                    View All
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/ourteam" className="nav-link ms-2">
                Our Team
              </Link>
              <Link to="/contact" className="nav-link ms-2">
                Contact
              </Link>
              <Link to="/career" className="nav-link ms-2">
                Careers
              </Link>
              <NavDropdown
                title="Community"
                id="community-dropdown"
                className="ms-2"
              >
                <NavDropdown.Item>
                  {" "}
                  <Link to="/community/communitya" className="dropdown-item">
                    Community A
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/courses/communityb" className="dropdown-item">
                    Community B
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/verifycertificate" className="nav-link ms-2">
                Verify Certificate
              </Link>
              {(() => {
                if (!token) {
                  return (
                    <>
                      <Link to="/login" className="btn btn-dark ms-2">
                        Login
                      </Link>
                      <Link to="/registration" className="btn btn-primary ms-2">
                        Register
                      </Link>
                    </>
                  );
                }
              })()}
              {(() => {
                if (token) {
                  return (
                    <>
                      <Link to="/dashboard" className="nav-link">
                        Dashboard
                      </Link>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outlined"
                          id="avatar-dropdown"
                          style={{ background: "none", border: "none" }}
                        >
                          <LetteredAvatar
                            name={userData ? userData.name : ""}
                            backgroundColors={arrayWithColors}
                            className="avatar"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: "auto" }}>
                          <Dropdown.Item onClick={handleLogout}>
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  );
                }
              })()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Toolbar;

// {
//   !token && (
//     <>
//       <Link to="/login">
//         <li>Login or Register</li>
//       </Link>
//       <Link to="/registration">
//         <li> Register</li>
//       </Link>
//     </>
//   );
// }

// {
//   token && (
//     <Link to="/dashboard">
//       <li>Dashboard</li>
//     </Link>
//   );
// }
