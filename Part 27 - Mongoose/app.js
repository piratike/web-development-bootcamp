const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data, no name given!']
    },
    rating: {
        type: Number, 
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid as fruit.'
});

// fruit.save();

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', peopleSchema);

const pineapple = new Fruit({
    name: 'Pineapple',
    score: 9,
    review: 'Great fruit.'
});

// pineapple.save();

const person = new Person({
    name: 'Amy',
    age: 12,
    favouriteFruit: pineapple
});

person.save();

// const kiwi = new Fruit({
//     name: 'Kiwi',
//     rating: 10,
//     review: 'The best fruit.'
// });

// const orange = new Fruit({
//     name: 'Orange',
//     rating: 4,
//     review: 'Too sour for me.'
// });

// const banana = new Fruit({
//     name: 'Banana',
//     rating: 3,
//     review: 'Weird texture.'
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('All saved!');
//     }
// });

// Fruit.updateOne({_id: '620178f5a7c2698912b9f602'}, {name: 'Peach'}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Updated!');
//     }
// });

// Fruit.deleteOne({name: 'Peach'}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Deleted!');
//     }
// });

// Person.deleteMany({name: 'Jhon'}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Deleted!');
//     }
// });

// Fruit.find(function(err, fruits) {
//     if(err) {
//         console.log(err);
//     } else {
//         // console.log(fruits);
//         fruits.forEach(function(fruit) {
//             console.log(fruit);
//         });
//     }
// });
