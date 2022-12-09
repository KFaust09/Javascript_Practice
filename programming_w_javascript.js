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

function example1 () {
    console.log('line one');
    console.log('line two');
    console.log('line three');
}
example1()

//countdown with loops
let counter = 3;
function example2() {
   console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example2();
}
example2()

//Scoping with var, let and const.

var num1 = 10;  // global scope existing otside the function

function score() { //local scope existing within the function name() {}
    var num2 = 20; 
    console.log(num2)
}


let num3 = '7'; //global scope

if (num4 == '17') {  //block scope
    let num4 = 17   
}

//object-oriented programming shoe purchase calculator
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var cost = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', cost);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var cost = this.shoes * this.stateTax;
        console.log('Total price:', cost);
    }
}
purchase2.totalPrice();

//OOP and classes Cars
class Cars{
    constructor(color,speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log(this.color,"turbo is on!");
    }
}
const car1 = new Car("blue", 120)
car1.turboOn();