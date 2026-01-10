//! FUNCTIONS IN JS...

//h TYPES OF FUNCTIONS:(11)
//& 1. Named function
//& 2. Anonymous function
//& 3. Function expression
//& 4. IITE (Immediately invoked function expression)
//& 5. Arrow function
//& 6. Callback function\
//& 7. HOF (Higher order function)
//& 8. Nested Function
//& 9. Closure function
//& 10. Generator function
//& 11. Function Currying

console.log("FUNCTIONS IN JS...");

//h FUNCTIONS:
//& The functions is a block of code which is used to perform some specific task.

//?Syntax : function identifier (){//code}
//& here , identifier -> function_name
// the advantages of functions are reusability and modularity.
// function can be called multiple times.

//h Non - parameterized function:
function greet(){
    console.log("Hello user!");
}
greet(); //function call statement

//~ the function call statement is resposible to call or invoke the function execution.
//~ In simple words FCS is combination pf function name and empty().

//h Parameterized fucntion:

//! What is parameters?
//& The parameter is temporary variable which is declared inside the function defination.

//! What is arguments?
//& The arguments are the actual values which is passed inside the fucntion call statement.

function greetperson(name, name1){
    console.log("Hello " + name + " and " + name1 + " , Welcome to JS functions");
}

greetperson("Malhaar"); //function call statement with arguments

//! 1. Named Function:
//* A function which is defined with identifier (name) is called Named Function. 

function motivation(){
    console.log("Work like a madness and achieve like a greatness!");
}

motivation();

//! 2. Anonymous Function:
//* The function which don't have any name is called as Anonymous Function.

    //! 1st way:
    //? Store the anonymous function inside a variable and call that variable with empty().
    
    let mrHashmi = function (){
        console.log("Mr.X");
    };
    console.log(mrHashmi);
    mrHashmi();
    
    //! 2nd way:
    //? Wrap the entire anonymous function inside the empty() and call the empty() inside the outer () or just after teh function block.

    (function (){
        console.log("This is an Anonymous Function");
    }());

//! 3. Function as an expression:
//* A function which is assigined to a variable as a expression is called as Function as an Expression.

    let variable = function (){
        console.log("Mr.X");
    };
    console.log(variable);
    variable();

//& arguments object:
//* The arguments object is used to store all the values which is passed inside the FCS as a actual values.

function getNumbers() {
    console.log(arguments);

    let argumentsObject = arguments;
    console.log(Array.isArray(argumentsObject)); //false
    console.log(arguments[0]);

    console.log(typeof arguments); //object
}

getNumbers(10,20,30);

//! 4. IIFE:
//* The IIFE stands for Immediate Invoking Function Expression.
//* The IIFE function executes only once.

(function () {
    alert("Hello")
})();


//! 5. Arrow Function:
//* The arrow function is shorthand syntax to create function in JS.
//* Arrow function is introduced in ES6 concepts which was released in 2015.

//? Syntax: () => {}

let add = (num1, num2) => {
    console.log(num1 + num2);
};
console.log(add);
add(10, 20);
console.log(add(30, 50));