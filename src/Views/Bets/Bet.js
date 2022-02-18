import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ButtonGeneral } from "../../Components/ButtonGen/ButtonGeneral";
import "../Bets/Bet.css";

import { coinFlip, getWallet } from "../../utils/functions";
import { Res } from "../../Components/Resultado/Res";
import { useNavigate } from "react-router-dom";
import { verificador } from "../../utils/verificador";

export const Bet = ({ sign, setSign }) => {
  let navigate = useNavigate();

  // if (!sign) {
  //   navigate("/login");
  // }
  const [wallet, setWallet] = useState();
  const [premium, setpremium] = useState(null);
  const [accountId, setAccountId] = useState();
  const [resultado, setResultado] = useState(true);
  const [tipo, setTipo] = useState("loss");
  const [balance, setBalance] = useState(0.0);
  const [cantidad, setcantidad] = useState(null);
  const [opcion, setopcion] = useState(null);

  async function anonima() {
    const _dueños = await verificador();
    console.log(_dueños);
  }

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
    console.log(premium);
  }, [premium]);

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
      <button
        onClick={() => {
          anonima();
        }}
      >
        Check
      </button>
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
          <h2 className="texto title">{`Bienvenido ${accountId}!`}</h2>
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
            <ButtonGeneral
              func={setopcion}
              variante={`primary`}
              filler={`1`}
              val={1}
            ></ButtonGeneral>
          </div>

          <div className="adjust">
            <h3 className="texto">or</h3>
          </div>

          <div className="adjust">
            <ButtonGeneral
              func={setopcion}
              variante={`primary`}
              filler={2}
              val={2}
            ></ButtonGeneral>
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
              val={0.25}
              filler={"0.25 NEAR"}
              func={setcantidad}
            ></ButtonGeneral>
          </div>
          <div className="val">
            <ButtonGeneral
              className="botonVal"
              variante={`primary`}
              filler={"0.5 NEAR"}
              val={0.5}
              func={setcantidad}
            ></ButtonGeneral>
          </div>
          <div className="val">
            <ButtonGeneral
              className="botonVal"
              variante={`primary`}
              val={1}
              filler={"1 NEAR"}
              func={setcantidad}
            ></ButtonGeneral>
          </div>
        </div>

        <Row className="justify-content-center">
          <button
            className="boton"
            variante={"primary"}
            filler={`${premium === null ? "Verificar" : "DOUBLE OR NOTHING!"}`}
            onClick={async () => {
              if (premium === null) {
                let dueños = await verificador();
                dueños.includes(accountId)
                  ? setpremium(true)
                  : setpremium(false);
              } else {
                if (opcion && cantidad) {
                  coinFlip(wallet);
                } else {
                  alert("Por favor elige cantidad y opcion de apuesta.");
                }
              }
            }}
          >
            {`${premium === null ? "Verificar" : "DOUBLE OR NOTHING!"}`}
          </button>
        </Row>
      </Container>
    </div>
  );
};
