import LoginButton from "../../Components/login/login_button";
import { Col, Container, Row } from "react-bootstrap";
import "../Sign/login.css";

function Login() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="one">
            <h1 className="texto space welcome">Welcome to Wanortu Casino!</h1>
          </Col>
        </Row>
        <Row>
          <Col className="two">
            <div className="centerBut">
              <LoginButton className="log" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
