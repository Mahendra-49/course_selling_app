const express = require("express")
const adminRoute =express.Router();
const jwt = require("jsonwebtoken")
const JWT_ADMIN_SECRET="UTYEIU  "
const { adminModel } = require("../db")




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

// adminRoute.use(middleware)
function auth(req,res,next){


    
}
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

module.exports=adminRoute

