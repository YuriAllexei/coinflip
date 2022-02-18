import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { keyStores } from "near-api-js";

import { getWallet, CONTRACT_ID } from "../../utils/functions";
import "./logBut.css";

function LoginButton({ setSignIn }) {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState();
  const [accountId, setAccountId] = useState("");
  const [infoMessage, setInfoMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const tempWallet = await getWallet();
        setWallet(tempWallet);
        setAccountId(tempWallet.getAccountId());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        new keyStores.BrowserLocalStorageKeyStore().localStorage.length !== 0
      ) {
        if (loading === false) {
          navigate("/bet");
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [loading]);

  const login = () => {
    setLoading(true);
    try {
      wallet.requestSignIn(CONTRACT_ID, "Flip coin").then(() => {
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
    // eslint-disable-next-line no-restricted-globals
    //location.reload();
  };

  return (
    <div className="">
      <button className="boton" onClick={() => login()}>
        Log in
      </button>
    </div>
  );
}

export default LoginButton;
