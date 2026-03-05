//! Type casting:

//* the type casting is the process of converting one datatype into another datatype.

//! There are two ways to perform typecasting.:

//? 1. Implicit typecasting: -> Internally -> Automatically
//? 2. Explicit typecasting: -> Externally -> Manually by the programmer.

//! 1. Implicit Typecasting:
//* The typecasting is done by internally is called as implicitly typecasting.

console.log(10+10); //20
console.log(10+"10"); // 1010
console.log("20"-10); //NaN -> Not a Number

console.log(true+10);//11
console.log(true - 9); //-8
console.log(false + 10); // 10

console.log("33"+22+"33"); //332233

//! Explicit Typecasting:
//* The typecasting which is done by programmer is called explicit typecasting.

console.log(10 + Number("10")); //20
console.log(Boolean(true)); //true
console.log(Boolean("")); // false -> empty string will be considered as a falsy value.
console.log(Boolean("hello")); // true -> non-empty string will be consider as a truthy values.

console.log(10 + Number("true"));//NaN
console.log(10+String(true)); // 10true

console.log(10 + Number(Boolean(""))); //10

let userAge = prompt("Enter the age of the user:");
console.log(userAge);
console.log(typeof Number(userAge));
