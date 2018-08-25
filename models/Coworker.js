const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const CoworkerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  jobtitle: {
    type: String,
    required: false
  },
  questionandanswer: [
    {
      question: {
        type: String,
        required: false
      },
      answer: {
        type: String,
        required: false
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdat: {
    type: Date,
    default: Date.now
  }
});

module.exports = Coworker = mongoose.model("coworker", CoworkerSchema);