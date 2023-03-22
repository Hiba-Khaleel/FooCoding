console.log("________________1__________________")
console.log("مرحبايا عالم" +" - " +"Arabic")
console.log("Hello world" +" - " +"English")
console.log("Hej världen" +" - " +"Swedish")
console.log("________________2__________________")
//console.log('I'm awesome');
//the statment made an error because quotation marks and the right to write it is")
console.log("I'm awesome")

console.log("________________3__________________")

let x;

console.log("the value of my variable x will be:I think right now it's undefined");
console.log(x)
x=24
console.log("The value of my variable x is: 24");
console.log("The current value of x is: " + x);



console.log("________________4__________________")


let y = "Hi how are you!"
console.log("The value of the string y is: Hi how are you!")
console.log("The current value of y is: " + y)
y = "goodbye and see you!"
console.log("The value of the string y is now: goodbye and see you!")
console.log("The current value of y is now: " + y)

console.log("________________5__________________")

let num = 7.25;
let roundedNum = Math.round(num);
console.log(roundedNum);

let z= 7.25
console.log(z)

let a = Math.round(z)
console.log(a)

console.log("The highest number between z and a is is: " + Math.max(a, z));


console.log("________________6 Arrays__________________")

let days=[];
console.log ( " I think the value of the array is undefind")
console.log(days)
let animals=["cat","bird","fish","lion"]
console.log(animals)
animals +=[","+"baby pig"]
console.log(animals)

console.log("________________7 string__________________")

let myString='this is my string'
console.log(myString)
console.log("the length of my string is "+ myString.length)
console.log("________________8 __________________")

let name = "Mary"; 
let age = 20; 
let isStudent = false; 
let height = 1.50; 
console.log("The value of my variable name is: " + name);
console.log("The value of my variable age is: " + age);
console.log("The value of my variable isStudent is: " + isStudent);
console.log("The value of my variable height is: " + height);

console.log("I think the type of name is string and age is number and inStudent boolean and height desamel")

console.log("The value of my variable type of name is: " + typeof name);
console.log("The value of my variable type of age is: " + typeof age);
console.log("The value of my variable type of isStudent is: " + typeof isStudent);
console.log("The value of my variable type of height is: " +  typeof height);
console.log("________________9__________________")
 x=7
x= x % 3

//The operator % (modulo) returns the remainder of a division operation. When x = 7 is divided by 3, the remainder is 1. Therefore, x = x % 3 will set the value of x to 1.

console.log("______________10_________________")
const arr = [1, 'two', 3, 'four'];
console.log(arr); // outputs [1, 'two', 3, 'four']

// 2- Yes, infinities can be compared in JavaScript. The result of the comparison is always false, except when comparing the same infinity value.
//const a = 6/0
//const b = 10/0
console.log(a === b); // outputs true, because both a and b are positive infinity

const c = -6/0;
console.log(a === c); // outputs false, because a is positive infinity and c is negative infinity

// 3- Here are some console.log statements that demonstrate the concepts:

console.log(typeof arr); // outputs 'object', because an array is a type of object
console.log(typeof a); // outputs 'number', because a is a numeric value
console.log(typeof 'two'); // outputs 'string', because 'two' is a string value
console.log(Number.POSITIVE_INFINITY); // outputs Infinity, which is the numeric value for positive infinity