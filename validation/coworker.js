const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCoworkerInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.jobtitle = !isEmpty(data.jobtitle) ? data.jobtitle : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isLength(data.jobtitle, { min: 2, max: 30 })) {
    errors.jobtitle = "Job title must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.jobtitle)) {
    errors.jobtitle = "Job title field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
