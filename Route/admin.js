const express = require("express")
const adminRoute =express.Router();
const jwt = require("jsonwebtoken")
const { adminModel } = require("../db")
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


adminRoute.post('/createCourse',adminmiddleware,function(req,res){
    res.send({
        message:"signup endpoint"
    })
})


adminRoute.delete('/deleteCourse',adminmiddleware,function(req,res){
    const adminId = req.adminId // this id comes from middleware 
    res.send({
        message:"signup endpoint"
    })
})


adminRoute.put('/addContent',adminmiddleware,function(req,res){
    res.send({
        message:"signup endpoint"
    })
})

module.exports=adminRoute

