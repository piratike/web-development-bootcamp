/* Code for Express server used as a calculator */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {

    res.sendFile(__dirname + '/index.html');

});

app.post('/', function(req, res) {

    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send('The result of the sum is ' + result);

});

app.get('/bmicalculator', function(req, res) {

    res.sendFile(__dirname + '/bmiCalculator.html');

});

app.post('/bmicalculator', function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height)
    var result = weight / (height * height);
    res.send('Your BMI is ' + result.toFixed(2));

});

app.listen(3000);
