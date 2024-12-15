const accountId = 144553
let accountEmail = "sonuee15@gmail.com"
var accountPassword = "123456"
accountCity = "Bihar"
let accountState;

// accountId = 2 // not allowed
accountEmail = "sk4562944@gmail.com"
accountPassword = "654321"
accountCity = "Jharkhand"


console.log(accountId);

/*

Prefer not to use var
because of issue in block scope and functional

*/

console.table([accountId,accountEmail,accountCity,accountPassword,accountState])
