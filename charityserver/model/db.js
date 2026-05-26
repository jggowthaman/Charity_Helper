const mongoose = require("mongoose");

const mydb = new mongoose.Schema({
    uname:{
        type:String,
        required:true,
        min:3,
        max:50
    },
    uemail:{
        type:String,
        required:true,
        min:3,
        max:50
    },
    umobile:{
        type:BigInt,
        required:"ture",
        min:3,
        max:50
    },
    umessage:{
        type:String,
        required:true,
        min:3,
        max:50
    }
},{
    collection:"contact",
    
});

module.exports= mongoose.model("contact",mydb,"contact");