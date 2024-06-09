let age="33ab"
//here we are conert datatypes

//thnere are two types to check typeof datatypes
console.log(typeof(age))
console.log(typeof age)

//here we are convert string to number
let conv=Number(age)

console.log(typeof(conv));

//here print is NAN (not a number) beacuse value is not string or not number

//if value is null than it return 0

//if value is undefien than it return NaN

//if value is true is  return 1

//if value is flse it return 0

//if value is string it return NaN

console.log(conv)

let isLoggedIn=true //if these are value is false than it return 0
let boo=Number(isLoggedIn)
console.log(boo);

let isDog="sujal" //if these string is empty than it return false
let suj=Boolean(isDog)
console.log(suj);

//now we convert number to string

let num=45
let st=String(num)
console.log(st);
console.log(typeof st);