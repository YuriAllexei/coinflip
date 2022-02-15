import { keyStores, connect, WalletConnection, utils } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = "dev-1634742185963-52355839606274";
export const gas = new BN("70000000000000");

export const getWallet = async () => {
  const near = await connect({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });
  const wallet = new WalletConnection(near, "yurimexbalia");
  return wallet;
};

// export const coinFlip = async (wallet, opcion) => {
//     const response = await wallet.account().functionCall({
//       contractId: CONTRACT_ID,
//       methodName: "registerCompany",
//       args: company,
//       gas,

//     });
//     return response;
//   };
