const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [5, "Name must be at least 5 char long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "Name must be at least 5 char long"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: [14, "Name must be at least 5 char long"],
  },
});


const user=mongoose.model('user',userSchema);
module.exports=user;