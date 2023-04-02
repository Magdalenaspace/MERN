const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// surrounding the implicit return with parentheses solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });
const square = n => n * n;
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};
    class Deck {
            constructor() {
                const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
                const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack']
             //inherit context from the parent scope
            //instead of for (const suit of suits) or for (const face of faces) 

                    // Loop through each suit and face to create a deck of cards
                suits.forEach(suit => {
                faces.forEach(face => {
                deck.push(this.createCard(suit, face));
                });
            });

            // Set the deck property to the deck of cards that was just created
            this.deck = deck;
            }

            // Define a function that creates a card with a given suit and face
            createCard(suit, face) {
            return face + " of " + suit;
            }
        }
//Arrow functions do not have their own this keyword. 
//Instead, they inherit the this value from the surrounding context.
//Arrow functions cannot be used as constructors and do not have a prototype property.
//Always magnanimous.