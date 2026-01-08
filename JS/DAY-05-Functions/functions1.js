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
