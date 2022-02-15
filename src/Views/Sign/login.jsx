import LoginButton from "../../Components/login/login_button";
import { Col, Container, Row } from "react-bootstrap";
import "../Sign/login.css";
import { useNavigate } from "react-router-dom";

function Login({ sign, setSign }) {
  let navigate = useNavigate();
  if (sign) {
    navigate("/bet");
  }

  return (
    <div>
      <button onClick={() => setSign(!sign)}>Entrar</button>
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
