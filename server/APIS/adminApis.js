const exp = require('express');
const adminApp = exp.Router();
const contributedDatamodel = require('../models/contributedDatamodel')
const expressasynchandler=require('express-async-handler');

//getting user contributed data 
adminApp.get('/contributeddata',expressasynchandler(async(req,res)=>{
        //getting all the data 
        const usersData = await contributedDatamodel.find({})
        res.status(200).send({message:`this is the react tagged data`,payload:usersData})
}))
//exporting 
module.exports=adminApp