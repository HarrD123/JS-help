console.log("hello world");
//window.alert("hey there");

//this is a comment

/*
multi line comment

*/

//VARIABLES --------

//a variable is a container for storing data
// a variable behaves as if it was the value that is contains

//you can have declarations (var, let, const)
// and assignments (= ---- is the assignment operator)
/*
let firstName = "Harry";// string
let age = 17;//number
let student = true;//booleans

/age = age + 1;

console.log("hello", firstName)
console.log("You are", age, "years old");
console.log("enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
*/

//ARITHMETIC EXPRESSIONS ------

/*
arithmetic expression is a combination of 
operands (values, variables, etc.)
and operators (+ - * / %)
that can be evaluated to a value
ex. y = x + 5
*/

let peoples = 20;
//peoples = peoples + 1;
//peoples = peoples - 1;
//peoples = peoples / 2;
//peoples = peoples * 2;

// use BIDMAS for this stuff aswell

// can also right these as an augmented assignment operator
// students += 1;

let extraPeoples = peoples % 3; //the remainder of people after you divide 20 by 3 
// it is the modulus operator
//you can see if a number is negative or positive %2

console.log("numbers of peoples are ", peoples);
console.log(extraPeoples);


// HOW TO ACCEPT USER INPUT

//window prompt

//let username = window.prompt("What's your name");
//console.log(username);

//with html

//  <label> enter your name:</label
//  <input type="text" id="mytext">
//  <button type="button" id="myButton">submit</button>

let username;

document.getElementById("myButton").onclick = function() {

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}


//  TYPE CONVERSION -----
// == change the datatype of a value to another(boolean string number)

//let age = window.prompt("How old are you?");
/*
console.log(typeof age);
age = Number(age);
age += 1;
console.log(typeof age);

console.log("Happy birthday you are", age, "years old");
*/
let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean(""); //if no value then = false if anything else = true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// CONST = a variable that cant be changed ---------

// const

const PI = 3.14159; //use capital letters for const
// using const means that is someone tries to change pi it wont work
// let PI = something will cause a type error
let radius;
let circumference;

//radius = window.prompt("enter your radius");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("the circumference is", circumference);


//MATH -------

let example = 3.14;
let example2 = 5;
let example3 = 9;
let maximum;
let minimum;

//example = Math.round(x); // rounds a varible
//example = Math.floor(x); // always round up
//example = Math.ceil(x); // always rounds up
//example = Math.pow(example, 2); // raises to a power
//example = Math.sqrt(example); // square roots the number
//example = Math.abs(example); // the distance the number is away from zero

maximum = Math.max(example, example2, example3);
minimum = Math.min(example, example2, example3);

// x = Math.PI; // it is what pi is

console.log(maximum);
console.log(minimum);
console.log(x);


// pythagoras just with prompts and stuff



let a;
let b;
let c;
/*
a = window.prompt("Enter Side A");
a = Number(a);

b = window.prompt("Enter Side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Hypotenuese =", c);

*/

// with cool html text boxes

document.getElementById("submitbutton").onclick = function() {

    a = document.getElementById("sideA").value
    a = Number(a);

    b = document.getElementById("sideB").value
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("label3").innerHTML = "Side C: " + c;
}


// COUNTER THINGO ----

let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

// RANDOM NUMBER GENERATOR -----

let ran1;
let ran2;
let ran3;

document.getElementById("randomButton").onclick = function() {

    ran1 = Math.floor(Math.random() * 6) + 1;
    ran2 = Math.floor(Math.random() * 6) + 1;
    ran3 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("random1").innerHTML = ran1;
    document.getElementById("random2").innerHTML = ran2;
    document.getElementById("random3").innerHTML = ran3;
}

// USEFUL STRING PROPERTIES & METHODS ------

let userName = "   Harry Dietrich   ";
let phoneNumber = "0407-066-035";

console.log(userName.length);// length of my username
console.log(userName.charAt(0));// that character at a particuler part
console.log(userName.indexOf("r"));//the first time r appears in the username
console.log(userName.lastIndexOf("r"));// the last time r appears in the username

userName = userName.trim();// gets rid of the spaces on the outside
userName = userName.toUpperCase();// sets username to all upper case
userName = userName.toLowerCase();// sets username to all lower case

phoneNumber = phoneNumber.replaceAll("-", "/");// replaces all the - in phone number with /

console.log(userName);
console.log(phoneNumber);


// THE SLICE METHOD ----


// slice() extracts a section of a string
// and returns it as a new string,
// without modifying the original string

let fullName = "Harry Dietrich";
let firstName;
let lastName;

//firstName = fullName.slice(0, 5);
//lastName = fullName.slice(6);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


// METHOD CHAINING ----

let userName1 = "harry";

// without chaining
/*
let letter = userName1.charAt(0);
letter = letter.toUpperCase();

console.log(letter);
*/

// with method chaining

//method chaining = calling one method after another in one continuous line of code

let letter = userName1.charAt(0).toUpperCase();

console.log(letter);


//  IF STATEMENTS ---------


/*
let age = 18;

if (age >= 65) {
    console.log("your a senior");
} else if (age >= 18) {
    console.log("you are an adult");
} else if (age < 0) {
    console.log("not yet born");
} else {
    console.log("you are a child");
}
*/

let online = true;

if (online) {
    console.log("you are online");
} else {
    console.log("you are offline");
}


// CHECK BOXES --------


document.getElementById("myButtonCheck").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const PayPalBtn = document.getElementById("PayPalBtn");

    if (myCheckBox.checked) {
        console.log("submited");
    } else {
        console.log("not submited");
    }

    if (visaBtn.checked) {
        console.log("You paying with visa");
    } else if (masterCardBtn.checked) {
        console.log("you paying with mastercard");
    } else if (PayPalBtn.checked){
        console.log("you paying with paypal");
    } else {
        console.log("where is the payment");
    }
}


// SWITCHES ----------

// Examines a value for a match against many case clauses
// good for too many if statements

let grade = 9;

switch (true) {
    case grade >= 90:
        console.log("you did great");
        break;
    case grade >= 80:
        console.log("you did GOOD");
        break;
    case grade >= 70:
        console.log("you did ok");
        break;
    case grade >= 60:
        console.log("you did not that good");
        break;
    case grade < 60:
        console.log("you failed");
        break;
    default:
        console.log(grade, "is not a letter grade");
        
}



//  THE AND AND OR OPERATORS ----------

// && AND 
// || OR


let temperature = 15;
let sunny = true;

if (temperature > 0 && temperature < 30 && sunny) {
    console.log("the weather is fine");
} else {
    console.log("weather aint great");
}

/*
if (temperature > 0 || temperature < 30) {
    console.log("the weather is bad");
} else {
    console.log("weather great");
}
*/


// THE NOT LOGICAL OPERATOR !!!!!! ------


let temp = 15;
let sunshine = true;

if (!(temp > 0)) {
    console.log("its cold outside");
} else {
    console.log("its warm");
}

if (!sunny) {
    console.log("cloudy");
} else {
    console.log("sunny")
}


// WHILE LOOP = REPEATS SOME CODE ------


/*
let userName2 = "";

while (userName2 == "" || userName2 == null) {
    userName2 = window.prompt("enter your name");
}

console.log("hello", userName2);
*/


// THE DO WHILE LOOP --------

/*
let userName3;

do {
    userName3 = window.prompt("enter your name");
} while (userName3 == "") 

console.log("hello", userName3);
*/


//  FOR LOOPS ----------

// repeat some code a certain amount of times

for (let i = 10; i >=1; i--) {
    console.log(i);
}

console.log("happy new year");


// BREAK AND CONTINUE STATEMENTS

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue;// this one keeps counting just skips 13
    }
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        break;// this one stops counting after 12
    }
    console.log(i);
}


// NESTED LOOPS ------

// loop inside a loop

/*
let symbol = window.prompt("enter a symbol to use");
let rows = window.prompt("enter number of rows");
let columns = window.prompt("enter number of columns");

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}
*/

// FUNCTIONS ---------

startProgram();

function startProgram() {
    let userName4 = "Harry D";
    let age = 18;

    happyBirthday(userName4, age);
}

function happyBirthday(userName4, age) {
    console.log("happy Birthday to you");
    console.log("happy Birthday to you");
    console.log("happy Birthday dear", userName4);
    console.log("happy Birthday to you")
    console.log("you are", age, "years old");
}


// RETURN -------------

// returns a value back to the place where you invoked a function

let area;
let width;
let height;


document.getElementById("submitRectangle").onclick = function() {

    width = document.getElementById("Width").value;
    width = Number(width);
    height = document.getElementById("Height").value;
    height = Number(height);

    area = getArea(width, height);

    function getArea(width, height) {
        return width * height;
    }

    document.getElementById("labelA").innerHTML = "The area is: " + area;
}


// TERNARY OPERATOR -------

// is a shortcut for an if else statement

//  1. a consition with ?
//  2. expression if True:
//  3. expresion if False

// condition ? exprIfTrue : exprFalse

let adult = checkAge(18);
console.log(adult);

function checkAge (age) {
    return age >= 18 ? true : false;
}

checkWinner(true);;

function checkWinner(win) {
    win ? console.log("you won") : console.log("you lost");
}


// VARIABLE SCOPE --------

// Where is the variable available

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variables = is declared outside any function
//(if global, var will change browser's window properties)


let name = "Harry";

doSomething();

function doSomething(){
    for(var i = 1; i <= 3; i++){
        console.log(i);
    }
}
//console.log(i);// doesnt work


// TEMPLATE LITERALS --------


let userName5 = "Harry";
let items = 3;
let total = 75;


//without the template literals
//console.log("hello", userName5);
//console.log("You Have", items, "items in your cart");
//console.log("Your total is $", total);

//with the literals
console.log(`Hello ${userName5}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);

let text =
`Hello ${userName5}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

console.log(text);

document.getElementById("myLabel2").innerHTML = text;


// TOLOCALESTRING ------

//returns a string with a language sensitive representation of this number

// number.toLocaleString(locale, {options});

let myNumber = 100;

//myNumber = myNumber.toLocaleString("en-US");// for US english
//myNumber = myNumber.toLocaleString("hi-IN");// for hindi
//myNumber = myNumber.toLocaleString("de-de");// for standard german

//myNumber = myNumber.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNumber = myNumber.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNumber = myNumber.toLocaleString("de-de", {style: "currency", currency: "EUR"});

//myNumber = myNumber.toLocaleString(undefined, {style: "percent"});

myNumber = myNumber.toLocaleString(undefined, {style: "unit", unit: "celsius"});// for any unit of measurement

console.log(myNumber);


// NUMBER GUESSING GAME -------

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton1").onclick = function() {
    let guess = document.getElementById("guessField").value;
    guesses += 1;

    if(guess == answer) {
        alert(`${answer} is the number. It took you ${guesses} guesses`);
    } else if(guess < answer) {
        alert("Too small");
    } else {
        alert("Too large");
    }
}


