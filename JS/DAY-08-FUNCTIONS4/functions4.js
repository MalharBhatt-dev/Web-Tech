//h 6. Callback Functions:
{
//! Example of Callback Functions:

//? 1st way to create a callback function:
//~ We will create the separate another function and pass it as reference to the main function.

function sir(studentName , callback){
    console.log(`✍🏽Sir , is checking the papers!`);

    setTimeout(()=>{
        console.log("Papers Checked");
        console.log(`Result for ${studentName} :`);
    },3000);
}

//~ Example of Callback Function:
function result(){
    console.log("Pass✅");
}

//sir("John",result);

function orderFood(callback){
    console.log("food is ordered.");
    callback();
}

orderFood(()=>{
    console.log("Madan is your delivery boy.");
});

orderFood(function(){
    console.log("Suresh is your delivery boy!");
});
}
//h 7. HOF - Higher-Order Function:
{
//& A function which will accept another function as a agrument is called as Higher Order Function. OR .
//& A function which will return another function is called Higher Order Function.

//?Example of HOF : calculate is a HOF && add is a Callback Function
function calculate(num1,num2,operation){//* HOF
    return operation(num1,num2);
}
function add(a,b){//* Callback Function
    return a + b;
}
function sub(a,b){//* Callback Function
    return a - b;
}
console.log(calculate(10,20,add));//* 30
console.log(calculate(10,20,sub));//* -10
}
//h 8. Nested Functions:
{
//& The function which is present inside another function is known as Nested Function.

function outer(){
    console.log("This is Outer Function");
    let outerVar = "Outer Variable";
    function inner(){
        console.log("This is Inner Function");
        console.log(outerVar);
    }
    inner();
}

outer();
//h 9. CLOSURE FUNCTION:
//&  If you are trying to access the outer function variable or data inside the inner function that time it will create the closure by the outer function.
//? Here , closure means remembering the value of outer function inside the inner function.
}
//h 10. Generator Function:
{
    //& The generator function is a special type of function which will pause and resume its execution.
    
    //? Syntax : function* generatorFunction(){.Code Block.}
    //& yield -> pause the execution and store the value.
    //& next() -> resume the execution from the last paused point and again pause it.

    function* netflixSeries(){
        yield "Episode 1";
        yield "Episode 2";
        yield "Episode 3";
        return "All Episodes are completed!";
    }

    let episode = netflixSeries();
    console.log(episode.next());
    console.log(episode.next());
    console.log(episode.next());
    console.log(episode.next());

}