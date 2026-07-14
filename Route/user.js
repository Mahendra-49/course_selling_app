const {Router} =require('express')
const userRoute =Router();  

userRoute.post('/userSignup',(req,res)=>{
    res.send({
        message:"signup endpoint"
    })
})
userRoute.post('/userLogin',(req,res)=>{
    res.send({
        message:"signin endpoint"
    })
})

userRoute.get('/purchases',(req,res)=>{
    res.send({
        message:"my purchase endpoint"
    })
})


module.exports({
    UserRoute:UserRoute
})