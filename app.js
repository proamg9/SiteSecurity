require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const usersApi = require("./server/routes/api/users");

// Set up the express app
const app = express();

app.use(cors());

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./server/config/passport")(passport);
// pasport middleware
app.use(passport.initialize());
//
app.use("/api/users", usersApi);
// Setup a default catch-all route that sends back a welcome message in JSON format.
require("./server/routes")(app);

const port = 5000;
app.listen(port, () => console.log(`server running on ${port}`));
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome....",
  })
);

module.exports = app;
