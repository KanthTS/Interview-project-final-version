const mongoose = require("mongoose");
//defing user contribution schema 
const userContributeSchema = new mongoose.Schema({
    question:{
        type:String,
    },
    tag:{
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
    }

},{"strict":"throw"})

const userContributemodel = mongoose.model('usercontribute',userContributeSchema)
//exporting
module.exports=userContributemodel
