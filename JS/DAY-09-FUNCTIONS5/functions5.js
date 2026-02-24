console.log("Functions Currying...")


//! 11. Function Currying:
//*Currying is a way of transforming a function that takes multiple inputs into a series of functions, each taking just one input at a time. This makes it easier to work with functions by allowing you to provide some arguments now and others later.

function func1(num1){
    console.log(num1);
    return function fun2(num2){
        console.log(num2+num1);
        return function fun3(num3){
            console.log(num3+num2+num1);
            return "Completed";
        }
    }
}

func1(10)(20)(30);

//! Real world example of Function currying..