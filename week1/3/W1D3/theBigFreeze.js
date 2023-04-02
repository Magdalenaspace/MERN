//const : if the variable is an array or object we're still able to modify that object 
const arr = [1,2,3,4];
arr.push(300); //pop

const arrr = Object.freeze([1,2,3,4]);
// s // we're no longer allowed to change `arr`

//Spread, Concat, and Slice
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
//spread...
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
//concat() -> returns a new array 
const needThymes = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
// console.log(groceryList)

//slice() ->  extract a section of an array and returns a new array containing the selected elements
const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": false} ];
// console.log(gotTheThyme)
// creates a new array that is a copy of the first 5 elements of needThyme, 
// but with the 6th element having its haveIngredient property set to true.
// It does not modify the original needThyme array.

const notCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3)];
// console.log(notCelery) //because index 2 is NOT included, 3 to the end.

//sorted
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort();
// console.log(sortedItems)

const numbers = [10, 5, 3, 12, 22, 8];
// console.log(numbers.sort()); // ): Sort works by converting the values into strings before sorting 


//Sorting Objects with callback function.
const groceryLists = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
const sortedGroceries = [...groceryLists].sort( (a, b) => (a.item > b.item) ? 1 : -1 );
console.log(sortedGroceries)