// TEMPERATURE CONVERTER TOOL ---------

document.getElementById("tempSubmit").onclick = function() {

    let temp1;

    if(document.getElementById("cBtn").checked) {
        temp1 = document.getElementById("temperatureBox").value;
        temp1 = Number(temp1);
        temp1 = toCelsius(temp1);
        document.getElementById("tempLabel").innerHTML = temp1 + "°C";
    } else if(document.getElementById("fBtn").checked) {
        temp1 = document.getElementById("temperatureBox").value;
        temp1 = Number(temp1);
        temp1 = toFahrenheit(temp1);
        document.getElementById("tempLabel").innerHTML = temp1 + "°F";

    } else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
};

function toCelsius(temp1) {
    return (temp1 - 32) * (5 / 9);
}

function toFahrenheit(temp1) {
    return (temp1 * 9 / 5 + 32);
}


// ARRAYS -----------


let fruits = ["apple", "orange", "banana"];

//fruits[0] = "coconut";

fruits.push("lemon");// this adds an element
fruits.pop(); // this removes last element
fruits.unshift("mango");// this adds an element to beginning
fruits.shift();// this removes the first element

let length1 = fruits.length;
let index = fruits.indexOf("banana");

console.log(fruits);
console.log(length1);
console.log(index);


//LOOPING THROUGH AN ARRAY ---------

let prices = [5, 10, 15, 20, 25];


for(let i = prices.length - 1; i >= 0; i--) {
    console.log(prices[i]);
}


for(let price of prices) {
    console.log(price);
}


// HOW TO SORT AN ARRAY OF STRINGS ----------

let fruits1 = ["banana", "apple", "orange", "mango"];

//fruits1 = fruits1.sort();
fruits1 = fruits1.sort().reverse();

for(let fruit of fruits1) {
    console.log(fruit);
}


// 2D ARRAYS -----------


let fruits2 = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits2, vegetables, meats];

groceryList[2][0] = "steak";

for(let list of groceryList) {
    for(let food of list) {
        console.log(food);
    }
}


// SPREAD OPERATOR --------- ...

//        Allows an iterable such as an array or string to be expanded in places where zero
//         or more arguments are expected


let userName6 = "Harry Dietrich";
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(...numbers1);
console.log(...userName6);

let maximum1 = Math.max(...numbers1);
console.log(maximum1)

let class1 = ["SpongeBob", "Patrick", "Sandy"];
let class2 = ["Squidward", "MrKrabs", "Plankton"];

class1.push(...class2);

console.log(class1);


//  REST PARAMETERS ---------------

//represents an idefinite number or parameters

let a1 = 1;
let b1 = 2;
let c1 = 3;
let d1 = 4;
let e1 = 5;

console.log(sum(a1, b1, d1));

function sum(...numbers2) {
    let total = 0;
    for(let number of numbers2) {
        total += number;
    }
    return total;
}


// CALLBACK -------

// a function pased as an augument to another function

//Ensures that a function is not going to run before
// a task is completed. Helps us develop asynchronous code.
//(When one function has to wait for another)
// that helps us avoid errors and potential problems 

/*
let total1 = sum1(2, 3);
displayDOM(total1);

function sum1(x, y) {
    let result = x + y;
    return result;
}*/

sum1(2, 3, displayConsole);
sum1(2, 3, displayDOM);

function sum1(x, y, callBack){
    let result = x + y;
    callBack(result);
}
function displayConsole(output) {
    console.log(output);
}
function displayDOM(output) {
    document.getElementById("myLabel1").innerHTML = output;
}


// ARRAY.FOREACH() ------------

//executes a provided callback function once for each array element

let students1 = ["spongebob", "patrick", "squidward"];
students1.forEach(capitalize);
students1.forEach(print);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element) {
    console.log(element);
}


// ARRAY.MAP() ------------

//executes a provided callback function oncce for each array element AND creates a new array

let numbers3 = [1, 2, 3, 4, 5];
let squares = numbers3.map(squared);
let cubes = numbers3.map(cube);

squares.forEach(print1);
cubes.forEach(print1);

