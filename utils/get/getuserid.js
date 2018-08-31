const axios = require("axios");

module.exports = function getUserId() {
  let userId = "";
  axios
    .get("http://localhost:5001/api/users/current")
    .then((res) => {
      userId = res.data.id;
      console.log(userId)
    })
    .catch(err => console.log(err));
};
