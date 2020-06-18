// use database

const mongoose=require('mongoose');


const contactSchema=new mongoose.Schema({
    work:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },


    ttype:{
        type:String
    }
});

const Contact=mongoose.model('contact',contactSchema);
module.exports=Contact;