console.log("Objects in JS");
//h OBJECT METHODS :

let employee = {
    eName : "malhar",
    eAge : 20,
    eSalary : 30000 , 
    eStatus : true  ,
    eAddress : "Ahmedabad"
};

console.log(employee);

//! 1. Object.keys(); :
//* It will returns all the keys of an given object.
console.log(Object.keys(employee));

//! 2. Object.values(); :
//* It will returns all the values of an given object.
console.log(Object.values(employee));

//! 3. Object.assign(); :
//* It is used to merge the two different object.
let obj1 = {username :"malhar"};
let obj2 = {age : 20};

let mergedObj = Object.assign({},obj1,obj2);
console.log(mergedObj);

//! 4. Object.entries(); :
//* It will convert the property of an object into an nested [key,value] pair in the form of array.
console.log(Object.entries(employee));

//! 5. Object.fromEntries(); :
//* It will convert the nested [key,value] pair into the object.
let laptop = [
    ["brand","Asus"],
    ["model","f15"],
    ["price",60000]
];
console.log(Object.fromEntries(laptop));

//h Task in Object :
//! change the key_name inside the existing Object.
let input = {name : "John",age:20};
//~ output = {userName : "John",userAge : 20};

let output0 = Object.entries(input);
console.log(output0);
output0[0][0] = "userName";
output0[1][0] = "userAge";
console.log(output0);
let output = Object.fromEntries(output0);
console.log(output);