const express=require('express')
const jwt=require('jsonwebtoken')
const {CourseRoute}= require("./Route/course")
const {UserRoute}= require("./Route/user")
const {AdminRoute}= require("./Route/admin")

const app= express()



 
app.use("/user",userRoute);
app.use("/course",courseRoute)
app.use("/admin",adminRoute)


async function main(){
    await mongoose.conect("mongodb://localhost:27017/course_selling-app")
    app.listen(3000)
    console.log("listening on port 3000")
}

main();

// middleware
// dotenv
// route







