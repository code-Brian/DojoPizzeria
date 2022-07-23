console.log("Pizzeria! Pizzeria! Give me the Form-u-lia!!");
printConsolePizza(3);

function printConsolePizza(num) {
    for (let i = 0; i < num; i++) {
    console.log("🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕");
    }
}

// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//     let pizza ={};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     return pizza
// }
// let example1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log("\nMaking you a pizza with:\n");
// console.log(example1);
// printConsolePizza(3);

// let example2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// console.log("\nMaking you a pizza with:\n");
// console.log(example2);
// printConsolePizza(3);

// let example3 = pizzaOven("thin crust", "marinara", ["fresh pulled mozzarella", "grated parmesan-romano blend"], ["fresh cut campari tomatoes", "fresh julienned basil"]);
// console.log("\nMaking you a pizza with:\n");
// console.log(example3);
// printConsolePizza(3);

// let example4 = pizzaOven("thick crust", "barbeque sauce", ["shredded pepperjack", "mozzarella"], ["pulled grilled chicken", "julienned pepperoncini", "crispy bacon", "canadian bacon"]);
// console.log("\nMaking you a pizza with:\n");
// console.log(example4);
// printConsolePizza(4);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    
}

let crustChoices = [
    "hand tossed", 
    "thin", 
    "gluten-free", 
    "cripsy lavosh", 
    "thick cauliflower crust",
    "deep dish",
    "whole wheat",
    "herbed hand tossed"
];
let sauceChoices = [
    "marinara", 
    "alfredo", 
    "fire roasted garlic and olive oil", 
    "vodka sauce", 
    "barbeque sauce", 
    "ranch", 
    "spicy marinara", 
    "light alfredo sauce", 
    "light marinara sauce"
];
let cheeseChoices = [
    "shredded mozzarella", 
    "aged white-cheddar", 
    "goat cheese", 
    "cream cheese", 
    "smoked gouda", 
    "sharp yellow cheddar", 
    "shredded pepperjack", 
    "feta", 
    "fresh-pulled mozzarella",
    "grated parmesan-romano blend"
];
let toppingChoices = [
    "pepperoni", 
    "sausage", 
    "veggies", 
    "pineapple", 
    "julienned pepperoni", 
    "mushrooms", 
    "black olives", 
    "kalamata olives", 
    "thin-sliced campari tomatoes", 
    "mac and cheese"
];

function randomPizzaOven(crust, sauce, cheeses, toppings) {
    let randomPizza = {};
    randomPizza.crust = crustChoices[getRandomInt(crustChoices.length - 1)];
    randomPizza.sauce = sauceChoices[getRandomInt(sauceChoices.length - 1)];
    randomPizza.cheese = []
        let cheesesRange = getRandomRange(2, 4);
        for (let i=0; i<cheesesRange; i++) {
            randomPizza.cheese.push(cheeseChoices[getRandomInt(cheeseChoices.length)]);
        }
    randomPizza.toppings = []
        let toppingsRange = getRandomRange(1, 5);
    for (let i=0; i<toppingsRange; i++) {
        randomPizza.toppings.push(toppingChoices[getRandomInt(toppingChoices.length)]);
    }
    return randomPizza;
}

let randomPizza = randomPizzaOven(crustChoices,sauceChoices, cheeseChoices, toppingChoices);

console.log(randomPizza);



// let testRange = getRandomRange(1,1);

// let testArr = [];

// console.log(testRange);

// for (let i=0; i<testRange; i++) {
//     testArr.push(crustChoices[getRandomInt(crustChoices.length)]);
// }

// console.log(testArr);

// test test test





