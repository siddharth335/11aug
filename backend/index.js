const express =require("express");
const mongoose=require("mongoose");
const app = express();
const todo= require("C:\Users\MAHE\Documents\todolist\backend\routes/todo");
const cors= require("cors");
require("dotenv").config();

app.use("/api/todo",todo);
app.use(express.json({extended:false}));
app.use(cors({origin:true,credentials:true}));
console.log('MONGO_URI:',process.env.MONGO_URI);

async function startServer(){
 try{
     await mongoose.connect(process.env.MONGO_URI);
        console.log('Connect to MongoDb');
  
  app.listen(3000,()=>
 {
    console.log('server is runnig on port 3000');
 });

 

}catch(error){
    console.log("Error connecting to MongoDb",error)
 }
 }

 startServer();
 

