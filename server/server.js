const exp=require('express');
const {default:mongoose}=require('mongoose')
const userApp = require('../server/APIS/userApis')
const app=exp();
//process.env
require('dotenv').config()
const port = process.env.PORT || 4000;
// giving database connection
mongoose.connect(process.env.DBURL)//it a returns promise, we catch the promise with then and catch
.then(()=>{app.listen(port,()=>console.log(`server is listening on port ${port}..`))
        console.log("db connection is successful")
})
.catch(err=>{console.log("error in db connection ",err)})


//adding middle ware 
app.use(exp.json())
app.use('/user-api',userApp)