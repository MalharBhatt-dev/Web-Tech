//! MATH OBJECT :
//* The math object is a inbuilt object in javascript which will provide set mathematical constants, properties and methods to perform opersations.
//* It is object of window (global object) object.

//! Math object dows not need to create their instance , without creating the instance you can yse the Math Object.

// let myMath = new Math();
//console.log(myMath);//Math is not a constructor.

console.log(Math);
console.log(typeof Math);//object

//! Syntax : Math.propertyName or Math.methodName();
//!Math Properties :
//? 1. Math.E :
console.log(Math.E); //2.78945613

//? 2. Math.PI :
console.log(Math.PI);//3.14 or 22/7

//! Math Methods :
//? 1. Math.round() :
console.log(Math.round(2.6)); //3
console.log(Math.round(2.3)); //2

//? 2. Math.ceil():
console.log(Math.ceil(2.9)); //3
console.log(Math.ceil(2.1)); //3

//? 3. Math.floor();
console.log(Math.floor(2.9)); //2
console.log(Math.floor(2.1)); //2

//? 4. Math.pow(base , exponent) :
console.log(Math.pow(2,2)); //4

//? 5. Math.sqrt() :
console.log(Math.sqrt(49)); //7

//? 6. Math.cbrt() :
console.log(Math.cbrt(27)); //3

//? 7. Math.max():
console.log(Math.max(1,2,3,4)); //4

//? 8. Math.min():
console.log(Math.min(1,2,3,4)); //1

//? 9. Math.abs() :
console.log(Math.abs(12.89)); //12.89
console.log(Math.abs(-12.89)); //12.89

//? 10. Math.trunc():
console.log(Math.trunc(10.45)); //10

//? 11. Math.random():
//* It is used to generate the random number between 0 (included) and 1 (excluded).
console.log(Math.random());
console.log(Math.floor(1000+Math.random()*9000));