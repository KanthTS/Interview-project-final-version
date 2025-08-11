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
//getting data by role 
adminApp.get('/contributeddata/:role',expressasynchandler(async(req,res)=>{
        //getting data from req
        const dataByRole = req.params
        //finding in database
        const RoleData = await contributedDatamodel.find({role:dataByRole.role})
        res.status(200).send({message:`data by role`,payload:RoleData})
}))
//exporting 
module.exports=adminApp