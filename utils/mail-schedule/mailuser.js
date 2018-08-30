const Q = require("q");

// Load coworker model
const Coworker = require("../../models/Coworker");

module.exports = function mailUser(mailday) {
  console.log("Users fired");

  let deffered = Q.defer();

  let userId = "5b7aeb3cf0861f453c279910";
  // 5b7aeb3cf0861f453c279910

  Coworker.find({ user: userId }).exec((err, coworker) => {
    let coworkers = [];

    if (err) {
      deffered.reject(console.log("failed: " + err));
    } else {
      // Add all users coworkers
      for (let i = coworker.length - 1; i >= 0; i--) {
        coworkers.push(coworker[i]);
      }
      deffered.resolve(coworkers);
    }
    console.log(coworkers);
  });

  return deffered.promise;
};
