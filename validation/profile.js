const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.company = !isEmpty(data.company) ? data.company : '';
  data.jobtitle = !isEmpty(data.jobtitle) ? data.jobtitle : '';
  data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : '';
  data.timezone = !isEmpty(data.timezone) ? data.timezone : '';
  data.sendquestionsat = !isEmpty(data.sendquestionsat) ? data.sendquestionsat : '';

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  if (Validator.isEmpty(data.jobtitle)) {
    errors.jobtitle = 'Job title field is required';
  }

  if (Validator.isEmpty(data.phonenumber)) {
    errors.phonenumber = 'Phone number field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};