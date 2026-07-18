const mongoose = require("mongoose")
const schema= mongoose.Schema
const objectId = schema.ObjectId



const userSchema = new schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema= new schema({
  
    email:{type:String,unique:true},
    password:String,    
    firstName:String,
    lastName:String
})

const courseSchema= new schema({
    
    title: String,
    description : String,
    price:Number,
    imageUrl:String,
    CreaterId:objectId
    
})

const purchaseSchema= new schema({
    
    courseId:objectId,
    userId:objectId
    
})

const userModel = mongoose.model("users",userSchema)
const adminModel = mongoose.model("admins",adminSchema)
const purchaseModel = mongoose.model("purchases",purchaseSchema)
const courseModel = mongoose.model("courses",courseSchema)


module.exports={
    userModel,
    adminModel,
    purchaseModel,
    courseModel
};