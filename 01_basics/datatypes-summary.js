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

// console.log(typeof heros);
// console.table(heros)




// Stack (Primitive), Heap (Non-Primitive)

let myGithubname = "Himanshu"

let anothername = myGithubname
anothername = "Harsh"

console.log(myGithubname)
console.log(anothername)

let userOne = {
    email: "abc@gmail",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "him@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);
;
