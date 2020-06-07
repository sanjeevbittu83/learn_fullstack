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

app.get('/', function (req, res) {
    return res.render(
        'home', {
            title: "contact list",
            contact_list:contactlist
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
 
contactlist.push(req.body);
 return res.redirect('/');
}); 
 app.get('/delete-contact',function(req,res){
     let phone=req.query.phone;
 let contactIndex=contactlist.findIndex(contact=>contact.phone==phone);
 if(contactIndex!=-1){
     contactlist.splice(contactIndex,1);
 }
 return res.redirect('back');
 });

app.listen(port, function (err) {
    if (err) {
        console.log('error is running', err);
    }
    console.log('its running on ', port);
});