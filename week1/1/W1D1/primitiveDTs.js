// Review of Data Types

// = assigning 
// == (5 == "5"); // true
// === (5 === "5"); // false, "5" === "5" // true

// Numbers
let score = 4;
// One numeric data type
// floats, doubles
let same  = 4.4;
let same2 = 4.4;
// Booleans
let active = true; 
// Strings
let name = "Name";
// null
let absence = null;
// undefined
let notAssigned;
//Symbols: ECMAScript 6 

//Arrays
//Ordered collection of values, which can be of any data type.
let myArray = [1,2,3,4]
let hisArray = [1, 'two', true];
console.log(hisArray[2]) //index based 0..,
// push, pop, shift(removes, returns),  unshift(adds on the beginning,and returns)
//slice(содержащий часть исходного array), splice(removing or replacing)
//concat()->  myArray.concat(hisArray)
//indexOf(), includes(bool) 
//forEach() -> myArray.forEach((element) => console.log(element));
//map()->  iterate over an array and transform each element by applying a function to it.

//Objects
//Unordered collection of key-value pairs, where the keys are strings and the values can be of any data type.
const myObj = { name: 'John', //anything can be stored within obj
                age: 30, 
                isAdmin: false };
// console.log(myObj.name) . notation go in 
// console.log(myObj["name"])
// Object.keys(), Object.values(), Object.entries()
//Object.freeze(), Object.assign()
//+


