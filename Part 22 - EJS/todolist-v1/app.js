const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    res.render('list', {kindOfDay: daysOfWeek[currentDay]});

});

app.listen(3000, function() {

    console.log('Server is running!');

});
