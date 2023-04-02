//Basic if statement
let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance) {
        return "Need to work harder."
    } else {
        return "Affordable.";
    }
}

//Ternary statement

let canBuy = (price,savingAccountB) => {
    return price > savingAccountB ? "Merde! $${price - savingAccountB}" : "Affordable.";
}

//when nesting ternary statements, as they can tend to become unwieldy and unreadable
const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false