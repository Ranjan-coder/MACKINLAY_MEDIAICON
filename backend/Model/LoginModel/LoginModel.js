const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  usertype:{
    type:String,
    required:true

  },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone_number: {
        type: Number,
        unique: true,
        required: true,
        minlength: 10,
        maxlength: 10
      },
      dob: {
        type: Date,
        // required: true,
      },
      state: {
        type: String,
        // required: true,
      },
      gender: {
        type: String
      },
      profileImage: {
        type: String,
      },
            
})
const User = mongoose.model("User", PatientSchema);
module.exports = User;
