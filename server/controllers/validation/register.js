const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let err = {};

  data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
  data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
  data.user_name = !isEmpty(data.user_name) ? data.user_name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.user_pass = !isEmpty(data.user_pass) ? data.user_pass : "";

  if (Validator.isEmpty(data.first_name || data.last_name)) {
    err.names = " this field is required";
  }
  if (Validator.isEmpty(data.user_name)) {
    err.user_name = " user name field is required";
  }
  if (Validator.isEmpty(data.email)) {
    err.email = " email cannot be blank";
  } else if (!Validator.isEmail(data.email)) {
    err.email = " email is invalid";
  }
  if (Validator.isEmpty(data.user_pass)) {
    err.user_pass = " password is required";
  }
  console.log("validation error is " + JSON.stringify(err));
  return {
    err,
    isValid: isEmpty(err),
  };
};
