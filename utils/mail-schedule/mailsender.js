const mongoose = require("mongoose");
let mailgun = require("mailgun-js");
const Q = require("q");
const keys = require("../../config/keys");

module.exports = function mailSender(coworkerEmail, subject, html) {
  // Setup promises
  let deffered = Q.defer();
  
  // Create new mailgun instance with credentials
  let mailgun = new Mailgun({
    apiKey: keys.mailgun_api,
    domain: keys.mailgun_domain
  });

  // Setup basic mail data
  let mailData = {
    from: "TEST <hi@raauul.com>",
    to: coworkerEmail,
    subject: subject,
    html: html
  };

  // Send mailgun instance to mailData
  mailgun.messages().send(mailData, (err, body) => {
    if (err) {
      deffered.reject(console.log("failed: " + err));
    } else {
      differed.resolve(body);
    }
  });

  return deffered.promise;
}