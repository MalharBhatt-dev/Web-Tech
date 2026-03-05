//? Decision Making Statements in JavaScript

//! 1. if statement:
let status = "active";

if(status === "active"){
    console.log("User is active");
}

//! 2. if-else statement:
let userStatus = "inactive";
if(userStatus === "active"){
    console.log("User is active");
}   
else{
    console.log("User is inactive");
}   

//! 3. else if statement:
let userStatus1 = "pending";
if(userStatus1 === "active"){
    console.log("User is active");
}
else if(userStatus1 === "inactive"){
    console.log("User is inactive");
}
else if(userStatus1 === "pending"){
    console.log("User is pending");
}
else{
    console.log("Invalid user status");
}   

//! 4. Switch statement:
let day = "Monday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;  
    case "Tuesday":
        console.log("Today is Tuesday");
        break;  
    case "Wednesday":
        console.log("Today is Wednesday");
        break;      
    case "Thursday":
        console.log("Today is Thursday");
        break;  
    case "Friday":
        console.log("Today is Friday");
        break;  
    case "Saturday":        
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//? Looping Statements in JavaScript

//? 1. for loop:
for(let i = 1; i <= 5; i++){
    console.log(i);
}

//? 2. while loop:
let j = 1;
while(j <= 5){
    console.log(j);
    j++;
}

//? 3. do-while loop:
let k = 1;
do{
    console.log(k);
    k++;
}while(k <= 5);

//! 4. break and continue statement:
for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue; // it will skip the rest of the code in the loop when i is equal to 5
    }
    if(i === 8){
        break; // it will exit the loop when i is equal to 8
    }
    console.log(i);
}   