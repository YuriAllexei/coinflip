import axios from "axios";

export async function verificador() {
  let dueños = [];
  var config = {
    method: "get",
    url: "https://api-v2-mainnet.paras.id/token?token_series_id=179&contract_id=x.paras.near&__limit=100&__sort=_id::1",
  };

  await axios(config)
    .then(async function (response) {
      response.data.data.results.forEach((obj) => {
        dueños.push(obj.owner_id);
      });
    })
    .catch(function () {
      return [];
    });

  return dueños;
}
