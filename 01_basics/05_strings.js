const name = "Himanshu"
const repoCount = 4

// console.log(name + repoCount + "Value") {We don't use this syntax, it is outdated insted we use `` & $}

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rebel-blood-com')

// console.log(gameName[2]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   harsh  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://himanshu.com/himanshu%20pandey"

console.log(url.replace('%20', '-'));

console.log(url.includes('himanshu'))

console.log(gameName.split('-'));
