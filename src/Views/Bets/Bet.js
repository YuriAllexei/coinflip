import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ButtonGeneral } from "../../Components/ButtonGen/ButtonGeneral";
import "../Bets/Bet.css";
import Big from "big.js";

import { coinFlip, getWallet } from "../../utils/functions";
import { Res } from "../../Components/Resultado/Res";
import { useNavigate } from "react-router-dom";

export const Bet = ({ sign, setSign }) => {
  const [wallet, setWallet] = useState();
  const [accountId, setAccountId] = useState();
  const [resultado, setResultado] = useState(true);
  const [tipo, setTipo] = useState("loss");
  const [balance, setBalance] = useState(0.0);

  useEffect(() => {
    (async () => {
      try {
        const tempWallet = await getWallet();
        setWallet(tempWallet);
        setAccountId(tempWallet.getAccountId());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (wallet !== undefined) {
          setBalance(
            ((await wallet.account().state()).amount / 10 ** 24).toFixed(2)
          );
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [wallet]);

  return (
    <div className="BetGen">
      <div className="cont2">
        <button className="logOut" onClick={() => setSign(!sign)}>
          LogOut
        </button>
      </div>
      <Container className="botones">
        <Row className="justify-content-center">
          <h1 className="texto title">
            <p className="space">WANORTU CASINO</p>{" "}
          </h1>
        </Row>
        <div className="cont">{resultado ? <Res tipo={tipo} /> : <></>}</div>
        <Row className="justify-content-center">
          <h3 className="texto balance"> My balance: {balance} Near</h3>
        </Row>
        <Row className="justify-content-center">
          <h2 className="texto ajuste">
            <p className="space2 ">{`I CHOOSE`}</p>{" "}
          </h2>
        </Row>
        <div className="cont">
          <div className="adjust">
            <ButtonGeneral variante={`primary`} filler={"1"}></ButtonGeneral>
          </div>

          <div className="adjust">
            <h3 className="texto">or</h3>
          </div>

          <div className="adjust">
            <ButtonGeneral variante={`primary`} filler={"2"}></ButtonGeneral>
          </div>
        </div>

        <div className="cont">
          <h2 className="texto">FOR</h2>
        </div>

        <div className="cont">
          <div className="val">
            <ButtonGeneral
              className="botonVal"
              variante={`primary`}
              filler={"0.25 NEAR"}
            ></ButtonGeneral>
          </div>
          <div className="val">
            <ButtonGeneral
              className="botonVal"
              variante={`primary`}
              filler={"0.5 NEAR"}
            ></ButtonGeneral>
          </div>
          <div className="val">
            <ButtonGeneral
              className="botonVal"
              variante={`primary`}
              filler={"1 NEAR"}
            ></ButtonGeneral>
          </div>
        </div>

        <Row className="justify-content-center">
          <button
            className="boton"
            variante={"primary"}
            filler={`DOUBLE OR NOTHING!`}
            onClick={() => coinFlip(wallet)}
          >
            Double or nothing
          </button>
        </Row>
      </Container>
    </div>
  );
};
