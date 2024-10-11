const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 7777.7777

// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// 'en-IN' = shows hundreds in Indian patterns
// +++++++Maths+++++++

// console.log(Math);
// console.log(Math.abs(-4)); //abs turns negative numbers in positive
// console.log(Math.round(4.8)); // round turns values into round off
// console.log(Math.ceil(4.6)); // ceil turns value into their highest number (4.2 or 4.6 will be 5)
// console.log(Math.floor(4.9)); // floor turns decimal numbers into their root values (4.2 or 4.9 will be 4)
// min and max show the smallest and biggest number in array


// console.log(Math.random()); //random gives values in between 0 and 1
// console.log(Math.random()*10 + 1); // we use +1 to avoid 0 before decimal
// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random()*10) + 1) // floor roundsOff to smaller values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min) // important formula