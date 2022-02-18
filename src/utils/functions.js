import { keyStores, connect, WalletConnection, utils } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = "dev-1644545119408-47328004210213";
export const gas = new BN("70000000000000");

export const getWallet = async () => {
  const near = await connect({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });
  const wallet = new WalletConnection(near, "");
  return wallet;
};

export const coinFlip = (wallet, cantidad, opcion, premium, setResultado) => {
  let resultado;
  if (cantidad === 0.25) {
    cantidad = "250000000000000000000000";
  } else if (cantidad === 0.5) {
    cantidad = "500000000000000000000000";
  } else {
    cantidad = "1000000000000000000000000";
  }
  const response = wallet
    .account()
    .functionCall({
      contractId: CONTRACT_ID,
      deposit: new BN(cantidad),
      methodName: "coinFlip",
      args: {
        opcion,
        premium,
      },
      gas,
    })
    .then((response) => {
      setResultado(response["receipts_outcome"][0]["outcome"]["logs"][0]);
      resultado = response["receipts_outcome"][0]["outcome"]["logs"][0];
    })
    .catch((err) => {
      console.log(err);
    });

  return resultado;
};
