const mongoose = require("mongoose");
//defing user contribution schema 
const userContributeSchema = new mongoose.Schema({
    contributeId:{
        type:String,
    },
    question:{
        type:String,
    },
    topic:{
        type:String,
        required:true
    },
   
    company:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    solution:{
        type:String,
    },
    isContributeActive:{
        default:true,
        type:Boolean
    }

},{"strict":"throw"})

const userContributemodel = mongoose.model('usercontribute',userContributeSchema)
//exporting
module.exports=userContributemodel
