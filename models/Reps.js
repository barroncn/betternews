const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repsSchema = new Schema({
  name: { type: String, required: true },
  party: { type: String, required: true },
  email: String,
  state: { type: String, required: true },
  website: { type: String, required: true },
  picture: { type: String, required: true },
  telephone: { type: String, required: true },
  apiID: { type: String, required: true },
});

const Reps = mongoose.model("Reps", repsSchema);

module.exports = Reps;