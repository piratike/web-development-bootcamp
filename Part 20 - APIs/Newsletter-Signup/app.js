const bodyParser = require('body-parser');
const express = require('express');
const https = require('https');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {

    res.sendFile(__dirname + '/signup.html');

});

app.post('/', function(req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const listId = '8ba886624f';
    const url = 'https://us14.api.mailchimp.com/3.0/lists/' + listId;
    const options = {
        method: 'POST',
        auth: 'piratike:4816761cbf67c3decdbd7683c18bb328-us14'
    }

    const request = https.request(url, options, function(response) {

        if(response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html')
        }

        if(response.statusCode !== 200) {
            res.sendFile(__dirname + '/failure.html')
        }

        response.on('data', function(data) {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();

});

app.post('/failure', function(req, res) {

    res.redirect('/');

});

app.listen(3000, function() {

    console.log('Server is running!');

});

// API Key: 4816761cbf67c3decdbd7683c18bb328-us14
// List ID: 8ba886624f
