const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  state: {type: String,
    trim: true,
    required: "State is Required",
    validate: [
      function(input) {
        return input.length === 2;
      },
      "Use the two letter state abbreviation."
    ]
  },
  savedArticles: [
    {
      type: Schema.Articles.ObjectId,
      // The ObjectIds will refer to the ids in the Articles model
      ref: "Articles"
    }
  ]
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;