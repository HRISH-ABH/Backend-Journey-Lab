const express=require('express');
const connectToDb=require('./src/db/db')
const dotenv=require('dotenv');
dotenv.config();
// server will connect to DB in this file only
connectToDb(); //database connection

const app=express();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Hello Welcome to Notes App")
})


app.post('/notes',(req,res)=>{
    const {title,desc}=req.body;
    console.log(title,desc);

    res.json({
        message:"Data recieved",
        title:title,
        desc:desc
    })
    
})
app.listen(3000,()=>{
    console.log("Server is running on 3000");
    
    
})