const mongoose=require("mongoose");
//defining user schema 
const userSchema = new mongoose.Schema({
    firstName:{
         type:String,
    
    },
    email:{
        type:String,
     
        unique:true
    },
    password:{
        type:String,
        
    },
    profileImageUrl:{
        type:String,
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{"strict":"throw"})

const usermodel = mongoose.model('user',userSchema);//it creates the user model in data base
//exporting 
module.exports=usermodel

