const express = require("express")
const adminRoute =express.Router();
const jwt = require("jsonwebtoken")
const { adminModel , courseModel } = require("../db")
const {JWT_ADMIN_SECRET} = require("../config")
const { adminmiddleware } = require("../middleware/admin")





adminRoute.post('/signup',async function(req,res){
    const {email,password,firstName,lastName} = req.body;

    await adminModel.create({
        email:email,
        password : password,
        firstName: firstName,
        lastName: lastName
     })


    res.send({
        message:"signup endpoint"
    })
})


adminRoute.post('/signin', async function(req,res){
     const {email,password}= req.body
    
        // const checkPassword= bcrypt.compare(response.password,password)
        const response=  await adminModel.findOne({email:email,password})
    
        if(response){
            const token = jwt.sign(
                {id:response._id.toString()},
                JWT_ADMIN_SECRET
            )
            // do cookie based logic here
            res.send({
                token :token
    
             })
        }
        else{
            res.status(403).send({
                    message:"Invalid Credentials"
                })
        }
})


adminRoute.post('/createCourse',adminmiddleware,async function(req,res){
    const adminId = req.adminId
     
    // it will take the input from admin
    const { title, description, price, imageUrl }= req.body
    const course = await courseModel.create({
        title : title,
        description : description,
        price : price,
        imageUrl : imageUrl,
        createrId : adminId
    })


    res.send({
        courseId: course._id,
        message:"course created"
    })
})


adminRoute.delete('/deleteCourse',adminmiddleware,function(req,res){
    const adminId = req.adminId // this id comes from middleware 
    res.send({
        message:"signup endpoint"
    })
})


adminRoute.put('/addContent',adminmiddleware,function(req,res){
    const adminId = req.adminId
    res.send({
        message:"signup endpoint"
    })
})

module.exports=adminRoute

