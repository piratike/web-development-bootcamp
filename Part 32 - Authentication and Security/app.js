//jshint esversion:6
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyPaser.urlencoded({
    extended: true
}));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});
// mongoose.set('useCreateIndex', true); DEPRECATED

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.get('/', function(req, res) {

    return res.render('home');

});

app.get('/login', function(req, res) {

    return res.render('login');

});

app.get('/register', function(req, res) {

    return res.render('register');

});

app.get('/secrets', function(req, res) {

    if(req.isAuthenticated())
        res.render('secrets');

    else
        res.redirect('/login');

});

app.post('/register', function(req, res) {

    User.register({username: req.body.username}, req.body.password, function(err, user) {

        if(err) {

            console.log(err);
            res.redirect('/register');

        } else {

            passport.authenticate('local')(req, res, function() {

                res.redirect('/secrets');

            });

        }

    });

});

app.post('/login', function(req, res) {

    const user = new User({
        username: req.body.usernam,
        password: req.body.password
    });

    req.login(user, function(err) {

        if(err) {

            console.log(err);

        } else {

            passport.authenticate('local')(req, res, function() {

                res.redirect('/secrets');

            });

        }

    });

});

app.get('/logout', function(req, res) {

    req.logout();
    res.redirect('/');

});

app.listen(3000);
