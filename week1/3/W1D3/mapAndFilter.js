//map()
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item + " yum" }</li>` );
const oFoods = groceries.filter( item => item.includes("o") );
console.log()
console.log(oFoods)
console.log(groceryList)

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 ); //2**3 = 2 * 2 * 2 = 8 **(raised)
console.log(cubes)

//filter()
const valuess = [1, 2, 3, 4, 5];
const evens = valuess.filter( val => val % 2 === 0 );
const oddCubes = valuess.filter( val => val % 2 !== 0 ).map( val => val**3 );
console.log(oddCubes)

//.reduce() => educes an array to a single value. It iterates over each element of an array and accumulates the result into a single value.
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);

console.log(sum); // Output: 15

//irritation
const name = "Maggie";
const charCount = name.split('').reduce((count, char) => {
    if (char === 'C' || char === 'M') {
        return count + 1;
    } else {
        return count;
    }
    }, 0);
//     return char === 'C' || char === 'M' ? count + 1 : count;
// }, 0); //0 serves as the starting point of the reduction operation
console.log(charCount); // Output: 2

const namem = 'Hello, world!';

const charCounts = namem
  .toLowerCase() // convert all characters to lowercase
  .split('') // split the string into an array of characters
  .filter(char => /[a-z]/.test(char)) // filter out any non-alphabetic characters
    .reduce((count, char) => {
        count[char] = (count[char] || 0) + 1; // increment the count for this character
        return count;
    }, {});

console.log(charCounts);
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }