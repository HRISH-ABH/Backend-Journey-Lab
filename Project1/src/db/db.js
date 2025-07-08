// here will write the logic to connect to the DB

const mongoose=require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected To Database!!");
        
    });
    // /->ke baad DB ka naam that you want to create
}

module.exports=connectToDb;