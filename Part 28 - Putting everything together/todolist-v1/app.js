const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const date = require(__dirname + '/date.js');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/todolistdb', {useNewUrlParser: true});

const itemSchema = {
    name: String
};

const listSchema = {
    name: String,
    items: [itemSchema]
};

const Item = mongoose.model('Item', itemSchema);
const List = mongoose.model('List', listSchema);

app.get('/', function(req, res) {

    Item.find({}, function(err, foundItems) {
        res.render('list', {
            listTitle: 'Today',
            itemList: foundItems
        });
    });

});

app.get('/:customListName', function(req, res) {

    List.findOne({name: _.capitalize(req.params.customListName)}, function(err, foundList) {

        if(!err) {

            if(!foundList) {

                const list = new List({
                    name: _.capitalize(req.params.customListName),
                    items: []
                });

                list.save();
                res.redirect('/' + _.capitalize(req.params.customListName));

            } else {

                res.render('list', {
                    listTitle: foundList.name,
                    itemList: foundList.items
                });

            }

        }

    });

});

app.post('/', function(req, res) {

    const item = new Item({
        name: req.body.newItem
    });

    if(req.body.list == 'Today') {

        item.save();
        res.redirect('/');

    } else {

        List.findOne({name: req.body.list}, function(err, foundList) {

            foundList.items.push(item);
            foundList.save();
            res.redirect('/' + req.body.list);

        })

    }

});

app.post('/delete', function(req, res) {

    if(req.body.list === 'Today') {

        Item.remove({_id: req.body.checkbox}, function(err) {

            if(!err) {
                res.redirect('/');
            }

        });

    } else {

        List.findOneAndUpdate({name: req.body.list}, {$pull: {items: {_id: req.body.checkbox}}}, function(err) {

                if(!err) {
                    res.redirect('/' + req.body.list);
                }

        });

    }

});

app.listen(3000, function() {

    console.log('Server is running!');

});
