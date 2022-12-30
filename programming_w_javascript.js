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

// forEach method with arrays
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit,index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// filter() method with arrays
const nums = [0,10,20,30,40,50];
nums.filter(function(num) {
    return num > 20;
})

// map() method with arrays
[0,10,20,30,40,50].map (function (num){
    return num/10
})

// Map constructor
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The runner-up");
bestBoxers.set(3, "The Third Place");
console.log(bestBoxers);
    // get() method to get a specific value
bestBoxers.get(1);

    // Set constructor to filter array for uniue members
const repetitiveFruits = ['apple', 'pear','apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// Spread operator
let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
];
function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3);
}
showItinerary(...top3);

// Rest operator