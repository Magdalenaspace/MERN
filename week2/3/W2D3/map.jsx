import React from 'react';
    
const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>
        {
            groceryList.map( (item, index) => 
                <li key={ index }>{ item }</li>
            )
        }
        </ul>
    ); 
}
    
export default Groceries;

// unordered list. Inside of the <ul> we use map to transform the array of 
// groceries into an array of <li>, and for each element(item),
//  we used its index (index) as the key attribute's value to silence a React warning.

// The function we supply can optionally take in two additional arguments in addition to the 
// current element value: the current index, and a reference to the array itself.
//  Thus, the entire signature (set of parameters) of a map callback could look like the 
//  following:

// function(currentVal, currentIndex, thisArray) {
    // transform currentVal here
// }