const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cloudinary = require("cloudinary").v2
const multer = require("multer")
const fs = require("fs").promises
const app =express()
const { v4: uuidv4 } = require('uuid');
const User = require("./schema/data.mongoose")
app.use(cors())
app.use(express.json())

// DB connection code
const connectDB = async ()=>{
    try {
            await mongoose.connect(process.env.MONGO_DB_URI,)
                console.log("DB connected");
                
    } catch (error) {
        console.log("DB connection error:",error);
        
    }
}
connectDB()

// copy code
// multer congi
const storage = multer.memoryStorage()
const imgUplaod = multer({limits:{
    fileSize:2*1024*1024,
},
 fileFilter:(req,file,cb)=>{
    if(file.mimetype.startsWith("image/")){
        cb(null,true)
    }
    else{cb("Only image file is acceptable",false)}
 },
 storage:storage
})


// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imgUploadInClodinary = async (buffer)=>{
   return new Promise((resolve,reject)=>{
    cloudinary.uploader.upload_stream(
        {
            resource_type:"image",
            
            folder:"user"
        },
        (error,result)=>{
            if(error){
                reject(error)
            }
            else{resolve(result)}
        }
    ).end(buffer)

    })
    
}








app.post("/api/create",imgUplaod.single("image"), async(req,res)=>{
    
    
    


    try {
        
        if(!req.file){
            console.log("File is missing");
            return
        }
          const imgFile = await imgUploadInClodinary(
        req.file.buffer,
        )
         const {
  country,
  city,
  course,
  proficiency,
  fullName,
  fatherName,
  email,
  phone,
  cnic,
  fatherCnic,
  dob,
  gender,
  address,
  qualification,
  haveLaptop
} = req.body
const newUser = new User({
    country,
  city,
  course,
  proficiency,
  fullName,
  fatherName,
  email,
  phone,
  cnic,
  fatherCnic,
  dob,
  gender,
  address,
  qualification,
  haveLaptop,
  image:imgFile.secure_url  
})
    await newUser.save()

        
   


    res.send({messgae:"User added successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong while adding user" });
        
    }

})


app.get("/api", async(req,res)=>{
    try {
           res.send({Users: await User.find()})
           
    } catch (error) {
        console.log("Data fetching error: ",error );
        
    }
 
})















// DB code
// app.post('/create', async(req,res)=>{
//         const {
//   country,
//   city,
//   course,
//   proficiency,
//   fullName,
//   fatherName,
//   email,
//   phone,
//   cnic,
//   fatherCnic,
//   dob,
//   gender,
//   address,
//   qualification,
//   haveLaptop
// } = req.body
// const newUser = new User({
//     country,
//   city,
//   course,
//   proficiency,
//   fullName,
//   fatherName,
//   email,
//   phone,
//   cnic,
//   fatherCnic,
//   dob,
//   gender,
//   address,
//   qualification,
//   haveLaptop})

//     try {
//         await newUser.save();
//         res.send("User added") 
//     } catch (error) {
//         console.log("Error on saving user", error);
        
//     }



// })
app.listen(process.env.PORT,()=>(
    console.log("Server is running on ",process.env.PORT)
    
))