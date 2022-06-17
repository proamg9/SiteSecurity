const digiO = require("./services/digitalocean.js");
const x = "test ";

module.exports = {
  new(req, res) {
    return res.status(200).send(x);
  },
};
