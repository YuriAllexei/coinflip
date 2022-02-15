import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ButtonGeneral } from "../../Components/ButtonGen/ButtonGeneral";
import "../Bets/Bet.css";

const balance = 14.45;

export const Bet = () => {
  return (
    <div className="BetGen">
      <Container className="botones">
        <Row className="justify-content-center">
          <h1 className="texto title">
            <p className="space">WANORTU CASINO</p>{" "}
          </h1>
        </Row>
        <Row className="justify-content-center">
          <h3 className="texto balance"> My balance: {balance} Near</h3>
        </Row>
        <Row className="justify-content-center">
          <h2 className="texto">
            <p className="space2">{`I CHOOSE`}</p>{" "}
          </h2>
        </Row>
        <Container className="botones">
          <Row className="justify-content-center">
            <Col>
              <ButtonGeneral
                className="boton"
                variante={`primary`}
                filler={"1"}
              ></ButtonGeneral>
            </Col>
            <Col>
              <h3 className="texto">or</h3>
            </Col>
            <Col>
              <ButtonGeneral
                className="boton"
                variante={`primary`}
                filler={"1"}
              ></ButtonGeneral>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-center">
          <h2 className="texto">FOR</h2>
        </Row>
        <Container className="botones">
          <Row className="justify-content-center">
            <Col>
              <ButtonGeneral
                className="boton"
                variante={`primary`}
                filler={"0.25 NEAR"}
              ></ButtonGeneral>
            </Col>
            <Col>
              <ButtonGeneral
                className="boton"
                variante={`primary`}
                filler={"0.5 NEAR"}
              ></ButtonGeneral>
            </Col>
            <Col>
              <ButtonGeneral
                className="boton"
                variante={`primary`}
                filler={"1 NEAR"}
              ></ButtonGeneral>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-center">
          <ButtonGeneral
            className="boton"
            variante={"primary"}
            filler={`DOUBLE OR NOTHING!`}
          ></ButtonGeneral>
        </Row>
      </Container>
    </div>
  );
};
