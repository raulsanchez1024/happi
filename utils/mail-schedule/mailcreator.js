const nunjucks = require("nunjucks");

module.exports = function mailCreator(coworkers) {
  let mailing = [];

  for (let i = coworkers.length - 1; i >= 0; i--) {
    // Get an email template
    let tmp = nunjucks.renderString("Hello {{ coworkername }}, we sent you and email here {{ coworkeremail }} <button>Answer</button>", {
      coworkername: coworkers[i].name,
      coworkeremail: coworkers[i].email
    });
    mailing.push({
      coworker: coworkers[i].email,
      tmp
    });
  }

  return mailing;
};

// const nunjucks = require("nunjucks");

// module.exports = function mailCreator(coworkers) {
//   let mailing = [];

//   for (let i = coworkers.length - 1; i >= 0; i--) {
//     // Get an email template
//     let tmp = nunjucks.renderString("../../views/templates/email.njk", {
//       coworkername: coworkers[i].name,
//       coworkeremail: coworkers[i].email
//     });
//     mailing.push({
//       coworker: coworkers[i].email,
//       tmp
//     });
//   }

//   return mailing;
// };