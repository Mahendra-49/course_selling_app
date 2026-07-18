const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose")
const CourseRoute= require("./Route/course")
const UserRoute= require("./Route/user")
const AdminRoute= require("./Route/admin")

const app= express()
app.use(express.json())



 
app.use("/user",UserRoute);
app.use("/course",CourseRoute)
app.use("/admin",AdminRoute)


async function main(){
    await mongoose.connect("mongodb://localhost:27017/new_coursera")
    app.listen(3000)
    
}

main();
console.log("listening on port 3000")

// app.listen(3000)
// middleware
// dotenv
// route







