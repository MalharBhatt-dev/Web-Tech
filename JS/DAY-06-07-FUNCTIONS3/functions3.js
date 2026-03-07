console.log("Functions3.js");

//h Arrow Function:

//~ NOTE: Arrow functions don't have their arguments object.

function getNumbers(){
    console.log(arguments);
}
getNumbers(10,20,30); // This will give an error

// let getNums = () => {
//     console.log(arguments);
// }
// getNums(60,70,80); // This will also give an error
//arrow function doesnot take the arguments.
//arrow function directly takes the binding the parent like the this function.

//! Error: functions3.js:13 Uncaught ReferenceError: arguments is not defined

//h IMPLICIT RETURN:
{
//& Implicit return means of only one statement is present inside your function there is no need to mention curly bracket{} as well as return keyword.
//? You can omit the {} and return keyword.

let sum = (a,b) => a + b;
//* Internally it is converted to:
//* let add = (a,b) => { return a + b; }
console.log(sum(10,20));

let demo = () => console.log("Hello Implicit Return");
demo();
}
//h EXPLICIT RETURN:
{
    //& If there are multiple statements is present inside the given function then you have to mention manually curly beackets and return keyord.
    //& If you there are mentioning the return keyword manually then you have to must use curly brackets.

    let explicitFun = () =>{
        console.log("First Statement");
        console.log("Second Statement");
        return "2 Statements are present inside the fucntion";
    }
    // console.log(explicitFun());
}


//~ Extra:
// let a= ()=> (10,20,30);
// console.log(a()); //30 
//let demo2 = () => console.log("First Statement"); console.log("Second Statement");
//demo2(); //! This will give an error

//h CALLBACK FUNCTION: 
//& A fucntion which is passed to another function as an argument is called as Callback Function.
//!There are 3 ways for calling a callback function.

//~ 1. Callback function using variable.
//?main function
// OrderFood:
function orderFood(waiter){
    console.log(`🧑🏽‍🍳: Sir what do you want?
        1. Bhakhari with Chai
        2. Chass`);
    //console.log(waiter);
    waiter(); //!it is the callback function.
}

console.log("ORDER FOOD:");
orderFood(serveFood);
console.log("REVIEW FOOD:");
orderFood(reviewFood);

//? callback function
//serveFood:
function serveFood(){
    console.log("🧑🏽‍🍳: Enjoy your meal!");
}

//? callback function
//reviewFood:
function reviewFood(){
    console.log("🧑🏽‍🍳: Please give your feedback!");
}

//~ 2. Callback function by the use of Arrow Function :->
document.getElementById("orderserve").addEventListener("click", () =>{orderFood(serveFood);});
document.getElementById("orderreview").addEventListener("click", () =>{orderFood(reviewFood);});

//~ 3. Callback function by the use of Anonymous Function :->
function assignment(student){
    console.log("Teacher assigned you one task!");
    //console.log(student)
    student();
}

//? we can pass directly callback function as anonymous function  or arrow function inside the main function as a argument.
assignment(function (){
    console.log("Assignment compeleted teacher has given 100 marks.")
})
