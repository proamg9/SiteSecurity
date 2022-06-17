const resultsController = require("../controllers").result;
const storesController = require("../controllers").store;

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!",
    })
  );

  app.post("/api/results", resultsController.create);
  app.get("/api/results", resultsController.list);
  //app.get("/api/store", storesController.getAccount);
};
