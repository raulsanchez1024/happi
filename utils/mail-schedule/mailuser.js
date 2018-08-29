const Q = require("q");
const axios = require("axios");

// Load coworker model
const Coworker = require("../../models/Coworker");

const userId = "";

module.exports = function mailUser(mailday) {
  console.log("Users fired");

  // axios.get("http://localhost:5001/api/users/current")
  // .then((res) => {
  //   userId = res.id;
  //   console.log(UserId);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // console.log(userId);

  let deffered = Q.defer();

  Coworker.find({ user: "5b7aeb3cf0861f453c279910" }).exec((err, coworker) => {
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
