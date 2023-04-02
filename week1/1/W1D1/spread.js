const animalss = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimald, secondAnimall] = animalss;
console.log(secondAnimall)
// __________________________________________________________________

// const [...otherAnimals] = animals;
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal,secondAnimal, ...otherAnimals] = animals;
//..capture the rest of a data set
console.log(otherAnimals)
// __________________________________________________________________

const person = {
        firstName: 'Bob',
        lastName: 'Marley',
        email: 'bob@marley.com',
        password: 'sekureP@ssw0rd9',
        username: 'barley',
        addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
        ],
        createdAt: 1543945177623
    };
const { firstName, lastName, ...attributes } = person;
const personCopy = { ...person };
personCopy === person
// => false
personCopy.addresses === person.addresses
// => true
personCopy.addresses = {
    address: '7920 Sunset blvd.',
    city: 'La',
    zipcode: '5DU',
}
console.log(personCopy.addresses)
console.log(person.addresses)