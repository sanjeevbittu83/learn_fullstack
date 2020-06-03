const express = require('express');
const path = require('path');
const port = 8001;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, 'views'));

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

app.listen(port, function (err) {
    if (err) {
        console.log('error is running', err);
    }
    console.log('its running on ', port);
});