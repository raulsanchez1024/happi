const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const coworker = require("./routes/api/coworker");

const app = express();

// Body pasrer middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/coworker", coworker);

const mailScheduler = require("./utils/mail-schedule/mailscheduler");
const mailUser = require("./utils/mail-schedule/mailuser");
const mailCreator = require("./utils/mail-schedule/mailcreator");
const mailSender = require("./utils/mail-schedule/mailsender");

const port = process.env.PORT || 5001;

app.listen(
  port,
  () => console.log(`Server running on port ${port}`),
  () => {
    console.log("func is fired");
    mailScheduler(() => {
      mailUser().then(coworkers => {
        console.log("J");
        let mailing = mailCreator(coworkers); // taking a poop here

        console.log(mailing);

        for (let i = mailing.length - 1; i >= 0; i--) {
          mailSender(mailing[i].coworker, "Awesome Headline", mailing[i].tmp)
            .then(res => {
              console.log(res);
            })
            .catch(err => console.log("error: " + err));
        }
      });
    });
  }
);
