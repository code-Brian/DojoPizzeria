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


let crustChoices = ["hand tossed", "thin", "gluten-free", "cripsy lavosh", "thick cauliflower crust"];
let sauceChoices = ["marinara", "alfredo", "fire roasted garlic and olive oil", "vodka sauce", 
    "barbeque sauce", "ranch", "spicy marinara", 
    "light alfredo sauce", "light marinara sauce"
];
let cheeseChoices = [
    "shredded mozzarella", "aged white-cheddar", "goat cheese", 
    "cream cheese", "smoked gouda", "sharp yellow cheddar", "shredded pepperjack", 
    "feta", "fresh-pulled mozzarella","grated parmesan-romano blend"
];
let toppingChoices = ["pepperoni", "sausage", "veggies", "pineapple", "julienned pepperoni", "mushrooms", "black olives", "kalamata olives", "thin-sliced campari tomatoes", "mac and cheese"];

function randomPizzaOven(crust, sauce, cheese, toppings) {
    let randomPizza = {};
    randomPizza.crust = crust;
    randomPizza.sauce = sauce;
    randomPizza.cheese = cheese;
    randomPizza.toppings = toppings;
    return randomPizza;
}

let randomCrust = crustChoices[getRandomInt(crustChoices.length)];
let randomSauce = sauceChoices[getRandomInt(sauceChoices.length)];
let randomCheese = cheeseChoices[getRandomInt(cheeseChoices.length)];
let randomTopping = toppingChoices[getRandomInt(toppingChoices.length)];

let randomPizza = randomPizzaOven(randomCrust, randomSauce, randomCheese, randomTopping);

console.log(randomPizza);