import { getTokenByValue } from "../../services/LocalStorageService";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

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
                className="nav-item"
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
              <Link to="/ourteam" className="nav-link">
                Our Team
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link to="/career" className="nav-link">
                Careers
              </Link>
              <NavDropdown title="Community" id="community-dropdown">
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
              <Link to="/verifycertificate" className="nav-link">
                Verify Certificate
              </Link>
              <Button variant="outline-dark">Login</Button>
              <Button variant="primary" className="ms-2">
                Register
              </Button>
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
