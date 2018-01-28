const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: String, required: true },
  username: {
    type: String,
    index: { unique: true },
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
  state: {
    type: String,
    trim: true,
    required: "State is Required"
  },
  zipCode: {
    type: String,
    trim: true,
    required: "Zip Code is Required"
  },
  savedArticles: [{
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Articles model
    ref: "Articles"
  }]
});

//Method for checking if a user has provided the correct password
usersSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

//The pre-save hook method
usersSchema.pre("save", function saveHook(next) {
  const user = this;

  //only go further if the password is modified or the user is new
  if (!user.isModified("password")) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      console.log("USERS.JS SALTERROR:");
      console.log(saltError);
      return next(saltError);
    }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {
        console.log("USERS.JS HASHERROR:");
        console.log(hashError);
        return next(hashError);
      }

      //replace a password string with hash value in the database
      user.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model("Users", usersSchema);
