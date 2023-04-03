const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  vehicleModel:  {
    type: String,
    required: [true, "Please Enter Your Vehicle Model"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
  },
},
  {
    timestamps: true,
  }

);

module.exports = mongoose.model("User", userSchema);


