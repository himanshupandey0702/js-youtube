const accountId = 144553
let accountEmail = "pandey0702@gmail.com"
var accountPassword = "12345"
accountCity = "Roorkee"

//accountId = 2 //not allowed

accountEmail = "hp@hp.com"
accountPassword = "2345"
accountCity = "Gonda"
accountState = "U.P"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
