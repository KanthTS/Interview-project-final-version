const mongoose=require("mongoose");
//defining user schema 
const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImageUrl:{
        trype:String,
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{"strict":"throw"})

const usermodel = mongoose.model('user',userSchema);//it creates the user model in data base
//exporting 
module.exports=usermodel

