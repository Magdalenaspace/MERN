//var:  can also be accessed outside of the function block in which they are defined
//with var we can redeclare the value
//let: a block-scoped variable declaration, exists only within the block in which it is declared, including any nested blocks. 
//with let we reassign rhe value
//const: a variable cannot be reassigned once it has been defined. const is also block-scoped, like let.

//scopes
//global: main scope accessible and visitable in other scopes
//function scope: vars are accessible within the function, nested function will have access2
//block scope: -> {}

let personOne = "A"
var personeTwo = "C"

if(personOne === "A"){
    let personOne = "B"
    console.log("block scope ", personOne, personeTwo)
}
console.log(personOne)
console.log(personeTwo)


const myObj = { name: 'John', //anything can be stored within obj
                age: 30, 
                isAdmin: false };
// personOne = [] -> cant do it will never change the core dt but we can manipulate
myObj.age = 40
console.log(myObj)
//DESTRUCTURING easy way to pull our=t values
// const accountStatus = myObj.isAdmin
// console.log(accountStatus)

//instead: DESTRUCTURING obj let _ {key names} = obj create -> pull out from object
let {name, isAdmin} = myObj
let {name: jhone,...restOfTheObject} = myObj //akway 3.s
// console.log(name, isAdmin)
console.log(jhone, restOfTheObject) // John { age: 40, isAdmin: false }

const updateMyObj = {...myObj, age: 60}
console.log(updateMyObj) //{ name: 'John', age: 60, isAdmin: false }


//witH ArrAys
let a = [1,2,3,4,5]
// let [,a1,,,a2] = a
// console.log(a1, a2)
let [n1,n2, ...everyhingElse] = a
console.log(everyhingElse) //[ 3, 4, 5 ]