const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    isContactActive:{
        type:Boolean,
        default:true
    }

},{'strict':'throw'})

const contactModel=mongoose.model('contact',contactSchema);
module.exports=contactModel;