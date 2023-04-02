function addNumbers(num1, num2) {
    return num1 + num2;
}
let multResult = addNumbers(2,4) //stores,catches the value
//can be called by passing two numbers as arguments
let sum = addNumbers(3, 4);
console.log(sum); // Output: 7

// functions can also have default parameter values, like this:
function greet(name = "World") {
    console.log(`Hello, ${name}!`);
}
  greet(); // prints "Hello, World!"
  greet("Alice"); // prints "Hello, Alice!"

// If you need to use the value that a function computes, you should return it.
// If you just need to see the value for debugging purposes or to show the user, you can log it to the console.

// Arrow Functions //arrow notation, which is a shorthand way of writing functions
function addNumbers(num1, num2) {
    return num1 + num2;
} 
// console.log(addNumbers(3,3))

//__________OR
const add = function(a, b) {
    return a + b;
}
function multiply(a, b, operation) {
    return operation(a, b);
}
//Functions can also be used as arguments to other functions, like this, stored 
const result = multiply(3, 4, add); 
// console.log(result)