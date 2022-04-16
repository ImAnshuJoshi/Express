const express=require('express');

const path =require('path');
const {logger,secondlogger}=require("./middleware"); 
const app=express();

app.use(logger);
app.use(secondlogger);
// app.use(express.static("public"));    //static file can be accessed by localhost:8000/capture.jpg
// app.use('/static',express.static('public'));    //static file can be accessed by localhost:8000/static/capture.jpg
// console.log(path.join(__dirname));
// app.use("/static",express.static(path.join(__dirname,"public")));  //using full path

app.get("/",(req,res)=>{
    console.log(req.url);
    res.send("Hello from / route");
})

app.get("/login",(req,res)=>{
    console.log(req.url);
    res.send("Hello from /login route");
})
app.listen(8000,()=>{
    console.log("Sever is being run on port 8000");
})