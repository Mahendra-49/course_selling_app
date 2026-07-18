const jwt = require("jsonwebtoken")
const { JWT_ADMIN_SECRET} = require("../config")

function adminmiddleware(req,res,next){


     const token = req.headers.token;

    const decoded = jwt.verify(token,JWT_ADMIN_SECRET);

    if(decoded){
         req.adminId = decoded.adminId
        next();
    }else{
        res.status(403).send({
            message:"invalid session"
        })
    }




}

module.exports={
    adminmiddleware:adminmiddleware
}