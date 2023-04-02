
// Predict the Output for Problem 1
const lastTest1 = {
    key1: 'value',
    secondKey1: [1, 5, 1, 8, 3, 3]
}
const { key1} = lastTest1; //"value"
const { secondKey1 } = lastTest1; // [1, 5, 1, 8, 3, 3]
const [ ,willThisWork1] = secondKey1; //yes  
//Predict the output
console.log(key1);
console.log(secondKey1);
console.log(secondKey1[0]); //1
console.log(willThisWork1); // it uses 1, so the second value will be outputted
// -----------------------------------------------------------------------------------
//Predict the Output for Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // destructuring assignment to extract the name
//Predict the output
// console.log(name); -> name is not a defined variable. 
console.log(employee.name)
console.log(otherName); //Elon
// -----------------------------------------------------------------------------------
// Predict the Output for Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //password
console.log(hashedPassword); //no password property in the person object: undefined
//----------------------------------------------------------------------------------- 
// Predict the Output for Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first == second); //false 
console.log(first == third); //true
//----------------------------------------------------------------------------------- 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // == accessing the properties of an object,
// rather than having to access them using dot notation or square bracket notation.
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey; //5
//Predict the output
console.log(key); //key
console.log(secondKey); // secondKey
console.log(secondKey[0]); //1
console.log(willThisWork); //5