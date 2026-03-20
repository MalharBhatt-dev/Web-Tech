//! 7. Rest Parameter:
//* It is used to collect all the remaining values.
//? Syntax: ...varName
//~ LHS
//~ Function Definition

let numArr = [10, 20, 30, 40, 50];
// let [n1, n2, n3, n4, n5] = numArr;
let [n1, ...nums] = numArr;
console.log(n1);
console.log(nums);

function getNumbers(num1, ...numbers) {
  console.log(num1);
  console.log(numbers);
}
getNumbers(1, 2, 3, 4, 5);

//! 7. Spread Operator:
//* The spread operator is used to un-pack or spread the values.
//? Syntax: ...varName
//~ RHS
//~ Function Call Statement

//! For Merging of arrays and objects.
let arr1 = [1, 2];
let arr2 = [3, 4, 5];
let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

//! Object merging:
let obj1 = { name: "John" };
let obj2 = { age: 20 };
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

function printNumbers(...nums) {
  console.log(nums);
}

let arrNum = [10, 20, 30, 40];
printNumbers(...arrNum);