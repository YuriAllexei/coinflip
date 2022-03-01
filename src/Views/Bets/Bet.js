import React, { useEffect, useState } from "react";
import "../Bets/Bet.css";

import {
  coinFlip,
  contractBalance,
  getApuesta,
  getWallet,
} from "../../utils/functions";
import { Res } from "../../Components/Resultado/Res";
import { verificador } from "../../utils/verificador";
import { useNavigate } from "react-router-dom";

export const Bet = ({ sign, setSign }) => {
  // if (!sign) {
  //   navigate("/login");
  // }

  const navigate = useNavigate();
  const [wallet, setWallet] = useState();
  const [premium, setpremium] = useState(false);
  const [accountId, setAccountId] = useState();

  const [balance, setBalance] = useState(0.0);
  const [cantidad, setcantidad] = useState(null);
  const [opcion, setopcion] = useState(null);
  const [varoContrato, setVaroContrato] = useState(0);

  const [apuestaAvail, setapuestaAvail] = useState(null);

  const signOut = () => {
    wallet.signOut();
  };

  useEffect(() => {
    (async () => {
      try {
        const tempWallet = await getWallet();
        setWallet(tempWallet);
        setAccountId(tempWallet.getAccountId());
        let balanceContrato = await (await contractBalance()).toFixed(2);
        balanceContrato = Number(balanceContrato);
        setVaroContrato(balanceContrato);
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
    //eslint-disable-next-line
  }, [wallet]);

  useEffect(() => {
    (async () => {
      try {
        if (accountId !== undefined) {
          const avail = await getApuesta(wallet, accountId);
          setapuestaAvail(avail);
          console.log(avail);
        }
      } catch (e) {
        console.log(e);
      }
    })();
    //eslint-disable-next-line
  }, [accountId]);

  return (
    <div className="BetGen">
      <div className="container logout">
        <div>
          <button
            className="signOut"
            onClick={() => {
              signOut();
              setSign(!sign);
              localStorage.clear();

              navigate("/login");
            }}
          >
            LogOut
          </button>
        </div>
      </div>
      <div className="contenido">
        <div className="container title">
          <div className="texto">
            <p className="space nombre">WANORTU CASINO</p>{" "}
          </div>
          <div className=" title">
            <p className="texto title">{`Bienvenido ${accountId}!`}</p>
          </div>
          <div className="center">
            {apuestaAvail !== "ND" ? (
              <Res tipo={apuestaAvail} />
            ) : (
              <h1>APUESTA CON NOSOTROS!</h1>
            )}
          </div>
          <div className="center">
            <p className="Balance"> My balance: {balance} NEAR</p>
          </div>
          <div className="center">
            <p className="texto Balance contrato">
              Contract balance: {varoContrato} NEAR
            </p>
          </div>
          <div className="center">
            <p className="space2 eleccion texto">{`I CHOOSE`}</p> <div></div>
          </div>
          <div className="container center opcion">
            <div>
              <button
                className="decision"
                onClick={() => {
                  setopcion(0);
                }}
              >
                1
              </button>
            </div>

            <div>
              <p className="texto or">OR</p>
            </div>

            <div>
              <button
                className="decision"
                onClick={() => {
                  setopcion(1);
                }}
              >
                2
              </button>
            </div>
          </div>
          <div className="cont">
            <h2 className="texto">FOR</h2>
          </div>
          <div className="container center between apuesta">
            <div>
              <button
                onClick={() => {
                  setcantidad(0.25);
                }}
                className="decision cantidad"
              >
                0.25 NEAR
              </button>
            </div>
            <div className="val">
              <button
                onClick={() => {
                  setcantidad(0.5);
                }}
                className="decision cantidad"
              >
                0.5 NEAR
              </button>
            </div>
            <div className="val">
              <button
                onClick={() => {
                  setcantidad(1);
                }}
                className="decision cantidad"
              >
                1 NEAR
              </button>
            </div>
          </div>
          <div className=" container center play">
            <button
              className="decision verify"
              variante={"primary"}
              filler={`${
                premium === null ? "Verificar" : "DOUBLE OR NOTHING!"
              }`}
              onClick={async () => {
                if (wallet.isSignedIn()) {
                  if (premium === null) {
                    let dueños = await verificador();
                    console.log(dueños);
                    dueños.includes(accountId)
                      ? setpremium(true)
                      : setpremium(false);
                  } else {
                    if (opcion === null) {
                      alert("Elige una opción para apostar!!");
                    } else if (!cantidad) {
                      alert("Elige una cantidad para apostar!!");
                    }

                    if (opcion !== null && cantidad) {
                      console.log("boom");
                      coinFlip(wallet, cantidad, opcion, premium);
                    }
                  }
                } else {
                  alert("Tienes que hacer Login con tu cuenta de NEAR!!");
                }
              }}
            >
              {`${premium === null ? "Verificar" : "DOUBLE OR NOTHING!"}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
