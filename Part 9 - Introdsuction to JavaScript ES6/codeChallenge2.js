/* Function to print the switched value of the variables a and b */

function test() {

    var a = "3";
    var b = "8";
        
    /***********Do not change the code above 👆*******/
    //Write your code on lines 7 - 9:
    var aux = a;
    a = b;
    b = aux;
    
    /***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);

}