
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  dept: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Employee", employeeSchema);


