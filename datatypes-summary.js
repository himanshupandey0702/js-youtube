// Primitive (datatype)

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('0702')
const anotherId = Symbol('0702')

console.log(id === anotherId);

const bigNumber = 1234826356789846235n

// console.log(bigNumber);

//  Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"]
let myObj = {
    name: "Himanshu",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof heros);
