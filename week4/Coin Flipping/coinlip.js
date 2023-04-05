///simulates flipping a coin...
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

//use it in a function that sees how long it will take to 
//have a coin land on "heads" five times in a row
// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads"){
//             headsCount++;
//         } else {
//         headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

// Your mission is to rewrite the above function using Promises. 
// Make sure your fiveHeads function will call the resolve function when the coin has flipped "heads" five times in a row.
function fiveHeads() {
    return new Promise((resolve) => {
        let headsCount = 0;
        let attempts = 0;

        const flipCoin = () => {
            attempts++;
            let result = tossCoin()
            console.log(`${result} was flipped`);
            if(result === 'heads') {
                headsCount++
            } else {
                headsCount = 0;
            }  if (headsCount < 5) {
                flipCoin();
            } else {
                resolve(`took ${attempts} tries for 5 'heads'`);
            }
        };
        flipCoin()
    });
}

fiveHeads().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


