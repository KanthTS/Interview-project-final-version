
const mongoose=require('mongoose')

const emailSchema=new mongoose.Schema({
to:{
    type:String
},
subject:{
    type:String
},
message:{
    type:String
}
},{'strict':'throw'})

const emailModel=mongoose.model('emails',emailSchema);
module.exports=emailModel;