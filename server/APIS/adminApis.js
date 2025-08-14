const exp = require('express');
const adminApp = exp.Router();
const contributedDatamodel = require('../models/contributedDatamodel')
const expressasynchandler=require('express-async-handler');
const {requireAuth, clerkMiddleware}=require('@clerk/express')
adminApp.use(clerkMiddleware())

require('dotenv').config()
//getting user contributed data 

adminApp.get('/contributeddata',requireAuth({signInUrl:"unauthorized"}),expressasynchandler(async(req,res)=>{
        //getting all the data 
        const usersData = await contributedDatamodel.find({})
        res.status(200).send({message:`this is the react tagged data`,payload:usersData})
}))
//getting data by role 
adminApp.get('/contributeddata/:role',requireAuth({signInUrl:"unauthorized"}),expressasynchandler(async(req,res)=>{
        //getting data from req
        const role = req.params.role;
        //finding in database
        const RoleData = await contributedDatamodel.find({role})
        res.status(200).send({message:`data by role`,payload:RoleData})
}))
//exporting 
adminApp.get('/unauthorized',async(req,res)=>{
    res.send({message:"pleaze relogin again unauthorized request"})
})
module.exports=adminApp