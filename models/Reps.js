const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  reptype: { type: String, required: true },
  party: { type: String, required: true },
  email: String,
  state: { type: String, required: true },
  website: String,
  picture: { type: String, required: true },
  telephone: String,
  nextRace: String,
  apiID: { type: String, required: true },
});

const Reps = mongoose.model("Reps", repsSchema);

module.exports = Reps;
