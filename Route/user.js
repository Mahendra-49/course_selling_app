const express =require('express')
const bcrypt= require("bcrypt")
const userRoute = express.Router();  
const userModel = require("../db")


userRoute.post('/Signup',async function(req,res){
    const { email,password,firstName,lastName } = req.body;

    // todo - zod validation , pasword hash, 
    const hashedPassword= bcrypt.hash(password,4);
    // console.log(hashedPassword)

    //put inside try catch block
     await userModel.create({
        email:email,
        password:password,
        firstName: firstName,
        lastName: lastName
     })


    

    res.send({
        message:"signup endpoint"
    })
})


userRoute.post('/Login',(req,res)=>{
    const {email,password}= req.body

    const checkPassword= bcrypt.compare(response.password,password)
    res.send({
        message:"signin endpoint"
    })
})

// adminRoute.use(middleware)


userRoute.get('/purchases',(req,res)=>{
    res.send({
        message:"my purchase endpoint"
    })
})


module.exports = userRoute
