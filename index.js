const express = require('express')
const jwt=require('jsonwebtoken')
const CourseRoute= require("./Route/course")
const UserRoute= require("./Route/user")
const AdminRoute= require("./Route/admin")

const app= express()



 
app.use("/user",UserRoute);
app.use("/course",CourseRoute)
app.use("/admin",AdminRoute)


// async function main(){
//     await mongoose.connect("mongodb://localhost:27017/course_selling-app")
//     app.listen(3000)
//     console.log("listening on port 3000")
// }

// main();

app.listen(3000)
// middleware
// dotenv
// route







