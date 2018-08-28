const nunjucks = require("nunjucks");

module.exports = function mailCreator(coworkers) {
  let mailing = [];

  for (let i = coworkers.length - 1; i >= 0; i--) {
    // Get an email template
    let email = nunjucks.render("../../views/templates/email.html", {
      coworkername: coworkers[i].name,
      coworkeremail: coworkers[i].email
    });
    mailing.push({
      coworker: coworkers[i].email,
      email: email
    });
  }

  return mailing;
};
