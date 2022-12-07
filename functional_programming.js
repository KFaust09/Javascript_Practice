//functional programming: A simple currency conversion calculator

//Data existing outside of the function
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;


//function and return statement
function convertCurrency(amount, rate) {
    return amount * rate;
}

//Argument
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

//recursive functions to avoid infite loops

function example () {
    console.log('line one');
    console.log('line two');
    console.log('line three');
}
example()

//countdown with loops
let counter = 3;
function example() {
    console.log(counter);
    counter = counter -1;
    if (counter === 0) return;
    example();
}
example()