const express=require('express');
const port=8001;
const app=express();


app.listen(port,function(err){
    if(err){
        console.log('error is running',err);
    }
        console.log('its running on ',port);
});