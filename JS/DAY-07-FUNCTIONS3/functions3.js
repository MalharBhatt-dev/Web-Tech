console.log("Functions3.js");

//! Arrow Function:

//~ NOTE: Arrow functions don't have their arguments object.

function getNumbers(){
    console.log(arguments);
}
getNumbers(10,20,30); // This will give an error

// let getNums = () => {
//     console.log(arguments);
// }
// getNums(60,70,80); // This will also give an error


//! Error: functions3.js:13 Uncaught ReferenceError: arguments is not defined

//! IMPLICIT RETURN:
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
//! EXPLICIT RETURN:
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

//!6 CALLBACK FUNCTION: 
//& A fucntion which is passed to another function as an argument is called as Callback Function.

// OrderFood:
function orderFood(waiter){
    console.log(`🧑🏽‍🍳: Sir what do you want?
        1. Bhakhari with Chai
        2. Chass`);
    //console.log(waiter);
    waiter();
}

console.log("ORDER FOOD:");
orderFood(serveFood);
console.log("REVIEW FOOD:");
orderFood(reviewFood);

//serveFood:
function serveFood(){
    console.log("🧑🏽‍🍳: Enjoy your meal!");
}

//reviewFood:
function reviewFood(){
    console.log("🧑🏽‍🍳: Please give your feedback!");
}

document.getElementById("orderserve").addEventListener("click", () =>{orderFood(serveFood);});
document.getElementById("orderreview").addEventListener("click", () =>{orderFood(reviewFood);});