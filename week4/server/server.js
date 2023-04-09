const express = require('express'); //import
const { faker } = require('@faker-js/faker');
const app = express(); // define '
const port = 8000;

// we can create a function to return a random / fake "Product"
const createUser = () => {
    return {
    id: faker.datatype.uuid(),
    name: faker.name.findName(), 
    gender: faker.name.gender(), 
    mood: faker.internet.emoji(),
}};

const createCompany = () => ({
    id: faker.datatype.uuid(),
    name: faker.company.name(),
    products: faker.commerce.product()
})

// id we get from urls
// prams we get from body as prams for url -> form data

app.get("/api/user/new", (request, response) => {
    const newUser = createUser();
    response.json(newUser);});

app.get("/api/company/new", (request, response) => {
    const newCompany = createCompany();
    response.json(newCompany);});

app.get('/api/users/company', (request, response) => {
    // const newUser = createUser();
    // const newCompany = createCompany();
    const userCompany = {
    user : createUser(), //newUser, 
    company: createCompany() //newCompany
    }
    response.json(userCompany);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );