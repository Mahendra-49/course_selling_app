const express =require('express')
const courseRoute =express.Router();       // Router() is function


courseRoute.get('/allCourses',(req,res)=>{

    res.send({
        message:"all courses"
    })
})

//payment
courseRoute.post('/purchase',(req,res)=>{
    res.send({
        message:"user purchase a course"
    })
})



module.exports= courseRoute

