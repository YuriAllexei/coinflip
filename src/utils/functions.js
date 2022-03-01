import { keyStores, connect, WalletConnection } from "near-api-js";
import BN from "bn.js";
import BigNumber from "bignumber.js";

export const CONTRACT_ID = "wanortu.testnet";
export const gas = new BN("70000000000000");

export const getWallet = async () => {
  const near = await connect({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });
  const wallet = new WalletConnection(near, "wanortu");
  return wallet;
};

export const contractBalance = async () => {
  const near = await connect({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

  const resp = await near.connection.provider.query({
    request_type: "view_account",
    finality: "final",
    account_id: "wanortu.testnet",
  });

  let varoNum = new BigNumber(resp.amount);
  varoNum = varoNum.c[0];
  varoNum = varoNum / 10 ** 10;
  return varoNum;
};

export const greet = async (wallet) => {
  const hola = await wallet.account().viewFunction(CONTRACT_ID, "helloWorld");
  console.log(hola);
};

export const getApuesta = async (wallet, id) => {
  const res = await wallet.account().viewFunction(
    CONTRACT_ID,
    "getGamblePlayer",
    {
      id,
    },
    gas
  );
  return res;
};

export const coinFlip = async (wallet, cantidad, opcion, premium) => {
  let fee;
  let cont;

  if (premium) {
    fee = 0.01;
  }

  if (cantidad === 0.25) {
    cont = "257500000000000000000000";
    cantidad = "250000000000000000000000";
  } else if (cantidad === 0.5) {
    cont = "515000000000000000000000";
    cantidad = "500000000000000000000000";
  } else {
    cont = "1030000000000000000000000";
    cantidad = "1000000000000000000000000";
  }
  await wallet.account().functionCall(
    CONTRACT_ID,
    "coinFlip",
    {
      cantidad,
      opcion,
      premium,
    },
    gas,
    new BN(cont)
  );
};
