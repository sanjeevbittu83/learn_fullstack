const express = require('express');
const path = require('path');
const port = 8001;
const db=require('./config/mongoose');
const Contact=require('./models/contact');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, 'views'));
app.use(express.urlencoded());

app.use(express.static('assets'));
var contactlist=[
    {
        name:"sanjeev",
        phone:"11111"
    },
    {
        name:"bittu",
        phone:"12121"
    }
]
//FETCHING THE CONTACT LIST;
app.get('/', function (req, res) {
    Contact.find({},function(err,contacts){
if(err){
    console.log('error in fetching contacts in database');
    return;
}
return res.render(
    'home', {
        title: "contact list",
        contact_list:contacts
    });
    // return res.render(
    //     'home', {
    //         title: "contact list",
    //         contact_list:contactlist
        }
    );
});

app.get('/practice', function (req, res) {
    return res.render(
        'practice', {
            title: "practice"
        }
    );
});

app.post('/create-contact',function(req,res){
//   contactlist.push({
//       name:req.body.name,
//       phone:req.body.phone
//   });
 


// contactlist.push(req.body);
//  return res.redirect('/');

//insert into database
Contact.create({
    name:req.body.name,
    phone:req.body.phone
},function(err,newContact){
    if(err){
        console.log('error to creating contact list');
        return;
    }
    console.log('****',newContact);
    return res.redirect('back');
});
}); 
//DELETE CONTACT
 app.get('/delete-contact',function(req,res){
     //GET THE ID FROM QUERY IN THE URL;
     let id=req.query.id;
     //FIND THE CONTACT IN DATABASE USIND ID AND DELETE
Contact.findByIdAndDelete(id,function(err){
if(err){
    console.log('error to delete contact');
    return;
}


return res.redirect('back');

}); 

 });

app.listen(port, function (err) {
    if (err) {
        console.log('error is running', err);
    }
    console.log('its running on ', port);
});