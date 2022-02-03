const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var items = [];
var workItems = [];

app.get('/', function(req, res) {

    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    var day = today.toLocaleDateString('en-US', options);

    res.render('list', {listTitle: day, itemList: items});

});

app.post('/', function(req, res) {

    console.log(req.body.list);

    if(req.body.list === 'Work') {

        workItems.push(req.body.newItem);
        res.redirect('/work');

    } else {

        items.push(req.body.newItem);
        res.redirect('/');

    }

});

app.get('/work', function(req, res) {

    res.render('list', {listTitle: 'Work', itemList: workItems})

});

app.listen(3000, function() {

    console.log('Server is running!');

});
