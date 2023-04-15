const mongoose = require("mongoose");

const db = "products2";

mongoose.connect(`mongodb://localhost:27017/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log(`Connected to ${db} database!`))
    .catch((err)=>console.log(err));
