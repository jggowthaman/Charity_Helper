const express = require('express');
const {default:mongoose} = require('mongoose');
const cors = require("cors");

const mydatabase = require("./model/db");
const PORT = 5000;
const mydb = require('./model/db');

//front end setup
const app = express();
app.use(express.json());
app.use(cors());

//backend setup
app.get("/",(req,res)=>{
    res.send("welcome to charity server");
    res.end();
});

app.post("/contactdata",async(req,res)=>{
    const {uname,uemail,umobile,umessage} = req.body;
    const newcontactdata = {uname,uemail,umobile,umessage};
    console.log(newcontactdata);
    try{
        if(!uname || !uemail || !umobile || !umessage){
            console.error("error is saving contact data , client err 400");
            return res.status(400).json({Error:"error is saving contact data to db client err 400"});
        }
        else{
            const contactdata = new mydb(newcontactdata);
            await contactdata.save();
            console.log("contact data saved succesfully in db");
            return res.status(200).json({Message:"contact data saved in db"});
        };
    }
    catch(err){
        console.error("Error is saving contact data server err 500",err);
        return res.status(500).json({Error:"error is saving in contact data server error 500"});
    };
});

//db setup
mongoose.connect("mongodb://localhost:27017/charityhelper")
.then((res)=>{
    console.log("database connected successfully");
})
.catch((err)=>{
    console.error("database will not connect",err);
});

//deployment setup

app.listen(PORT,(e)=>{
    if(e){
        console.error("server will not start",e);
    }
    else{
        console.log(`server is running on port ${PORT}`);
    }
});