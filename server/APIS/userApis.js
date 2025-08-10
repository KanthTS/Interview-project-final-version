const exp = require('express')//this line tells Node.js to import the express Modules (first step) and exp holds all the express functionality
const userSchema = require('../models/usermodel');//this line imports schema 
const contributedSchema = require('../models/userContributemodel')//this one brings the schema of the contributed data
const contributedDataSchema = require('../models/contributedDatamodel');
const userApp=exp.Router()//this one links it with server file and helps in using get,post and other operations 
const expressasynchandler = require('express-async-handler')
const contactModel=require('../models/ContactData')
//creating new user 
userApp.post("/user",expressasynchandler(async(req,res)=>{
    let newuser = req.body;
    let user = new userSchema(newuser);
    let newuserdoc = await user.save();//this line saves in mongoose database
    res.status(201).send({message:newuserdoc,payload:newuserdoc})
}))
//user contributing 
userApp.post("/user-contribute",expressasynchandler(async(req,res)=>{
    // logic:-
    // first we will get the contributed info from the request 
    // we will save it in mongoose db
    let contributedData = req.body;
    console.log(contributedData);
    let data = new contributedSchema(contributedData);
    let contributedDoc = await data.save();
   
    //now we will add it in tagged schema
        const {tag,question,role}=contributedData;

         

        //checking and coutning the no of tagged questions 
        const tagged = req.body;
        const tagInDb = await contributedDataSchema.findOne({"tag.tag":tagged.tag})
        const roleInDb = await contributedDataSchema.findOne({role:tagged.role})
        //checking if the tag already exists 
        if(tagInDb&&roleInDb){
            await contributedDataSchema.findOneAndUpdate(
            {role:role,"tag.tag":tag},
            {$push:{"tag.$.questions":{question}},$inc:{count:1,"tag.$.count":1}},
            {upsert:true,new:true},
            
        );
        }else{
            await contributedDataSchema.findOneAndUpdate(
            {role:role},
            {$push:{tag:{tag:tag,questions:[{question}],count:1}},$inc:{count:1}},

            {upsert:true,new:true}
        );
        }
        
       
         res.status(201).send({message:`question has been tagged and stroed under ${tag}`,payload:contributedDoc})
}))

userApp.post('/contact',expressasynchandler(async(req,res)=>{
    let r=req.body;
    let c=new contactModel(r);
    let j=await c.save();
    res.status(201).send({message:"contact",payload:j})
}))

//exporting 
module.exports = userApp //this one helps in exporting