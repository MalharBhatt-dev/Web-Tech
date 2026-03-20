//! ES6 CONCEPTS
//!ES6 -> ESCA script 6 -> 2015

//? 1. let and constant
//? 2. Arrow function
//? 3. Symbol()
//? 4. String Template Literals (Backticks)
//? 5. Function with deafault parameter
//? 6. Destructing
//? 7. Rest Parameter and Spread Operator
//? 8. Promise
//? 9. Asyc / await
//?10. class
//?11. JS Modules

//! 5. Function with default parameter:
//* The variables which is declared at the time of function defination is called as parameter in function.
//* Temporary variables

function greet(name= "Guest"){
    console.log(`My name is ${nmae} !`);
    greet();
    greet("John");
}

//! 6. Destructing :
//* The breaking down big structure into small pieces (variables) for easy use.

//* We can perform destructing for Array and Object:
//? 1. Array Destructing :
let cricketers = ["Sachin" , "MSD" , "Virat"];
console.log(cricketers);

let [s,m,v] = cricketers;//!Array Destructing
console.log(s);
console.log(m);
console.log(v);

//? 2. Object Destructing :
let employee = {
    eName : "John",
    eAge : 20,
    eSalary : 30000
};
console.log(employee);
console.log(employee.eName);

let{ eName , eAge , eSalary} = employee; //!Object Destructing
console.log(eName);

//~ Special NOTE : When you are destructing the object it is mandatory to use the same keyName as a variable name.