function squared(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

function print1(element) {
    console.log(element);
}
console.log(squares);
console.log(cubes);


// ARRAY.FILTER() ---------

//creates a new array with all elements that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge1);

adults.forEach(print2);

function checkAge1(element) {
    return element >= 18;
}
function print2(element) {
    console.log(element);
}
console.log(adults);


// ARRAY.REDUCE() --------------

// reduces an array to a single value

let prices1 = [5, 10, 15, 20, 25, 30];
let total1 = prices1.reduce(checkOut);

console.log(`The total is: $${total1}`);

function checkOut(total, element) {
    return total + element;
}


// SORTING AN ARRAY OF NUMBERS -----

let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(ascendingSort);
grades.forEach(print3);

function descendingSort(x, y) {
    return y - x;
}
function ascendingSort(x, y) {
    return x - y;
}
function print3(element) {
    console.log(element);
}


// FUNCTION EXPRESSIONS ----

//function without a name, helps avoid polluting the global scope with names
// write it, then forget about it

const greeting = function() {
    console.log("hello");
}

greeting();

//increase decrease

let count1 = 0;

document.getElementById("increaseButton").onclick = function() {
    count1 +=1;
    document.getElementById("myLabel3").innerHTML = count1;
}
document.getElementById("decreaseButton").onclick = function() {
    count1 -=1;
    document.getElementById("myLabel3").innerHTML = count1;
}


// ARROW FUNCTION => ----------

// compact alternative to a traditionl function expression

const greetings = (userName7) => {
    console.log(`hello ${userName7}`);
}

greetings("Harry");

const percent1 = (x, y) =>  x / y * 100;

console.log(`${percent1(75,90)}%`);

let grades1 = [100, 90, 60, 50, 80, 70];


grades.sort((x, y) => y - x);

grades.forEach((element) => console.log(element));


// HOW TO SHUFFLE THE ELEMENTS OF AN ARRAY -------

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle1(cards);

//console.log(cards);
cards.forEach(card => console.log(card));

function shuffle1(array) {
    let currentIndex = array.length;

    while(currentIndex !=0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temporary = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporary;
    }
    return array;
}


// NESTED FUNCTIONS ---------

// function inside another function , used in closures

let userName8 = "harry";
let userInbox = 0;

login();

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
    console.log(`Welecome ${userName8}`);
    }
    function displayUserInbox() {
    console.log(`You Have ${userInbox} new messages`)
    }
}


// MAP ----------

// is an object that holds key value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");

store.set("hat", 40);
store.delete("hat");
console.log(store.has("underwear"));
console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));


// OBJECTS ---------

// a group of properties and methods

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function() {
        console.log("you drive the car");
    },
    brake: function() {
        console.log("you brake the car");
    }
}
const car1 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function() {
        console.log("you drive the car");
    },
    brake: function() {
        console.log("you brake the car");
    }
}

console.log(car.model);
console.log(car.year);

car.drive();

console.log(car1.color);


// THIS KEYWORD -----------

const car2 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function() {
        console.log(`you drive the ${this.model}`);
    }
}
const car3 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function() {
        console.log(`you drive the ${this.model}`);
    }
}
car2.drive();
car3.drive();


// CLASSES --------

// A blueprint for creating objects

class Player {
    score = 0;

    pause() {
        console.log("You paused the game");
    }
    exit() {
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);
player1.pause();


// CONSTRUCTORS -------------

// a special method of a class, accepts argumemnts and assigns properties

class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("spongebob", 10, 3.2);
const student2 = new Student("Patrick", 11, 3.3);
const student3 = new Student("Sandy", 9, 3.8);

console.log(student1.name);
console.log(student2.gpa);
console.log(student3.age);

student1.study();


// STATIC KEYWORD --------

// belongs to the class, not the objects properties: useful for caches, fixed-config
// methods: useful for utility functions

class Car1 {
    static numberOfCars = 0;
    constructor(model) {
        this.model = model;
        Car1.numberOfCars += 1;
    }
    static startRace() {
        console.log("3, 2, 1");
    }
}

const car4 = new Car1("Mustang");
const car5 = new Car1("Corvette");

console.log(Car1.numberOfCars);

Car1.startRace();


// INHERITANCE -------------

class Animal {
    alive = true;
    
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    
    name = "rabbit";

