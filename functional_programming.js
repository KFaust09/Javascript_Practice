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