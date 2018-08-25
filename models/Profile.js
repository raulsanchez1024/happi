const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  company: {
    type: String,
    required: true
  },
  jobtitle: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  timezone: {
    type: String,
    required: false
  },
  sendquestionsat: {
    type: String,
    required: false
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);