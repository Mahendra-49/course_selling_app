

const {Router} =require('express')
const courseRoute =Router();       // Router() is function


courseRoute.get('/allCourses',(req,res)=>{

    res.send({
        message:"all courses"
    })
})

courseRoute.post('/purchase',(req,res)=>{
    res.send({
        message:"user purchase a course"
    })
})



module.exports({
    CourseRoute:CourseRoute
})
