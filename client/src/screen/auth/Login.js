import Container from "react-bootstrap/esm/Container";
import UserLogin from "./UserLogin";
import LoginImage from "../../assets/images/login.webp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <img src={LoginImage} alt="login image" height="550" width="650" />
          </Col>
          <Col>
            <UserLogin />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
