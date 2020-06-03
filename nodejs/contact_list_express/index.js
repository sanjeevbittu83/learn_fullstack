const express = require('express');
const path = require('path');
const port = 8001;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, 'views'));
app.use(express.urlencoded());

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
console.log('hello');
console.log(req.body.name);
console.log(req.body.phone);
contactlist.push(req.body);
 return res.redirect('/');
}); 

app.listen(port, function (err) {
    if (err) {
        console.log('error is running', err);
    }
    console.log('its running on ', port);
});