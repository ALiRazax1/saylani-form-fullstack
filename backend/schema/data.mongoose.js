const mongoose = require("mongoose")

const  userSchema  = new mongoose.Schema({
  country:{
    type:String,
    required:true,
  },
  city:{
    type:String,
    required:true,
  },
  proficiency:{
    type:String,
    required:true
  },
  course:{
    type:String,
    required:true,
  },
  fullName:{
    type:String,
    required:true,
  },
  fatherName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:String,
    required:true,
  },
  cnic:{
    type:String,
    required:true,
    unique:true
  },
  fatherCnic:{
    type:String,
  },
  dob:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  qualification:{
    type:String,
    required:true,
  },
  haveLaptop :{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  }
},
{timestamps:true}
);

 const User = mongoose.model("User",userSchema)
module.exports = User