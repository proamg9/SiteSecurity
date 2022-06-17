const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegisterInput = require("../../controllers/validation/register");
const validateLoginInput = require("../../controllers/validation/login");

const User = require("../../models").User;

// @route POST api/users/register
// @desc Register user

router.post("/register", (req, res) => {
  const { err, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    console.log(req.body.last_name);
    return res.status(400).json(err);
  }

  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        user_pass: req.body.user_pass,
        email: req.body.email,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.user_pass, salt, (err, hash) => {
          if (err) throw err;
          newUser.user_pass = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => {
              console.log(err);
              res.send(err);
            });
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc login user and return JWT token
// @access public
router.post("/login", (req, res) => {
  const { err, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(err);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
