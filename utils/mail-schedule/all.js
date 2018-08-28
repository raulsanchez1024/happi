const mailCreator = require("./mailcreator");
const mailSender = require("./mailSender");
const mailScheduler = require("./mailScheduler");
const mailUser = require("./mailUser");

// const mailDay = new Date();

// function all() {
//   mailUser(mailDay, id).then(coworkers => {
//     // Create a mailing
//     let mailing = mailCreator(coworkers);

//     for (let i = mailing.length - 1; i >= 0; i--) {
//       mailSender(mailing[i].coworker, "Awesome Headline", mailing[i].email)
//         .then(res => {
//           console.log(res);
//         })
//         .catch(err => console.log("error: " + err));
//     }
//   });
// }

// function mailScheduler(all) {
//   if(all && (typeof all == "function")) {
//     all();
//   }
// }
// mailSender(all);


// module.exports = mailScheduler(all);