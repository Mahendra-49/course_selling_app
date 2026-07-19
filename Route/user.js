const express =require('express')
const bcrypt= require("bcrypt")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const userRoute = express.Router();  
const {userModel , purchaseModel, courseModel } = require("../db")
const { JWT_USER_SECRET} = require("../config")
const { usermiddleware } = require("../middleware/user")




userRoute.post('/signup',async function(req,res){
    const { email,password,firstName,lastName } = req.body;

    // todo - zod validation , pasword hash, 

    //  const hashedPassword= bcrypt.hash(password,4);
    // console.log(hashedPassword)

    //put inside try catch block
     await userModel.create({
        email:email,
        password : password,
        firstName: firstName,
        lastName: lastName
     })


    res.send({
        message:"signup endpoint"
    })
})


userRoute.post('/signin',async function (req,res){
    const {email,password}= req.body

    // const checkPassword= bcrypt.compare(response.password,password)
    const response =  await userModel.findOne({email:email,password})

    if(response){
        const token = jwt.sign(
            {id:response._id.toString()},
            JWT_USER_SECRET
        )
        // do cookie based logic here
        res.send({
            token :token

         })
    }
    else{
        res.status(400).send(
            {
                message:"Invalid Credentials"
            }
        )
    }
    // res.send({
    //     message:"signin successful"
    // })
})



//user's puchases
userRoute.get('/purchases',usermiddleware,async function(req,res){
     const userId = req.userId;
     const purchases = await purchaseModel.find({
        userId:userId
     })
 
     //this array store the all coursesId that user buyed
     const puchasesCourseId =[];


     for(let i=0;i<purchases.length;i++){
        puchasesCourseId.push(purchases[i].courseId)
     }

     //it map the courseId with the all available courses and return the match courses with there details
     const courses= await courseModel.find({
        _id: {$in :purchasesCourseId}
     })

    res.send({
        purchases,
        courses,
        message:"course purchased by user"
    })
})


module.exports = userRoute
