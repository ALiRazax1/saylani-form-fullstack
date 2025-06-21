// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const cloudinary = require("cloudinary").v2
// const multer = require("multer")
// const fs = require("fs").promises
// const app =express()
// const { v4: uuidv4 } = require('uuid');
// app.use(cors())
// app.use(express.json())
// const filePath = "data.json"


// // multer congi
// const storage = multer.memoryStorage()
// const imgUplaod = multer({limits:{
//     fileSize:2*1024*1024,
// },
//  fileFilter:(req,file,cb)=>{
//     if(file.mimetype.startsWith("image/")){
//         cb(null,true)
//     }
//     else{cb("Only image file is acceptable",false)}
//  },
//  storage:storage
// })


// // cloudinary config
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const imgUploadInClodinary = async (buffer)=>{
//    return new Promise((resolve,reject)=>{
//     cloudinary.uploader.upload_stream(
//         {
//             resource_type:"image",
            
//             folder:"user"
//         },
//         (error,result)=>{
//             if(error){
//                 reject(error)
//             }
//             else{resolve(result)}
//         }
//     ).end(buffer)

//     })
    
// }



// const readFileData = async ()=>{
//     try {
//         const data = await fs.readFile(filePath,"utf-8")
//     return JSON.parse(data)
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }


// const writeDataToFie = async (data) => {
//     try {
//         await fs.writeFile(filePath,JSON.stringify(data,null,2))
//     } catch (error) {
//         console.log(error);
        
//     }


// }


// app.post("/api/create",imgUplaod.single("image"), async(req,res)=>{
    
  
    


//     try {
        
//         if(!req.file){
//             console.log("File is missinf");
//             return
//         }
//   const imgFile = await imgUploadInClodinary(
//         req.file.buffer,
//         )
//         console.log(imgFile);
        
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
// const newUser = {
//     id:uuidv4(),
//     country: country,
//   city: city,
//   course: course,
//   proficiency: proficiency,
//   fullName: fullName,
//   fatherName: fatherName,
//   email: email,
//   phone: phone,
//   cnic: cnic,
//   fatherCnic: fatherCnic,
//   dob: dob,
//   gender: gender,
//   address: address,
//   qualification: qualification,
//   haveLaptop: haveLaptop,
//   image:imgFile.secure_url
// }

// const usersList = await readFileData()
// usersList.push(newUser)
// await writeDataToFie(usersList)

//     res.send({messgae:"User added successfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Something went wrong" });
        
//     }

// })


// app.get("/api", async(req,res)=>{
//     res.send({Users: await readFileData()})
// })


// app.listen(process.env.PORT,() => {
//   console.log(`Server is Running on Port ${process.env.PORT}`);
// })

