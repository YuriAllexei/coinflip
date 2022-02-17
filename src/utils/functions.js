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
  console.log("dajda");
  console.log(near);
  const wallet = new WalletConnection(near, "");
  return wallet;
};

export const coinFlip = (wallet) => {
  const response = wallet
    .account()
    .functionCall({
      contractId: CONTRACT_ID,
      deposit: new BN("1"),
      methodName: "coinFlip",
      gas,
    })
    .then(() => {
      console.log("Llamada exitosa");
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};
