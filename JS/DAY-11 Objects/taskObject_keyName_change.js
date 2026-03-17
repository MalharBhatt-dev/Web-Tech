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