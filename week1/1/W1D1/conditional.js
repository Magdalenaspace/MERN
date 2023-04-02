// If statement: 
let myDog = { name: "Faust", friendly: true }
let myCat = { name: "Lunatic", friendly: false }
if(myDog.friendly){
    // console.log("I want to meet " + myDog.name); 
}
// If...else statement:
if(myCat.friendly){
    console.log("I want to meet " + myDog.name); 
} else {
    // console.log(myCat.name + " seems scary"); 
}
// If...else if statement: 
if(!myCat.friendly) {
    // console.log("I want to meet " + myDog.name); 
}else if(myCat.friendly) {
    // console.log("I want to meet " + myCat.name); 
} else {
    // console.log("Nevermind")
}
// Ternary operator:
// condition ? true block : false block
myCat.friendly ? console.log(myCat.name) : (!myCat.friendly ? console.log(myDog.name) : console.log("Nevermind"));

//switch statements

switch(true) {
        case myCat.friendly:
        console.log("I want to meet " + myCat.name);
        break;
        case !myCat.friendly:
        console.log("I want to meet " + myDog.name);
        break;
        default:
        console.log("Nevermind");
    }

    const isHuman = true

    if (isHuman){
        console.log("human")
    } else {
        console.log("alien")
    }