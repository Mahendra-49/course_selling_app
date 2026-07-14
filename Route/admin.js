const {Router} = require("express")
const adminRoute = Router();
const {adminModel} = require("../db")

adminRoute.post('adminSignup',function(req,res){
    res.send({
        message:"signup endpoint"
    })
})

adminRoute.post('/adminLogin',function(req,res){
    res.send({
        message:"signin endpoint"
    })
})

adminRoute.use(middleware)

adminRoute.post('/createCourse',function(req,res){
    res.send({
        message:"signup endpoint"
    })
})


adminRoute.delete('/deleteCourse',function(req,res){
    res.send({
        message:"signup endpoint"
    })
})


adminRoute.put('/addContent',function(req,res){
    res.send({
        message:"signup endpoint"
    })
})

module.exports({
    adminRoute:adminRoute
})
