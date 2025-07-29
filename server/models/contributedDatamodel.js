const mongoose = require('mongoose')
//defining the schema for storing the contributed data 
const contributedDataSchema = new mongoose.Schema({
    tag:{
        type:String,
    },
    questions:{
        type:[{
            question:String,
            role:String
        }]
    }
},{"strict":"throw"})
//creating a db using the schema
const contributedDataSchemamodel=mongoose.model('contributeddata',contributedDataSchema)

//exporting the module 
module.exports=contributedDataSchemamodel