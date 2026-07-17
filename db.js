const mongoose = require("mongoose")
const schema= mongoose.Schema
const objectId = schema.ObjectId

// mongoose.conect("mongodb://localhost:27017/course_selling-app")

const userSchema= new schema({
    _id:objectId,
    email:{type:String,unique:true},
    password:String,    
    firstName:String,
    lastName:String

})

const adminSchema= new schema({
    _id:objectId,
    email:{type:String,unique:true},
    password:String,    
    firstName:String,
    lastName:String
})

const courseSchema= new schema({
    _id:objectId,
    title: String,
    description : String,
    price:Number,
    imageUrl:String,
    CreaterId:objectId
    
})

const purchaseSchema= new schema({
    _id:objectId,
    courseId:objectId,
    userId:objectId
    
})

const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin",adminSchema)
const purchaseModel = mongoose.model("purchase",purchaseSchema)
const courseModel = mongoose.model("course",courseSchema)


module.exports=(
    userModel,
    adminModel,
    purchaseModel,
    courseModel
)