const request = require("superagent");

getAccount = () => {
  request
    .post("https://api.digitalocean.com/v2/account")
    .set(
      "Authorization",
      "Bearer {bb4d6825fceba7a152802861c5f08f943a450a807c2ded3c21252d4e772774ea}"
    )
    .set("Content-type", "Application/json")
    .end(function (err, res) {
      if (err) {
        console.log(err);
      } else {
        return res.body;
      }
    });
};
module.exports = getAccount;
