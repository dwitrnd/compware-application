import { getTokenByValue } from "../../services/LocalStorageService";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../styles/navbar.css";

const Toolbar = () => {
  const token = getTokenByValue();
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
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
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
