var numbers = [3, 56, 2, 48, 5];
var newNumbers = [];

//Map -Create a new array by doing something with each item in an array.

newNumbers = numbers.map(function(currentNumber) {

    return currentNumber * 2;

});

console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

newNumbers = numbers.filter(function(currentNumber) {

    return currentNumber % 2 === 0;

});

console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber = numbers.reduce(function(accumulator, currentNumber) {

    return accumulator + currentNumber;

});

console.log(newNumber);

//Find - find the first item that matches from an array.

var elementSearched = numbers.find(function(currentNumber) {

    return currentNumber > 10;

});

console.log(elementSearched);

//FindIndex - find the index of the first item that matches.

var indexSearched = numbers.findIndex(function(currentNumber) {

    return currentNumber > 10;

});

console.log(indexSearched);
