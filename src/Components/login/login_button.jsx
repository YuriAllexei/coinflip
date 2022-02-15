import { useState, useEffect } from "react";

import { getWallet, CONTRACT_ID } from "../../utils/functions";
import "./logBut.css";

function LoginButton(props) {
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

  const login = async () => {
    setLoading(true);
    try {
      await wallet.requestSignIn(CONTRACT_ID, "Flip coin");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
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
