const mongoose = require('mongoose')
//defining the schema for storing the contributed data 
const contributedDataSchema = new mongoose.Schema({
    role:{
        type:String,
    },
    tag:
        [{
        topic:String,
        questions:{
                type:[{
                    question:String,             
                }]
            },count:Number,
        }],
    
    count:{type:Number},
    isContributeActive:{
     default:true,
     type:Boolean
    }
},{"strict":"throw"})
//creating a db using the schema
const contributedDataSchemamodel=mongoose.model('contributeddata',contributedDataSchema)

//exporting the module 
module.exports=contributedDataSchemamodel