    run() {
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal {
    
    name = "fish";

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal {
   
    name = "hawk";

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.run()

console.log(fish.alive);
fish.sleep();
fish.swim()

console.log(hawk.alive);
hawk.eat();
hawk.fly()


// SUPER KEYWORD----------

// refers to the parent class
// commonly used to invoke constructor of a parent class

class Animal1 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit1 extends Animal1 {
    
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish1 extends Animal1 {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk1 extends Animal1 {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit2 = new Rabbit1("Rabbit", 1, 40);
const fish2 = new Fish1("Fish", 2, 80);
const hawk2 = new Hawk1("Hawk", 3, 200);

console.log(rabbit2.name);
console.log(rabbit2.age);
console.log(rabbit2.runSpeed);

console.log(hawk2.name);
console.log(hawk2.age);
console.log(hawk2.flySpeed);


// GET --------------

// get = binds an object property to a function when that property is accessed
//set = binds an object property to a function when that property is assigned a value

class Car {
    constructor(power) {
        this._gas = 25;
        this._power = power;
    }
    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    get power() {
        return `${this._power}hp`;
    }
    set gas(value) {
        if(value > 50) {
            value = 50;
        } else if(value < 0) {
            value = 0;
        }
        this._gas = value;
    }
}

let car6 = new Car(400);

car6.gas = 50;

console.log(car6.power);
console.log(car6.gas);


// HOW TO PASS OBJECTS AS AUGUMENTS --------

class Car6 {

    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car7 = new Car6("Mustang", 2023, "red");
const car8 = new Car6("Corvette", 2024, "blue");
const car9 = new Car6("Lambo", 2022, "yellow");

changeColor(car9, "gold");
displayInfo(car9);

function displayInfo(car) {
    console.log(car.model)
    console.log(car.year)
    console.log(car.color)
}

function changeColor(car, color) {
    car.color = color;
}


// HOW TO CREATE AN ARRAY OF OBJECTS ---------

class Car7 {

    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        console.log(`You drive the ${this.model}`);
    }
}

const car10 = new Car7("Mustang", 2023, "red");
const car11 = new Car7("Corvette", 2024, "blue");
const car12 = new Car7("Lambo", 2022, "yellow");

const cars = [car10, car11, car12];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

//cars[0].drive();

startRace1(cars);

function startRace1(cars) {
    for(const car of cars) {
        car.drive();
    }
}


// ANONYMOUS OBJECTS -------------

// OJECT WITH NO NAME

class Card2 {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}


let cards1 = [
    new Card2("A", "Hearts"), 
    new Card2("A", "Spades"),
    new Card2("A", "Diamonds"), 
    new Card2("A", "Clubs"), 
    new Card2("2", "Hearts"), 
    new Card2("2", "Spades"), 
    new Card2("2", "Diamonds"), 
    new Card2("2", "Clubs")];

console.log(cards1[7].value + cards1[7].suit);

cards1.forEach(card => console.log(`${card.value} ${card.suit}`))


// ERROR ---------

// object with a description of something went wrong
// throw = executes a user-defined error

//console.leg(); //type error

try {
    //let x = window.prompt("enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number";
    if(x == "") throw "That was empty";

    console.log(`${x} is a number`);
}
catch(error) {
    console.log(error);
}
finally {
    console.log("This always executes");
}


// SETTIMEOUT() -----------

// invokes a function after a number of milliseconds

let item = "cryptocurrency";
let price = 430.69;
/*
let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);
*/
function firstMessage(item, price) {
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage() {
    alert(`this is not scam`);
}
function thirdMessage() {
    alert(`do it`);
}

document.getElementById("myButton1").onclick = function() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("thanks for buying");
}


// SETINTERVAL() ------------

//keeps on invoking repeatdly
/*
let count2 = 0;
//let max = window.prompt("Count how high?");
//max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
    count2 += 1;
    console.log(count2);
    if(count >= max) {
        clearInterval(myTimer);
    }
}
*/

// THE DATE OBJECT ---------

let date = new Date();

//let date = new Date(); //current date
//let date = new Date(10000000);// date after number of milliseconds
//let date = new Date(2004, 3, 17, 1, 2, 30);// a specific date and time
//let date = new Date("January 2, 2023 00:00:00");// string method

let year1 = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

date.setFullYear(2024);// you can set the date or whatever for everything

//date = date.toLocaleString();

document.getElementById("myLabel4").innerHTML = formatTime(date);

function formatDate(date) {
    let year2 = date.getFullYear();
    let month2 = date.getMonth() + 1;
    let day2 = date.getDate();

    return `${month2}/${day2}/${year2}`
}
function formatTime(date) {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hour >= 12 ? "pm" : "am";

    hour = (hour % 12) || 12;

    return `${hour}/${minutes}/${seconds} ${amOrPm}`
}


//  CLOCK PROGRAM ---------

const myLabel5 = document.getElementById("myLabel5");

update();
setInterval(update, 1000);

function update() {
    let date = new Date;
    myLabel5.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours1 = date.getHours();
        let minutes1 = date.getMinutes();
        let seconds1 = date.getSeconds();
        let amOrPm1 = hours1 >= 12 ? "pm" : "am";

        hours1 = (hours1 % 12) || 12;

        hours1 = formatZeroes(hours1)
        minutes1 = formatZeroes(minutes1)
        seconds1 = formatZeroes(seconds1)

        return `${hours1}:${minutes1}:${seconds1}${amOrPm1}`
    }
    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}


// SYNCHRONOUS AND ASYNCHRONOUS CODE -------

// SYNC is an ordered sequence // start now finish now
// ASYNC is out of sequence // start now finish some other time

console.log("start")
//setTimeout(() => console.log("this is asynchronous"), 5000);// this shows up out of sequence-------------------------
console.log("finsih")


// CONSOLE.TIME() ---------

//starts a timer so you can see how long an operation takes to complete
// tracks how long a synchronous method takes

//start
//console.time("Response time"); -------------

//alert("click the ok btn");
//setTimeout(() => console.log("hello"), 3000);------------------

//end
console.timeEnd("Response time");


// PROMISE ---------

// objects that encapsulate the result of an asynchronous operation
// let asynchronous methods return values like synchronous methods
// " i promise to return something in the future"

// promises have a state. the state is 'pending' then: 'fulfilled' or 'rejected'
// the result is what can be returned
// 2 parts producing and consuming

const promise = new Promise((resolve, reject) => {
    let fileLoad = false;

    if(fileLoad) {
        resolve("file loaded")
    } else {
        reject("file not loaded")
    }
});

promise.then(value => console.log(value))
       .catch(error => console.log(error));


const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

//wait(3000).then(() => console.log("thanks for waiting"));------------


// ASYNC FUNCTION-------

// makes a function return a promise

async function loadFile() {
    let fileLoaded = true;

    if(fileLoaded) {
        return "file loaded";
    } else {
        throw "file not loaded";
    }
}

loadFile().then(value => console.log(value))
       .catch(error => console.log(error));



// AWAIT KEYWORD --------

// makes an async function wait for a promise

async function loadFile2() {
    let fileLoaded1 = false;

    if(fileLoaded1) {
        return "file loaded";
    } else {
        throw "file not loaded";
    }
}

async function startProcess(){// you can only use an await keyword within an async function 
    try {
        let message = await loadFile2();
        console.log(message);
    }
    catch(error) {
        console.log(error);
    }
}
startProcess();


// ES6 MODULES ------------

// the idea behind a module is that its a file of reusable code
// We can import sections of pre-written code to use whenever
//great for any general utility values and functions
// helps to make your code more reusable and maintanable
// think of modules as serperate chapters of a book
// type="module" in script tag of html

//import {PI2, getCircumference, getArea} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI2);

let circumference1 = MathUtil.getCircumference(10);
console.log(circumference1);

let area1 = MathUtil.getArea(10);
console.log(area1);


// DOM -----------

// it is an API
// document object model
// interface for changing content on a page

console.log(document);
console.dir(document);
console.log(document.title);
console.log(document.URL);

document.title = "8 Hour JS";
//document.location = "http://www.google.com" // takes you to google

//document.body.style.backgroundColor = "lightgrey";
//document.getElementById("my id here")


// ELEMENT SELECTORS -------------

let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightGreen";

let fruits4 = document.getElementsByName("fruite");

fruits4.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})
/*
let vegetables1 = document.getElementsByTagName("li");

vegetables1[1].style.backgroundColor = "lightgreen";
*/

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
/*
let element1 = document.querySelector(//"#myTitle"".desserts""li"//);
element1.style.backgroundColor = "brown";
*/
let element2 = document.querySelectorAll("[for]");
element2.forEach(element => {
    element.style.backgroundColor = "lightgrey";
})


// DOM TRAVERSAL ---------

let element3 = document.querySelector("#fruits");
let children1 = Array.from(element3.children);

children1.forEach(child => child.style.backgroundColor = "lightgreen");

//children1.style.backgroundColor = "lightgreen";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)


// ADD/CHANGE HTML ELEMENTS -----------------

//.innerHTML (vulnerable to XSS attacks??)
// .textContent (more secure apparently)

const nameTag = document.createElement("h1");
nameTag.textContent = "adding element";
document.body.append(nameTag);

const myList = document.querySelector("#fruits1");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);


// ADD/CHANGE CSS PROPERTIES -----------

const title1 = document.getElementById("myTitle1");

title1.style.backgroundColor = "blue";
title1.style.color = "#423f23"
title1.style.fontFamily = "consolas";
title1.style.textAlign = "center";
title1.style.border = "2px solid";
title1.style.display = "block";


// EVENTS ----------

//const element4 = document.getElementById("myButton2")
//const element4 = document.body;
//const element4 = document.getElementById("textBoxTest");
const element4 = document.getElementById("myDiv2");

//element4.onclick = something2;
//element4.onload = something2;
//element4.onchange = something2;
/*element4.onmouseover = otherthing;
element4.onmouseout = elseotherthing;*/
element4.onmousedown = otherthing;
element4.onmouseup = elseotherthing;

function something2() {
    alert("something happened");
}
function otherthing() {
    element4.style.backgroundColor = "red";
}
function elseotherthing() {
    element4.style.backgroundColor = "lightgreen";
}


// .ADDEVENTLISTENER(EVENT, FUNCTION, USECAPTURE)-------------

// you can add many event handlers to one element
// even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue() {
    alert(`You selected ${this.id}`)
    this.style.backgroundColor = "lightblue";
}

/*
innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changegreen);

function changeRed() {
    innerDiv.style.backgroundColor = "red";
}
function changegreen() {
    innerDiv.style.backgroundColor = "lightgreen";
}*/


// SHOW AND HIDE HTML ELEMENTS ---------------

const myBtn1 = document.querySelector("#myBtn1");
const myImage = document.querySelector("#myImage");

myBtn1.addEventListener("click", () => {
    if(myImage.style.visibility == "hidden") {
        myImage.style.visibility = "visible";
    } else {
        myImage.style.visibility = "hidden";
    }
})


// DETECT KEY PRESSES ----------

const myDiv1 = document.getElementById("myDiv1");
window.addEventListener("keydown", move);
let boxX = 0;
let boxY = 0;

function move(event) {
    switch(event.key) {
        case "ArrowDown":
            boxY += 5;
            myDiv1.style.top = boxY + "px";
            break;
        case "ArrowUp":
            boxY -= 5;
            myDiv1.style.top = boxY + "px";
            break;
        case "ArrowLeft":
            boxX -= 5;
            myDiv1.style.left = boxX + "px";
            break;
        case "ArrowRight":
            boxX += 5;
            myDiv1.style.left = boxX + "px";
            break;
        default:
            break;
    }
}


// ANIMATIONS -------------

const myButton3 = document.getElementById("myButton3");
const myAnimation = document.getElementById("myDiv3");

myButton3.addEventListener("click", begin);

/*function begin() {
    let timerId = null;
    
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame() {
        if(x >= 200 || y >= 200) {
            clearInterval(timerId);
        } else {
            x += 1;
            y += 1;
            myAnimation.style.top = y + "px";
            myAnimation.style.left = x + "px";
        }
    }

}*/
/*
function begin() {
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0

    timerId = setInterval(frame, 5);

    function frame() {
        if(x >= 200 || y >= 200) {
            clearInterval(timerId);
        } else {
            x += 1;
            y += 1;
            degrees += 10;
            myAnimation.style.top = y + "px";
            myAnimation.style.left = x + "px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }

}*/
function begin() {
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame() {
        if(scaleX <= .01 || scaleY <= .01) {
            clearInterval(timerId);
        } else {
           scaleX -= .01;
           scaleY -= .01;
           myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }

}


// CANVAS API ---------

// a means for drawing graphics

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//how to draw some lines
/*
context.strokeStyle = "blue";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();*/

//triangle
/*
context.strokeStyle = "red";
context.fillStyle = "yellow";
context.lineWidth = 5;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();*/

//rectangle
/*
context.lineWidth = 10;
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "red";
context.strokeRect(0, 0, 250, 250);

context.lineWidth = 10;
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "red";
context.strokeRect(0, 250, 250, 250);

context.lineWidth = 10;
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "green";
context.strokeRect(250, 250, 250, 250);

context.lineWidth = 10;
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "blue";
context.strokeRect(250, 0, 250, 250);*/

//circle
// (x, y, r, sAngle, eAngle, counterClockwise)
/*
context.fillStyle = "lightblue";
context.lineWidth = 10;
context.strokeStyle = "darkblue";
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI)
context.stroke();
context.fill();
*/

// draw some text

context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("You Win", canvas.width / 2, canvas.height / 2);


// WINDOW OBJECT -------------

// interface used to talk to the web browser
// the DOM is a property of the window

const myBtn4 = document.querySelector("#myBtn4");

//console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);
//window.location.href = "https:google.com";
console.log(window.location.hostname);
console.log(window.location.pathname);

//myBtn4.addEventListener("click", () => window.open("https:google.com"));
//myBtn4.addEventListener("click", () => window.close());
myBtn4.addEventListener("click", () => window.print());

//window.alert("hi");
//window.confirm("ok");
/*
let age1 = window.prompt("enter something");
if(age1 < 18) {
    window.alert("you are not 18");
    window.close;
}*/


// COOKIES ---------- not working idk why

// a small text file stored on your computer
// used to remeber infor about user
// saved in name=value pairs

//console.log(navigator.cookieEnabled);

document.cookie = "firstName=Harry; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie = "LastName=Dietrich; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

setCookie("email", "harrydietrich@gmail.com", 365);

console.log(getCookie("firstName"));

console.log(document.cookie);

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("LastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("LastName");
});
deleteCookie("firstName");
deleteCookie("LastName");

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function deleteCookie(name) {
    setCookie(name, null, null);
}
function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element5 => {
        if(element5.indexOf(name) == 0){
            result = element5.substring(name.length + 1)
        }
    })
    return result;
}


// TIMER BUTTON THINGO -----------

const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn2 = document.querySelector("#resetBtn2");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn2.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}


