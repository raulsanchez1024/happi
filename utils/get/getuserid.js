const axios = require("axios");

module.exports = () => {
  let userId = "";
  axios
    .get("/api/users/current")
    .then((res) => {
      console.log(res);
      userId = res.id;
    })
    .catch(err => console.log(err));
    return userId;
};
