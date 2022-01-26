/* First Express Server */

const express = require('express');
const app = express();

app.get('/', function(request, response) {

    response.send('<h1>Hello World!</h1>');

});

app.get('/about', function(request, response) {

    response.send('Hola me llamo Kevin y me gusta la electrónica.');

});

app.get('/contact', function(request, response) {

    response.send('Contact me at kevin@gmail.com');

});

app.listen(3000, function() {

    console.log('Server started');

});
