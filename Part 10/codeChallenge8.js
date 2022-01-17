/* Function that returns the Fibonacci sequence as an array of N given elements */

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    //Write your code here:

    var arrayToReturn = [0];

    if(n === 1) {
        return arrayToReturn;
    }

    else if(n === 2) {
        arrayToReturn.push(1);
        return arrayToReturn;
    }

    else {

        arrayToReturn.push(1);

        for(var i = 1 ; i < n - 1 ; i++) {
            var newItem = arrayToReturn[i - 1] + arrayToReturn[i];
            arrayToReturn.push(newItem);
        }

        return arrayToReturn;

    }

    //Return an array of fibonacci numbers starting from 0.
    //Do NOT change any of the code below 👇
}