// ROCK PAPER SISSORS ----------------------

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let player3;
let computer1;


choiceBtn.forEach(button => button.addEventListener("click", () => {
    player3 = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player3}`;
    computerText.textContent = `Computer: ${computer1}`;
    resultText.textContent = checkWin();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer1 = "Rock";
            break;
        case 2:
            computer1 = "Paper";
            break;
        case 3:
            computer1 = "Scissors";
            break;
    }
}
function checkWin() {
    if(player3 == computer1) {
        return "Draw";
    } else if(computer1 == "Rock") {
        return (player3 == "Paper") ? "You Win!" : "You Lose!";
    } else if(computer1 == "Paper") {
        return (player3 == "Scissors") ? "You Win!" : "You Lose!";
    } else if(computer1 == "Scissors") {
        return (player3 == "Rock") ? "You Win!" : "You Lose!";
    }
}


// NAUGHTS AND CROSSES ------------

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", "",];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;

    running = true;
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner1();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner1() {
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if(cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if(roundWon) {
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    } else if(!options.includes("")) {
        statusText.textContent = "Draw!";
        running = false;
    } else {
        changePlayer();
    }
}
function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "",];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}


// SNAKE GAME --------------

const snakeBoard = document.querySelector("#snakeBoard");
const ctx = snakeBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetSnake = document.querySelector("#resetSnake");
const gameWidth = snakeBoard.width;
const gameHeight = snakeBoard.height;
const boardBackground = "white";
const snakeColor = "lightcoral";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let slithering = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let snakeScore = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeSnakeDirection);
resetSnake.addEventListener("click", resetGame);

gameStart();

function gameStart() {
    slithering = true;
    scoreText.textContent = snakeScore;
    createFood();
    drawFood();
    nextTick();
}
function nextTick() {
    if(slithering) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75);
    } else {
        displayGameOver();
    }
}
function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}
function createFood() {
    function randomFood(min, max) {
        const randNum = Math.round(((Math.random() * (max - min) + min)) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
}
function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
}
function moveSnake() {
    const head = {x: snake[0].x + xVelocity,
                  y: snake[0].y + yVelocity};
    
    snake.unshift(head);
    //if food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY) {
        snakeScore += 1;
        scoreText.textContent = snakeScore;
        createFood();
    } else {
        snake.pop();
    }
}
function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
}
function changeSnakeDirection(event) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const RIGHT = 39;
    const UP = 38;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    switch(true) {
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
}
function checkGameOver() {
    switch(true) {
        case (snake[0].x < 0):
            slithering = false;
            break;
        case (snake[0].x >= gameWidth):
            slithering = false;
            break;
        case (snake[0].y <0):
            slithering = false;
            break;
        case (snake[0].y >= gameHeight):
            slithering = false;
            break;
    }
    for(let i = 1; i < snake.length; i++) {
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            slithering = false;
        }
    }
}
function displayGameOver() {
    ctx.font = "50px MV Boli";''
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    slithering = false;
}
function resetGame() {
    snakeScore = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
}
window.addEventListener(
    "keydown",
    (e) => {
      if (
        ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
          e.code
        )
      ) {
        e.preventDefault();
      }
    },
    false
  );


  // PONG GAME ------------

const gameBoard = document.querySelector("#gameBoard");
const cntxt = gameBoard.getContext("2d");
const scoreBoard = document.querySelector("#scoreBoard");
const resetPong = document.querySelector("#resetPong");
const pongWidth = gameBoard.width;
const pongHeight = gameBoard.height;
const pongBackground = "lightgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let intervalID;
let ballSpeed = 1;
let ballX = pongWidth / 2;
let ballY = pongHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
};
let paddle2 = {
    width: 25,
    height: 100,
    x: pongWidth - 25,
    y: pongHeight - 100
};

window.addEventListener("keydown", changePaddleDirection);
resetPong.addEventListener("click", resetPongGame);

pongStart();
drawPaddles();

function pongStart() {
    createBall();
    nextPongTick();
}
function nextPongTick() {
    intervalID = setTimeout(() => {
        clearPongBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextPongTick();
    }, 10)
}
function clearPongBoard() {
    cntxt.fillStyle = pongBackground;
    cntxt.fillRect(0, 0, pongWidth, pongHeight);
}
function drawPaddles() {
    cntxt.stokeStyle = paddleBorder;

    cntxt.fillStyle = paddle1Color;
    cntxt.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    cntxt.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    cntxt.fillStyle = paddle2Color;
    cntxt.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    cntxt.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
}
function createBall() {
    ballSpeed = 1;
    if(Math.round(Math.random()) == 1){
        ballXDirection = 1;
    } else {
        ballXDirection = -1;
    }
    if(Math.round(Math.random()) == 1){
        ballYDirection = 1;
    } else {
        ballYDirection = -1;
    }
    ballX = pongWidth / 2;
    ballY = pongHeight / 2;
    drawBall(ballX, ballY);
}
function moveBall() {
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballYDirection);

}
function drawBall(ballX, ballY) {
    cntxt.fillStyle = ballColor;
    cntxt.strokeStyle = ballBorderColor;
    cntxt.leneWidth = 2;
    cntxt.beginPath();
    cntxt.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    cntxt.stroke();
    cntxt.fill();
}
function checkCollision() {
    if(ballY <= 0 + ballRadius) {
        ballYDirection *= -1;
    }
    if(ballY >= pongHeight - ballRadius) {
        ballYDirection *= -1;
    }
    if(ballX <= 0) {
        player2Score += 1;
        updateScore();
        createBall();
        return;
    }
    if(ballX >= pongWidth) {
        player1Score += 1;
        updateScore();
        createBall();
        return;
    }
    if(ballX <= (paddle1.x + paddle1.width + ballRadius)) {
        if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
            ballX = (paddle1.x + paddle1.width) + ballRadius; //if the ball gets stuck
            ballXDirection *= -1;
            ballSpeed += .2;
        }
    }

    if(ballX >= (paddle2.x - ballRadius)) {
        if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
            ballX = paddle2.x - ballRadius; //if the ball gets stuck
            ballXDirection *= -1;
            ballSpeed += .2;
        }
    }
}
function changePaddleDirection(event) {
    const keyPushed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch(keyPushed) {
        case(paddle1Up):
            if(paddle1.y > 0){
                paddle1.y -= paddleSpeed;
            }
            break;
        case(paddle1Down):
            if(paddle1.y < pongHeight - paddle1.height){
                paddle1.y += paddleSpeed;
            }
            break;
        case(paddle2Up):
            if(paddle2.y > 0){
                paddle2.y -= paddleSpeed;
            }
            break;
        case(paddle2Down):
            if(paddle2.y < pongHeight - paddle2.height){
                paddle2.y += paddleSpeed;
            }
            break;
    }
}
function updateScore() {
    scoreBoard.textContent = `${player1Score} : ${player2Score}`;
}
function resetPongGame() {
    player1Score = 0;
    player2Score = 0;
    paddle1 = {
        width: 25,
        height: 100,
        x: 0,
        y: 0
    };
    paddle2 = {
        width: 25,
        height: 100,
        x: pongWidth - 25,
        y: pongHeight - 100
    };
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    ballXDirection = 0;
    ballYDirection = 0
    updateScore();
    clearInterval(intervalID);
    pongStart();
}