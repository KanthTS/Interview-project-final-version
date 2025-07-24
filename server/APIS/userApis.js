const exp = require('express')//this line tells Node.js to import the express Modules (first step) and exp holds all the express functionality
const userSchema = require('../models/usermodel');//this line imports schema 
const contributedSchema = require('../models/userContributemodel')//this one brings the schema of the contributed data
const userApp=exp.Router()//this one links it with server file and helps in using get,post and other operations 
const expressasynchandler = require('express-async-handler')

//creating new user 
userApp.post("/user",expressasynchandler(async(req,res)=>{
    let newuser = req.body;
    let user = new userSchema(newuser);
    let newuserdoc = await user.save();//this line saves in mongoose database
    res.status(201).send({message:newuserdoc.email,payload:newuserdoc})
}))
//user contributing 
userApp.post("/user-contribute",expressasynchandler(async(req,res)=>{
    // logic:-
    // first we will get the contributed info from the request 
    // we will save it in mongoose db
    let contributedData = req.data;
    let data = new contributedSchema(contributedData);
    let contributedDoc = await data.save();
    res.status(201).send({message:contributedDoc.tag,payload:contributedDoc})

}))
//exporting 
module.exports = userApp //this one helps in exporting