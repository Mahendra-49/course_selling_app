const express =require('express');
const { purchaseModel } = require('../db');
const { usermiddleware }= require("../middleware/user")
const courseRoute =express.Router();       // Router() is function


//payment: set user to their purchased course in database
courseRoute.post('/purchase',usermiddleware,async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;


    const usercourse= await purchaseModel.create({
        courseId,
        userId
    })
    res.send({
        message:"user purchase a course"
    })
})

//this endpoint not require authentication
courseRoute.get('/allCourses',async function(req,res){
    const allcourses= await courseModel.find({})

    res.send({
        allcourses,
        message:"all courses"
    })
})




module.exports= courseRoute

